# Theme Atlas · 色谱档案

> Every color has a story.

一个有故事的配色主题库。每套主题先讲清楚灵感与出处，再给出可以直接复制、可以导出的颜色。

当前版本收录 **9 套示范主题**，覆盖三个系列：中国神话、中国瓷器、崩坏：星穹铁道同人主题。
主题数据与输出格式解耦，以后接入终端、编辑器等其它工具时只需要新增一个适配器。

---

## 快速开始

```bash
npm install          # 安装依赖
npm run dev          # 本地开发，默认 http://localhost:4321
npm run build        # 构建静态站点到 dist/
npm run preview      # 本地预览构建产物
```

其它命令：

| 命令 | 说明 |
| --- | --- |
| `npm run check` | TypeScript / Astro 类型检查 |
| `npm run contrast` | 校验所有主题的 WCAG AA 对比度，不达标则以非零码退出 |
| `npm run verify` | 依次执行类型检查与构建 |
| `npm run og` | 重新生成社交预览图 `public/og-default.png` |

## 目录结构

```
src/
├── site.config.ts      项目名、简介、导航等公共信息（集中管理）
├── data/
│   ├── types.ts        主题与配色的类型定义
│   ├── collections.ts  三个系列的元数据
│   └── themes.ts       主题数据（可整体替换的初始数据集）
├── adapters/           输出格式适配器，与主题数据完全解耦
│   ├── types.ts        ToolAdapter 接口
│   ├── css-variables.ts
│   └── json.ts
├── lib/                颜色计算、剪贴板、URL 前缀等工具
├── components/         页面组件
├── layouts/            基础布局
├── pages/              路由（index / collections / about / theme/[slug] / 404）
└── styles/global.css   设计系统（色彩、字体、栅格、基础组件）
```

### 主题数据结构

```ts
interface Theme {
  slug: string;
  title: string;
  subtitle: string;
  collection: 'myth' | 'porcelain' | 'rail';
  description: string;   // 一句话介绍
  story: string;         // 故事背景
  inspiration: string;   // 配色灵感的具体来源
  designRationale: string;// 色彩设计思路
  palette: Array<{ name: string; hex: string; role: PaletteRole; note?: string }>;
  tags: string[];
  sources: Source[];     // 可核验的出处；无法考证的标记为 pending
  credits: Credits;       // 创作说明与授权
  status: 'verified' | 'interpretation' | 'draft';
}
```

每套配色固定提供 7 个语义角色：`bg`（背景）、`surface`（面板）、`text`（正文）、
`muted`（次要文字）、`border`（分割线）、`accent`（强调）、`onAccent`（强调色上的文字）。
角色是主题与使用方之间的唯一契约——页面、终端主题、编辑器配色都只需要认识角色。

### 新增一个输出格式

在 `src/adapters/` 下新增一个实现了 `ToolAdapter` 的文件，并注册到 `src/adapters/index.ts`：

```ts
export const terminalAdapter: ToolAdapter = {
  id: 'terminal',
  label: '终端配色',
  description: 'ANSI 16 色映射。',
  mime: 'text/plain',
  extension: 'ansi',
  render: (theme) => buildAnsiPalette(theme),
};
```

主题数据与页面组件不需要任何改动。

## 部署到 GitHub Pages

站点是纯静态产物，没有后端、运行时或数据库。

1. 在仓库 **Settings → Pages** 中把 **Source** 设为 **GitHub Actions**。
2. 推送到 `main` 分支，`.github/workflows/deploy.yml` 会自动构建并发布。

工作流会自动计算子路径：仓库是 `<user>.github.io` 时 base 为 `/`，否则为 `/<repo>`。
所有手写链接都经过 `src/lib/url.ts` 的 `withBase()`，因此子路径下的资源地址、
路由与内部链接都能正确解析；主题详情页在构建时静态生成，可以直接访问与刷新。

本地验证子路径构建：

```bash
BASE_PATH=/theme SITE_URL=https://example.github.io npm run build
npx serve dist
```

## 内容与版权

- 主题故事中的历史事实都附有出处。暂时找不到可靠依据的部分，在参考列表中标记为
  **待补充**，正文也会说明属于演绎而非史实。
- **崩坏：星穹铁道** 系列为非官方同人演绎，与 HoYoverse 无隶属或授权关系；
  该系列不含任何官方立绘、Logo 或界面素材，站内图形均为原创 SVG。
- 配色数据以 CC BY 4.0 释出，引用时请注明出处 Theme Atlas。

## 许可

代码与配色数据：CC BY 4.0。

