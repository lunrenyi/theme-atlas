import type {
  CodexPreviewDesign,
  PaletteRole,
  SyntaxToken,
  ToolPreviewDesign,
  VimPreviewDesign,
} from './types';

const defaultSyntax: Record<SyntaxToken, PaletteRole> = {
  keyword: 'accent',
  function: 'text',
  string: 'muted',
  number: 'text',
  type: 'accent',
  comment: 'muted',
  operator: 'muted',
  variable: 'text',
};

const syntax = (overrides: Partial<Record<SyntaxToken, PaletteRole>> = {}) => ({
  ...defaultSyntax,
  ...overrides,
});

const vim = (
  layout: VimPreviewDesign['layout'],
  currentLine: PaletteRole,
  selection: PaletteRole,
  tokens: Partial<Record<SyntaxToken, PaletteRole>> = {},
): VimPreviewDesign => ({
  layout,
  currentLine,
  selection,
  divider: 'border',
  syntax: syntax(tokens),
});

const codex = (
  layout: CodexPreviewDesign['layout'],
  diffAdded: PaletteRole,
  diffRemoved: PaletteRole,
  promptAccent: PaletteRole,
  tokens: Partial<Record<SyntaxToken, PaletteRole>> = {},
): CodexPreviewDesign => ({
  layout,
  diffAdded,
  diffRemoved,
  promptAccent,
  divider: 'border',
  syntax: syntax(tokens),
});

/**
 * Syntax mapping uses only semantic roles from the current theme. Each entry
 * can alter token emphasis and editor/TUI layout without copying the palette.
 */
export const previewDesigns: Record<string, ToolPreviewDesign> = {
  'taotie-cinnabar': {
    vim: vim('classic', 'surface', 'accent', { number: 'accent', string: 'muted' }),
    codex: codex('stacked', 'accent', 'muted', 'accent'),
  },
  'nuwa-five-stones': {
    vim: vim('compact', 'surface', 'accent', { type: 'text', string: 'muted' }),
    codex: codex('split', 'accent', 'muted', 'accent'),
  },
  'baize-omens': {
    vim: vim('compact', 'surface', 'accent', { keyword: 'text', function: 'accent' }),
    codex: codex('stacked', 'accent', 'muted', 'accent', { function: 'accent' }),
  },
  'qitian-pojie': {
    vim: vim('focus', 'surface', 'accent', { string: 'flare', number: 'text' }),
    codex: codex('split', 'accent', 'flare', 'accent', { string: 'flare' }),
  },
  'ru-ware-sky': {
    vim: vim('compact', 'surface', 'accent', { keyword: 'text', function: 'accent' }),
    codex: codex('stacked', 'accent', 'muted', 'accent'),
  },
  'jun-ware-violet': {
    vim: vim('classic', 'surface', 'accent', { type: 'text', number: 'accent' }),
    codex: codex('split', 'accent', 'muted', 'accent', { type: 'text' }),
  },
  'jingdezhen-blue-white': {
    vim: vim('classic', 'surface', 'accent', { operator: 'text' }),
    codex: codex('stacked', 'accent', 'muted', 'accent'),
  },
  'deep-space-orbit': {
    vim: vim('focus', 'surface', 'accent', { number: 'accent' }),
    codex: codex('split', 'accent', 'muted', 'accent'),
  },
  'pathfinder-beacon': {
    vim: vim('compact', 'surface', 'accent'),
    codex: codex('stacked', 'accent', 'muted', 'accent'),
  },
  'singularity-echo': {
    vim: vim('focus', 'surface', 'accent', { type: 'text' }),
    codex: codex('stacked', 'accent', 'muted', 'accent'),
  },
  'uncharted-reach': {
    vim: vim('focus', 'surface', 'accent', { string: 'flare' }),
    codex: codex('split', 'accent', 'flare', 'accent', { string: 'flare' }),
  },
  'frozen-front': {
    vim: vim('classic', 'surface', 'accent', { string: 'flare' }),
    codex: codex('stacked', 'accent', 'flare', 'accent', { string: 'flare' }),
  },
  'crimson-iron-curtain': {
    vim: vim('compact', 'surface', 'accent', { string: 'flare', number: 'text' }),
    codex: codex('stacked', 'accent', 'flare', 'accent', { string: 'flare' }),
  },
  'koprulu-frontier': {
    vim: vim('focus', 'surface', 'accent', { string: 'flare' }),
    codex: codex('split', 'accent', 'flare', 'accent', { string: 'flare' }),
  },
  'echoes-of-khala': {
    vim: vim('classic', 'surface', 'accent', { string: 'flare', type: 'text' }),
    codex: codex('split', 'accent', 'flare', 'accent', { string: 'flare', type: 'text' }),
  },
  'spore-tide': {
    vim: vim('compact', 'surface', 'accent', { string: 'flare', type: 'text' }),
    codex: codex('stacked', 'accent', 'flare', 'accent', { string: 'flare', type: 'text' }),
  },
};
