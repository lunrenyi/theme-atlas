/**
 * Astro's base option handles assets and injected routes, but hand-written
 * links still need the sub-path prefix. withBase is the single place that
 * knows about it.
 */
import type { Locale } from '../i18n';

const raw = import.meta.env.BASE_URL ?? '/';
export const base = raw.replace(/\/$/, '');

export function withBase(path: string): string {
  if (/^(https?:|mailto:|#)/.test(path)) return path;
  const clean = path.startsWith('/') ? path : '/' + path;
  return base + clean || '/';
}

/** Remove the deployment sub-path from a pathname. */
export function stripBase(pathname: string): string {
  if (base && pathname.startsWith(base)) return pathname.slice(base.length) || '/';
  return pathname;
}

/** Which language a pathname belongs to. */
export function localeOfPath(pathname: string): Locale {
  const path = stripBase(pathname);
  return path === '/en' || path.startsWith('/en/') ? 'en' : 'zh';
}

/**
 * GitHub Pages serves the root 404.html for any missing path; the English
 * one is an ordinary route, so the two are not simply "/en" + the path.
 */
const NOT_FOUND_PATHS: Record<Locale, string> = {
  zh: '/404.html',
  en: '/en/404/',
};

/**
 * The same page in the given language, including the deployment sub-path.
 * Every route exists in both languages, so this never has to fall back.
 */
export function pathForLocale(pathname: string, lang: Locale): string {
  const path = stripBase(pathname);
  if (path === '/404.html' || path === '/404/' || path === '/en/404/' || path === '/en/404.html') {
    return withBase(NOT_FOUND_PATHS[lang]);
  }
  const withoutEnglish =
    path === '/en' ? '/' : path.startsWith('/en/') ? path.slice('/en'.length) : path;
  const target =
    lang === 'en'
      ? withoutEnglish === '/'
        ? '/en/'
        : '/en' + withoutEnglish
      : withoutEnglish;
  return withBase(target);
}

/**
 * Add the locale prefix to a site-internal path (with or without a hash).
 * Chinese stays at the root, English lives under /en.
 */
export function localePath(path: string, lang: Locale): string {
  if (lang === 'zh') return withBase(path);
  if (path === '/') return withBase('/en/');
  return withBase('/en' + path);
}

/** Absolute URL against the configured site origin - used for canonical links. */
export function absoluteUrl(path: string): string {
  const origin = import.meta.env.SITE ?? 'https://lunrenyi.github.io';
  // Astro.url.pathname already carries the base during a static build, so
  // strip it before re-applying it - otherwise the path segment repeats.
  const clean = base && path.startsWith(base) ? path.slice(base.length) || '/' : path;
  return new URL(withBase(clean), origin).toString();
}

