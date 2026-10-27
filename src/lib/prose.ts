import type { PaletteColor } from '../data/types';

export interface ProseSegment {
  text: string;
  /** Present when this run of text is the name of a palette colour. */
  color?: PaletteColor;
}

/**
 * Splits a paragraph so that colour names mentioned in the prose can be
 * rendered as swatches. The link between the story and the palette should be
 * visible in the text itself, not only in a panel on the other side.
 */
export function splitColourMentions(text: string, palette: PaletteColor[]): ProseSegment[] {
  const names = palette
    .map((c) => ({ name: c.name, color: c }))
    .filter((n) => n.name.length > 1)
    .sort((a, b) => b.name.length - a.name.length);

  if (names.length === 0) return [{ text }];

  const segments: ProseSegment[] = [];
  let rest = text;

  while (rest.length > 0) {
    let bestIndex = -1;
    let best: { name: string; color: PaletteColor } | undefined;

    for (const candidate of names) {
      const index = rest.indexOf(candidate.name);
      if (index !== -1 && (bestIndex === -1 || index < bestIndex)) {
        bestIndex = index;
        best = candidate;
      }
    }

    if (!best || bestIndex === -1) {
      segments.push({ text: rest });
      break;
    }

    if (bestIndex > 0) segments.push({ text: rest.slice(0, bestIndex) });
    segments.push({ text: best.name, color: best.color });
    rest = rest.slice(bestIndex + best.name.length);
  }

  return segments.filter((s) => s.text.length > 0);
}


