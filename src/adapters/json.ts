import type { Theme } from '../data/types';
import type { ToolAdapter } from './types';

export const jsonAdapter: ToolAdapter = {
  id: 'json',
  label: 'JSON',
  description: '含角色、来源与许可信息的完整结构化数据。',
  mime: 'application/json',
  extension: 'json',
  render(theme: Theme): string {
    const payload = {
      slug: theme.slug,
      title: theme.title,
      subtitle: theme.subtitle,
      collection: theme.collection,
      description: theme.description,
      status: theme.status,
      tags: theme.tags,
      palette: theme.palette.map((c) => ({
        name: c.name,
        hex: c.hex,
        role: c.role,
        note: c.note ?? null,
      })),
      sources: theme.sources.map((s) => ({
        title: s.title,
        type: s.type,
        detail: s.detail ?? null,
        url: s.url ?? null,
        note: s.note ?? null,
      })),
      credits: theme.credits,
    };
    return JSON.stringify(payload, null, 2) + '\n';
  },
};

