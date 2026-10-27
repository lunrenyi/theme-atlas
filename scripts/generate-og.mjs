/**
 * Renders the social preview image (public/og-default.png) from an SVG
 * template built out of the featured palettes.
 * Run with: npm run og
 */
import { writeFile, mkdir } from 'node:fs/promises';
import { dirname, resolve } from 'node:path';
import { fileURLToPath } from 'node:url';

const here = dirname(fileURLToPath(import.meta.url));
const root = resolve(here, '..');

const { themes } = await import(resolve(root, 'src/data/themes.ts'));

const PAPER = '#f3f0e8';
const INK = '#1b1815';
const INK2 = '#57504a';

const featured = themes.filter((t) => t.featured).slice(0, 3);

const stripRows = featured
  .map((theme, index) => {
    const y = 470 + index * 44;
    const w = 1120 / theme.palette.length;
    const blocks = theme.palette
      .map((c, i) => {
        return (
          '<rect x="' + (40 + i * w) + '" y="' + y + '" width="' + w + '" height="30" fill="' + c.hex + '"/>'
        );
      })
      .join('');
    return (
      blocks +
      '<rect x="40" y="' + y + '" width="1120" height="30" fill="none" stroke="#c9c0ad" stroke-width="1"/>' +
      '<text x="40" y="' + (y - 10) + '" font-family="Georgia, serif" font-size="17" fill="' + INK + '">' +
      theme.title +
      '</text>'
    );
  })
  .join('');

const svg = [
  '<svg xmlns="http://www.w3.org/2000/svg" width="1200" height="630" viewBox="0 0 1200 630">',
  '<rect width="1200" height="630" fill="' + PAPER + '"/>',
  '<rect x="40" y="40" width="28" height="28" fill="' + INK + '"/>',
  '<rect x="74" y="40" width="28" height="28" fill="#b03a2b" opacity="0.85"/>',
  '<rect x="40" y="74" width="28" height="28" fill="#4e7f70" opacity="0.85"/>',
  '<rect x="74" y="74" width="28" height="28" fill="' + INK + '" opacity="0.35"/>',
  '<text x="120" y="76" font-family="Georgia, serif" font-size="30" fill="' + INK + '">Theme Atlas</text>',
  '<text x="40" y="200" font-family="Georgia, serif" font-size="92" fill="' + INK + '">Every color has</text>',
  '<text x="40" y="300" font-family="Georgia, serif" font-size="92" fill="' + INK + '">a story.</text>',
  '<text x="40" y="360" font-family="Helvetica, Arial, sans-serif" font-size="26" fill="' + INK2 + '">' +
    '中国神话 · 中国瓷器 · 虚构世界 —— 有故事的配色主题库',
  '</text>',
  '<line x1="40" y1="400" x2="1160" y2="400" stroke="#ddd6c7" stroke-width="2"/>',
  stripRows,
  '<text x="40" y="620" font-family="monospace" font-size="16" fill="' + INK2 + '" letter-spacing="3">EDITION 01 / THEME ATLAS</text>',
  '</svg>',
].join('');

const outDir = resolve(root, 'public');
await mkdir(outDir, { recursive: true });
const outFile = resolve(outDir, 'og-default.png');

try {
  const sharp = (await import('sharp')).default;
  await sharp(Buffer.from(svg)).png().toFile(outFile);
  console.log('写入 ' + outFile);
} catch (error) {
  console.log('未安装 sharp，跳过 PNG 生成。');
  console.log(String(error && error.message ? error.message : error));
  await writeFile(resolve(outDir, 'og-default.svg'), svg, 'utf8');
  console.log('已写出 public/og-default.svg 作为替代。');
}

