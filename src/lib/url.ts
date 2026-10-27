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
  // Astro.url.pathname already carries the base during a static build, so
  // strip it before re-applying it - otherwise the path segment repeats.
  const clean = base && path.startsWith(base) ? path.slice(base.length) || '/' : path;
  return new URL(withBase(clean), origin).toString();
}

