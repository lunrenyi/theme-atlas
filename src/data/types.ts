export type CollectionId = 'myth' | 'porcelain' | 'rail' | 'game';

/**
 * Optional game grouping inside the flat "game" collection. This is not a
 * second collection: counts continue to come from the collection and theme
 * arrays, so a future parent/child migration cannot double-count themes.
 */
export type GameWorldId = 'stellaris' | 'red-alert' | 'starcraft';

/**
 * The seven semantic slots a theme palette must fill. Keeping them explicit
 * is what lets a theme be re-used by tools that only understand roles
 * (CSS variables, terminal ANSI palettes, editor colour maps, ...).
 */
export type PaletteRole =
  | 'bg'
  | 'surface'
  | 'text'
  | 'muted'
  | 'border'
  | 'accent'
  | 'onAccent'
  /**
   * A second, hotter accent. Optional: a theme only declares one when it
   * really has a colour that must not be confused with the primary accent -
   * a flame, a warning, a signal. It is meant for small, deliberate marks,
   * never for body text.
   */
  | 'flare';

export interface PaletteColor {
  /** Human readable colour name, e.g. 朱砂. */
  name: string;
  /** Uppercase #RRGGBB value. */
  hex: string;
  /** What the colour is *for* in an interface. */
  role: PaletteRole;
  /** One line on where the colour comes from. */
  note?: string;
}

/** A non-semantic colour reserved for a theme's original illustration. */
export interface ArtworkColor {
  name: string;
  hex: string;
  note?: string;
}

export type SourceType = 'book' | 'article' | 'link' | 'pending';

export interface Source {
  title: string;
  type: SourceType;
  /** Author / publisher / year. */
  detail?: string;
  url?: string;
  /** Why this source matters, or what is still missing. */
  note?: string;
}

export interface Credits {
  /** Who assembled the palette. */
  palette?: string;
  /** Who wrote the story text. */
  story?: string;
  /** Who made the illustrations. */
  graphics?: string;
  /** Licence of the theme data. */
  license?: string;
  /** Fan-work disclaimer, when the theme is a fan interpretation. */
  disclaimer?: string;
  /** Where placeholder illustrations may be replaced. */
  imageLicence?: string;
}

export type ThemeStatus = 'verified' | 'interpretation' | 'draft';

export type PromptVisualStyle =
  | 'bronze-axis'
  | 'stone-strata'
  | 'archive-annotation'
  | 'broken-axis'
  | 'glaze-strata'
  | 'kiln-flow'
  | 'cobalt-symmetry'
  | 'stellar-orbit'
  | 'beacon-route'
  | 'compressed-core'
  | 'stellar-navigation'
  | 'allied-tactical'
  | 'soviet-industrial'
  | 'terran-industrial'
  | 'protoss-sanctum'
  | 'zerg-branch'
  | 'everlasting-bough'
  | 'reignbow-arbiter'
  | 'cosmic-farce'
  | 'silent-horizon'
  | 'primordial-separation'
  | 'shield-dance'
  | 'magpie-weave'
  | 'eight-crossing'
  | 'lotus-wheel'
  | 'celestial-eye'
  | 'celadon-depth'
  | 'blanc-sculpture'
  | 'famille-bloom'
  | 'amber-rampart'
  | 'cosmic-computation'
  | 'memory-refraction';

export type PromptLayout =
  | 'minimal'
  | 'segmented'
  | 'two-line';

export type PromptModuleId =
  | 'user'
  | 'directory'
  | 'git'
  | 'runtime'
  | 'command'
  | 'status';

export type PromptMotif =
  | 'axis'
  | 'strata'
  | 'annotation'
  | 'fracture'
  | 'symmetry'
  | 'orbit'
  | 'beacon'
  | 'singularity'
  | 'flow'
  | 'grid'
  | 'pressure'
  | 'industrial'
  | 'organic'
  | 'farce'
  | 'event-horizon'
  | 'genesis'
  | 'battle-dance'
  | 'weave'
  | 'octet'
  | 'lotus-flame'
  | 'eye-mountain'
  | 'celadon-layer'
  | 'blanc-form'
  | 'rose-branch'
  | 'rampart'
  | 'cosmic-array'
  | 'memory-river';

export type PromptLineMode = 'single' | 'double';

export interface PromptGlyphSet {
  /** Primary command symbol, always a common Unicode character. */
  prompt: string;
  /** Separator between Prompt context fields. */
  separator: string;
  /** Connector used by the motif or output line. */
  connector: string;
}

export interface PromptRoleEmphasis {
  primary: PaletteRole[];
  secondary: PaletteRole[];
  restrained: PaletteRole[];
}

export interface PromptDesign {
  visualStyle: PromptVisualStyle;
  layout: PromptLayout;
  glyphSet: PromptGlyphSet;
  motif: PromptMotif;
  motifDensity: 'sparse' | 'structured' | 'dense';
  defaultLineMode: PromptLineMode;
  moduleOrder: PromptModuleId[];
  roleEmphasis: PromptRoleEmphasis;
  designNote: string;
  designNoteEn: string;
}

export type SyntaxRole =
  | 'keyword'
  | 'function'
  | 'string'
  | 'number'
  | 'type'
  | 'variable'
  | 'property'
  | 'comment'
  | 'operator'
  | 'punctuation'
  | 'constant';

/** Theme-owned code colours, separate from the ordinary UI palette. */
export type SyntaxPalette = Record<SyntaxRole, string>;

export type PreviewExample = 'default' | 'nous-deduction' | 'fuli-memory';

export interface VimPreviewDesign {
  layout: 'classic' | 'focus' | 'compact';
  currentLine: PaletteRole;
  selection: PaletteRole;
  divider: PaletteRole;
  /** Optional static code example; defaults to the shared theme-config sample. */
  example?: PreviewExample;
}

export interface CodexPreviewDesign {
  layout: 'stacked' | 'split';
  diffAdded: PaletteRole;
  diffRemoved: PaletteRole;
  promptAccent: PaletteRole;
  divider: PaletteRole;
  /** Optional static code/diff example; defaults to the shared theme-config sample. */
  example?: PreviewExample;
  /** Optional static conversation copy displayed around the code workbench. */
  dialogue?: {
    user: string;
    assistant: string;
    status: string;
    conclusion?: string;
    input?: string;
  };
  fileName?: string;
}

export interface ToolPreviewDesign {
  vim: VimPreviewDesign;
  codex: CodexPreviewDesign;
}

export interface Theme {
  slug: string;
  title: string;
  subtitle: string;
  collection: CollectionId;
  /** Optional game grouping, currently used only by the game collection. */
  game?: GameWorldId;
  /** One-line summary used on cards and meta tags. */
  description: string;
  /** The narrative the theme is built from. */
  story: string;
  /** Where the colours specifically come from. */
  inspiration: string;
  /** How the colours were composed into a usable interface palette. */
  designRationale: string;
  palette: PaletteColor[];
  tags: string[];
  sources: Source[];
  credits: Credits;
  /** Shown in the Featured section on the home page. */
  featured?: boolean;
  /**
   * Overrides the collection's default specimen drawing. Used by themes
   * whose own image says something the generic motif cannot.
   */
  plate?:
    | 'staff'
    | 'stellaris'
    | 'red-alert-allied'
    | 'red-alert-soviet'
    | 'terran'
    | 'protoss'
    | 'zerg'
    | 'yaoshi-bough'
    | 'lan-reignbow'
    | 'aha-farce'
    | 'ix-horizon'
    | 'pangu-genesis'
    | 'xingtian-shield-dance'
    | 'qixi-bridge'
    | 'eight-treasures'
    | 'nezha-lotus-wheel'
    | 'yangjian-eye'
    | 'longquan-meizi'
    | 'dehua-blanc'
    | 'famille-rose'
    | 'qlipoth-rampart'
    | 'nous-computer'
    | 'fuli-crystal';
  /** Decorative colours used only by the plate, never by the UI palette. */
  artworkPalette?: ArtworkColor[];
  /**
   * - verified: sources are checkable references
   * - interpretation: original / fan re-interpretation of a copyrighted work
   * - draft: story still needs research, content is a placeholder
   */
  status: ThemeStatus;
  /** Visual treatment used by the reusable terminal Prompt preview. */
  promptDesign: PromptDesign;
  /** Syntax and layout choices used by the Vim and Codex previews. */
  previewDesign: ToolPreviewDesign;
  /** Independent source-code palette used by Vim and Codex previews. */
  syntax: SyntaxPalette;
}

export interface Collection {
  id: CollectionId;
  title: string;
  titleEn: string;
  /** Short label used where space is tight (star map, chips). */
  short: string;
  /** Short label used where space is tight in the English interface. */
  shortEn: string;
  /** Stable catalogue code, used as a technical label in both languages. */
  code: string;
  /**
   * Catalogue code for the Chinese interface. The Chinese pages do not
   * repeat a Latin code next to a Chinese title, so this is empty there and
   * the code line is simply not rendered.
   */
  codeZh: string;
  /** Short line shown on the collection panel. */
  tagline: string;
  /** English version of the tagline. */
  taglineEn: string;
  /** One short line used as the star map annotation for the collection. */
  starNote: string;
  /** English version of the star map annotation. */
  starNoteEn: string;
  /** Longer paragraph on the collection page. */
  description: string;
  /** English version of the collection description. */
  descriptionEn: string;
  /** Hue used for the collection's own graphic motif. */
  accent: string;
  /** Secondary hue used by the motif gradients. */
  accentAlt: string;
  /** Which motif component to draw. */
  motif: 'ruyi' | 'glaze' | 'orbit' | 'game';
}

/** A localized game group displayed inside the Game Worlds collection. */
export interface GameWorld {
  id: GameWorldId;
  title: string;
  titleEn: string;
  short: string;
  shortEn: string;
  code: string;
  tagline: string;
  taglineEn: string;
  description: string;
  descriptionEn: string;
  accent: string;
  accentAlt: string;
  motif: GameWorldId;
  referenceTitle: string;
  referenceTitleEn: string;
  referenceUrl: string;
}

