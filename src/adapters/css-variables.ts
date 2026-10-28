import type { Theme } from '../data/types';
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
};

export const cssVariableAdapter: ToolAdapter = {
  id: 'css',
  label: 'CSS 变量',
  labelEn: 'CSS variables',
  description: '可直接粘进样式表的 :root 变量。',
  mime: 'text/css',
  extension: 'css',
  render(theme: Theme, lang: Locale = 'zh'): string {
    const lines = theme.palette.map((c) => {
      const varName = ROLE_VARS[c.role] ?? '--theme-' + c.role.toLowerCase();
      return '  ' + varName + ': ' + c.hex + '; /* ' + c.name + ' · ' + c.role + ' */';
    });
    return [
      '/*',
      ' * ' + theme.title + ' — ' + theme.subtitle,
      ' * Theme Atlas · ' + theme.slug,
      ' * ' + t(lang, 'adapter.css.roles'),
      ' */',
      ':root {',
      ...lines,
      '}',
      '',
    ].join('\n');
  },
};

