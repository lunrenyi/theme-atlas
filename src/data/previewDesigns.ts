import type {
  CodexPreviewDesign,
  PaletteRole,
  SyntaxToken,
  ToolPreviewDesign,
  VimPreviewDesign,
} from './types';

const defaultVimSyntax: Record<SyntaxToken, PaletteRole> = {
  keyword: 'accent',
  function: 'text',
  string: 'muted',
  number: 'accent',
  type: 'accent',
  comment: 'muted',
  operator: 'text',
  variable: 'text',
};

const defaultCodexSyntax: Record<SyntaxToken, PaletteRole> = {
  keyword: 'accent',
  function: 'accent',
  string: 'muted',
  number: 'text',
  type: 'text',
  comment: 'muted',
  operator: 'muted',
  variable: 'text',
};

const withSyntax = (
  defaults: Record<SyntaxToken, PaletteRole>,
  overrides: Partial<Record<SyntaxToken, PaletteRole>>,
) => ({
  ...defaults,
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
  syntax: withSyntax(defaultVimSyntax, tokens),
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
  syntax: withSyntax(defaultCodexSyntax, tokens),
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
    vim: vim('compact', 'surface', 'accent', {
      keyword: 'text',
      number: 'text',
      type: 'text',
    }),
    codex: codex('stacked', 'accent', 'muted', 'accent', {
      keyword: 'text',
      function: 'text',
      number: 'text',
      type: 'text',
    }),
  },
  'qitian-pojie': {
    vim: vim('focus', 'surface', 'accent'),
    codex: codex('split', 'accent', 'flare', 'accent', {
      keyword: 'accent',
      function: 'text',
      string: 'muted',
    }),
  },
  'ru-ware-sky': {
    vim: vim('compact', 'surface', 'accent', {
      keyword: 'text',
      function: 'text',
      number: 'text',
      type: 'text',
    }),
    codex: codex('stacked', 'accent', 'muted', 'accent', {
      keyword: 'text',
      function: 'text',
      number: 'text',
      type: 'text',
    }),
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
    vim: vim('focus', 'surface', 'accent', {
      keyword: 'muted',
      number: 'onAccent',
      type: 'text',
    }),
    codex: codex('split', 'accent', 'muted', 'accent', {
      keyword: 'muted',
      function: 'text',
      number: 'onAccent',
      type: 'text',
    }),
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
    vim: vim('compact', 'surface', 'accent', { type: 'text' }),
    codex: codex('stacked', 'accent', 'flare', 'accent', { type: 'text' }),
  },
};
