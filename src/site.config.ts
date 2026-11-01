/**
 * Public site information lives here so the project name, tagline and
 * navigation can be re-pointed without touching any component.
 *
 * Every visible string has a Chinese and an English version; the language
 * is chosen by the route, never by a client-side toggle.
 */

import type { Locale } from './i18n';

export const site = {
  name: 'Theme Atlas',
  nameZh: '色谱档案',
  /** The brand statement used by the home page H1 and footer, not the tab title. */
  tagline: {
    zh: '有些故事，最后变成了颜色。',
    en: 'Every color has a story.',
  },
  description: {
    zh:
      'Theme Atlas 收录中国神话、中国瓷器与虚构世界的配色主题。每套主题都有故事、' +
      '完整色值与语义角色，并支持复制和导出 CSS、JSON。',
    en:
      'Theme Atlas archives colour themes inspired by Chinese mythology, Chinese porcelain ' +
      'and imagined worlds. Every theme includes its story, full palette and semantic roles, ' +
      'with one-click copy and CSS or JSON export.',
  },
  repoUrl: 'https://github.com/lunrenyi/theme-atlas',
  repoLabel: 'lunrenyi/theme-atlas',
  /** Locale-independent path; the locale prefix is added at render time. */
  fanStatementPath: '/about#fan-works',
  edition: {
    zh: '第一辑 · 色彩主题档案',
    en: 'EDITION 01',
  },
} as const;

export type DocumentPage = 'home' | 'theme' | 'collections' | 'about' | 'notFound';

const documentPageTitles: Record<
  Exclude<DocumentPage, 'home' | 'theme'>,
  Record<Locale, string>
> = {
  collections: {
    zh: '主题系列',
    en: 'Theme collections',
  },
  about: {
    zh: '关于本站',
    en: 'About',
  },
  notFound: {
    zh: '页面未找到',
    en: 'Page Not Found',
  },
};

const homeDocumentTitle: Record<Locale, string> = {
  zh: '有故事的配色主题库',
  en: 'Color Themes with Stories',
};

/**
 * Build every browser-tab title in one place. Home leads with the brand;
 * every other page leads with its own localized subject.
 */
export function documentTitle(lang: Locale, page: DocumentPage, subject?: string): string {
  const separator = lang === 'zh' ? '｜' : ' — ';

  if (page === 'home') return site.name + separator + homeDocumentTitle[lang];
  if (page === 'theme') {
    if (!subject) throw new Error('Theme document titles require a localized theme name.');
    return subject + separator + site.name;
  }

  return documentPageTitles[page][lang] + separator + site.name;
}

export const nav = [
  { key: 'nav.explore', href: '/#themes' },
  { key: 'nav.collections', href: '/collections' },
  { key: 'nav.about', href: '/about' },
] as const;

export type NavItem = (typeof nav)[number];
