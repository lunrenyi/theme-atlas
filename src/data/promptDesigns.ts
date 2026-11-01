import type { PromptDesign } from './types';

/**
 * Terminal Prompt treatments are data, not slug branches in the renderer.
 * Every role lists the existing semantic roles it should emphasise; the
 * renderer still obtains every visible colour from the theme palette.
 */
export const promptDesigns: Record<string, PromptDesign> = {
  'taotie-cinnabar': {
    visualStyle: 'bronze-axis',
    layout: 'centered',
    glyphSet: { prompt: '❯', separator: '│', connector: '◇' },
    motif: 'axis',
    motifDensity: 'structured',
    defaultLineMode: 'double',
    roleEmphasis: {
      primary: ['accent', 'text'],
      secondary: ['surface', 'border', 'onAccent'],
      restrained: ['bg', 'muted'],
    },
    designNote: '以中心轴和青铜回纹组织上下文，朱红只落在分支与命令入口，像兽面纹中唯一被点亮的眼睛。',
    designNoteEn:
      'A central axis and bronze key-fret structure organise the context; cinnabar is held for the branch and command entry, like the single lit eye in a beast mask.',
  },
  'nuwa-five-stones': {
    visualStyle: 'stone-strata',
    layout: 'stacked',
    glyphSet: { prompt: '❯', separator: '·', connector: '◆' },
    motif: 'strata',
    motifDensity: 'structured',
    defaultLineMode: 'double',
    roleEmphasis: {
      primary: ['accent', 'surface'],
      secondary: ['text', 'border'],
      restrained: ['bg', 'muted', 'onAccent'],
    },
    designNote: '把五色石的层次拆成几段错落色带，信息仍从同一主轴阅读，丰富而不失序。',
    designNoteEn:
      'Layered stones become offset bands of colour; the information still follows one axis, keeping the richer palette ordered.',
  },
  'baize-omens': {
    visualStyle: 'archive-annotation',
    layout: 'inline',
    glyphSet: { prompt: '›', separator: '/', connector: '┄' },
    motif: 'annotation',
    motifDensity: 'sparse',
    defaultLineMode: 'single',
    roleEmphasis: {
      primary: ['text', 'border'],
      secondary: ['surface', 'accent'],
      restrained: ['bg', 'muted', 'onAccent'],
    },
    designNote: '像古籍页边的注记：细线、短栏和克制金点把路径、分支与输出排成一条清晰的目录。',
    designNoteEn:
      'Like marginalia in an old album: hairlines, short rules and a restrained gold mark turn the path, branch and output into a clear catalogue.',
  },
  'qitian-pojie': {
    visualStyle: 'broken-axis',
    layout: 'asymmetric',
    glyphSet: { prompt: '❯', separator: '│', connector: '╱' },
    motif: 'fracture',
    motifDensity: 'structured',
    defaultLineMode: 'double',
    roleEmphasis: {
      primary: ['accent', 'flare'],
      secondary: ['text', 'border'],
      restrained: ['bg', 'surface', 'muted', 'onAccent'],
    },
    designNote: '主轴偏向左侧，金色提示符穿过一截断裂轨道，烈焰朱只在破口与警报处出现。',
    designNoteEn:
      'The main axis leans left, a gold prompt cuts through a broken rail, and ember red appears only at the fracture and alert.',
  },
  'ru-ware-sky': {
    visualStyle: 'glaze-strata',
    layout: 'inline',
    glyphSet: { prompt: '›', separator: '·', connector: '┄' },
    motif: 'strata',
    motifDensity: 'sparse',
    defaultLineMode: 'single',
    roleEmphasis: {
      primary: ['text', 'border'],
      secondary: ['surface', 'accent'],
      restrained: ['bg', 'muted', 'onAccent'],
    },
    designNote: '用极细的分层和大量留白表现釉面，只有当前目录和入口被天青轻轻托起。',
    designNoteEn:
      'Hairline layers and generous space suggest glaze on porcelain; only the current directory and entry are quietly lifted in sky blue.',
  },
  'jun-ware-violet': {
    visualStyle: 'kiln-flow',
    layout: 'stacked',
    glyphSet: { prompt: '❯', separator: '│', connector: '≈' },
    motif: 'flow',
    motifDensity: 'structured',
    defaultLineMode: 'double',
    roleEmphasis: {
      primary: ['accent', 'surface'],
      secondary: ['text', 'border'],
      restrained: ['bg', 'muted', 'onAccent'],
    },
    designNote: '暖紫面板像窑变的过渡层，命令区保持平整，让不可控的颜色只出现在结构边缘。',
    designNoteEn:
      'Warm violet surfaces read like a kiln transition; the command area stays flat so uncontrollable colour remains at the structural edges.',
  },
  'jingdezhen-blue-white': {
    visualStyle: 'cobalt-symmetry',
    layout: 'centered',
    glyphSet: { prompt: '❯', separator: '│', connector: '◇' },
    motif: 'symmetry',
    motifDensity: 'structured',
    defaultLineMode: 'double',
    roleEmphasis: {
      primary: ['accent', 'text'],
      secondary: ['surface', 'border', 'onAccent'],
      restrained: ['bg', 'muted'],
    },
    designNote: '蓝白关系保持严格对称，细钴蓝分隔线像青花纹样，强调色只用于入口和当前状态。',
    designNoteEn:
      'The blue-white relationship stays strictly symmetrical; fine cobalt rules echo blue-and-white ornament while the accent marks only entry and current state.',
  },
  'deep-space-orbit': {
    visualStyle: 'stellar-orbit',
    layout: 'orbital',
    glyphSet: { prompt: '❯', separator: '·', connector: '╱' },
    motif: 'orbit',
    motifDensity: 'sparse',
    defaultLineMode: 'single',
    roleEmphasis: {
      primary: ['accent', 'text'],
      secondary: ['surface', 'border'],
      restrained: ['bg', 'muted', 'onAccent'],
    },
    designNote: '目录被当作航道，分支是轨道节点；量子紫只标记当前位置，冷灰承担全部辅助信息。',
    designNoteEn:
      'The directory reads as a route and the branch as an orbital node; quantum violet marks only the current position while cool grey carries supporting data.',
  },
  'pathfinder-beacon': {
    visualStyle: 'beacon-route',
    layout: 'rail',
    glyphSet: { prompt: '→', separator: '·', connector: '┄' },
    motif: 'beacon',
    motifDensity: 'sparse',
    defaultLineMode: 'single',
    roleEmphasis: {
      primary: ['accent', 'text'],
      secondary: ['surface', 'border'],
      restrained: ['bg', 'muted', 'onAccent'],
    },
    designNote: '一条左侧导航轨道从暗处延伸，唯一的金色信号落在命令入口，其余信息保持安静。',
    designNoteEn:
      'A navigation rail extends from the dark on the left; one gold signal lands at the command entry while everything else stays quiet.',
  },
  'singularity-echo': {
    visualStyle: 'compressed-core',
    layout: 'centered',
    glyphSet: { prompt: '❯', separator: '×', connector: '·' },
    motif: 'singularity',
    motifDensity: 'dense',
    defaultLineMode: 'double',
    roleEmphasis: {
      primary: ['accent', 'text'],
      secondary: ['surface', 'border'],
      restrained: ['bg', 'muted', 'onAccent'],
    },
    designNote: '所有字段向中心压缩，输出在最小的强调点中重新展开；没有多余轨道或分散光点。',
    designNoteEn:
      'Every field compresses toward the centre and reopens through one small accent point; there are no extra orbits or scattered lights.',
  },
  'uncharted-reach': {
    visualStyle: 'stellar-navigation',
    layout: 'orbital',
    glyphSet: { prompt: '❯', separator: '·', connector: '╱' },
    motif: 'orbit',
    motifDensity: 'dense',
    defaultLineMode: 'double',
    roleEmphasis: {
      primary: ['accent', 'flare'],
      secondary: ['surface', 'text', 'border'],
      restrained: ['bg', 'muted', 'onAccent'],
    },
    designNote: '多节点轨道和坐标线展开成一份未完成星图，青色是通信信号，文明金只标记已建立的连接。',
    designNoteEn:
      'Multiple orbital nodes and coordinate lines form an unfinished chart; cyan is the communication signal and civilisation gold marks an established contact.',
  },
  'frozen-front': {
    visualStyle: 'allied-tactical',
    layout: 'tactical',
    glyphSet: { prompt: '❯', separator: '│', connector: '┄' },
    motif: 'grid',
    motifDensity: 'dense',
    defaultLineMode: 'double',
    roleEmphasis: {
      primary: ['accent', 'border'],
      secondary: ['surface', 'text', 'flare'],
      restrained: ['bg', 'muted', 'onAccent'],
    },
    designNote: '战术网格把上下文放进冷蓝面板，分支和命令位置像地图上的两个有序节点。',
    designNoteEn:
      'A tactical grid places context inside a cold blue panel; branch and command entry read as two ordered map nodes.',
  },
  'crimson-iron-curtain': {
    visualStyle: 'soviet-industrial',
    layout: 'tactical',
    glyphSet: { prompt: '❯', separator: '│', connector: '╱' },
    motif: 'grid',
    motifDensity: 'dense',
    defaultLineMode: 'double',
    roleEmphasis: {
      primary: ['accent', 'surface'],
      secondary: ['text', 'border', 'flare'],
      restrained: ['bg', 'muted', 'onAccent'],
    },
    designNote: '厚重面板与机械分隔形成压迫感，警戒红只落在当前状态和提示符，旧铜留给细小结构。',
    designNoteEn:
      'Heavy panels and mechanical rules create pressure; warning red stays on the current state and prompt while aged copper remains a small structural trace.',
  },
  'koprulu-frontier': {
    visualStyle: 'terran-industrial',
    layout: 'rail',
    glyphSet: { prompt: '❯', separator: '·', connector: '┄' },
    motif: 'industrial',
    motifDensity: 'structured',
    defaultLineMode: 'single',
    roleEmphasis: {
      primary: ['accent', 'flare'],
      secondary: ['text', 'surface', 'border'],
      restrained: ['bg', 'muted', 'onAccent'],
    },
    designNote: '模块化装甲把 Prompt 分成可维修的几段，橙色信标指向命令入口，冷青表示通信仍在工作。',
    designNoteEn:
      'Modular armour breaks the Prompt into serviceable segments; an orange beacon points to the command entry while cool cyan shows communication still online.',
  },
  'echoes-of-khala': {
    visualStyle: 'protoss-sanctum',
    layout: 'centered',
    glyphSet: { prompt: '❯', separator: '│', connector: '◇' },
    motif: 'symmetry',
    motifDensity: 'structured',
    defaultLineMode: 'double',
    roleEmphasis: {
      primary: ['accent', 'flare'],
      secondary: ['text', 'surface', 'border'],
      restrained: ['bg', 'muted', 'onAccent'],
    },
    designNote: '对称菱形围绕中心展开，象牙白保持大面积留白，金与灵能蓝只在结构和能量节点出现。',
    designNoteEn:
      'Symmetrical diamonds unfold around the centre; ivory preserves open space while gold and psionic blue appear only on structure and energy nodes.',
  },
  'spore-tide': {
    visualStyle: 'zerg-branch',
    layout: 'asymmetric',
    glyphSet: { prompt: '❯', separator: '∿', connector: '·' },
    motif: 'organic',
    motifDensity: 'dense',
    defaultLineMode: 'double',
    roleEmphasis: {
      primary: ['accent', 'flare'],
      secondary: ['text', 'surface', 'border'],
      restrained: ['bg', 'muted', 'onAccent'],
    },
    designNote: '非对称脉络从左侧生长，酸性绿只标记活化节点，正文仍保持笔直清晰的阅读线。',
    designNoteEn:
      'Asymmetric veins grow from the left; acid green marks active nodes only, while body text keeps a straight and readable line.',
  },
};
