/**
 * Public site information lives here so the project name, tagline and
 * navigation can be re-pointed without touching any component.
 */

export const site = {
  name: 'Theme Atlas',
  nameZh: '色谱档案',
  tagline: 'Every color has a story.',
  description:
    '一个从故事与文化中打捞配色的主题档案库。中国神话的矿物颜料、瓷器的釉色、宇宙的星光，' +
    '都被拆解成可复制、可导出的颜色语义。',
  descriptionEn:
    'A colour theme archive built from stories and cultures - mineral pigments of Chinese myth, ' +
    'glaze colours of porcelain, starlight of imagined worlds.',
  repoUrl: 'https://github.com/liaoxuanbin/theme',
  repoLabel: 'liaoxuanbin/theme',
  fanStatementPath: '/about#fan-works',
  edition: 'EDITION 01',
} as const;

export const nav = [
  { label: 'Explore', href: '/#themes', zh: '浏览' },
  { label: 'Collections', href: '/collections', zh: '系列' },
  { label: 'About', href: '/about', zh: '关于' },
] as const;

export type NavItem = (typeof nav)[number];

