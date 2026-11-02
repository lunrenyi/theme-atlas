/**
 * Verifies all static terminal-inspired previews after a build.
 *
 * The terminal DOM is English-only. Chinese copy may appear around the
 * windows in the page UI, but never inside Prompt, Vim or Codex previews.
 */
import { readFile } from 'node:fs/promises';
import { resolve } from 'node:path';
import { themes } from '../src/data/themes.ts';
import { paletteMap, luminance } from '../src/lib/color.ts';

const root = resolve(import.meta.dirname, '..');
const requiredModules = ['user', 'directory', 'git', 'runtime', 'command', 'status'];
const baseRoles = ['bg', 'surface', 'text', 'muted', 'border', 'accent', 'onAccent'];
const syntaxTokens = [
  'keyword',
  'function',
  'string',
  'number',
  'type',
  'comment',
  'operator',
  'variable',
];
const promptLayouts = new Set(['minimal', 'segmented', 'two-line']);
const vimLayouts = new Set(['classic', 'focus', 'compact']);
const codexLayouts = new Set(['stacked', 'split']);
const failures = [];
const styles = new Set();
const usedPromptLayouts = new Set();
const usedVimLayouts = new Set();
const usedCodexLayouts = new Set();

const requiredText = {
  prompt: [
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
  ],
  vim: [
    'vim - theme-preview.ts',
    'theme-preview.ts',
    'typescript',
    'NORMAL',
    '7:19',
    'resolveRole',
    'PaletteRole',
  ],
  codex: [
    'codex - ~/theme-atlas',
    'Refactor the theme resolver to use semantic roles.',
    'I will update the resolver',
    'src/theme.ts',
    '+1',
    '-1',
    'Ask Codex to continue...',
  ],
};

for (const theme of themes) {
  const prompt = theme.promptDesign;
  const tools = theme.previewDesign;
  const map = paletteMap(theme);
  const emphasized = [
    ...prompt.roleEmphasis.primary,
    ...prompt.roleEmphasis.secondary,
    ...prompt.roleEmphasis.restrained,
  ];
  styles.add(prompt.visualStyle);
  usedPromptLayouts.add(prompt.layout);
  usedVimLayouts.add(tools.vim.layout);
  usedCodexLayouts.add(tools.codex.layout);

  if (!promptLayouts.has(prompt.layout)) failures.push(`${theme.slug}: invalid Prompt layout`);
  if (!vimLayouts.has(tools.vim.layout)) failures.push(`${theme.slug}: invalid Vim layout`);
  if (!codexLayouts.has(tools.codex.layout)) failures.push(`${theme.slug}: invalid Codex layout`);
  if (!requiredModules.every((module) => prompt.moduleOrder.includes(module))) {
    failures.push(`${theme.slug}: Prompt module order is incomplete`);
  }
  if (!baseRoles.every((role) => emphasized.includes(role))) {
    failures.push(`${theme.slug}: role emphasis is incomplete`);
  }
  if (Boolean(map.flare) !== emphasized.includes('flare')) {
    failures.push(`${theme.slug}: flare emphasis does not match the palette`);
  }
  for (const [preview, syntax] of [
    ['vim', tools.vim.syntax],
    ['codex', tools.codex.syntax],
  ]) {
    if (!syntaxTokens.every((token) => token in syntax)) {
      failures.push(`${theme.slug}: incomplete ${preview} syntax mapping`);
    }
    if (!map.flare && Object.values(syntax).includes('flare')) {
      failures.push(`${theme.slug}: ${preview} invented a flare syntax colour`);
    }
  }
  if (!map.flare && [tools.codex.diffRemoved, tools.codex.promptAccent].includes('flare')) {
    failures.push(`${theme.slug}: Codex invented a flare diff colour`);
  }

  for (const locale of ['', 'en/']) {
    const path = resolve(root, 'dist', locale, 'theme', theme.slug, 'index.html');
    const html = await readFile(path, 'utf8');
    for (const tab of ['ui', 'terminal', 'vim', 'codex']) {
      if (!html.includes(`data-preview-tab="${tab}"`) || !html.includes(`data-preview-panel="${tab}"`)) {
        failures.push(`${path}: missing ${tab} preview tab or panel`);
      }
    }

    const windows = [...html.matchAll(
      /<figure[^>]*data-terminal-window[^>]*>[\s\S]*?<\/figure>/g,
    )].map((match) => match[0]);
    if (windows.length !== 3) {
      failures.push(`${path}: expected three terminal windows, found ${windows.length}`);
      continue;
    }

    const frame = isDark(map.bg?.hex) ? '#FFFFFF' : '#000000';
    for (const kind of ['prompt', 'vim', 'codex']) {
      const windowHtml = windows.find((candidate) =>
        candidate.includes(`data-terminal-kind="${kind}"`),
      );
      if (!windowHtml) {
        failures.push(`${path}: missing ${kind} terminal window`);
        continue;
      }

      const text = toText(windowHtml);
      if (/[\u3400-\u9fff]/u.test(text)) {
        failures.push(`${path}: ${kind} terminal contains CJK characters`);
      }
      if (/\{[a-zA-Z][a-zA-Z0-9_-]*\}/.test(text)) {
        failures.push(`${path}: ${kind} terminal contains an unresolved placeholder`);
      }
      if (requiredText[kind].some((token) => !text.includes(token) && !windowHtml.includes(token))) {
        failures.push(`${path}: ${kind} terminal is missing required English content`);
      }
      const dots = windowHtml.match(
        /<span class="terminal-shell__dots"[^>]*>([\s\S]*?)<\/span>/,
      )?.[1];
      if (!dots || (dots.match(/<i(?:\s|>)/g) ?? []).length !== 3) {
        failures.push(`${path}: ${kind} terminal needs three macOS dots`);
      }
      if (!windowHtml.includes(`--terminal-frame:${frame}`)) {
        failures.push(`${path}: ${kind} terminal has the wrong neutral frame`);
      }
      const title = windowHtml
        .match(/<span class="terminal-shell__title[^>]*>([^<]+)<\/span>/)?.[1]
        ?.trim();
      if (!title || !/^[\x20-\x7e]+$/.test(title)) {
        failures.push(`${path}: ${kind} terminal title is not ASCII English`);
      }

      const roleMarkers = [
        ...windowHtml.matchAll(/data-prompt-role="([^"]+)"/g),
      ].flatMap((match) => match[1].split(/\s+/));
      if (!baseRoles.every((role) => roleMarkers.includes(role))) {
        failures.push(`${path}: ${kind} terminal does not use all seven base roles`);
      }
      if (map.flare && !roleMarkers.includes('flare')) {
        failures.push(`${path}: ${kind} terminal is missing its optional flare`);
      }
      if (!map.flare && roleMarkers.includes('flare')) {
        failures.push(`${path}: ${kind} terminal invented a flare`);
      }
    }

    const legends = [...html.matchAll(/<section class="prompt-roles"/g)].length;
    if (legends !== 3) failures.push(`${path}: expected three colour legends`);
  }
}

const shellSource = await readFile(resolve(root, 'src/components/TerminalShell.astro'), 'utf8');
for (const dotColour of ['#ff5f57', '#febc2e', '#28c840']) {
  if (!shellSource.toLowerCase().includes(dotColour)) {
    failures.push('missing fixed macOS dot colour ' + dotColour);
  }
}
if (!shellSource.includes('border: 1px solid var(--terminal-frame)')) {
  failures.push('terminal outer border is not neutral');
}
for (const component of ['PreviewColorLegend.astro', 'PromptPreview.astro', 'VimPreview.astro', 'CodexPreview.astro']) {
  const source = await readFile(resolve(root, 'src/components', component), 'utf8');
  if (/theme\.slug\s*===/.test(source)) failures.push(`${component}: contains slug condition branches`);
}
for (const component of ['VimPreview.astro', 'CodexPreview.astro']) {
  const source = await readFile(resolve(root, 'src/components', component), 'utf8');
  if (/#[0-9a-f]{3,8}/i.test(source)) failures.push(`${component}: contains hardcoded colours`);
}
const previewSource = await readFile(resolve(root, 'src/data/previewDesigns.ts'), 'utf8');
if (/#[0-9a-f]{3,8}/i.test(previewSource)) {
  failures.push('tool preview configuration contains hardcoded colours');
}
if (styles.size !== themes.length) failures.push('Prompt visual styles are not unique');
if (usedPromptLayouts.size !== promptLayouts.size) failures.push('not all Prompt layouts are used');
if (usedVimLayouts.size !== vimLayouts.size) failures.push('not all Vim layouts are used');
if (usedCodexLayouts.size !== codexLayouts.size) failures.push('not all Codex layouts are used');

if (failures.length) {
  console.error(failures.slice(0, 80).join('\n'));
  console.error(`${failures.length} failures`);
  process.exit(1);
}

console.log(
  `Preview audit passed: ${themes.length} themes, ${themes.length * 3 * 2} English-only terminal windows, ` +
  'three neutral shells per detail page, complete syntax/Diff mappings and seven-role legends.',
);

function toText(html) {
  return html
    .replace(/<[^>]+>/g, ' ')
    .replaceAll('&amp;', '&')
    .replaceAll('&quot;', '"')
    .replaceAll('&lt;', '<')
    .replaceAll('&gt;', '>')
    .replaceAll('&#39;', "'")
    .replaceAll('&nbsp;', ' ')
    .replace(/\s+/g, ' ')
    .trim();
}

function isDark(hex = '#000000') {
  return luminance(hex) < 0.32;
}
