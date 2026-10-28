/**
 * One dictionary for the whole site.
 *
 * Chinese is the default language and lives at the root of the deployment;
 * English is generated under /en/. Both languages are produced at build
 * time — there is no client-side translation and no runtime service.
 */

export const locales = ['zh', 'en'] as const;

export type Locale = (typeof locales)[number];

export const defaultLocale: Locale = 'zh';

export interface LocaleMeta {
  /** Name of the language in the language itself. */
  nativeLabel: string;
  /** Value for the html lang attribute. */
  htmlLang: string;
  /** Value used in hreflang links. */
  hreflang: string;
  /** Path prefix inside the site (empty for the default locale). */
  prefix: string;
}

export const localeMeta: Record<Locale, LocaleMeta> = {
  zh: { nativeLabel: '简体中文', htmlLang: 'zh-CN', hreflang: 'zh-CN', prefix: '' },
  en: { nativeLabel: 'English', htmlLang: 'en', hreflang: 'en', prefix: '/en' },
};

export function isLocale(value: unknown): value is Locale {
  return typeof value === 'string' && (locales as readonly string[]).includes(value);
}

/* ------------------------------------------------------------------ *
 * UI copy
 * ------------------------------------------------------------------ */

const zh = {
  /* brand + navigation */
  'brand.name': 'Theme Atlas',
  'brand.zh': '色谱档案',
  'brand.subtitle': '色谱档案',
  'brand.subtitleEn': 'Colour archive',
  'nav.explore': '浏览',
  'nav.collections': '系列',
  'nav.about': '关于',
  'nav.label': '主导航',
  'header.catalog': '目录',
  'header.catalogLabel': '共 {n} 套主题',
  'header.searchPlaceholder': '搜索主题、颜色或关键词',
  'header.searchLabel': '搜索主题',
  'header.openMenu': '打开菜单',
  'header.closeMenu': '关闭菜单',
  'header.languageLabel': '语言',
  'header.languageSwitch': '切换语言',
  'header.languageCurrent': '当前语言',
  'header.github': 'GitHub',
  'header.githubLabel': '在 GitHub 上查看 Theme Atlas 仓库',

  /* footer */
  'footer.series': '系列',
  'footer.project': '项目',
  'footer.allCollections': '全部系列',
  'footer.about': '关于本站',
  'footer.fanStatement': '同人创作声明',
  'footer.repo': 'GitHub 仓库',
  'footer.issues': '问题反馈',
  'footer.licence': '配色数据以 CC BY 4.0 释出',
  'footer.disclaimer':
    '本站与任何游戏厂商无隶属或授权关系；同人主题均为非官方演绎。',

  /* home — hero */
  'hero.kicker': '色谱档案 · 配色主题库',
  'hero.counts': '{series} 个系列 / {themes} 套主题',
  'hero.title1': 'Every color',
  'hero.title2': 'has a',
  'hero.titleEm': 'story.',
  'hero.lede':
    '从神话、瓷器与虚构世界打捞颜色。每套主题先讲故事，再给出颜色——名字、色值、语义角色与出处都写清楚，复制走就能用。',
  'hero.ctaPrimary': '浏览全部主题',
  'hero.ctaSecondary': '按系列浏览',
  'hero.readoutSeries': '系列',
  'hero.readoutThemes': '主题',
  'hero.readoutRoles': '每套角色',
  'hero.readoutExport': '导出',
  'hero.chartNote': '星图：三个系列节点，悬停或聚焦可查看代表配色',
  'star.nodeLabel': '{title}系列，共 {count} 套主题',

  /* home — sections */
  'section.seriesEyebrow': '系列导航',
  'section.seriesTitle': '三条轨道，三个来源',
  'section.seriesMeta': '导航',
  'section.featuredEyebrow': '精选主题',
  'section.featuredTitle': '先看这三个',
  'section.featuredMeta': '精选',
  'section.catalogEyebrow': '全部主题',
  'section.catalogTitle': '按系列筛选，或直接搜索',
  'section.exportEyebrow': '导出',
  'section.exportTitle': '拿走就能用',
  'section.exportMeta': '适配器',
  'section.themesCount': '{count} 套主题',
  'export.lede':
    '每套主题都带 7 个语义角色。导出时角色会变成变量名，粘贴进任意样式表就能直接用；JSON 还带着出处、授权与配色说明。',
  'export.cssName': 'CSS 变量',
  'export.cssDesc': ':root 变量，含角色注释',
  'export.jsonName': '结构化数据',
  'export.jsonDesc': '色值、角色、来源与授权',
  'export.adapterName': '可插拔适配器',
  'export.adapterDesc': '终端 / 编辑器格式只需新增一个适配器',
  'export.note': 'HEX DATA · {count} 色 · {title}',
  'adapter.css.roles': '语义角色：bg / surface / text / muted / border / accent / onAccent',

  /* series panel */
  'series.code': '系列 {n}',
  'series.themes': '{n} 套主题',
  'series.representative': '代表配色 / {title}',
  'series.rule': '排列规则',
  'series.enter': '进入系列',

  /* library */
  'library.searchPlaceholder': '按名称、灵感、颜色或关键词搜索',
  'library.searchLabel': '搜索主题',
  'library.clearSearch': '清除搜索',
  'library.filterLabel': '按系列筛选主题',
  'library.filterAll': '全部',
  'library.count': '显示 {shown} / {total} 套主题',
  'library.emptyTitle': '没有匹配的主题',
  'library.emptyText':
    '换一个关键词试试，或者看看全部系列。也可以只按颜色名搜索，例如“天青”或“朱砂”。',
  'library.emptyTextEn': 'Try another keyword, or browse every collection.',
  'library.reset': '重置筛选',

  /* theme cards */
  'card.statusVerified': '来源可核验',
  'card.statusInterpretation': '同人演绎',
  'card.statusInterpretationFull': '同人演绎 · 非官方',
  'card.statusDraft': '待补充',
  'rule.symmetry': '中心对称',
  'rule.strata': '釉层分层',
  'rule.luminance': '明度序列',
  'rule.symmetryNote':
    '强调色落在轴心，两侧按与它的明度距离镜像排布——兽面纹的构图逻辑。',
  'rule.strataNote': '由胎体到釉彩逐层叠置，落在最后的是窑火定下的颜色。',
  'rule.luminanceNote': '按相对明度由暗到亮排列，读起来像一段光谱。',

  /* palette */
  'palette.heading': '配色',
  'palette.headingSuffix': ' / PALETTE',
  'palette.meta': 'HEX 数据 · {count} 色 · 7 个角色',
  'palette.metaEn': 'HEX DATA · {count} COLORS · 7 ROLES',
  'palette.keyRole': '关键色',
  'palette.chartLabel': '相对明度',
  'palette.chartHint': '点击色条复制色值',
  'palette.copyAll': '复制整套配色',
  'palette.copyLabel': '复制颜色 {name} {hex}',
  'palette.export': '导出 {format}',
  'palette.role.bg': '背景',
  'palette.role.surface': '面板',
  'palette.role.text': '正文',
  'palette.role.muted': '次要文字',
  'palette.role.border': '分割线',
  'palette.role.accent': '强调',
  'palette.role.onAccent': '强调上文字',
  'palette.copied': '已复制 {hex}',
  'palette.copyFailed': '复制失败，请手动选择 {hex}',
  'palette.copiedAll': '已复制整套配色（{count} 色）',
  'palette.copyAllFailed': '复制失败，请手动选择',
  'palette.exported': '已导出 {file}',

  /* preview */
  'preview.heading': '应用预览',
  'preview.sub': '实时预览',
  'preview.barTitle': '预览',
  'preview.navOverview': '概览',
  'preview.navPalette': '调色',
  'preview.navExport': '导出',
  'preview.navAbout': '关于',
  'preview.eyebrow': '报告',
  'preview.bodyText': '正文使用 {text}，落在背景 {bg} 上；次要说明使用 {muted}。',
  'preview.primary': '主要操作',
  'preview.secondary': '次要操作',
  'preview.field': '输入框 · 占位文字',
  'preview.caption': '分割线使用 {border}，强调元素使用 {accent}。',
  'preview.legend.bg': '页面底色',
  'preview.legend.surface': '卡片与分区',
  'preview.legend.text': '标题与段落',
  'preview.legend.muted': '说明与注释',
  'preview.legend.border': '描边与分隔',
  'preview.legend.accent': '按钮与焦点',
  'preview.legend.onAccent': '按钮内文字',

  /* contrast audit */
  'audit.heading': '对比度校验',
  'audit.pass': 'PASS · WCAG AA',
  'audit.fail': '{count} 项未达标',
  'audit.colPair': '组合',
  'audit.colRatio': '比值',
  'audit.colTarget': '要求',
  'audit.colResult': '结果',
  'audit.passLabel': '通过',
  'audit.failLabel': '未达标',
  'audit.caption': '{title} 的前景与背景对比度检查结果',
  'audit.pair.textBg': '正文 / 背景',
  'audit.pair.mutedBg': '次要文字 / 背景',
  'audit.pair.textSurface': '正文 / 面板',
  'audit.pair.onAccent': '强调色上的文字 / 强调色',
  'audit.pair.accentBg': '强调色 / 背景',
  'audit.pair.borderBg': '分割线 / 背景',
  'audit.note':
    '分割线一项的阈值仅为 1.2:1——它属于装饰性元素，不承载文字信息。其余组合按 WCAG AA 的正文标准（4.5:1）核验。',

  /* theme detail */
  'detail.back': '返回浏览',
  'detail.story': '故事背景',
  'detail.inspiration': '配色灵感来源',
  'detail.rationale': '色彩设计思路',
  'detail.sources': '故事出处与参考',
  'detail.credits': '创作说明与授权',
  'detail.sourceBook': '典籍',
  'detail.sourceArticle': '论文',
  'detail.sourceLink': '链接',
  'detail.sourcePending': '待补充',
  'detail.creditPalette': '配色整理',
  'detail.creditStory': '文本撰写',
  'detail.creditGraphics': '图形绘制',
  'detail.creditLicence': '数据许可',
  'detail.creditImage': '插图授权',
  'detail.creditDisclaimer': '同人声明',
  'detail.disclaimerAside': '本页声明适用于该系列下的全部主题，详见关于页的同人创作声明。',
  'detail.keepBrowsing': '继续浏览',
  'detail.previous': '上一套',
  'detail.next': '下一套',
  'detail.backToAll': '回到全部主题',
  'detail.plateCaption': 'PLATE · {title}',
  'palette.stripLabel': '配色条：{summary}',
  'palette.stripSeparator': '，',
  'plate.label': '{title} 的原创插图，使用本主题自身的颜色绘制',
  'motif.ruyi': '青铜器回纹地纹与兽面装饰图形',
  'motif.glaze': '釉色开片装饰图形',
  'motif.orbit': '星轨轨道装饰图形',
  'star.coreLabel': '核心星体',

  /* collections page */
  'collections.eyebrow': '系列',
  'collections.title': '主题系列',
  'collections.lede':
    '每个系列有自己的取材范围与配色纪律。中国神话靠矿物颜料，瓷器靠釉色的明度关系，同人系列则把虚构世界的光重新推导一遍。',
  'collections.index': '系列 {n}',
  'collections.allEyebrow': '全部',
  'collections.allTitle': '跨系列检索',

  /* about page */
  'about.eyebrow': '关于',
  'about.title': '关于 Theme Atlas',
  'about.sectionWhat': '这是什么',
  'about.sectionPrinciples': '设计原则',
  'about.sectionFan': '同人创作声明',
  'about.sectionLicence': '引用与许可',
  'about.p1':
    'Theme Atlas 是一个配色主题档案库。它把每一个主题当成一份档案来写：先交代故事从哪儿来，再交代颜色从哪儿来，最后才是可以直接复制的色值。第一版收录 {themes} 套示范主题，覆盖 {collections} 个系列。',
  'about.p2':
    '这些主题是可替换的初始数据，不是内容上的终点。主题数据放在独立的数据文件里，与页面组件、与输出格式适配器完全分离，以后要扩到终端主题、编辑器配色或更多工具，改的是适配器而不是数据。',
  'about.principle1':
    '先有故事，再有颜色。每一套主题都能回答“这七个色值是从哪儿来的”，而不只是给出一组好看的十六进制值。',
  'about.principle2':
    '颜色必须有语义。每个色值都标注了角色：背景、面板、正文、次要文字、分割线、强调、强调色上的文字。这样它才能被直接用于界面，而不是只能当装饰。',
  'about.principle3':
    '可核验的才写。故事里的历史事实都配有出处。暂时找不到可靠出处的，在参考列表里标成“待补充”，正文里也会说明这是演绎而不是史实。',
  'about.principle4':
    '克制的视觉。深空底色、细线、大量留白，强调色只用在需要被看见的地方。不堆渐变，不堆圆角卡片，不用装饰性动画；站内全部图形都是为本站绘制的原创 SVG。',
  'about.fanP1':
    '崩坏：星穹铁道系列下的所有主题都是非官方同人演绎，由 Theme Atlas 独立创作，仅用于配色研究与界面演示。',
  'about.fanNote1': '本站与 HoYoverse 无任何隶属、授权或合作关系。',
  'about.fanNote2': '系列内不包含任何官方立绘、Logo、图标、音频或界面素材。',
  'about.fanNote3': '站内图形均为本站重新绘制的原创 SVG，可自由替换。',
  'about.fanNote4':
    '相关主题在页面上标注为“同人演绎 · 非官方”，与中国神话、中国瓷器两个考据型系列明确区分。',
  'about.licenceP1':
    '配色数据以 CC BY 4.0 释出，引用时请注明出处 Theme Atlas。每套主题的具体署名信息写在它自己的详情页底部，故事与出处列表同样随主题一起导出为 JSON。',
  'about.licenceP2':
    '如果你在使用中发现了引用错误、出处存疑或更好的版本，欢迎在 GitHub 仓库里提 issue。',
  'about.repo': '仓库',
  'about.repoNote': '静态站点，部署于 GitHub Pages，无后端与数据库。',
  'about.content': '数据规模',
  'about.contentNote': '每套主题 7 个颜色、7 个语义角色，配参考列表与授权说明。',
  'about.formats': '导出格式',
  'about.formatsNote': '适配器是可插拔的：新增终端或编辑器格式时，只需多写一个适配器。',
  'about.contentValue': '{themes} 套主题 · {collections} 个系列',

  /* 404 */
  'notFound.eyebrow': '404 · 信号丢失',
  'notFound.title': '这个页面不在档案里',
  'notFound.lede': '也许它被重新归档了，或者链接里少了一段。回到档案首页，按名字或颜色找一找。',
  'notFound.home': '回到首页',
  'notFound.browse': '浏览全部主题',

  /* shared */
  'common.externalLink': '在新标签页打开',
  'common.backHome': '回到首页',
};

export type UiKey = keyof typeof zh;

const en: Record<UiKey, string> = {
  'brand.name': 'Theme Atlas',
  'brand.zh': '色谱档案',
  'brand.subtitle': 'Colour archive',
  'brand.subtitleEn': 'Colour archive',
  'nav.explore': 'Explore',
  'nav.collections': 'Collections',
  'nav.about': 'About',
  'nav.label': 'Main navigation',
  'header.catalog': 'Catalog',
  'header.catalogLabel': '{n} themes in total',
  'header.searchPlaceholder': 'Search themes or colours',
  'header.searchLabel': 'Search themes',
  'header.openMenu': 'Open menu',
  'header.closeMenu': 'Close menu',
  'header.languageLabel': 'Language',
  'header.languageSwitch': 'Switch language',
  'header.languageCurrent': 'Current language',
  'header.github': 'GitHub',
  'header.githubLabel': 'View the Theme Atlas repository on GitHub',

  'footer.series': 'Collections',
  'footer.project': 'Project',
  'footer.allCollections': 'All collections',
  'footer.about': 'About',
  'footer.fanStatement': 'Fan-work statement',
  'footer.repo': 'GitHub repository',
  'footer.issues': 'Report an issue',
  'footer.licence': 'Palette data released under CC BY 4.0',
  'footer.disclaimer':
    'This site is not affiliated with or endorsed by any game publisher; fan themes are unofficial interpretations.',

  'hero.kicker': 'Colour theme archive',
  'hero.counts': '{series} collections / {themes} themes',
  'hero.title1': 'Every color',
  'hero.title2': 'has a',
  'hero.titleEm': 'story.',
  'hero.lede':
    'Colours recovered from myth, porcelain and imagined worlds. Every theme tells its story first and hands over the colours second — names, hex values, semantic roles and sources, all written down and ready to copy.',
  'hero.ctaPrimary': 'Browse all themes',
  'hero.ctaSecondary': 'Browse by collection',
  'hero.readoutSeries': 'Collections',
  'hero.readoutThemes': 'Themes',
  'hero.readoutRoles': 'Roles each',
  'hero.readoutExport': 'Export',
  'hero.chartNote':
    'Star chart — three collection nodes; hover or focus a node to preview its palette',
  'star.nodeLabel': '{title} collection, {count} themes',

  'section.seriesEyebrow': 'Collections',
  'section.seriesTitle': 'Three orbits, three sources',
  'section.seriesMeta': 'Navigation',
  'section.featuredEyebrow': 'Featured',
  'section.featuredTitle': 'Start with these three',
  'section.featuredMeta': 'Selected',
  'section.catalogEyebrow': 'Catalogue',
  'section.catalogTitle': 'Filter by collection, or search',
  'section.exportEyebrow': 'Export',
  'section.exportTitle': 'Take it and go',
  'section.exportMeta': 'Adapters',
  'section.themesCount': '{count} themes',
  'export.lede':
    'Every theme carries seven semantic roles. On export the roles become variable names, ready to paste into any stylesheet; the JSON file travels with the sources, the licence and the colour notes.',
  'export.cssName': 'CSS variables',
  'export.cssDesc': ':root variables with role comments',
  'export.jsonName': 'Structured data',
  'export.jsonDesc': 'Values, roles, sources and licence',
  'export.adapterName': 'Pluggable adapters',
  'export.adapterDesc': 'A terminal or editor format is one more adapter',
  'export.note': 'HEX DATA · {count} COLORS · {title}',
  'adapter.css.roles': 'Semantic roles: bg / surface / text / muted / border / accent / onAccent',

  'series.code': 'COLLECTION {n}',
  'series.themes': '{n} themes',
  'series.representative': 'Representative palette / {title}',
  'series.rule': 'Arrangement',
  'series.enter': 'Open collection',

  'library.searchPlaceholder': 'Search by name, inspiration, colour or keyword',
  'library.searchLabel': 'Search themes',
  'library.clearSearch': 'Clear search',
  'library.filterLabel': 'Filter themes by collection',
  'library.filterAll': 'All',
  'library.count': 'Showing {shown} of {total} themes',
  'library.emptyTitle': 'No matching themes',
  'library.emptyText':
    'Try another keyword, or browse every collection. You can also search by colour name, such as “Sky Blue” or “Cinnabar”.',
  'library.emptyTextEn':
    'Try another keyword, or browse every collection. You can also search by colour name, such as “Sky Blue” or “Cinnabar”.',
  'library.reset': 'Reset filters',

  'card.statusVerified': 'Verified sources',
  'card.statusInterpretation': 'Fan interpretation',
  'card.statusInterpretationFull': 'Fan interpretation · unofficial',
  'card.statusDraft': 'Draft',
  'rule.symmetry': 'Centre symmetry',
  'rule.strata': 'Glaze strata',
  'rule.luminance': 'Luminance ramp',
  'rule.symmetryNote':
    'The accent sits on the axis, the rest mirrored by its distance in lightness — the logic of a taotie mask.',
  'rule.strataNote':
    'Layered from body to glaze, with the colour the kiln decided on arriving last.',
  'rule.luminanceNote':
    'Ordered from dark to light by relative luminance, so it reads like a spectrum.',

  'palette.heading': 'Palette',
  'palette.headingSuffix': '',
  'palette.meta': 'HEX DATA · {count} COLORS · 7 ROLES',
  'palette.metaEn': 'HEX DATA · {count} COLORS · 7 ROLES',
  'palette.keyRole': 'Key colour',
  'palette.chartLabel': 'Relative luminance',
  'palette.chartHint': 'Click a bar to copy its hex value',
  'palette.copyAll': 'Copy all colours',
  'palette.copyLabel': 'Copy colour {name} {hex}',
  'palette.export': 'Export {format}',
  'palette.role.bg': 'Background',
  'palette.role.surface': 'Panel',
  'palette.role.text': 'Body text',
  'palette.role.muted': 'Secondary text',
  'palette.role.border': 'Border',
  'palette.role.accent': 'Accent',
  'palette.role.onAccent': 'On accent',
  'palette.copied': 'Copied {hex}',
  'palette.copyFailed': 'Copy failed — select {hex} manually',
  'palette.copiedAll': 'Copied the full palette ({count} colours)',
  'palette.copyAllFailed': 'Copy failed — select the values manually',
  'palette.exported': 'Exported {file}',

  'preview.heading': 'Application preview',
  'preview.sub': 'Live preview',
  'preview.barTitle': 'Preview',
  'preview.navOverview': 'Overview',
  'preview.navPalette': 'Palette',
  'preview.navExport': 'Export',
  'preview.navAbout': 'About',
  'preview.eyebrow': 'Report',
  'preview.bodyText':
    'Body text uses {text} on the {bg} background; secondary notes use {muted}.',
  'preview.primary': 'Primary action',
  'preview.secondary': 'Secondary action',
  'preview.field': 'Input field · placeholder',
  'preview.caption': 'Dividers use {border}; accent elements use {accent}.',
  'preview.legend.bg': 'Page background',
  'preview.legend.surface': 'Cards and sections',
  'preview.legend.text': 'Headings and body',
  'preview.legend.muted': 'Captions and notes',
  'preview.legend.border': 'Outlines and dividers',
  'preview.legend.accent': 'Buttons and focus',
  'preview.legend.onAccent': 'Labels on buttons',

  'audit.heading': 'Contrast audit',
  'audit.pass': 'PASS · WCAG AA',
  'audit.fail': '{count} below target',
  'audit.colPair': 'Pair',
  'audit.colRatio': 'Ratio',
  'audit.colTarget': 'Target',
  'audit.colResult': 'Result',
  'audit.passLabel': 'Pass',
  'audit.failLabel': 'Fail',
  'audit.caption': 'Contrast results for {title}',
  'audit.pair.textBg': 'Body text / background',
  'audit.pair.mutedBg': 'Secondary text / background',
  'audit.pair.textSurface': 'Body text / panel',
  'audit.pair.onAccent': 'Text on accent / accent',
  'audit.pair.accentBg': 'Accent / background',
  'audit.pair.borderBg': 'Border / background',
  'audit.note':
    'Dividers use a threshold of only 1.2:1 — they are decorative and carry no text. Every other pair is checked against the WCAG AA body-text standard of 4.5:1.',

  'detail.back': 'Back to browse',
  'detail.story': 'The story',
  'detail.inspiration': 'Where the colours come from',
  'detail.rationale': 'How the palette was built',
  'detail.sources': 'Sources and references',
  'detail.credits': 'Credits and licence',
  'detail.sourceBook': 'Classic',
  'detail.sourceArticle': 'Article',
  'detail.sourceLink': 'Link',
  'detail.sourcePending': 'Pending',
  'detail.creditPalette': 'Palette',
  'detail.creditStory': 'Text',
  'detail.creditGraphics': 'Graphics',
  'detail.creditLicence': 'Data licence',
  'detail.creditImage': 'Illustration licence',
  'detail.creditDisclaimer': 'Fan-work statement',
  'detail.disclaimerAside':
    'This statement applies to every theme in the collection; see the fan-work statement on the about page.',
  'detail.keepBrowsing': 'Keep browsing',
  'detail.previous': 'Previous',
  'detail.next': 'Next',
  'detail.backToAll': 'Back to all themes',
  'detail.plateCaption': 'PLATE · {title}',
  'palette.stripLabel': 'Palette strip: {summary}',
  'palette.stripSeparator': ', ',
  'plate.label': 'An original illustration for {title}, drawn with the colours of that theme',
  'motif.ruyi': 'Bronze key-fret band and beast-mask motif',
  'motif.glaze': 'Glaze crackle motif',
  'motif.orbit': 'Stellar track orbit motif',
  'star.coreLabel': 'Core body',

  'collections.eyebrow': 'Collections',
  'collections.title': 'Theme collections',
  'collections.lede':
    'Each collection has its own material range and colour discipline. Chinese myth draws on mineral pigments, porcelain on the lightness relationships of glaze, and the fan collection re-derives the light of imagined worlds.',
  'collections.index': 'COLLECTION {n}',
  'collections.allEyebrow': 'All',
  'collections.allTitle': 'Search across collections',

  'about.eyebrow': 'About',
  'about.title': 'About Theme Atlas',
  'about.sectionWhat': 'What this is',
  'about.sectionPrinciples': 'Design principles',
  'about.sectionFan': 'Fan-work statement',
  'about.sectionLicence': 'Citing and licence',
  'about.p1':
    'Theme Atlas is an archive of colour themes. Every theme is written like a record: where the story comes from, then where the colours come from, and only then the values you can copy. This first edition ships {themes} demonstration themes across {collections} collections.',
  'about.p2':
    'These themes are replaceable seed data, not an endpoint. The theme data lives in its own files, fully separated from the page components and from the output-format adapters, so extending the archive to terminal themes, editor colour schemes or other tools means writing an adapter, not rewriting data.',
  'about.principle1':
    'The story comes before the colour. Every theme can answer where its seven values come from — it is not just a pleasing set of hex codes.',
  'about.principle2':
    'Colour must carry meaning. Every value is labelled with a role: background, panel, body text, secondary text, border, accent, and the text that sits on the accent. That is what makes a palette usable in an interface instead of merely decorative.',
  'about.principle3':
    'Only what can be checked gets written down. Historical claims in the stories come with references. Where no reliable source has been found yet, the entry is marked “pending”, and the text says plainly that it is interpretation rather than record.',
  'about.principle4':
    'Restrained visuals. A deep-space ground, hairlines and generous white space; accent colours appear only where something has to be seen. No pile-ups of gradients or rounded cards, no decorative animation, and every graphic on the site is an original SVG drawn for this project.',
  'about.fanP1':
    'Every theme in the Honkai: Star Rail collection is an unofficial fan interpretation, created independently by Theme Atlas for colour research and interface demonstration only.',
  'about.fanNote1': 'This site is not affiliated with, endorsed by or licensed by HoYoverse.',
  'about.fanNote2':
    'The collection contains no official character art, logos, icons, audio or interface assets.',
  'about.fanNote3': 'All graphics are original SVGs redrawn for this site and freely replaceable.',
  'about.fanNote4':
    'Themes in this collection are labelled “fan interpretation · unofficial”, clearly separated from the two research-based collections on Chinese myth and Chinese porcelain.',
  'about.licenceP1':
    'The palette data is released under CC BY 4.0 — please credit Theme Atlas when you reuse it. Each theme lists its own credits at the bottom of its page, and its story and source list travel with the theme in the JSON export.',
  'about.licenceP2':
    'If you find a misattribution, a doubtful source or a better version, please open an issue on the GitHub repository.',
  'about.repo': 'Repository',
  'about.repoNote': 'A static site deployed on GitHub Pages — no backend, no database.',
  'about.content': 'Content',
  'about.contentNote':
    'Seven colours and seven semantic roles per theme, each with a reference list and licence details.',
  'about.formats': 'Export formats',
  'about.formatsNote':
    'Adapters are pluggable: adding a terminal or editor format means writing one more adapter.',
  'about.contentValue': '{themes} themes · {collections} collections',

  'notFound.eyebrow': '404 · Signal lost',
  'notFound.title': 'This page is not in the archive',
  'notFound.lede':
    'It may have been re-filed, or a segment is missing from the link. Head back to the archive and search by name or colour.',
  'notFound.home': 'Back to the home page',
  'notFound.browse': 'Browse all themes',

  'common.externalLink': 'Opens in a new tab',
  'common.backHome': 'Back to the home page',
};

export const ui = { zh, en };

/** Look up a UI string; {placeholders} are replaced by the given values. */
export function t(lang: Locale, key: UiKey, values?: Record<string, string | number>): string {
  const template = ui[lang][key] ?? ui.zh[key];
  if (!values) return template;
  return template.replace(/\{(\w+)\}/g, (match, name: string) =>
    name in values ? String(values[name]) : match,
  );
}
