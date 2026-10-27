/**
 * Astro's base option handles assets and injected routes, but hand-written
 * links still need the sub-path prefix. withBase is the single place that
 * knows about it.
 */
const raw = import.meta.env.BASE_URL ?? '/';
export const base = raw.replace(/\/$/, '');

export function withBase(path: string): string {
  if (/^(https?:|mailto:|#)/.test(path)) return path;
  const clean = path.startsWith('/') ? path : '/' + path;
  return base + clean || '/';
}

/** Absolute URL against the configured site origin - used for canonical links. */
export function absoluteUrl(path: string): string {
  const origin = import.meta.env.SITE ?? 'https://lunrenyi.github.io';
  return new URL(withBase(path), origin).toString();
}

