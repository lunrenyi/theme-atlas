import type { CollectionId, PaletteColor, PaletteRole, Theme } from '../data/types';
import { luminance } from './color';

/**
 * Each collection organises its colours differently, and the strip on the card
 * is the place where that difference is visible. These are the rules.
 */
export type ArrangementId = 'symmetry' | 'strata' | 'luminance';

export interface Arrangement {
  id: ArrangementId;
  /** Short label printed on the card. */
  label: string;
  /** One line describing the rule. */
  note: string;
}

export const arrangements: Record<CollectionId, Arrangement> = {
  myth: {
    id: 'symmetry',
    label: '中心对称',
    note: '强调色落在轴心，两侧按与它的明度距离镜像排布——兽面纹的构图逻辑。',
  },
  porcelain: {
    id: 'strata',
    label: '釉层分层',
    note: '由胎体到釉彩逐层叠置，落在最后的是窑火定下的颜色。',
  },
  rail: {
    id: 'luminance',
    label: '明度序列',
    note: '按相对明度由暗到亮排列，读起来像一段光谱。',
  },
};

export function arrangementFor(collection: CollectionId): Arrangement {
  return arrangements[collection];
}

const STRATA_ORDER: PaletteRole[] = [
  'bg',
  'surface',
  'border',
  'muted',
  'text',
  'onAccent',
  'accent',
];

/**
 * Returns the palette in the order its collection wants to show it.
 * The set of colours never changes — only the reading order does.
 */
export function arrangePalette(theme: Theme): PaletteColor[] {
  const palette = theme.palette;
  const rule = arrangementFor(theme.collection);

  if (rule.id === 'luminance') {
    return [...palette].sort((a, b) => luminance(a.hex) - luminance(b.hex));
  }

  if (rule.id === 'strata') {
    const ordered = STRATA_ORDER.map((role) => palette.find((c) => c.role === role)).filter(
      (c): c is PaletteColor => Boolean(c),
    );
    // keep any colour that has no slot in the rule
    const rest = palette.filter((c) => !ordered.includes(c));
    return [...ordered, ...rest];
  }

  // symmetry: accent in the centre, the rest mirrored by lightness distance
  const accent = palette.find((c) => c.role === 'accent') ?? palette[0];
  const distance = (c: PaletteColor) => Math.abs(luminance(c.hex) - luminance(accent.hex));
  const sorted = palette
    .filter((c) => c !== accent)
    .sort((a, b) => distance(b) - distance(a));

  // The two colours nearest the accent flank it; the farthest pair sits at
  // the outer edges. Every colour is used exactly once.
  const rightSide: PaletteColor[] = [];
  const leftSide: PaletteColor[] = [];
  for (let i = 0; i < sorted.length; i += 1) {
    const rightIndex = sorted.length - 1 - i * 2;
    const leftIndex = sorted.length - 2 - i * 2;
    if (rightIndex >= 0) rightSide.push(sorted[rightIndex]);
    if (leftIndex >= 0) leftSide.push(sorted[leftIndex]);
  }

  return [...leftSide.reverse(), accent, ...rightSide];
}


