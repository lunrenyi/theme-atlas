/**
 * Renders the social preview images from an SVG template built out of the
 * featured palettes - one card per language.
 * Run with: npm run og
 */
import { writeFile, mkdir } from 'node:fs/promises';
import { dirname, resolve } from 'node:path';
import { fileURLToPath } from 'node:url';

const here = dirname(fileURLToPath(import.meta.url));
const root = resolve(here, '..');

const { themes } = await import(resolve(root, 'src/data/themes.ts'));
const { themeTranslations } = await import(resolve(root, 'src/data/themes.en.ts'));

const SPACE = '#080D1C';
const ORBIT = '#344363';
const GOLD = '#DCC38B';
const TEXT = '#EAF0FF';
const TEXT2 = '#A6B4D6';
const TEXT3 = '#8391B5';

/** A small, fixed star field so the card is identical on every build. */
const stars = Array.from({ length: 46 }, (_, i) => {
  const x = (i * 233 + 71) % 1200;
  const y = (i * 397 + 113) % 630;
  const r = 0.8 + ((i * 17) % 7) / 7;
  const o = 0.12 + ((i * 13) % 9) / 18;
  return (
    '<circle cx="' + x + '" cy="' + y + '" r="' + r.toFixed(2) + '" fill="' + TEXT +
    '" opacity="' + o.toFixed(2) + '"/>'
  );
}).join('');

function card({ subtitle, deck, rows, footer }) {
  const stripRows = rows
    .map((row, index) => {
      const y = 448 + index * 58;
      const w = 1080 / row.palette.length;
      const blocks = row.palette
        .map((c, i) => {
          return (
            '<rect x="' + (60 + i * w) + '" y="' + y + '" width="' + w + '" height="26" fill="' + c.hex + '"/>'
          );
        })
        .join('');
      return (
        '<text x="60" y="' + (y - 12) + '" font-family="Georgia, serif" font-size="18" fill="' +
        TEXT2 + '">' +
        row.title +
        '</text>' +
        '<text x="1140" y="' + (y - 12) + '" text-anchor="end" font-family="monospace" font-size="13" letter-spacing="2" fill="' +
        TEXT3 + '">' +
        row.slug.toUpperCase() +
        '</text>' +
        blocks +
        '<rect x="60" y="' + y + '" width="1080" height="26" fill="none" stroke="' + ORBIT + '" stroke-width="1"/>'
      );
    })
    .join('');

  return [
    '<svg xmlns="http://www.w3.org/2000/svg" width="1200" height="630" viewBox="0 0 1200 630">',
    '<rect width="1200" height="630" fill="' + SPACE + '"/>',
    stars,
    '<g fill="none" stroke="' + ORBIT + '" stroke-width="1.2" opacity="0.55">',
    '<ellipse cx="980" cy="250" rx="230" ry="80" transform="rotate(-18 980 250)"/>',
    '<ellipse cx="980" cy="250" rx="160" ry="54" transform="rotate(-18 980 250)" opacity="0.7"/>',
    '<ellipse cx="980" cy="250" rx="96" ry="32" transform="rotate(-18 980 250)" opacity="0.5"/>',
    '</g>',
    '<circle cx="980" cy="250" r="7" fill="' + GOLD + '" opacity="0.9"/>',
    '<circle cx="1155" cy="190" r="4" fill="' + GOLD + '"/>',
    '<circle cx="820" cy="316" r="3" fill="#9885FF"/>',
    '<path d="M980 250L1155 190" stroke="' + GOLD + '" stroke-width="1" opacity="0.5"/>',
    // brand mark
    '<g fill="none" stroke="' + GOLD + '" stroke-width="1.6">',
    '<ellipse cx="76" cy="62" rx="22" ry="8" opacity="0.85" transform="rotate(-24 76 62)"/>',
    '<ellipse cx="76" cy="62" rx="22" ry="8" opacity="0.45" transform="rotate(52 76 62)"/>',
    '</g>',
    '<circle cx="76" cy="62" r="5" fill="' + GOLD + '"/>',
    '<circle cx="95" cy="55" r="2.4" fill="#76D8DF"/>',
    '<text x="118" y="72" font-family="Georgia, serif" font-size="32" fill="' + TEXT + '">Theme Atlas</text>',
    '<text x="330" y="70" font-family="monospace" font-size="15" letter-spacing="4" fill="' + TEXT3 + '">' +
      subtitle +
      '</text>',
    '<text x="60" y="212" font-family="Georgia, serif" font-size="88" fill="' + TEXT + '">Every color has</text>',
    '<text x="60" y="306" font-family="Georgia, serif" font-size="88" fill="' + GOLD + '">a story.</text>',
    '<text x="60" y="362" font-family="Helvetica, Arial, sans-serif" font-size="24" fill="' + TEXT2 + '">' +
      deck +
    '</text>',
    '<line x1="60" y1="398" x2="1140" y2="398" stroke="' + ORBIT + '" stroke-width="1"/>',
    stripRows,
    '<text x="60" y="608" font-family="monospace" font-size="15" letter-spacing="3" fill="' + TEXT3 + '">' +
      footer +
      '</text>',
    '<text x="1140" y="608" text-anchor="end" font-family="monospace" font-size="15" letter-spacing="3" fill="' +
      GOLD +
      '">lunrenyi.github.io/theme-atlas</text>',
    '</svg>',
  ].join('');
}

const featured = themes.filter((t) => t.featured).slice(0, 3);

const chinese = card({
  subtitle: '色谱档案',
  deck: '中国神话 · 中国瓷器 · 虚构世界 —— 有故事的配色主题库',
  rows: featured.map((theme) => ({
    title: theme.title,
    slug: theme.slug,
    palette: theme.palette,
  })),
  footer: 'EDITION 01 / 03 SERIES / 009 THEMES',
});

const english = card({
  subtitle: 'COLOUR ARCHIVE',
  deck: 'Chinese myth · Chinese porcelain · imagined worlds — colour themes with a story',
  rows: featured.map((theme) => ({
    title: themeTranslations[theme.slug].title,
    slug: theme.slug,
    palette: theme.palette,
  })),
  footer: 'EDITION 01 / 03 COLLECTIONS / 009 THEMES',
});

const outDir = resolve(root, 'public');
await mkdir(outDir, { recursive: true });

try {
  const sharp = (await import('sharp')).default;
  await sharp(Buffer.from(chinese)).png().toFile(resolve(outDir, 'og-default.png'));
  await sharp(Buffer.from(english)).png().toFile(resolve(outDir, 'og-en.png'));
  console.log('写入 ' + resolve(outDir, 'og-default.png') + ' 与 ' + resolve(outDir, 'og-en.png'));
} catch (error) {
  console.log('未安装 sharp，跳过 PNG 生成。');
  console.log(String(error && error.message ? error.message : error));
  await writeFile(resolve(outDir, 'og-default.svg'), chinese, 'utf8');
  await writeFile(resolve(outDir, 'og-en.svg'), english, 'utf8');
  console.log('已写出 SVG 作为替代。');
}
