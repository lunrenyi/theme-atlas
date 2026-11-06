/**
 * Localised access to the theme and collection data.
 *
 * The Chinese files stay the single source of truth for anything that is
 * data (slugs, hex values, semantic roles, source types). Only prose is
 * translated, and it lives in themes.en.ts / collections.ts.
 */
import { collections as collectionsZh } from '../data/collections';
import { gameWorlds as gameWorldsZh } from '../data/gameWorlds';
import { themeTranslations } from '../data/themes.en';
import { themes as themesZh } from '../data/themes';
import type { Collection, CollectionId, GameWorld, GameWorldId, Theme } from '../data/types';
import type { Locale } from '../i18n';

export function getCollections(lang: Locale): Collection[] {
  return collectionsZh.map((collection) => ({
    ...collection,
    // the Chinese interface does not repeat a Latin catalogue code beside a
    // Chinese title, so the code line is simply empty there
    code: lang === 'zh' ? collection.codeZh : collection.code,
    ...(lang === 'zh'
      ? {}
      : {
          title: collection.titleEn,
          short: collection.shortEn,
          tagline: collection.taglineEn,
            starNote: collection.starNoteEn,
          description: collection.descriptionEn,
        }),
  }));
}

export function getCollectionById(id: CollectionId, lang: Locale): Collection {
  const found = getCollections(lang).find((collection) => collection.id === id);
  if (!found) throw new Error('Unknown collection: ' + id);
  return found;
}

export function getGameWorlds(lang: Locale): GameWorld[] {
  return gameWorldsZh.map((game) => ({
    ...game,
    ...(lang === 'zh'
      ? {}
      : {
          title: game.titleEn,
          short: game.shortEn,
          tagline: game.taglineEn,
          description: game.descriptionEn,
          referenceTitle: game.referenceTitleEn,
        }),
  }));
}

export function getGameWorldById(id: GameWorldId, lang: Locale): GameWorld {
  const found = getGameWorlds(lang).find((game) => game.id === id);
  if (!found) throw new Error('Unknown game world: ' + id);
  return found;
}

function localizeTheme(theme: Theme, lang: Locale): Theme {
  if (lang === 'zh') return theme;
  const translation = themeTranslations[theme.slug];
  if (!translation) return theme;

  return {
    ...theme,
    title: translation.title,
    subtitle: translation.subtitle,
    description: translation.description,
    story: translation.story,
    inspiration: translation.inspiration,
    designRationale: translation.designRationale,
    tags: translation.tags,
    // hex values and roles are never translated - only names and notes
    palette: theme.palette.map((color, index) => ({
      ...color,
      name: translation.palette[index]?.name ?? color.name,
      note: translation.palette[index]?.note ?? color.note,
    })),
    artworkPalette: theme.artworkPalette?.map((color, index) => ({
      ...color,
      name: translation.artworkPalette?.[index]?.name ?? color.name,
      note: translation.artworkPalette?.[index]?.note ?? color.note,
    })),
    sources: theme.sources.map((source, index) => ({
      ...source,
      title: translation.sources[index]?.title ?? source.title,
      detail: translation.sources[index]?.detail ?? source.detail,
      note: translation.sources[index]?.note ?? source.note,
    })),
    credits: { ...theme.credits, ...translation.credits },
  };
}

export function getThemes(lang: Locale): Theme[] {
  return themesZh.map((theme) => localizeTheme(theme, lang));
}

export function getThemeBySlug(slug: string, lang: Locale): Theme | undefined {
  return getThemes(lang).find((theme) => theme.slug === slug);
}

export function getFeaturedThemes(lang: Locale): Theme[] {
  return getThemes(lang).filter((theme) => theme.featured);
}

export function getThemesByCollection(id: CollectionId, lang: Locale): Theme[] {
  return getThemes(lang).filter((theme) => theme.collection === id);
}

export function getThemesByGameWorld(id: GameWorldId, lang: Locale): Theme[] {
  return getThemes(lang).filter((theme) => theme.game === id);
}

/** Themes ordered for the switch-theme control on a detail page. */
export function getThemeNeighbours(slug: string, lang: Locale): { prev?: Theme; next?: Theme } {
  const allThemes = getThemes(lang);
  const current = allThemes.find((theme) => theme.slug === slug);
  if (!current) return {};

  // Detail navigation belongs to the collection the visitor is reading.
  // Do not wrap from the final theme into the next collection; the breadcrumb
  // and “browse all themes” link provide those broader exits.
  const list = allThemes.filter((theme) => theme.collection === current.collection);
  const index = list.findIndex((theme) => theme.slug === slug);

  return {
    prev: index > 0 ? list[index - 1] : undefined,
    next: index >= 0 && index < list.length - 1 ? list[index + 1] : undefined,
  };
}
