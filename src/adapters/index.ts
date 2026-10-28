import { cssVariableAdapter } from './css-variables';
import { jsonAdapter } from './json';
import type { ToolAdapter } from './types';
import type { Locale } from '../i18n';

/**
 * Registry of the formats the site can export today. Adding terminal,
 * Herdr or Codex output later means adding one adapter here — no change to
 * the theme data or to the pages.
 */
export const adapters: ToolAdapter[] = [cssVariableAdapter, jsonAdapter];

export { cssVariableAdapter, jsonAdapter };

/** The adapter label in the language of the interface. */
export function adapterLabel(adapter: ToolAdapter, lang: Locale): string {
  return lang === 'zh' ? adapter.label : adapter.labelEn;
}

export function getAdapter(id: string): ToolAdapter | undefined {
  return adapters.find((a) => a.id === id);
}

export type { ToolAdapter } from './types';

