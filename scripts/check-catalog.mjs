/**
 * Build-time regression checks for catalogue counts, collection filters,
 * collection-scoped detail navigation and the IX source/palette metadata.
 *
 * Run this after `astro build`; the assertions inspect both the shared data
 * module and the generated HTML, so a stale deployment artifact cannot pass
 * merely because the source array was updated.
 */
import { readFile } from 'node:fs/promises';
import { resolve, dirname } from 'node:path';
import { fileURLToPath } from 'node:url';
import { collections } from '../src/data/collections.ts';
import { themeTranslations } from '../src/data/themes.en.ts';
import { themes } from '../src/data/themes.ts';
import { syntaxPalettes } from '../src/data/syntaxPalettes.ts';
import { BASE_PALETTE_ROLES } from '../src/lib/color.ts';

const root = resolve(dirname(fileURLToPath(import.meta.url)), '..');
const dist = resolve(root, 'dist');
const failures = [];
const mythOrder = [
  'pangu-creation',
  'nuwa-five-stones',
  'xingtian-war-dance',
  'taotie-cinnabar',
  'baize-omens',
  'eight-immortals-crossing',
  'qixi-magpie-bridge',
  'nezha-lotus-flame',
  'yangjian-celestial-eye',
  'qitian-pojie',
];
const addedMythThemes = [
  'pangu-creation',
  'xingtian-war-dance',
  'qixi-magpie-bridge',
  'eight-immortals-crossing',
  'nezha-lotus-flame',
  'yangjian-celestial-eye',
];

const readDist = async (path) => readFile(resolve(dist, path), 'utf8');

function assert(condition, message) {
  if (!condition) failures.push(message);
}

function attribute(tag, name) {
  return tag.match(new RegExp(`\\b${name}="([^"]*)"`))?.[1];
}

function decode(value) {
  return value
    .replaceAll('&amp;', '&')
    .replaceAll('&quot;', '"')
    .replaceAll('&#x27;', "'")
    .replaceAll('&lt;', '<')
    .replaceAll('&gt;', '>');
}

function detailLinks(html) {
  return [
    ...html.matchAll(
      /<a\b[^>]*class="[^"]*\bswitcher__item\b[^"]*"[^>]*\bhref="([^"]+)"/g,
    ),
  ].map((match) => {
    const slug = match[1].match(/\/theme\/([a-z0-9-]+)\/?$/)?.[1];
    if (!slug) throw new Error(`Cannot read theme slug from detail link: ${match[1]}`);
    return slug;
  });
}

function exportPayload(html) {
  const match = html.match(
    /<script type="application\/json" data-export-payload>([\s\S]*?)<\/script>/,
  );
  return match ? JSON.parse(match[1]) : null;
}

const expectedCounts = new Map(
  collections.map((collection) => [
    collection.id,
    themes.filter((theme) => theme.collection === collection.id).length,
  ]),
);

assert(themes.length > 0, 'the shared theme data is empty');
assert(
  [...expectedCounts.values()].reduce((total, count) => total + count, 0) === themes.length,
  'collection counts do not add up to the shared theme total',
);
assert(
  themes.every((theme, index) => themes.findIndex((other) => other.slug === theme.slug) === index),
  'the shared theme data contains duplicate slugs',
);

for (const lang of ['zh', 'en']) {
  const localisedThemes =
    lang === 'zh'
      ? themes
      : themes.map((theme) => ({
          ...theme,
          tags: themeTranslations[theme.slug]?.tags ?? theme.tags,
        }));
  const html = await readDist(lang === 'zh' ? 'themes/index.html' : 'en/themes/index.html');
  const itemTags = [...html.matchAll(/<div\b[^>]*\bdata-library-item\b[^>]*>/g)].map(
    (match) => match[0],
  );

  assert(
    itemTags.length === localisedThemes.length,
    `${lang}: directory rendered ${itemTags.length} cards, data has ${localisedThemes.length}`,
  );

  const renderedCollections = itemTags.map((tag) => attribute(tag, 'data-collection'));
  for (const [id, count] of expectedCounts) {
    const rendered = renderedCollections.filter((collection) => collection === id).length;
    assert(
      rendered === count,
      `${lang}: ${id} rendered ${rendered} directory cards, data has ${count}`,
    );
  }

  for (const theme of localisedThemes) {
    const item = itemTags.find((tag) => decode(attribute(tag, 'data-search') ?? '').includes(theme.slug));
    assert(Boolean(item), `${lang}: ${theme.slug} is missing from searchable directory items`);
    if (item) {
      const search = decode(attribute(item, 'data-search') ?? '').toLocaleLowerCase();
      for (const token of [theme.slug, ...theme.tags]) {
        assert(
          search.includes(token.toLocaleLowerCase()),
          `${lang}: ${theme.slug} search index misses token "${token}"`,
        );
      }
      for (const color of theme.palette) {
        assert(
          search.includes(color.hex.toLowerCase()),
          `${lang}: ${theme.slug} search index misses ${color.hex}`,
        );
      }
    }

    assert(
      html.includes(`/theme/${theme.slug}`),
      `${lang}: directory has no detail link for ${theme.slug}`,
    );
  }

  const chipButtons = [
    ...html.matchAll(/<button\b[^>]*\bdata-filter="([^"]+)"[^>]*>([\s\S]*?)<\/button>/g),
  ];
  for (const [id, count] of [['all', localisedThemes.length], ...expectedCounts]) {
    const button = chipButtons.find((match) => match[1] === id);
    const renderedCount = Number(button?.[2].match(/chip__count[^>]*>\s*(\d+)/)?.[1]);
    assert(
      renderedCount === count,
      `${lang}: ${id} filter shows ${renderedCount}, data has ${count}`,
    );
  }

  const paddedThemeCount = String(localisedThemes.length).padStart(3, '0');
  const paddedCollectionCount = String(collections.length).padStart(2, '0');
  const homeHtml = await readDist(lang === 'zh' ? 'index.html' : 'en/index.html');
  const homeCount =
    lang === 'zh'
      ? `${paddedCollectionCount} 个系列 / ${paddedThemeCount} 套主题`
      : `${paddedCollectionCount} collections / ${paddedThemeCount} themes`;
  assert(
    homeHtml.includes(homeCount),
    `${lang}: home count is not rendered from the shared theme data`,
  );

  const collectionsHtml = await readDist(
    lang === 'zh' ? 'collections/index.html' : 'en/collections/index.html',
  );
  const sectionTags = [
    ...collectionsHtml.matchAll(/<section\b[^>]*\bdata-collection-section\b[^>]*>/g),
  ].map((match) => match[0]);
  assert(
    sectionTags.length === collections.length,
    `${lang}: collections page rendered ${sectionTags.length} collection sections, data has ${collections.length}`,
  );
  for (const [id, count] of expectedCounts) {
    const tag = sectionTags.find((sectionTag) => attribute(sectionTag, 'data-collection-section') === id);
    assert(Boolean(tag), `${lang}: collections page is missing the ${id} section`);
    const renderedCount = Number(tag ? attribute(tag, 'data-theme-count') : 0);
    assert(
      renderedCount === count,
      `${lang}: ${id} collection section shows ${renderedCount}, data has ${count}`,
    );
  }
}

for (const [collectionId, count] of expectedCounts) {
  const group = themes.filter((theme) => theme.collection === collectionId);
  for (const lang of ['zh', 'en']) {
    for (const [index, theme] of group.entries()) {
      const path =
        lang === 'zh'
          ? `theme/${theme.slug}/index.html`
          : `en/theme/${theme.slug}/index.html`;
      const html = await readDist(path);
      const links = detailLinks(html);
      const expectedLinks = [
        index > 0 ? group[index - 1].slug : null,
        index < count - 1 ? group[index + 1].slug : null,
      ].filter(Boolean);

      assert(
        links.length === expectedLinks.length &&
          expectedLinks.every((slug) => links.includes(slug)),
        `${lang}/${theme.slug}: rendered neighbours are ${links.join(', ') || '(none)'}, expected ${expectedLinks.join(', ') || '(none)'}`,
      );
    }
  }
}

const mythThemes = themes.filter((theme) => theme.collection === 'myth');
assert(
  mythThemes.map((theme) => theme.slug).join(',') === mythOrder.join(','),
  'Chinese Mythology must use the editorially specified theme order',
);

for (const slug of addedMythThemes) {
  const theme = mythThemes.find((candidate) => candidate.slug === slug);
  const translation = themeTranslations[slug];
  assert(Boolean(theme), `${slug} is missing from the Chinese Mythology collection`);
  assert(Boolean(theme?.plate), `${slug} is missing its original plate artwork`);
  assert(Boolean(translation?.title && translation?.subtitle), `${slug} is missing an English title`);
  assert(
    Boolean(theme?.story && theme?.inspiration && theme?.designRationale),
    `${slug} is missing story, inspiration or colour rationale`,
  );
  assert(
    theme?.sources.length >= 3 && theme.sources.every((source) => source.type !== 'pending'),
    `${slug} needs at least three verifiable references`,
  );
  assert(Boolean(syntaxPalettes[slug]), `${slug} needs an independent syntax palette`);

  if (!theme) continue;
  assert(
    theme.palette.length === 8 &&
      BASE_PALETTE_ROLES.every((role) => theme.palette.some((color) => color.role === role)) &&
      theme.palette.some((color) => color.role === 'flare'),
    `${slug} needs seven base UI roles plus one auxiliary colour`,
  );

  for (const lang of ['zh', 'en']) {
    const path =
      lang === 'zh'
        ? `theme/${theme.slug}/index.html`
        : `en/theme/${theme.slug}/index.html`;
    const html = await readDist(path);
    const payload = exportPayload(html);
    const expectedTitle = lang === 'zh' ? theme.title : translation.title;

    assert(html.includes(expectedTitle), `${lang}/${theme.slug}: localised title is not rendered`);
    assert(
      (html.match(/<figure class="plate"/g) ?? []).length === 1,
      `${lang}/${theme.slug}: original plate is missing`,
    );
    assert(Boolean(payload?.css?.text && payload?.json?.text), `${lang}/${theme.slug}: export payload is incomplete`);

    if (payload) {
      for (const color of theme.palette) {
        assert(
          payload.css.text.includes(color.hex),
          `${lang}/${theme.slug}: CSS export misses ${color.role} ${color.hex}`,
        );
      }
      const exported = JSON.parse(payload.json.text);
      assert(exported.slug === theme.slug, `${lang}/${theme.slug}: JSON export has the wrong slug`);
      assert(
        exported.palette?.length === theme.palette.length,
        `${lang}/${theme.slug}: JSON export has the wrong palette length`,
      );
    }
  }
}

const ix = themes.find((theme) => theme.slug === 'ix-silent-event-horizon');
assert(Boolean(ix), 'IX theme is missing from the shared theme data');
if (ix) {
  assert(ix.palette.length === 8, `IX should list 8 palette entries, found ${ix.palette.length}`);
  const roles = new Set(ix.palette.map((color) => color.role));
  for (const role of BASE_PALETTE_ROLES) {
    assert(roles.has(role), `IX palette is missing the ${role} base role`);
  }
  assert(roles.has('flare'), 'IX palette is missing its optional flare colour');
  assert(roles.size === 8, `IX should use seven base roles plus flare, found ${roles.size}`);

  assert(
    ix.sources.length >= 3 && ix.sources.every((source) => /^https:\/\//.test(source.url ?? '')),
    'IX requires at least three linked public references',
  );
  assert(
    !ix.sources.some((source) => source.type === 'pending'),
    'IX still contains a pending source type',
  );
  for (const source of ix.sources) {
    const text = `${source.title} ${source.detail ?? ''} ${source.note ?? ''}`;
    assert(!/待补充|pending/i.test(text), `IX source still contains placeholder text: ${source.title}`);
  }
  assert(
    ix.sources.some((source) => source.url === 'https://hsr.hoyoverse.com/zh-cn/world'),
    'IX is missing the official Chinese HSR world reference',
  );
  assert(
    ix.sources.some((source) => source.url === 'https://hsr.hoyoverse.com/en-us/world'),
    'IX is missing the official English HSR world reference',
  );
  assert(
    ix.sources.some((source) => source.url === 'https://science.nasa.gov/universe/black-holes/'),
    'IX is missing the NASA black-hole visual-inspiration reference',
  );
  assert(
    ix.inspiration.includes('原创抽象 SVG') &&
      ix.inspiration.includes('不使用游戏立绘'),
    'IX inspiration must distinguish original visual metaphor from official game art',
  );

  const zhDetail = await readDist('theme/ix-silent-event-horizon/index.html');
  const enDetail = await readDist('en/theme/ix-silent-event-horizon/index.html');
  assert(
    zhDetail.includes('08 色 · 7 个基础角色 · 1 个辅助色'),
    'Chinese IX palette count does not explain the optional eighth colour',
  );
  assert(
    enDetail.includes('08 COLORS · 7 BASE ROLES · +1 AUX COLOUR'),
    'English IX palette count does not explain the optional eighth colour',
  );
  assert(
    zhDetail.includes('NASA Science · Black Holes') &&
      enDetail.includes('NASA Science · Black Holes'),
    'The NASA reference is not rendered on both IX detail pages',
  );
}

if (failures.length) {
  console.error(`\nCatalog audit failed with ${failures.length} issue(s):`);
  for (const failure of failures) console.error(`- ${failure}`);
  process.exit(1);
}

console.log(
  `Catalog audit passed: ${themes.length} themes, ${collections.length} collections, ` +
    `${mythThemes.length} Chinese Mythology themes in editorial order, export payloads, ` +
    'collection-scoped navigation and IX references are consistent in the built HTML.',
);
