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
      'Theme Atlas 收集来自神话、历史与虚构世界的颜色，把每一组整理成可以在屏幕上直接使用的' +
      '主题：色值有名字、有语义角色，也记录了来处。',
    en:
      'Theme Atlas collects colours from myth, history and imagined worlds, and files each set ' +
      'as a theme you can put straight to work on screen: every value named, given a role, ' +
      'and traced back to where it came from.',
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
