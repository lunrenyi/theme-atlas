# Theme Atlas · 色谱档案

> Every color has a story.

[![Deploy to GitHub Pages](https://github.com/lunrenyi/theme-atlas/actions/workflows/deploy.yml/badge.svg)](https://github.com/lunrenyi/theme-atlas/actions/workflows/deploy.yml)
[![Pages](https://github.com/lunrenyi/theme-atlas/actions/workflows/deploy.yml?query=branch%3Amain&badge=pages-deploy)](https://lunrenyi.github.io/theme-atlas/)

**在线站点 / Live site → <https://lunrenyi.github.io/theme-atlas/>**

一个有故事的配色主题库。每套主题先讲清楚灵感与出处，再给出可以直接复制、可以导出的颜色。

当前版本收录 **9 套示范主题**，覆盖三个系列：中国神话、中国瓷器、崩坏：星穹铁道同人主题。
主题数据与输出格式解耦，以后接入终端、编辑器等其它工具时只需要新增一个适配器。

站点提供 **简体中文与 English** 两个版本：中文在根路径（`/`），英文在 `/en/`，
两种语言都在构建时生成，没有客户端翻译，也没有运行时翻译服务。

---

## 这是什么

Theme Atlas 把每个主题当成一份档案来写：先交代故事从哪儿来，再交代颜色从哪儿来，
最后才是可以直接复制的色值。

- **故事**——主题的出处、传说、器物与工艺背景，附可核验的参考。
- **颜色**——7 个色值，每个都有名字、HEX 和**语义角色**。
- **用法**——应用预览、对比度校验、一键复制与导出。

这是一份**配色作品集**，所以颜色本身是主角：卡片上的色条、详情页顶部的样带、
应用预览里的界面，全部由同一份数据渲染。

## 视觉系统 · Stellar Atlas

界面使用深空仪表盘式的语言：低饱和的深蓝底、细如轨道线的分割线，
三个强调色只在真正有意义的地方出现。

| Token | 值 | 用途 |
| --- | --- | --- |
| `--space` | `#080D1C` | 页面底色 |
| `--panel` | `#111B35` | 面板与读数台 |
| `--orbit` | `#344363` | 轨道线、分割线 |
| `--gold` | `#DCC38B` | 星辰金：品牌与主要操作 |
| `--quantum` | `#9885FF` | 量子紫：焦点环与数据标记 |
| `--glow` | `#76D8DF` | 辉光青：实时数值与状态 |
| `--text` | `#EAF0FF` | 正文 |

- **首屏星图**：全站最有辨识度的视觉。中心是一颗分层发光的星体——内核、光晕、
  四道光环与两道反向旋转的弧；五条倾角与椭圆率各不相同的轨道里，三条承载系列节点，
  两条只用来造纵深；星尘按远近分成三层，另有两片几乎看不见的星云，
  以及三条从核心指向节点的导线。三颗光点沿轨道滑行，鼠标经过时整张图只有几像素的视差。
  悬停或键盘聚焦节点时，节点放大、所属轨道点亮，并显示系列名、简短介绍与代表配色；
  点击进入对应系列。图形全部为本页绘制的原创 SVG，不含任何第三方素材。
- **详情页读数台**：右栏常驻显示关键色块与一张**明度光谱图**（每根色条的高度
  等于该颜色的相对明度），故事、配色表、应用预览与对比度校验在同一条轨道上依次滚动。
- **系列个性保留**：中国神话仍是朱砂与石青，中国瓷器仍是天青与釉色，
  崩坏：星穹铁道才是量子紫——三个系列不会被统一成同一种蓝紫。
- 没有外部字体、外部图片与运行时依赖；动画很轻，并尊重
  `prefers-reduced-motion`。

## 三个系列

| 系列 | 配色纪律 | 排列规则 |
| --- | --- | --- |
| 中国神话 | 神话的形状，是青铜器替它留下的 | **中心对称**——强调色落在轴心 |
| 中国瓷器 | 从胎土到釉层，最后由窑火定色 | **釉层分层**——由胎体到釉彩 |
| 崩坏：星穹铁道 同人 | 把想象中的银河，重新折算成颜色 | **明度序列**——由暗到亮的光谱 |

排列规则定义在 `src/lib/arrangement.ts`，色条、图例与卡片上的小图都来自同一处。

## 语义角色

每套配色固定提供 7 个角色，这是主题与使用方之间的唯一契约：

| 角色 | 用途 |
| --- | --- |
| `bg` | 页面背景 |
| `surface` | 面板与卡片 |
| `text` | 正文 |
| `muted` | 次要文字与注释 |
| `border` | 分割线与描边 |
| `accent` | 按钮、链接、焦点 |
| `onAccent` | 强调色之上的文字 |

角色与颜色分离，意味着新增一种输出格式（终端、编辑器配色）时**不需要改写任何配色数据**。

## 快速开始

```bash
npm install          # 安装依赖
npm run dev          # 本地开发，默认 http://localhost:4321
npm run build        # 构建静态站点到 dist/
npm run preview      # 本地预览构建产物
```

| 命令 | 说明 |
| --- | --- |
| `npm run check` | TypeScript / Astro 类型检查 |
| `npm run contrast` | 校验所有主题的 WCAG AA 对比度，不达标则以非零码退出 |
| `npm run verify` | 依次执行类型检查与构建 |
| `npm run og` | 重新生成社交预览图 `public/og-default.png` |

## 双语结构

| 位置 | 内容 |
| --- | --- |
| `src/i18n/index.ts` | 全部界面文案的字典（`zh` / `en`），`t(lang, key)` 带占位符替换 |
| `src/data/themes.ts` | 中文主题数据：slug、HEX、语义角色、来源类型等**唯一数据源** |
| `src/data/themes.en.ts` | 英文文案覆盖层：标题、故事、灵感、说明、颜色名与备注 |
| `src/data/collections.ts` | 系列数据，中英字段并列（`title` / `titleEn`、`tagline` / `taglineEn`…） |
| `src/lib/content.ts` | 按语言读取主题与系列，把英文文案合并进中文数据 |
| `src/views/` | 页面视图，接收 `lang` 参数；`src/pages/` 只是路由外壳 |
| `src/lib/url.ts` | `localePath()`、`pathForLocale()`：语言前缀与切换链接 |

约定：

- **只有文案被翻译**。slug、HEX、语义角色 ID、来源类型和计算逻辑保持不变，
  因此不会出现两份互相漂移的配色数据。
- 中文是默认语言，URL 不变；英文使用 `/en/` 前缀，
  例如 `/theme/deep-space-orbit/` ↔ `/en/theme/deep-space-orbit/`。
- 页面右上角的语言菜单会**停留在当前页面**：从中文详情切到英文，
  仍然是同一个主题的英文详情页。
- 每个页面都输出正确的 `html lang`、`canonical` 与 `hreflang`（含 `x-default`）。
- **中文页面以中文为主**：装饰性英文标签只保留必要的技术名词（CSS、JSON、HEX、SVG、
  GitHub 等）。中文界面不再重复拉丁目录代码（`MYTH` / `CELADON` / `ORBIT`），
  区块编号改用「系列一 / 系列二 / 系列三」，标题与页脚一律使用中文。

## 目录结构

```
src/
├── i18n/index.ts       中英文案字典与语言元数据
├── site.config.ts      项目名、简介、导航等公共信息（集中管理）
├── data/
│   ├── types.ts        主题与配色的类型定义
│   ├── collections.ts  三个系列的元数据
│   ├── themes.ts       主题数据（可整体替换的初始数据集）
│   └── themes.en.ts    主题的英文文案覆盖层
├── adapters/           输出格式适配器，与主题数据完全解耦
│   ├── types.ts        ToolAdapter 接口
│   ├── css-variables.ts
│   └── json.ts
├── lib/
│   ├── color.ts        WCAG 对比度计算
│   ├── arrangement.ts  三个系列的配色排列规则
│   ├── prose.ts        正文中的颜色名识别
│   ├── clipboard.ts    复制与下载
│   └── url.ts          GitHub Pages 子路径前缀
├── components/         页面组件
├── layouts/            基础布局
├── views/              页面视图（Home / Collections / About / ThemeDetail / NotFound）
├── pages/              路由外壳（中文在根目录，英文在 /en/）
└── styles/global.css   设计系统（色彩、字体、栅格、基础组件）

scripts/
├── check-contrast.mjs   对比度审计（npm run contrast）
├── generate-og.mjs      重新生成社交预览图（npm run og）
└── postbuild.mjs        构建后写入 dist/.nojekyll
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
  credits: Credits;      // 创作说明与授权
  status: 'verified' | 'interpretation' | 'draft';
}
```

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
BASE_PATH=/theme-atlas SITE_URL=https://lunrenyi.github.io npm run build
npx serve dist
```

## 内容与版权

- 主题故事中的历史事实都附有出处。暂时找不到可靠依据的部分，在参考列表中标记为
  **待补充**，正文也会说明属于演绎而非史实。
- **崩坏：星穹铁道** 系列为非官方同人演绎，与 HoYoverse 无隶属或授权关系；
  该系列不含任何官方立绘、Logo 或界面素材，站内图形均为原创 SVG。
- 配色数据以 CC BY 4.0 释出，引用时请注明出处 Theme Atlas。

## 参与

- 发现引用错误、出处存疑或更好的版本 → [提 issue](https://github.com/lunrenyi/theme-atlas/issues)。
- 想加一套主题 → 在 `src/data/themes.ts` 里补一个对象即可，页面、导出与对比度校验会自动跟上。
- 想加一种输出格式 → 见上面「新增一个输出格式」。

## 许可

代码与配色数据以 [CC BY 4.0](LICENSE) 释出。引用时请注明出处 Theme Atlas。

以下内容**不在**本许可证的授权范围内，请各自遵循其原始条款：

- **字体**——本项目只用系统字体栈，没有打包或分发任何第三方字体文件。
- **图形**——站内所有插图与装饰图形均为本项目原创 SVG。
- **《崩坏：星穹铁道》相关主题**——三套均为**非官方同人演绎**，与 HoYoverse 无隶属
  或授权关系，不包含任何官方美术、Logo 或界面素材。
- **引用的典籍与文献**——仅作为出处标注，不随本仓库分发。

