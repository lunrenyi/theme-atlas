import type {
  CodexPreviewDesign,
  PaletteRole,
  ToolPreviewDesign,
  VimPreviewDesign,
} from './types';

const vim = (
  layout: VimPreviewDesign['layout'],
  currentLine: PaletteRole,
  selection: PaletteRole,
): VimPreviewDesign => ({
  layout,
  currentLine,
  selection,
  divider: 'border',
});

const codex = (
  layout: CodexPreviewDesign['layout'],
  diffAdded: PaletteRole,
  diffRemoved: PaletteRole,
  promptAccent: PaletteRole,
): CodexPreviewDesign => ({
  layout,
  diffAdded,
  diffRemoved,
  promptAccent,
  divider: 'border',
});

/** Vim and Codex layout/diff choices. Syntax colours live in syntaxPalettes.ts. */
export const previewDesigns: Record<string, ToolPreviewDesign> = {
  'taotie-cinnabar': {
    vim: vim('classic', 'surface', 'accent'),
    codex: codex('stacked', 'accent', 'muted', 'accent'),
  },
  'nuwa-five-stones': {
    vim: vim('compact', 'surface', 'accent'),
    codex: codex('split', 'accent', 'muted', 'accent'),
  },
  'baize-omens': {
    vim: vim('compact', 'surface', 'accent'),
    codex: codex('stacked', 'accent', 'muted', 'accent'),
  },
  'qitian-pojie': {
    vim: vim('focus', 'surface', 'accent'),
    codex: codex('split', 'accent', 'flare', 'accent'),
  },
  'pangu-creation': {
    vim: vim('focus', 'surface', 'accent'),
    codex: codex('split', 'accent', 'flare', 'accent'),
  },
  'xingtian-war-dance': {
    vim: vim('classic', 'surface', 'accent'),
    codex: codex('stacked', 'accent', 'flare', 'accent'),
  },
  'qixi-magpie-bridge': {
    vim: vim('compact', 'surface', 'accent'),
    codex: codex('split', 'accent', 'flare', 'accent'),
  },
  'eight-immortals-crossing': {
    vim: vim('classic', 'surface', 'accent'),
    codex: codex('stacked', 'accent', 'muted', 'flare'),
  },
  'nezha-lotus-flame': {
    vim: vim('focus', 'surface', 'accent'),
    codex: codex('split', 'accent', 'flare', 'accent'),
  },
  'yangjian-celestial-eye': {
    vim: vim('compact', 'surface', 'accent'),
    codex: codex('stacked', 'accent', 'flare', 'accent'),
  },
  'ru-ware-sky': {
    vim: vim('compact', 'surface', 'accent'),
    codex: codex('stacked', 'accent', 'muted', 'accent'),
  },
  'jun-ware-violet': {
    vim: vim('classic', 'surface', 'accent'),
    codex: codex('split', 'accent', 'muted', 'accent'),
  },
  'jingdezhen-blue-white': {
    vim: vim('classic', 'surface', 'accent'),
    codex: codex('stacked', 'accent', 'muted', 'accent'),
  },
  'longquan-meizi-green': {
    vim: vim('classic', 'surface', 'accent'),
    codex: codex('stacked', 'accent', 'muted', 'accent'),
  },
  'dehua-china-white': {
    vim: vim('focus', 'surface', 'accent'),
    codex: codex('split', 'accent', 'muted', 'accent'),
  },
  'famille-rose-bloom': {
    vim: vim('compact', 'surface', 'accent'),
    codex: codex('stacked', 'accent', 'muted', 'accent'),
  },
  'deep-space-orbit': {
    vim: vim('focus', 'surface', 'accent'),
    codex: codex('split', 'accent', 'muted', 'accent'),
  },
  'pathfinder-beacon': {
    vim: vim('compact', 'surface', 'accent'),
    codex: codex('stacked', 'accent', 'muted', 'accent'),
  },
  'singularity-echo': {
    vim: vim('focus', 'surface', 'accent'),
    codex: codex('stacked', 'accent', 'muted', 'accent'),
  },
  'yaoshi-everlasting-bough': {
    vim: vim('compact', 'surface', 'accent'),
    codex: codex('split', 'accent', 'flare', 'accent'),
  },
  'lan-reignbow-arbiter': {
    vim: vim('classic', 'surface', 'accent'),
    codex: codex('split', 'accent', 'muted', 'accent'),
  },
  'aha-cosmic-farce': {
    vim: vim('focus', 'surface', 'accent'),
    codex: codex('stacked', 'accent', 'muted', 'flare'),
  },
  'ix-silent-event-horizon': {
    vim: vim('compact', 'surface', 'accent'),
    codex: codex('split', 'accent', 'muted', 'flare'),
  },
  'uncharted-reach': {
    vim: vim('focus', 'surface', 'accent'),
    codex: codex('split', 'accent', 'flare', 'accent'),
  },
  'frozen-front': {
    vim: vim('classic', 'surface', 'accent'),
    codex: codex('stacked', 'accent', 'flare', 'accent'),
  },
  'crimson-iron-curtain': {
    vim: vim('compact', 'surface', 'accent'),
    codex: codex('stacked', 'accent', 'flare', 'accent'),
  },
  'koprulu-frontier': {
    vim: vim('focus', 'surface', 'accent'),
    codex: codex('split', 'accent', 'flare', 'accent'),
  },
  'echoes-of-khala': {
    vim: vim('classic', 'surface', 'accent'),
    codex: codex('split', 'accent', 'flare', 'accent'),
  },
  'spore-tide': {
    vim: vim('compact', 'surface', 'accent'),
    codex: codex('stacked', 'accent', 'flare', 'accent'),
  },
};
