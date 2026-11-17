import type { GameWorld } from './types';

/**
 * Visual groups inside the flat "game" collection. These are metadata,
 * not nested collections, so every theme is still counted exactly once.
 */
export const gameWorlds: GameWorld[] = [
  {
    id: 'stellaris',
    title: '《群星》',
    titleEn: 'Stellaris',
    short: '群星',
    shortEn: 'Stellaris',
    code: 'STELLARIS',
    tagline: '向未知星域发出第一束文明信号',
    taglineEn: 'Send the first signal into an uncharted sky',
    description:
      '以遥远星系、深空航图和文明节点为视觉线索。没有舰队肖像或界面复刻，只有一张从黑暗中慢慢展开的探索地图。',
    descriptionEn:
      'Distant galaxies, navigational charts and points of civilisation supply the visual cues: an exploration map opening slowly out of the dark rather than a reproduction of any fleet or interface.',
    accent: '#76DDE5',
    accentAlt: '#D8BE7E',
    motif: 'stellaris',
    referenceTitle: 'Paradox Interactive · Stellaris',
    referenceTitleEn: 'Paradox Interactive · Stellaris',
    referenceUrl: 'https://www.paradoxinteractive.com/games/stellaris/about',
  },
  {
    id: 'red-alert',
    title: '《命令与征服：红色警戒》',
    titleEn: 'Command & Conquer: Red Alert',
    short: '红色警戒',
    shortEn: 'Red Alert',
    code: 'RED ALERT',
    tagline: '钢铁、警戒灯与两种秩序的对峙',
    taglineEn: 'Steel, warning lights and two orders in opposition',
    description:
      '用战术网格、机械结构和红蓝信号区分盟军与苏维埃。所有图形都是抽象技术语言，不借用任何阵营徽章或游戏界面。',
    descriptionEn:
      'Tactical grids, mechanical structure and opposing blue-red signals distinguish the Allied and Soviet studies. Every form is abstract technical language; no faction insignia or game interface is reused.',
    accent: '#E36A5F',
    accentAlt: '#65D9E8',
    motif: 'red-alert',
    referenceTitle: 'Command & Conquer Remastered Collection',
    referenceTitleEn: 'Command & Conquer Remastered Collection',
    referenceUrl:
      'https://www.ea.com/games/command-and-conquer/command-and-conquer-remastered',
  },
  {
    id: 'starcraft',
    title: '《星际争霸》',
    titleEn: 'StarCraft',
    short: '星际争霸',
    shortEn: 'StarCraft',
    code: 'STARCRAFT',
    tagline: '三种文明，在工业、灵能与本能之间交锋',
    taglineEn: 'Three civilisations meet across industry, psionics and instinct',
    description:
      '泰伦的装甲结构、星灵的对称几何与异虫的有机脉络并置，用三种节奏讲同一个边境宇宙。作品不描绘角色或单位，也不复刻阵营标志。',
    descriptionEn:
      'Terran armour, Protoss symmetry and Zerg organic growth are placed side by side as three rhythms of one frontier universe. Characters, units and faction marks are not depicted or reproduced.',
    accent: '#F29A42',
    accentAlt: '#75A9FF',
    motif: 'starcraft',
    referenceTitle: 'Blizzard Entertainment · StarCraft',
    referenceTitleEn: 'Blizzard Entertainment · StarCraft',
    referenceUrl: 'https://starcraft.blizzard.com/',
  },
  {
    id: 'honkai-impact-3rd',
    title: '《崩坏3》',
    titleEn: 'Honkai Impact 3rd',
    short: '崩坏3',
    shortEn: 'Honkai 3rd',
    code: 'HONKAI IMPACT 3RD',
    tagline: '终焉、真我与无限，在文明尽头留下三种色彩秩序',
    taglineEn: 'Deliverance, ego and infinity leave three colour orders at civilisation’s end',
    description:
      '在漫长的文明终焉中，十三位逐火者留下了各自的印记。有人背负寒冬走向黎明，' +
      '有人让美好在告别前绽放，也有人不断追问生命进化的边界。我们从这些故事中提取三种截然不同的色彩秩序，' +
      '并将它们重新演绎成数字主题。',
    descriptionEn:
      'Across civilisation’s long final winter, the thirteen Flame-Chasers left different marks. ' +
      'One carried the cold toward dawn, one let beauty bloom before farewell, and one kept ' +
      'questioning the limits of evolution. Their stories become three distinct colour orders, ' +
      'reinterpreted here as digital themes.',
    accent: '#D987B8',
    accentAlt: '#75B6D1',
    motif: 'honkai-impact-3rd',
    referenceTitle: 'HoYoverse · Honkai Impact 3rd',
    referenceTitleEn: 'HoYoverse · Honkai Impact 3rd',
    referenceUrl: 'https://honkaiimpact3.hoyoverse.com/',
  },
];
