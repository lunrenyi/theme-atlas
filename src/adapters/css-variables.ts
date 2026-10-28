import type { Theme } from '../data/types';
import { paletteMap } from '../lib/color';
import { t, type Locale } from '../i18n';
import type { ToolAdapter } from './types';

const ROLE_VARS: Record<string, string> = {
  bg: '--theme-bg',
  surface: '--theme-surface',
  text: '--theme-text',
  muted: '--theme-muted',
  border: '--theme-border',
  accent: '--theme-accent',
  onAccent: '--theme-on-accent',
  flare: '--theme-flare',
};

export const cssVariableAdapter: ToolAdapter = {
  id: 'css',
  label: 'CSS 变量',
  labelEn: 'CSS variables',
  description: '可直接粘进样式表的 :root 变量。',
  mime: 'text/css',
  extension: 'css',
  render(theme: Theme, lang: Locale = 'zh'): string {
    const map = paletteMap(theme);
    const roles = [...new Set(theme.palette.map((c) => c.role))].join(' / ');
    const lines = theme.palette.map((c) => {
      const varName = ROLE_VARS[c.role] ?? '--theme-' + c.role.toLowerCase();
      return '  ' + varName + ': ' + c.hex + '; /* ' + c.name + ' · ' + c.role + ' */';
    });
    // text on the accent falls back to the ground colour, and the exported
    // file says so instead of leaving a hole in the variable set
    if (!theme.palette.some((c) => c.role === 'onAccent') && map.onAccent) {
      lines.push(
        '  --theme-on-accent: ' +
          map.onAccent.hex +
          '; /* 强调色之上的文字 / text on accent · falls back to the ground */',
      );
    }
    return [
      '/*',
      ' * ' + theme.title + ' — ' + theme.subtitle,
      ' * Theme Atlas · ' + theme.slug,
      ' * ' + t(lang, 'adapter.css.roles') + ': ' + roles,
      ' */',
      ':root {',
      ...lines,
      '}',
      '',
    ].join('\n');
  },
};

