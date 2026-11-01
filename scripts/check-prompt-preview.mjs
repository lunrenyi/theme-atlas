/**
 * Verifies the static terminal Prompt preview after a build.
 *
 * The shell window itself is always English-only. Chinese UI copy may appear
 * around it, but never inside the simulated terminal.
 */
import { readFile } from 'node:fs/promises';
import { resolve } from 'node:path';
import { themes } from '../src/data/themes.ts';
import { paletteMap, luminance } from '../src/lib/color.ts';

const root = resolve(import.meta.dirname, '..');
const requiredTokens = [
  'zsh - ~/theme-atlas',
  'dev',
  'atlas',
  '~/theme-atlas',
  'main',
  'node',
  'v22.11.0',
  'git status --short',
  'M src/theme.ts',
  'exit 0',
  '42ms',
  '7 color roles mapped',
];
const requiredModules = ['user', 'directory', 'git', 'runtime', 'command', 'status'];
const baseRoles = ['bg', 'surface', 'text', 'muted', 'border', 'accent', 'onAccent'];
const layouts = new Set(['minimal', 'segmented', 'two-line']);
const failures = [];
const styles = new Set();
const usedLayouts = new Set();

for (const theme of themes) {
  const design = theme.promptDesign;
  const map = paletteMap(theme);
  const emphasized = [
    ...design.roleEmphasis.primary,
    ...design.roleEmphasis.secondary,
    ...design.roleEmphasis.restrained,
  ];
  styles.add(design.visualStyle);
  usedLayouts.add(design.layout);

  if (!layouts.has(design.layout)) failures.push(`${theme.slug}: invalid Prompt layout`);
  if (!requiredModules.every((module) => design.moduleOrder.includes(module))) {
    failures.push(`${theme.slug}: Prompt module order is incomplete`);
  }
  if (!baseRoles.every((role) => emphasized.includes(role))) {
    failures.push(`${theme.slug}: role emphasis is incomplete`);
  }
  if (Boolean(map.flare) !== emphasized.includes('flare')) {
    failures.push(`${theme.slug}: flare emphasis does not match the palette`);
  }

  for (const locale of ['', 'en/']) {
    const path = resolve(root, 'dist', locale, 'theme', theme.slug, 'index.html');
    const html = await readFile(path, 'utf8');
    const windowMatch = html.match(/<figure class="prompt-window"[\s\S]*?<\/figure>/);
    if (!windowMatch) {
      failures.push(`${path}: missing prompt-window markup`);
      continue;
    }

    const windowHtml = windowMatch[0];
    const text = windowHtml
      .replace(/<[^>]+>/g, ' ')
      .replaceAll('&amp;', '&')
      .replaceAll('&lt;', '<')
      .replaceAll('&gt;', '>')
      .replace(/\s+/g, ' ')
      .trim();

    if (/[\u3400-\u9fff]/u.test(text)) {
      failures.push(`${path}: terminal text contains CJK characters`);
    }
    if (text.includes('{') || text.includes('}')) {
      failures.push(`${path}: terminal text contains an unresolved placeholder`);
    }
    if (requiredTokens.some((token) => !text.includes(token) && !windowHtml.includes(token))) {
      failures.push(`${path}: terminal scene is missing an English module/value`);
    }
    const dots = windowHtml.match(
      /<span class="prompt-window__dots"[^>]*>([\s\S]*?)<\/span>/,
    )?.[1];
    if (!dots || (dots.match(/<i(?:\s|>)/g) ?? []).length !== 3) {
      failures.push(`${path}: expected exactly three macOS window dots`);
    }
    if (!html.includes(`data-prompt-layout="${design.layout}"`)) {
      failures.push(`${path}: Prompt layout was not rendered`);
    }
    const renderedModules = [
      ...windowHtml.matchAll(/data-prompt-module="([^"]+)"/g),
    ].map((match) => match[1]);
    if (renderedModules.join(',') !== design.moduleOrder.join(',')) {
      failures.push(`${path}: rendered module order differs from promptDesign`);
    }
    const titleText = windowHtml
      .match(/<span class="prompt-window__title[^>]*>([^<]+)<\/span>/)?.[1]
      ?.trim();
    if (!titleText || !/^[\x20-\x7e]+$/.test(titleText)) {
      failures.push(`${path}: terminal title is not ASCII English`);
    }

    const frame = isDark(paletteMap(theme).bg?.hex) ? '#FFFFFF' : '#000000';
    if (!html.includes(`--prompt-frame:${frame}`)) {
      failures.push(`${path}: unexpected window frame colour`);
    }
    if (map.flare && !windowHtml.includes('data-prompt-role="flare"')) {
      failures.push(`${path}: optional flare is missing from the terminal`);
    }
    if (!map.flare && windowHtml.includes('data-prompt-role="flare"')) {
      failures.push(`${path}: invented a flare for a theme without one`);
    }
  }
}

const componentSource = await readFile(
  resolve(root, 'src/components/PromptPreview.astro'),
  'utf8',
);
for (const dotColour of ['#ff5f57', '#febc2e', '#28c840']) {
  if (!componentSource.toLowerCase().includes(dotColour)) {
    failures.push('missing fixed macOS dot colour ' + dotColour);
  }
}
if (!componentSource.includes('border: 1px solid var(--prompt-frame)')) {
  failures.push('terminal outer border is not driven by the neutral frame variable');
}
if (styles.size !== themes.length) failures.push('visual styles are not unique');
if (usedLayouts.size !== layouts.size) failures.push('not all Prompt layouts are used');

if (failures.length) {
  console.error(failures.join('\n'));
  process.exit(1);
}

console.log(
  `Prompt preview audit passed: ${themes.length} themes, ${themes.length * 2} localized detail pages, ` +
  'English-only terminal DOM, neutral frame, three fixed window dots, complete modules and role legend.',
);

function isDark(hex = '#000000') {
  return luminance(hex) < 0.32;
}
