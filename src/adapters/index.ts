import { cssVariableAdapter } from './css-variables';
import { jsonAdapter } from './json';
import type { ToolAdapter } from './types';

/**
 * Registry of the formats the site can export today. Adding terminal,
 * Herdr or Codex output later means adding one adapter here — no change to
 * the theme data or to the pages.
 */
export const adapters: ToolAdapter[] = [cssVariableAdapter, jsonAdapter];

export function getAdapter(id: string): ToolAdapter | undefined {
  return adapters.find((a) => a.id === id);
}

export type { ToolAdapter } from './types';

