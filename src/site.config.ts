/**
 * Public site information lives here so the project name, tagline and
 * navigation can be re-pointed without touching any component.
 *
 * Every visible string has a Chinese and an English version; the language
 * is chosen by the route, never by a client-side toggle.
 */

export const site = {
  name: 'Theme Atlas',
  nameZh: '色谱档案',
  tagline: 'Every color has a story.',
  description: {
    zh:
      '一个从故事与文化中打捞配色的主题档案库。中国神话的矿物颜料、瓷器的釉色、宇宙的星光，' +
      '都被拆解成可复制、可导出的颜色语义。',
    en:
      'A colour theme archive recovered from stories and cultures — mineral pigments of ' +
      'Chinese myth, glaze colours of porcelain, starlight of imagined worlds — each broken ' +
      'into colours you can copy and export.',
  },
  repoUrl: 'https://github.com/lunrenyi/theme-atlas',
  repoLabel: 'lunrenyi/theme-atlas',
  /** Locale-independent path; the locale prefix is added at render time. */
  fanStatementPath: '/about#fan-works',
  edition: 'EDITION 01',
} as const;

export const nav = [
  { key: 'nav.explore', href: '/#themes' },
  { key: 'nav.collections', href: '/collections' },
  { key: 'nav.about', href: '/about' },
] as const;

export type NavItem = (typeof nav)[number];
