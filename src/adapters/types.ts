import type { Theme } from '../data/types';
import type { Locale } from '../i18n';

/**
 * A tool adapter turns a theme into one concrete output format. The theme
 * data never knows about CSS files, terminal palettes or editor colour maps —
 * each of those lives behind an adapter instead.
 */
export interface ToolAdapter {
  /** Stable identifier, also used as the download file extension. */
  id: string;
  /** Human readable label shown in the export row. */
  label: string;
  /** English label, shown when the interface is in English. */
  labelEn: string;
  /** One line describing what the format is for. */
  description: string;
  /** MIME type used for downloads. */
  mime: string;
  /** File extension without the dot. */
  extension: string;
  /** Render the theme into the adapter's format. */
  render(theme: Theme, lang?: Locale): string;
}

