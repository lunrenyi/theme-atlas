import type { PaletteColor, PaletteRole, Theme } from '../data/types';

export function hexToRgb(hex: string): [number, number, number] {
  const clean = hex.replace('#', '').trim();
  const full =
    clean.length === 3
      ? clean
          .split('')
          .map((c) => c + c)
          .join('')
      : clean;
  const int = parseInt(full, 16);
  if (Number.isNaN(int)) return [0, 0, 0];
  return [(int >> 16) & 255, (int >> 8) & 255, int & 255];
}

export function rgbToHex(r: number, g: number, b: number): string {
  const clamp = (n: number) => Math.max(0, Math.min(255, Math.round(n)));
  return (
    '#' +
    [clamp(r), clamp(g), clamp(b)]
      .map((n) => n.toString(16).padStart(2, '0'))
      .join('')
      .toUpperCase()
  );
}

function channel(v: number): number {
  const s = v / 255;
  return s <= 0.03928 ? s / 12.92 : Math.pow((s + 0.055) / 1.055, 2.4);
}

/** WCAG relative luminance. */
export function luminance(hex: string): number {
  const [r, g, b] = hexToRgb(hex);
  return 0.2126 * channel(r) + 0.7152 * channel(g) + 0.0722 * channel(b);
}

/** WCAG 2.x contrast ratio, 1 to 21. */
export function contrastRatio(a: string, b: string): number {
  const l1 = luminance(a);
  const l2 = luminance(b);
  const light = Math.max(l1, l2);
  const dark = Math.min(l1, l2);
  return (light + 0.05) / (dark + 0.05);
}

export function roleHex(theme: Theme, role: PaletteRole): string {
  const found = theme.palette.find((c) => c.role === role);
  return found?.hex ?? '#000000';
}

export function paletteMap(theme: Theme): Record<PaletteRole, PaletteColor> {
  const out = {} as Record<PaletteRole, PaletteColor>;
  for (const c of theme.palette) out[c.role] = c;
  return out;
}

export interface ContrastCheck {
  label: string;
  fg: string;
  bg: string;
  ratio: number;
  /** WCAG AA threshold for the given text size class. */
  threshold: number;
  pass: boolean;
  level: 'AA' | 'AAA';
}

/**
 * The readability checks a theme has to pass before it is published. Normal
 * body text needs 4.5:1, large text and UI borders need 3:1.
 */
export function auditContrast(theme: Theme): ContrastCheck[] {
  const map = paletteMap(theme);
  const get = (r: PaletteRole) => map[r]?.hex ?? '#000000';
  const bg = get('bg');
  const surface = get('surface');
  const accent = get('accent');

  const checks: Array<{ label: string; fg: string; bg: string; threshold: number }> = [
    { label: '正文 / 背景', fg: get('text'), bg, threshold: 4.5 },
    { label: '次要文字 / 背景', fg: get('muted'), bg, threshold: 4.5 },
    { label: '正文 / 面板', fg: get('text'), bg: surface, threshold: 4.5 },
    { label: '强调色上的文字 / 强调色', fg: get('onAccent'), bg: accent, threshold: 4.5 },
    { label: '强调色 / 背景', fg: accent, bg, threshold: 3 },
    { label: '分割线 / 背景', fg: get('border'), bg, threshold: 1.2 },
  ];

  return checks.map((c) => {
    const ratio = contrastRatio(c.fg, c.bg);
    return {
      ...c,
      ratio: Math.round(ratio * 100) / 100,
      pass: ratio >= c.threshold,
      level: ratio >= 7 ? 'AAA' : 'AA',
    };
  });
}

export function mix(a: string, b: string, ratio: number): string {
  const [r1, g1, b1] = hexToRgb(a);
  const [r2, g2, b2] = hexToRgb(b);
  const t = Math.max(0, Math.min(1, ratio));
  return rgbToHex(r1 + (r2 - r1) * t, g1 + (g2 - g1) * t, b1 + (b2 - b1) * t);
}

