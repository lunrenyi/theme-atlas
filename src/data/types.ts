export type CollectionId = 'myth' | 'porcelain' | 'rail';

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
  | 'onAccent';

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

export interface Theme {
  slug: string;
  title: string;
  subtitle: string;
  collection: CollectionId;
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
   * - verified: sources are checkable references
   * - interpretation: original / fan re-interpretation of a copyrighted work
   * - draft: story still needs research, content is a placeholder
   */
  status: ThemeStatus;
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
  motif: 'ruyi' | 'glaze' | 'orbit';
}

