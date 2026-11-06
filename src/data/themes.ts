import type { Theme } from './types';
import { previewDesigns } from './previewDesigns.ts';
import { promptDesigns } from './promptDesigns.ts';
import { fallbackSyntaxPalette, syntaxPalettes } from './syntaxPalettes.ts';

/**
 * The seed data set. Every theme is a plain object so it can be replaced by a
 * CMS payload or a generated file later without touching the components.
 *
 * Editorial rule used here: nothing is asserted as history unless a
 * reference is listed. Where a claim could not be checked against a source,
 * the source is typed as pending and the text says so.
 */
const themeData: Omit<Theme, 'promptDesign' | 'previewDesign' | 'syntax'>[] = [
  {
    slug: 'pangu-creation',
    title: '盘古 · 开天辟地',
    subtitle: '一斧劈开混沌，清浊从此有了上下',
    collection: 'myth',
    description: '混沌素白与造化天青分开天地，初阳金只落在第一道裂隙上。',
    story:
      '盘古开天的叙事常被追溯到题为三国吴人徐整所作的《三五历纪》。' +
      '原书已佚，今天能够读到的片段赖《艺文类聚》《太平御览》等类书引录而存。' +
      '故事里，天地最初像禽卵一样浑然未分，盘古生于其中；经过漫长岁月，' +
      '阳清上升为天，阴浊下沉为地，世界第一次有了上下、方位与秩序。' +
      '本主题不复刻某幅盘古画像，而是把“分离”本身作为图形核心：一条开界线、' +
      '一团尚未完全散开的混沌，以及裂隙中透出的初阳金。',
    inspiration:
      '月白与青玉色来自清气上升、阴浊沉积的想象，厚土灰与玄冥墨承担大地和正文，' +
      '造化天青用于界面中的主要行动，初阳金作为次强调，只标记开辟瞬间的光。' +
      '河南博物院等公共博物馆资料用于理解早期器物、葬俗与创世图像的材料环境；' +
      '本站图形为原创抽象 SVG，不把博物馆藏品纹样直接搬用为盘古形象。',
    designRationale:
      '浅色底保持蛋壳般的温润，surface 略偏青玉色，使天地两层不靠重阴影也能分开。' +
      '正文使用低饱和深墨，主要强调取沉着天青，初阳金只用于节点与提示。' +
      '语法高亮从同一材料中另取深青、古金、岩绿与陶红色，保证代码层级清楚，却不变成霓虹色板。',
    palette: [
      { name: '混沌素白', hex: '#E9E7DD', role: 'bg', note: '像未分天地的卵白，温润而不刺眼' },
      { name: '清浊青玉', hex: '#D9E1DB', role: 'surface', note: '清气与地层之间的浅青玉面板' },
      { name: '玄冥墨', hex: '#202B2D', role: 'text', note: '混沌深处的正文墨色' },
      { name: '岩青灰', hex: '#536563', role: 'muted', note: '岩层与注释般的次要文字' },
      { name: '开界线', hex: '#BBC7C0', role: 'border', note: '清浊初分时的冷静边界' },
      { name: '造化天青', hex: '#356B78', role: 'accent', note: '主要行动、链接与焦点' },
      { name: '清气白', hex: '#F5F1E7', role: 'onAccent', note: '天青强调色上的文字' },
      { name: '初阳金', hex: '#C69B52', role: 'flare', note: '开天裂隙中第一束光，只作小面积强调' },
    ],
    tags: ['盘古', '开天辟地', '混沌', '清气浊气', '创世'],
    sources: [
      {
        title: '三五历纪',
        type: 'book',
        detail: '题三国吴·徐整；原书已佚，佚文见《艺文类聚》《太平御览》等引录',
        note: '盘古开天、天地混沌及清浊分离叙事的重要文献来源；引用时应说明其为古佚书辑录材料。',
      },
      {
        title: '中国神话',
        type: 'book',
        detail: '袁珂著，人民文学出版社',
        note: '用于理解盘古神话在现代神话学整理中的脉络与不同说法。',
      },
      {
        title: '河南博物院',
        type: 'link',
        url: 'https://www.chnmus.net/',
        detail: '公共博物馆资料入口',
        note: '作为早期中原物质文化与器物语境的公开资料入口；本站未指认或复刻某一件盘古文物。',
      },
      {
        title: '太平御览',
        type: 'book',
        detail: '宋·李昉等编',
        note: '类书保存了《三五历纪》等已佚古籍的片段，需结合辑本核对具体引文。',
      },
    ],
    credits: {
      palette: 'Theme Atlas 编辑部',
      story: 'Theme Atlas 编辑部',
      graphics: 'Theme Atlas（原创 SVG）',
      license: '配色数据以 CC BY 4.0 释出',
      imageLicence: '站内插图为原创 SVG，未使用第三方画像、馆藏图片或影视游戏素材。',
    },
    status: 'verified',
    featured: true,
    plate: 'pangu-genesis',
  },

  {
    slug: 'nuwa-five-stones',
    title: '女娲 · 五色石',
    subtitle: '补天用的那块石头，颜色被写在《淮南子》里',
    collection: 'myth',
    description: '以五色石补天为叙事骨架，用石青与丹赤两种矿物色，在冷白底上做一场安静的平衡。',
    story:
      '《淮南子·览冥训》记女娲炼五色石以补苍天、断鳌足以立四极。' +
      '五色是青、赤、黄、白、黑，对应五方与五德。' +
      '这则故事最有意思的地方在于它的动作：把不完整的天地补成一个完整的形状。' +
      '本主题的界面逻辑也来自这里——大面积的中性冷白承担“天幕”，' +
      '两种饱和色只出现在需要被看见的少数位置上，其余交给留白。',
    inspiration:
      '主色取石青（蓝铜矿 Cu3(CO3)2(OH)2），与青铜时代彩绘中常见的冷蓝一致；' +
      '辅助强调色取丹赤（赤铁矿 Fe2O3 系的赭红）。' +
      '五色中的黄、白、黑没有单独成为强调色，而是被折算进背景、面板与文字三个中性层级里。',
    designRationale:
      '底色是偏冷的灰白，与神话系列中其他偏暖的主题拉开距离；' +
      '面板用一档更冷的青灰，正文用带青调的深墨——整体保持冷调，' +
      '让石青这个唯一的高彩度色更接近“补天石被看见”的瞬间。',
    palette: [
      { name: '苍白', hex: '#EDF0EF', role: 'bg', note: '天幕般的冷灰白' },
      { name: '素玉', hex: '#DCE3E1', role: 'surface', note: '面板底色，冷一档' },
      { name: '玄青', hex: '#18201F', role: 'text', note: '正文，带青调' },
      { name: '黛绿', hex: '#576C69', role: 'muted', note: '次要文字与注释' },
      { name: '玉线', hex: '#BCC9C6', role: 'border', note: '冷调分割线' },
      { name: '石青', hex: '#2C6E8C', role: 'accent', note: '主强调：链接、焦点、按钮' },
      { name: '霜白', hex: '#F4FAFC', role: 'onAccent', note: '强调色之上的文字' },
    ],
    tags: ['昆仑', '五色', '矿物颜料', '冷色', '补天'],
    sources: [
      {
        title: '淮南子',
        type: 'book',
        detail: '西汉·刘安等编著，《览冥训》篇',
        note: '“女娲炼五色石以补苍天”的出处；逐字引文待与中华书局点校本核对。',
      },
      {
        title: '山海经',
        type: 'book',
        detail: '汉代成书，条目来源杂糅',
        note: '可参照其中对昆仑周边山川与神祇的描写，补足五方色彩的空间想象。',
      },
      {
        title: '中国神话',
        type: 'book',
        detail: '袁珂著，人民文学出版社',
        note: '女娲神话的母题梳理与文献溯源。',
      },
      {
        title: '考工记',
        type: 'book',
        detail: '《周礼》篇，战国至汉初成书',
        note: '关于五色、六瑞与画绘用色的古代制度性记载，可与五方对应关系互证。',
      },
    ],
    credits: {
      palette: 'Theme Atlas 编辑部',
      story: 'Theme Atlas 编辑部',
      graphics: 'Theme Atlas（原创 SVG）',
      license: '配色数据以 CC BY 4.0 释出',
      imageLicence: '站内插图为原创 SVG，未使用任何第三方图片。',
    },
    status: 'verified',
  },

  {
    slug: 'xingtian-war-dance',
    title: '刑天 · 干戚不息',
    subtitle: '干戚仍在手中，战舞便没有结束',
    collection: 'myth',
    description: '荒原土色撑住画面，干戚赤是不停止的动作，寒铁青色只落在甲片边缘。',
    story:
      '《山海经·海外西经》记载，刑天与天帝争神，首级被断后葬于常羊之山；' +
      '他仍以乳为目、以脐为口，手持干与戚继续舞蹈。干是盾，戚是斧，' +
      '“操干戚以舞”让这则神话的重点不再停留在战败，而转向一种近乎固执的不息。' +
      '本主题不表现血腥与肢体奇观，也不复刻后世战神画像，只取交叉的盾斧、' +
      '干裂土地和持续旋转的舞势作为视觉结构。',
    inspiration:
      '荒原米色与皮甲褐来自黄土、木质盾牌和旧织物；干戚赤来自战士颜料与祭舞中的赭红；' +
      '寒铁青色用于金属边缘和状态灯般的冷静节点。色彩参考神话文本与古代兵器、' +
      '画像石中的武舞语境，具体 SVG 图形由 Theme Atlas 原创抽象完成。',
    designRationale:
      '为了让抗争主题保持力量而不显得喧哗，背景使用低彩度暖土色，正文取接近焦木的深褐。' +
      '主强调为克制的赤陶红，寒铁青只作辅助色。语法色板在同一暖色底上加入铁青、铜棕和暗紫，' +
      '使代码在战场气质中仍有清楚层级。',
    palette: [
      { name: '荒原素', hex: '#EEE6D7', role: 'bg', note: '常羊山下干燥的浅土色' },
      { name: '皮甲褐', hex: '#DED3BF', role: 'surface', note: '木盾与旧甲片的面板色' },
      { name: '焦木墨', hex: '#292721', role: 'text', note: '正文与主要刻线' },
      { name: '尘戈灰', hex: '#62594E', role: 'muted', note: '尘沙中的次要文字' },
      { name: '裂地线', hex: '#BEB09A', role: 'border', note: '荒原裂纹与模块边界' },
      { name: '干戚赤', hex: '#943F32', role: 'accent', note: '盾斧、行动与焦点的赤陶红' },
      { name: '祭舞白', hex: '#FFF6E9', role: 'onAccent', note: '赤红色上的文字' },
      { name: '寒铁青', hex: '#4E6065', role: 'flare', note: '金属刃缘与少量状态色' },
    ],
    tags: ['刑天', '山海经', '干戚', '战舞', '抗争'],
    sources: [
      {
        title: '山海经 · 海外西经',
        type: 'link',
        url: 'https://ctext.org/shan-hai-jing/hai-wai-xi-jing/zh',
        detail: '中国哲学书电子化计划公开文本',
        note: '刑天与帝争神、断首、葬于常羊之山及“操干戚以舞”等核心叙事的文献依据。',
      },
      {
        title: '山海经',
        type: 'book',
        detail: '古本成书历经长期流传，今有多家校注本',
        note: '具体字词与图像宜结合袁珂等校注本核对，避免把后世画像直接等同于先秦文本。',
      },
      {
        title: '中国神话',
        type: 'book',
        detail: '袁珂著，人民文学出版社',
        note: '用于理解刑天神话在现代中国神话整理中的解释和形象流传。',
      },
      {
        title: '河南博物院',
        type: 'link',
        url: 'https://www.chnmus.net/',
        detail: '公共博物馆资料入口',
        note: '用于查阅古代兵器、器物与中原物质文化语境；本站图形不指向某一件具体藏品。',
      },
    ],
    credits: {
      palette: 'Theme Atlas 编辑部',
      story: 'Theme Atlas 编辑部',
      graphics: 'Theme Atlas（原创 SVG）',
      license: '配色数据以 CC BY 4.0 释出',
      imageLicence: '站内插图为原创 SVG，未使用第三方画像、馆藏图片或影视游戏素材。',
    },
    status: 'verified',
    plate: 'xingtian-shield-dance',
  },

  {
    slug: 'taotie-cinnabar',
    title: '饕餮 · 朱丹',
    subtitle: '青铜礼器上的兽面，与它颈下那一点朱红',
    collection: 'myth',
    description: '青铜的沉静撑住整幅画面，朱砂只用一笔，锋芒就露了出来。',
    story:
      '饕餮之名见于先秦文献，商代晚期到西周早期的青铜礼器上大量出现这种兽面纹，' +
      '巨目、阔口、身躯向两端展开，纹样沿着器壁的曲率铺开，几乎不留下空白。' +
      '它并不温和——那时的纹饰承担的是镇慑与礼仪，是把不可见的秩序钉在可见的器物上。' +
      '本主题把这种“满而有序”的结构翻译成界面：底色是经过岁月氧化的纸，' +
      '图形是克制的线，唯一用力的一笔留给朱砂。',
    inspiration:
      '颜色来自三处可考的实物线索：朱砂（硫化汞 HgS）在汉代画像石与漆器中常见的纯红色；' +
      '石青（蓝铜矿）在青铜器错金银与彩绘中带来的冷蓝；以及器壁缝隙里氧化后残留的土褐。' +
      '纹样本身不直接复刻任何一件具体器物，只保留“兽面 + 回折”的结构逻辑。',
    designRationale:
      '底色刻意压低饱和度（宣纸），让朱砂成为唯一的高彩度锚点；文字色取偏暖的玄墨而非纯黑，' +
      '避免在纸色上显得生硬。石青作为次强调色，主要用于链接与焦点态。' +
      '正文与次要文字的对比度按 WCAG AA 校验，色卡同时标注了每一色的语义角色。',
    palette: [
      { name: '宣纸', hex: '#F2ECDF', role: 'bg', note: '氧化后的纸白，带一点暖灰' },
      { name: '素绢', hex: '#E6DAC3', role: 'surface', note: '面板底色，比背景深一档' },
      { name: '玄墨', hex: '#231D18', role: 'text', note: '正文墨色，暖调而非纯黑' },
      { name: '赭褐', hex: '#6F5D49', role: 'muted', note: '次要说明文字' },
      { name: '灰线', hex: '#CFC1A7', role: 'border', note: '分割线与描边' },
      { name: '朱砂', hex: '#AE3726', role: 'accent', note: '主强调：按钮、链接、焦点' },
      { name: '米白', hex: '#FCF6EA', role: 'onAccent', note: '强调色之上的文字' },
    ],
    tags: ['商周', '青铜器', '纹样', '矿物颜料', '暖色'],
    sources: [
      {
        title: '吕氏春秋',
        type: 'book',
        detail: '秦·吕不韦门客编纂，今本二十六卷',
        note: '《先识》等篇是“饕餮”一词见于先秦文献的重要出处之一，具体引句待逐字校订。',
      },
      {
        title: '说文解字',
        type: 'book',
        detail: '汉·许慎',
        note: '可参照“餮”“飧”等字条理解“贪食”的语义来源。',
      },
      {
        title: '中国神话',
        type: 'book',
        detail: '袁珂著，人民文学出版社',
        note: '梳理古籍中的神怪名号与出处，便于核对形象流传。',
      },
      {
        title: '中国美术五千年',
        type: 'book',
        detail: '杨琪主编',
        note: '青铜器纹样与漆器、帛画的材料与色彩章节。',
      },
      {
        title: '天工开物 · 五金',
        type: 'book',
        detail: '明·宋应星',
        note: '朱砂（硫化汞）的采制与用途记载。',
      },
    ],
    credits: {
      palette: 'Theme Atlas 编辑部',
      story: 'Theme Atlas 编辑部',
      graphics: 'Theme Atlas（原创 SVG）',
      license: '配色数据以 CC BY 4.0 释出',
      imageLicence: '站内插图为原创 SVG，未使用任何第三方图片。',
    },
    status: 'verified',
  },

  {
    slug: 'baize-omens',
    title: '白泽 · 瑞兽图',
    subtitle: '懂得万物名字的那只兽，画在旧绢上',
    collection: 'myth',
    description: '把宋代瑞兽图谱的设色逻辑搬进界面：低彩度绢底、金褐勾线、极少量朱点。',
    story:
      '白泽是传说中的祥瑞之兽，《轩辕本纪》残文说黄帝巡狩时得白泽，' +
      '穷神奸则记白泽之辞。它不打仗，只负责记住世界上所有事物的名字。' +
      '宋代以降，画院常以瑞兽图记录祥瑞：白泽、辟邪、天禄、狻猊，' +
      '用极细的笔触和克制的设色铺在绢本上。' +
      '本主题借用这种记录气质——信息密度高，但每一处都留出呼吸的余地。',
    inspiration:
      '颜色取自绢本设色的常见层次：绢素底、发暗的旧纸面板、墨线勾出的兽形、' +
      '以及铜金与朱砂这类点睛的小面积用色。' +
      '与饕餮主题相比，本套色相更暖、彩度更低，强调色换成古金，避免铜绿与朱砂的重复。',
    designRationale:
      '这是一套低彩度主题：所有中性色之间的明度差都很小，靠细线而不是色块分区。' +
      '古金作为主强调色时只用在链接下划线、焦点环与小型标签上，' +
      '保证它始终是点睛而不是主体。',
    palette: [
      { name: '绢素', hex: '#EFE8D9', role: 'bg', note: '绢本底色，陈而温润' },
      { name: '陈纸', hex: '#E0D6BE', role: 'surface', note: '面板与卡片底' },
      { name: '墨', hex: '#1F1B16', role: 'text', note: '墨线般的正文色' },
      { name: '檀褐', hex: '#6B5F4A', role: 'muted', note: '题跋、注释文字' },
      { name: '帛线', hex: '#C7B99E', role: 'border', note: '绢上界栏的细线' },
      { name: '铜金', hex: '#8A5D27', role: 'accent', note: '点睛：链接、小字号标签与焦点；微调至更可读的古铜色' },
      { name: '素白', hex: '#FBF6EA', role: 'onAccent', note: '强调色之上的文字' },
    ],
    tags: ['瑞兽图', '绢本', '宋画', '低彩度', '金褐'],
    sources: [
      {
        title: '轩辕本纪',
        type: 'book',
        detail: '古史，已散佚，赖类书引录',
        note: '白泽记名之说的出处为辑佚文献，原书已佚，引用需注明辑本。',
      },
      {
        title: '太平御览',
        type: 'book',
        detail: '宋·李昉等编',
        note: '保存了大量已佚古籍的引文，可用于核对《轩辕本纪》片段。',
      },
      {
        title: '中国神话',
        type: 'book',
        detail: '袁珂著，人民文学出版社',
        note: '白泽等祥瑞之兽形象流变的综述。',
      },
      {
        title: '中国美术五千年',
        type: 'book',
        detail: '杨琪主编',
        note: '宋代院体画与绢本设色的材料与技法。',
      },
      {
        title: '宋代瑞兽图谱（器物名目考）',
        type: 'pending',
        note: '待补充：需要确认具体馆藏图册与著录编号后替换本条。',
      },
    ],
    credits: {
      palette: 'Theme Atlas 编辑部',
      story: 'Theme Atlas 编辑部',
      graphics: 'Theme Atlas（原创 SVG）',
      license: '配色数据以 CC BY 4.0 释出',
      imageLicence: '站内插图为原创 SVG，未使用任何第三方图片。',
    },
    status: 'verified',
  },

  {
    slug: 'eight-immortals-crossing',
    title: '八仙 · 各显神通',
    subtitle: '越过同一片海，却不必使用同一种方法',
    collection: 'myth',
    description: '海峤青与渡海金组成八重云浪，法器成为环绕中心的小型符号。',
    story:
      '“八仙过海，各显神通”是在民间传说、戏曲、绘画与小说中逐渐定型的故事群。' +
      '铁拐李、汉钟离、张果老、吕洞宾、何仙姑、蓝采和、韩湘子与曹国舅身份各异，' +
      '渡海时也分别借助葫芦、扇、渔鼓、宝剑、荷花、花篮、笛子与玉板等法器。' +
      '这组故事最适合界面表达的不是热闹人物群像，而是“八个方向、同一目标”的秩序：' +
      '云浪向中心汇合，八种符号保持克制，颜色不按人物拆成八种高饱和色。',
    inspiration:
      '宣纸般的暖白与海雾青绿色来自云海和海潮，松墨承担正文，渡海金只作为法器边缘的微光。' +
      '故宫博物院等公共馆藏资料可用于研究八仙题材在绘画、织物和器物中的造型传统；' +
      '本站不复制具体画作或法器图样，只提炼八重环绕、云浪和器物剪影。',
    designRationale:
      '这是一套浅色、温润但强调结构的主题。海峤青作为主色，渡海金承担小型节点，' +
      '避免八仙主题被处理成八种颜色的拼盘。语法色板以青绿、古金、苔绿、陶赤和靛蓝区分代码，' +
      '同时把正文墨色压稳。',
    palette: [
      { name: '云宣纸', hex: '#F0EBDD', role: 'bg', note: '云海之上的暖白纸色' },
      { name: '海潮白', hex: '#E2E4D8', role: 'surface', note: '浪花与云团的浅面板' },
      { name: '松烟墨', hex: '#24312D', role: 'text', note: '正文与主要线条' },
      { name: '苔岩灰', hex: '#596960', role: 'muted', note: '远处云浪与次要文字' },
      { name: '云浪线', hex: '#C2CABE', role: 'border', note: '低对比海雾边界' },
      { name: '海峤青', hex: '#316B62', role: 'accent', note: '渡海路径、按钮与焦点' },
      { name: '真白', hex: '#FFFFFF', role: 'onAccent', note: '海峤青上的文字' },
      { name: '渡海金', hex: '#B48348', role: 'flare', note: '法器边缘与少量节点光' },
    ],
    tags: ['八仙', '八仙过海', '法器', '云海', '民间传说'],
    sources: [
      {
        title: '东游记',
        type: 'book',
        detail: '明代神魔小说，作者与版本归属有不同说法',
        note: '八仙过海故事在小说、戏曲和民间传说中共同成型；不应把单一文本当作唯一来源。',
      },
      {
        title: '中国神话',
        type: 'book',
        detail: '袁珂著，人民文学出版社',
        note: '用于梳理八仙人物名号及民间神话流传的基本脉络。',
      },
      {
        title: '故宫博物院',
        type: 'link',
        url: 'https://www.dpm.org.cn/',
        detail: '公共博物馆资料入口',
        note: '用于查阅八仙题材在传统绘画、器物与工艺美术中的语境；本站未复刻具体藏品。',
      },
      {
        title: '中国非物质文化遗产网',
        type: 'link',
        url: 'https://www.ihchina.cn/',
        detail: '民间文学与民俗资料入口',
        note: '用于理解八仙传说在地方曲艺、民俗和民间文学中的延续。',
      },
    ],
    credits: {
      palette: 'Theme Atlas 编辑部',
      story: 'Theme Atlas 编辑部',
      graphics: 'Theme Atlas（原创 SVG）',
      license: '配色数据以 CC BY 4.0 释出',
      imageLicence: '站内插图为原创 SVG，未使用第三方古画、馆藏图片或影视素材。',
    },
    status: 'verified',
    plate: 'eight-treasures',
  },

  {
    slug: 'qixi-magpie-bridge',
    title: '七夕 · 银河鹊桥',
    subtitle: '星河有信，一年一度得以相会',
    collection: 'myth',
    description: '深夜河汉蓝托起织机经纬，鹊桥以星点相连，织梭金落在相会处。',
    story:
      '牵牛、织女的早期意象可见于《诗经·小雅·大东》，但诗中的星象与后世完整爱情故事并不完全相同。' +
      '汉魏以后，牛郎织女相会、鹊桥渡银河、七夕乞巧等元素在诗文、民俗与民间传说中逐渐合流。' +
      '本主题不把七夕简化成普通爱心或婚礼图像，而是回到三个更古老的视觉线索：' +
      '银河、织机的经纬，以及由鸟与星点构成的桥。',
    inspiration:
      '夜空蓝与星岩色来自夏末夜空中的河汉带，月纱色写星光与织物，河汉青承担主要路径。' +
      '织梭金只用于少量焦点，模拟金梭穿过经纬时的短促反光。七夕乞巧习俗参考中国非物质文化遗产网等' +
      '公共资料，图形中不出现现代婚庆符号。',
    designRationale:
      '这是中国神话系列中少见的深色主题，因此正文使用高亮月纱色，muted 仍保持 4.5:1 以上。' +
      '边框保持低对比，模拟星雾；主要行动使用河汉青，织梭金作为辅助色。' +
      '语法色板使用浅蓝、淡金、粉白、紫藤等冷色光点，让代码像夜空中的经纬，而不是普通荧光蓝主题。',
    palette: [
      { name: '夜霄', hex: '#151B2B', role: 'bg', note: '七夕深夜的近黑蓝背景' },
      { name: '星岩', hex: '#222D43', role: 'surface', note: '银河深处的面板色' },
      { name: '月纱', hex: '#F0E7DC', role: 'text', note: '月白织物般的正文色' },
      { name: '雾星灰', hex: '#B9B9BD', role: 'muted', note: '远处星雾与说明文字' },
      { name: '天界线', hex: '#435067', role: 'border', note: '星轨和织机的低亮结构线' },
      { name: '河汉青', hex: '#83A9C9', role: 'accent', note: '银河路径、链接与焦点' },
      { name: '深空蓝', hex: '#132033', role: 'onAccent', note: '河汉青上的深色文字' },
      { name: '织梭金', hex: '#D6B879', role: 'flare', note: '金梭与相会节点的微光' },
    ],
    tags: ['七夕', '牛郎织女', '银河', '鹊桥', '乞巧', '织机'],
    sources: [
      {
        title: '诗经 · 小雅 · 大东',
        type: 'link',
        url: 'https://ctext.org/book-of-poetry/da-dong/zh',
        detail: '中国哲学书电子化计划公开文本',
        note: '牵牛、织女星象的早期诗歌来源；不应将后世完整故事情节直接回填到这一阶段。',
      },
      {
        title: '中国非物质文化遗产网',
        type: 'link',
        url: 'https://www.ihchina.cn/',
        detail: '七夕节俗与民间文学资料入口',
        note: '用于查阅七夕乞巧、节庆传承与民间传说资料；具体项目页可随网站栏目更新继续补充。',
      },
      {
        title: '中国神话',
        type: 'book',
        detail: '袁珂著，人民文学出版社',
        note: '用于梳理牵牛织女神话与民间节日合流的大致脉络。',
      },
      {
        title: '荆楚岁时记',
        type: 'book',
        detail: '南朝梁·宗懔',
        note: '传统岁时与七夕乞巧风俗的重要文献之一，具体条目应结合现代校注本阅读。',
      },
    ],
    credits: {
      palette: 'Theme Atlas 编辑部',
      story: 'Theme Atlas 编辑部',
      graphics: 'Theme Atlas（原创 SVG）',
      license: '配色数据以 CC BY 4.0 释出',
      imageLicence: '站内插图为原创 SVG，未使用第三方古画、摄影或节庆图片。',
    },
    status: 'verified',
    plate: 'qixi-bridge',
  },

  {
    slug: 'nezha-lotus-flame',
    title: '哪吒 · 莲火重生',
    subtitle: '莲花重塑身形，风火轮仍向前旋转',
    collection: 'myth',
    description: '莲瓣白与莲火赤构成重生结构，海潮青压住风火轮的速度。',
    story:
      '在《封神演义》的常见叙事中，哪吒经历剔骨还父、莲花化身等情节，' +
      '之后又以乾坤圈、混天绫与风火轮等鲜明物件重新行动。' +
      '哪吒形象并非从一开始就是今天熟悉的少年战神：其名号和护法元素可追溯到佛教文献中的那吒，' +
      '后经历代宗教、小说、戏曲与民间信仰不断重塑。本主题以明代以来小说中最有辨识度的' +
      '莲花、火轮、绫带与圈环为视觉依据，不借用任何影视或动画造型。',
    inspiration:
      '莲瓣白与绯云粉来自花瓣和供果的暖色，莲火赤表现风火轮与混天绫，海潮青对照传统叙事中的' +
      '东海与水浪。本站不绘制角色，不使用火尖枪等影视化 pose，只以原创几何线条呈现花瓣、' +
      '轮环、绫带和水火相济的结构。',
    designRationale:
      '高饱和莲火红被限制为强调色，避免整页只剩火焰感；浅色暖底让莲花气质更温润。' +
      '海潮青作为辅助色形成冷暖张力。语法色板把莲火红、海蓝、陶金和紫玫分开，' +
      '使代码示例既能呼应主题，也保持成熟编辑器所需的层级。',
    palette: [
      { name: '莲瓣白', hex: '#F4E8E2', role: 'bg', note: '莲瓣与暖玉般的浅底色' },
      { name: '绯云粉', hex: '#E8D5CE', role: 'surface', note: '混天绫扫过的浅粉面板' },
      { name: '玄墨', hex: '#2E2224', role: 'text', note: '稳定画面的深色正文' },
      { name: '紫砂灰', hex: '#6D5354', role: 'muted', note: '陶土与暗莲色的次要文字' },
      { name: '绫边线', hex: '#CFB4AA', role: 'border', note: '柔软织物般的边界线' },
      { name: '莲火赤', hex: '#B63B2F', role: 'accent', note: '风火轮、行动与主要焦点' },
      { name: '真火白', hex: '#FFF5EC', role: 'onAccent', note: '莲火赤上的文字' },
      { name: '海潮青', hex: '#2E6A80', role: 'flare', note: '海水、对照与少量冷色焦点' },
    ],
    tags: ['哪吒', '莲花化身', '风火轮', '混天绫', '封神演义'],
    sources: [
      {
        title: '封神演义',
        type: 'link',
        url: 'https://zh.wikisource.org/zh-hans/%E5%B0%81%E7%A5%9E%E6%BC%94%E7%BE%A9',
        detail: '维基文库公开文本入口',
        note: '用于核对莲花化身、乾坤圈、混天绫和风火轮等小说叙事中的常见形象体系。',
      },
      {
        title: '三教源流搜神大全',
        type: 'book',
        detail: '明代宗教与民间神祗图像文献汇编，版本较多',
        note: '有助于理解哪吒形象在小说定型前后的宗教与民间信仰来源。',
      },
      {
        title: '中国神话',
        type: 'book',
        detail: '袁珂著，人民文学出版社',
        note: '用于梳理哪吒形象从佛教护法因素到小说人物的历史演变。',
      },
      {
        title: '故宫博物院',
        type: 'link',
        url: 'https://www.dpm.org.cn/',
        detail: '公共博物馆资料入口',
        note: '用于参考传统器物、织物和绘画中的莲花、云纹、水浪等视觉语汇；未复刻任何藏品。',
      },
    ],
    credits: {
      palette: 'Theme Atlas 编辑部',
      story: 'Theme Atlas 编辑部',
      graphics: 'Theme Atlas（原创 SVG）',
      license: '配色数据以 CC BY 4.0 释出',
      imageLicence: '站内插图为原创 SVG，未使用影视、动画、游戏或馆藏图片素材。',
    },
    status: 'verified',
    plate: 'nezha-lotus-wheel',
  },

  {
    slug: 'yangjian-celestial-eye',
    title: '杨戬 · 天眼照彻',
    subtitle: '天眼睁开，云气与山脊都无所遁形',
    collection: 'myth',
    description: '冷色金属线与天眼蓝构成精准构图，金甲金只落在聚焦的一瞬。',
    story:
      '二郎神信仰在不同文献、戏曲和民间崇拜中有复杂流变。' +
      '《西游记》中的二郎显圣真君曾与孙悟空斗法，《封神演义》中的杨戬则以八九玄功、' +
      '三尖两刃刀和哮天犬等元素广为人知；此外还有《二郎宝卷》等民间宗教文本。' +
      '这些传统不能被简单压缩成一个统一版本。本主题选取后世通俗叙事中最稳定的视觉线索：' +
      '天眼、山岳云气、三尖两刃刀的中轴，以及冷静照察的目光。',
    inspiration:
      '云岭白与寒玉蓝来自山间雾气和冷金属，玄蓝墨作正文，天眼青蓝是唯一明确光束。' +
      '金甲金用于刀环、甲片和聚焦点，避免整套主题变成普通蓝白配色。图形为本站原创抽象 SVG，' +
      '不使用影视、游戏或寺观塑像中的杨戬造型。',
    designRationale:
      '整体采用高 KEY 浅色冷调，muted 调到足以通过小字 AA 的蓝灰。' +
      '边框像云气和测量线，保持低干扰；天眼蓝承担按钮、链接和焦点，金色只作少量裁决提示。' +
      '语法色板在冷蓝、古金、海绿和暗红之间分区，使代码精准而不单调。',
    palette: [
      { name: '云岭白', hex: '#E8EDF1', role: 'bg', note: '高山云气后的冷白背景' },
      { name: '寒玉蓝', hex: '#D7E0E7', role: 'surface', note: '冷玉与金属反光的面板' },
      { name: '玄蓝墨', hex: '#1D2934', role: 'text', note: '山脊和正文的深蓝墨' },
      { name: '远岫灰', hex: '#536472', role: 'muted', note: '远山、云气与次要文字' },
      { name: '云界银线', hex: '#B9C7D1', role: 'border', note: '冷静的测量线和轮廓线' },
      { name: '天眼青蓝', hex: '#426887', role: 'accent', note: '天眼、行动与主要焦点' },
      { name: '天光白', hex: '#F8FBFD', role: 'onAccent', note: '天眼蓝上的文字' },
      { name: '金甲金', hex: '#9E8958', role: 'flare', note: '甲片、刀环与裁决节点' },
    ],
    tags: ['杨戬', '二郎神', '天眼', '三尖两刃刀', '山岳'],
    sources: [
      {
        title: '西游记',
        type: 'link',
        url: 'https://zh.wikisource.org/zh-hans/%E8%A5%BF%E9%81%8A%E8%A8%98',
        detail: '维基文库公开文本入口',
        note: '二郎显圣真君与孙悟空斗法等通俗叙事来源之一；与《封神演义》中的杨戬形象需分开阅读。',
      },
      {
        title: '封神演义',
        type: 'link',
        url: 'https://zh.wikisource.org/zh-hans/%E5%B0%81%E7%A5%9E%E6%BC%94%E7%BE%A9',
        detail: '维基文库公开文本入口',
        note: '杨戬、三尖两刃刀及相关神魔叙事的重要通俗文学来源。',
      },
      {
        title: '二郎宝卷',
        type: 'book',
        detail: '明代民间宗教文本，存世版本与整理本需另行核对',
        note: '用于提示二郎信仰还包含民间宗教脉络，不能只依据小说版本解释全部形象。',
      },
      {
        title: '故宫博物院',
        type: 'link',
        url: 'https://www.dpm.org.cn/',
        detail: '公共博物馆资料入口',
        note: '用于参考传统甲胄、山纹、云纹和金属器物语汇；本站未复刻任何具体藏品或造像。',
      },
    ],
    credits: {
      palette: 'Theme Atlas 编辑部',
      story: 'Theme Atlas 编辑部',
      graphics: 'Theme Atlas（原创 SVG）',
      license: '配色数据以 CC BY 4.0 释出',
      imageLicence: '站内插图为原创 SVG，未使用影视、游戏、造像或馆藏图片素材。',
    },
    status: 'verified',
    plate: 'yangjian-eye',
  },

  {
    slug: 'qitian-pojie',
    title: '齐天 · 破界',
    subtitle: '一身石骨，一棒问天。',
    collection: 'myth',
    description: '石胎的灰、玄铁的沉、金箍的金与烈焰的朱，在云海的冷白里交汇。',
    story:
      '从仙石迸裂的一刻开始，孙悟空便不甘只做天地间被安排的位置。' +
      '花果山的石、龙宫的铁、披挂上的金，以及那面写着「齐天大圣」的旗，' +
      '共同构成这套配色的灵感。' +
      '这里不复刻任何影视、动画或游戏里的形象，而是从《西游记》的文字意象出发，' +
      '重新组织石灰、玄铁、紫金与烈焰朱——让桀骜与自由成为可以被看见的颜色。',
    inspiration:
      '颜色分别对应文本里可辨认的几件物：花果山受日月精华的仙石（山石灰）、' +
      '东海龙宫兵器库里那根铁棒与棒上的金箍（玄铁与紫金）、' +
      '大圣的冠甲（紫金）、腾云时脚下翻涌的筋斗云（冷白）。' +
      '那面写着「齐天大圣」的旗不直接对应某一个色值，它提供的是态度：僭越。' +
      '烈焰朱是 Theme Atlas 为「锋芒与行动」另补的一笔——原文并未写明旗子的颜色，' +
      '这里取的是破界而出的动势，而不是复述。' +
      '这些色值由 Theme Atlas 依据文字意象独立推导，' +
      '不是任何影视、动画或游戏改编物的官方标准色。',
    designRationale:
      '底色交给玄铁，正文取筋斗云般的冷白，次要文字与注释用天阙青——' +
      '它在最初的设想里是更沉的蓝灰，取到 #86A6B8 这一档，' +
      '是为了让小字在深底上仍然达到 WCAG AA 的对比度。' +
      '山石作为分割线与描边，勾出像山岩一样硬朗的结构；' +
      '紫金是主强调色，写在按钮、链接与焦点环上；' +
      '烈焰朱只作次强调出现——火焰、警示、需要被看见的一瞬，不参与大面积铺陈。' +
      '强调色之上的文字沿用玄铁，也就是与底色同源，这正是这块金最合适的底色。',
    palette: [
      { name: '玄铁', hex: '#292D36', role: 'bg', note: '深色基础：兵器的沉与冷硬，也是强调色之上的文字色' },
      { name: '花果山褐', hex: '#785940', role: 'surface', note: '面板与分区底色，泥土与树皮的暖褐' },
      { name: '筋斗云', hex: '#DDE5E8', role: 'text', note: '正文与标题，冷白里留出呼吸' },
      { name: '天阙青', hex: '#86A6B8', role: 'muted', note: '次要文字与注释；取 #58788A 的浅一档以通过 AA' },
      { name: '山石', hex: '#817A6E', role: 'border', note: '分割线与描边，仙石与山岩的中性灰' },
      { name: '紫金', hex: '#D9AF50', role: 'accent', note: '主强调：按钮、链接、焦点，冠甲与金箍的金' },
      { name: '烈焰朱', hex: '#C74B36', role: 'flare', note: '次强调：火星、警示与需要被看见的一瞬' },
    ],
    tags: ['孙悟空', '齐天大圣', '金箍棒', '石猴', '祥云', '破界'],
    sources: [
      {
        title: '西游记 · 第一回',
        type: 'link',
        detail: '维基文库公开文本',
        url: 'https://zh.wikisource.org/zh-hans/%E8%A5%BF%E9%81%8A%E8%A8%98/%E7%AC%AC001%E5%9B%9E',
        note: '仙石迸裂、石卵化猴与花果山群猴拥立的段落，是「石胎」这一意象的出处。',
      },
      {
        title: '西游记 · 第三回',
        type: 'link',
        detail: '维基文库公开文本',
        url: 'https://zh.wikisource.org/zh-hans/%E8%A5%BF%E9%81%8A%E8%A8%98/%E7%AC%AC003%E5%9B%9E',
        note:
          '东海龙王以定海神针相赠，孙悟空取为如意金箍棒：棒身是铁，' +
          '两头各箍着一道金环，棒上还刻着「如意金箍棒一万三千五百斤」。' +
          '玄铁与紫金并置的出处。',
      },
      {
        title: '西游记 · 第四回',
        type: 'link',
        detail: '维基文库公开文本',
        url: 'https://zh.wikisource.org/zh-hans/%E8%A5%BF%E9%81%8A%E8%A8%98/%E7%AC%AC004%E5%9B%9E',
        note: '「就做个齐天大圣有何不可」、旗上写「齐天大圣」四大字，以及金甲与金冠的描写。',
      },
      {
        title: '西游记',
        type: 'book',
        detail: '明 · 吴承恩（署名传统，作者归属学界仍有讨论）',
        note: '本主题所引意象均取自小说正文，不取自评书、戏曲或影视改编。',
      },
      {
        title: '金工与颜料的对应出处（待补充）',
        type: 'pending',
        note: '待补充：紫金与烈焰朱同具体矿物、工艺的对应关系，尚需逐条查证后再替换本条。',
      },
    ],
    credits: {
      palette: 'Theme Atlas 编辑部（原创配色演绎）',
      story: 'Theme Atlas 编辑部',
      graphics: 'Theme Atlas（原创 SVG）',
      license: '配色数据以 CC BY 4.0 释出',
      imageLicence: '站内插图为原创 SVG，未使用任何第三方图片或游戏美术资源。',
    },
    status: 'verified',
    plate: 'staff',
  },

  {
    slug: 'ru-ware-sky',
    title: '汝窑 · 雨过天青',
    subtitle: '雨过之后那一点说不清的蓝，出窑才定',
    collection: 'porcelain',
    description: '釉色一层层积起来，温润、克制，彼此不争。',
    story:
      '汝窑窑场在北宋晚期为宫廷烧造贡瓷，烧造时间不长，器物以天青、天蓝、淡青等釉色见长。' +
      '宋人形容雨后天色云破处的那种青，此后成了这类瓷器最常被引用的颜色意象。' +
      '关于玛瑙入釉，旧有文献与后世研究常把它作为汝窑釉色的一种说法；' +
      '胎釉配方和烧成工艺仍有讨论空间，因此不宜把单一解释当成已经证实的唯一结论。' +
      '釉层、胎色与窑火共同影响最终呈色，本主题把这种细微而不确定的变化保留为柔和的层次。',
    inspiration:
      '四个层级直接对应器物：月白（底釉最薄处）、粉青（积釉处）、天青（主釉色）、香灰（胎骨露胎处）。' +
      '强调色取比主釉更深一档的天青，在保留釉色气质的同时，让链接和焦点在浅色底上清楚可见。',
    designRationale:
      '系列整体保持低饱和与窄明度层次，但正文、次要文字和强调色都留有足够对比。' +
      '分割线使用略深的青灰，让柔和的版面仍有清楚边界；主按钮上的文字与强调色同步校验。',
    palette: [
      { name: '月白', hex: '#EDF1EE', role: 'bg', note: '釉最薄处的白' },
      { name: '粉青', hex: '#DCE7E3', role: 'surface', note: '积釉处，粉调偏绿' },
      { name: '墨玉', hex: '#1E2422', role: 'text', note: '带青的深墨' },
      { name: '苍青灰', hex: '#5A6A66', role: 'muted', note: '次要文字' },
      { name: '青灰线', hex: '#BECAC6', role: 'border', note: '细分割线' },
      { name: '天青', hex: '#426D72', role: 'accent', note: '主釉色的加深值，链接与焦点' },
      { name: '天青白', hex: '#F6FBFB', role: 'onAccent', note: '强调色之上的文字' },
    ],
    tags: ['北宋', '贡瓷', '釉色', '天青', '汝窑'],
    sources: [
      {
        title: '汝窑',
        type: 'link',
        url: 'https://www.dpm.org.cn/lemmas/239400.html',
        detail: '故宫博物院陶瓷资料',
        note: '用于核对汝窑为宫廷烧造贡瓷的年代、器形与主要釉色描述。',
      },
      {
        title: '清凉寺窑出土汝官瓷与民汝青瓷胎釉配方及工艺的对比研究',
        type: 'article',
        url: 'https://www.dpm.org.cn/journal/247133.html',
        detail: '故宫博物院期刊文章',
        note: '用于理解胎釉配方和工艺研究中的证据边界；主题中的玛瑙入釉明确作为流传说法处理。',
      },
      {
        title: '中国陶瓷史',
        type: 'book',
        detail: '冯先铭著',
        note: '宋代各名窑的烧造年代、釉料与工艺背景。',
      },
      {
        title: '饮流斋说瓷',
        type: 'book',
        detail: '清·寂园叟（陈浏）',
        note: '清人论瓷名著，记录了明清时期对汝窑、钧窑釉色的描述与品评。',
      },
      {
        title: '陶雅',
        type: 'book',
        detail: '清·陈介祺',
        note: '以器物形制与釉色著录名窑，可比对雨过天青一类描述的流传。',
      },
    ],
    credits: {
      palette: 'Theme Atlas 编辑部',
      story: 'Theme Atlas 编辑部',
      graphics: 'Theme Atlas（原创 SVG）',
      license: '配色数据以 CC BY 4.0 释出',
      imageLicence: '站内插图为原创 SVG，未使用任何第三方图片。',
    },
    status: 'verified',
    featured: true,
  },

  {
    slug: 'jun-ware-violet',
    title: '钧窑 · 玫瑰紫',
    subtitle: '窑变不可控，于是每一窑都是孤品',
    collection: 'porcelain',
    description: '钧窑窑变紫与海棠红的配色，气势张扬，但被米白底与藕荷面板稳稳托住。',
    story:
      '钧窑在宋代以入窑一色、出窑万彩著称。' +
      '铜元素在还原焰里析出，颜色随窑位、胎厚、釉层深浅变化：' +
      '有玫瑰紫、海棠红、蚯蚓走泥纹，也有蓝灰与米黄。' +
      '这种不可控是它的魅力，也是它的难题——因为界面需要的是可预期。' +
      '本主题的做法是把不可控的部分留在故事里，留在配色表的中间两格；' +
      '真正用于界面的，是那些被驯服过的层。',
    inspiration:
      '底色取窑变中偏米黄的一端（常见于钧釉在边缘的过渡），' +
      '面板取带紫的藕荷色，主强调色取玫瑰紫的一档加深值。' +
      '海棠红不作为强调色，而是用于卡片顶部的一小段渐隐。',
    designRationale:
      '这是瓷器系列里唯一带明显紫调的一套，因此底色必须保持足够的中性——' +
      '米白与藕荷把紫夹在中间，界面才不会整体发闷。' +
      '正文使用带紫的深墨而不是纯黑，让文字和面板属于同一个色系。',
    palette: [
      { name: '米白', hex: '#EFE9DC', role: 'bg', note: '窑变偏黄的一端' },
      { name: '藕荷', hex: '#DFD1CE', role: 'surface', note: '带紫的浅面板底' },
      { name: '墨紫', hex: '#241B23', role: 'text', note: '带紫调的深墨' },
      { name: '灰紫', hex: '#68576A', role: 'muted', note: '次要文字' },
      { name: '陶线', hex: '#C6B7AC', role: 'border', note: '陶土色分割线' },
      { name: '玫瑰紫', hex: '#7C4368', role: 'accent', note: '窑变紫的加深值' },
      { name: '藕白', hex: '#FBF3F1', role: 'onAccent', note: '强调色之上的文字' },
    ],
    tags: ['宋代', '钧窑', '窑变', '玫瑰紫', '釉'],
    sources: [
      {
        title: '中国陶瓷史',
        type: 'book',
        detail: '冯先铭著',
        note: '钧窑的烧造技术、铜红呈色机理与窑址情况。',
      },
      {
        title: '饮流斋说瓷',
        type: 'book',
        detail: '清·寂园叟（陈浏）',
        note: '对窑变与紫釉的记载与品评语汇。',
      },
      {
        title: '陶雅',
        type: 'book',
        detail: '清·陈介祺',
        note: '钧窑器物著录与釉色名目。',
      },
    ],
    credits: {
      palette: 'Theme Atlas 编辑部',
      story: 'Theme Atlas 编辑部',
      graphics: 'Theme Atlas（原创 SVG）',
      license: '配色数据以 CC BY 4.0 释出',
      imageLicence: '站内插图为原创 SVG，未使用任何第三方图片。',
    },
    status: 'verified',
  },

  {
    slug: 'longquan-meizi-green',
    title: '龙泉窑 · 梅子青',
    subtitle: '青釉层层积起，像一块被窑火温养的青玉。',
    collection: 'porcelain',
    description: '梅子青与粉青在厚釉中层层过渡，浅色出筋只勾出器物的转折。',
    story:
      '南宋时期，龙泉窑烧制的粉青与梅子青成为青瓷的重要代表。' +
      '梅子青通常呈现更深、更绿的釉色，粉青则更偏柔和浅淡；' +
      '两者都不是一块均匀的平面，而会在器物转折、积釉和出筋处显出不同的厚度与光泽。' +
      '本主题不把青瓷理解成一片植物绿，而是从三足炉这类器形中提取“厚釉、积层、露胎白线”的结构：' +
      '深青承担主要行动，浅青作为面板，白色只出现在刻线与高光上。',
    inspiration:
      '背景和面板取自粉青釉的薄层，强调色取梅子青较深的一档，' +
      '次要文字与边框对应积釉阴影和露胎处的青灰。' +
      '故宫博物院所藏青釉鬲式三足炉提供了“凸起棱线因釉薄而显出浅白”的材料线索；' +
      '上海博物馆的藏品资料用于补充龙泉青瓷的器形与釉色语境。本站图形不复制任何具体器物。',
    designRationale:
      '整组颜色压低彩度，靠青绿深浅而不是高饱和色制造层次。' +
      '正文保持深青色，链接和按钮使用更深的梅子青，釉面高光留给细线与小节点。' +
      '语法色盘另取深青、松绿、古铜与青灰，避免所有代码 token 都落进同一片绿色。',
    palette: [
      { name: '粉青薄釉', hex: '#EEF1E8', role: 'bg', note: '粉青釉较薄处的浅色' },
      { name: '梅子青积釉', hex: '#DCE5D7', role: 'surface', note: '釉层积聚后的浅青绿面板' },
      { name: '青瓷深墨', hex: '#202B25', role: 'text', note: '带青绿的正文深色' },
      { name: '龙泉青灰', hex: '#5C6B60', role: 'muted', note: '积釉阴影中的次要文字' },
      { name: '出筋线', hex: '#BAC8BA', role: 'border', note: '釉薄处与器物轮廓的冷静边界' },
      { name: '梅子青', hex: '#3F705B', role: 'accent', note: '深青釉色，用于链接、按钮与焦点' },
      { name: '釉光白', hex: '#F8FAF4', role: 'onAccent', note: '梅子青强调色上的文字' },
    ],
    tags: ['龙泉窑', '南宋', '梅子青', '粉青', '青瓷', '积釉', '刻花'],
    sources: [
      {
        title: '龙泉窑青釉鬲式三足炉',
        type: 'link',
        url: 'https://www.dpm.org.cn/collection/ceramic/226877.html',
        detail: '故宫博物院藏品资料',
        note: '记录梅子青釉色、三足炉器形及凸起棱线因釉薄而呈浅白色的出筋效果。',
      },
      {
        title: '上海博物馆藏品资料',
        type: 'link',
        url: 'https://www.shanghaimuseum.net/mu/frontend/pg/m/article/id/CI00004028',
        detail: '上海博物馆公共藏品入口',
        note: '用于补充龙泉青瓷的公共馆藏与器形语境；本站主视觉为原创抽象图形。',
      },
      {
        title: '中国陶瓷史',
        type: 'book',
        detail: '冯先铭著',
        note: '用于理解南宋龙泉窑分期、粉青与梅子青的工艺背景。',
      },
      {
        title: '饮流斋说瓷',
        type: 'book',
        detail: '清·寂园叟（陈浏）',
        note: '用于查阅后世对龙泉青釉与梅子青名目的品评语汇。',
      },
    ],
    credits: {
      palette: 'Theme Atlas 编辑部',
      story: 'Theme Atlas 编辑部',
      graphics: 'Theme Atlas（原创 SVG）',
      license: '配色数据以 CC BY 4.0 释出',
      imageLicence: '站内插图为原创 SVG，未复刻任何具体藏品或馆藏图片。',
    },
    status: 'verified',
    plate: 'longquan-meizi',
  },

  {
    slug: 'jingdezhen-blue-white',
    title: '景德镇 · 青花',
    subtitle: '钴料在白瓷上画出来的蓝，越白越蓝',
    collection: 'porcelain',
    description: '苏麻离青的深沉与影青白瓷的干净，配一组带蓝调的中性色，是最像工具的瓷器主题。',
    story:
      '元代景德镇烧出成熟青花时，用的是一种含铁量高的进口钴料，' +
      '在釉下积聚成黑褐色的斑点，俗称铁锈斑或锡光。' +
      '钴料贵、窑火难控，所以一只好的元青花从来不是理性的产物。' +
      '明代以后本土钴料登场，颜色转向偏灰的平等青、回青，' +
      '青花因此从一种珍稀材料变成了一种可复制的图像语言。' +
      '本主题取的是后者的气质：清晰的蓝白关系，用在需要长时间注视的工作界面里最合适不过。',
    inspiration:
      '背景取影青白（略带青的瓷白），面板取青白釉的暗一档，' +
      '强调色取青花分水的深钴蓝。正文色带蓝调而不是中性黑，' +
      '这样整块屏幕读起来更像一张瓷片而不是一块屏幕。',
    designRationale:
      '这套的对比度是瓷器系列里最高的，正文与背景的明度差接近 90%，' +
      '长时间阅读不费力。分割线用了偏蓝的灰，避免在冷白底上显脏。' +
      '语法色盘把钴蓝、赭红、紫灰与灰青分开，青花纹样只留在主视觉，不进入代码阅读区。',
    palette: [
      { name: '影青白', hex: '#ECF0F2', role: 'bg', note: '影青瓷的白，带一点青' },
      { name: '青釉', hex: '#DAE2E8', role: 'surface', note: '面板底色' },
      { name: '墨蓝', hex: '#151B23', role: 'text', note: '带蓝调的深墨' },
      { name: '靛灰', hex: '#54606F', role: 'muted', note: '次要文字' },
      { name: '青白线', hex: '#B7C2CC', role: 'border', note: '偏蓝的分割线' },
      { name: '青花', hex: '#2B4A7C', role: 'accent', note: '深钴蓝，链接与焦点' },
      { name: '影白', hex: '#F3F8FC', role: 'onAccent', note: '强调色之上的文字' },
    ],
    tags: ['元青花', '钴料', '景德镇', '冷色', '工具感'],
    sources: [
      {
        title: '中国陶瓷史',
        type: 'book',
        detail: '冯先铭著',
        note: '景德镇各历史时期的瓷业与青花分期。',
      },
      {
        title: '饮流斋说瓷',
        type: 'book',
        detail: '清·寂园叟（陈浏）',
        note: '青花发色与苏麻离青铁锈斑的历代品评记录。',
      },
      {
        title: '陶雅',
        type: 'book',
        detail: '清·陈介祺',
        note: '青花器的分水与笔法著录。',
      },
      {
        title: '天工开物 · 粹官（制瓷）',
        type: 'book',
        detail: '明·宋应星',
        note: '明代景德镇制瓷工序与青料使用的记载。',
      },
    ],
    credits: {
      palette: 'Theme Atlas 编辑部',
      story: 'Theme Atlas 编辑部',
      graphics: 'Theme Atlas（原创 SVG）',
      license: '配色数据以 CC BY 4.0 释出',
      imageLicence: '站内插图为原创 SVG，未使用任何第三方图片。',
    },
    status: 'verified',
  },

  {
    slug: 'dehua-china-white',
    title: '德化 · 中国白',
    subtitle: '白不止一种颜色，光落在釉面上便有了温度。',
    collection: 'porcelain',
    description: '象牙白、乳白与背光处的灰白组成柔和的白色层次，让器形和浮雕接过视觉重心。',
    story:
      '德化窑以烧制白瓷著称。宋元时期已烧青白瓷，明代以白瓷为主，' +
      '釉色温润莹亮，胎与釉的观感接近一体；人物塑像、炉、尊、壶等器形都留下了丰富的工艺传统。' +
      '传统上有象牙白、猪油白等称呼，欧洲收藏与研究语境中也以“中国白”指称这类德化白瓷。' +
      '本主题不把白理解成一个纯白值，而是把迎光处、釉面反射与背光阴影拆成有温度的三层。',
    inspiration:
      '底色取略暖的瓷胎象牙白，面板取釉层转折处的乳白，正文使用偏暖的深墨。' +
      '强调色不是高饱和金，而是釉面阴影里略带褐调的旧金，避免破坏白瓷安静的整体感。' +
      '故宫博物院与国家博物馆的公开资料用于确认德化白瓷的器类、白色称谓与展陈语境；' +
      '本站器物轮廓与浮雕均为原创抽象图形，不对应某一馆藏件。',
    designRationale:
      '整页避免纯白背景与纯白器物的直接叠加，浅暖色之间靠明度和轻微色温差区分。' +
      '链接和按钮使用比正文更暖的胎骨褐，强调色在浅底上仍有清楚轮廓。' +
      '语法色盘采用暖墨、胎骨褐、石灰蓝与旧金，既延续白瓷温度，也让关键字、字符串和注释容易分辨。',
    palette: [
      { name: '象牙白', hex: '#F2EFE7', role: 'bg', note: '温润的瓷胎底色' },
      { name: '乳白釉', hex: '#E7E1D6', role: 'surface', note: '釉面受光后的柔和面板' },
      { name: '暖胎墨', hex: '#2D2925', role: 'text', note: '带暖调的正文深色' },
      { name: '阴影灰褐', hex: '#665F56', role: 'muted', note: '背光与浅浮雕中的次要文字' },
      { name: '胎骨线', hex: '#CEC5B8', role: 'border', note: '胎骨与釉面转折的低亮边界' },
      { name: '胎骨褐', hex: '#78664F', role: 'accent', note: '釉面阴影中的暖褐，用于链接与焦点' },
      { name: '釉面白', hex: '#FFF9F0', role: 'onAccent', note: '强调色之上的暖白文字' },
    ],
    tags: ['德化窑', '中国白', '象牙白', '猪油白', '瓷塑', '白釉', '透光'],
    sources: [
      {
        title: '德化窑',
        type: 'link',
        url: 'https://www.dpm.org.cn/lemmas/241924.html',
        detail: '故宫博物院陶瓷资料',
        note: '用于核对德化窑白瓷分期、器类、象牙白与猪油白等传统称谓。',
      },
      {
        title: '德化窑白釉刻花玉兰纹尊',
        type: 'link',
        url: 'https://www.dpm.org.cn/collection/ceramic/226711.html',
        detail: '故宫博物院藏品资料',
        note: '用于理解德化白瓷的釉面质感、刻花与浅浮雕表现；本站不复制该器物。',
      },
      {
        title: '中国白——中国国家博物馆藏德化白瓷展',
        type: 'link',
        url: 'https://www.chnmuseum.cn/zl/gbxz/202508/t20250819_272467.shtml',
        detail: '中国国家博物馆展览资料',
        note: '用于补充“中国白”称谓与德化白瓷造型传统的公共展览语境。',
      },
      {
        title: '中国陶瓷史',
        type: 'book',
        detail: '冯先铭著',
        note: '用于查阅德化窑宋元至明清白瓷发展的一般工艺背景。',
      },
    ],
    credits: {
      palette: 'Theme Atlas 编辑部',
      story: 'Theme Atlas 编辑部',
      graphics: 'Theme Atlas（原创 SVG）',
      license: '配色数据以 CC BY 4.0 释出',
      imageLicence: '站内插图为原创 SVG，未复刻任何馆藏器物、塑像或摄影。',
    },
    status: 'verified',
    plate: 'dehua-blanc',
  },

  {
    slug: 'famille-rose-bloom',
    title: '粉彩 · 霁色繁花',
    subtitle: '细笔叠彩，花色在白瓷上轻轻晕开。',
    collection: 'porcelain',
    description: '胭脂红承担主强调，豆绿、淡黄与湖蓝只进入原创花卉插画，保持瓷白底色安静。',
    story:
      '粉彩属于釉上彩，通常认为创烧于康熙晚期，至雍正、乾隆时期趋于成熟。' +
      '它借助玻璃白等材料与渲染技法表现花瓣、枝叶的明暗过渡，使釉上彩从平涂走向更细腻的层次。' +
      '本主题以粉彩花卉纹样的常见构图作为视觉依据：白瓷为底，胭脂红收住花心，' +
      '豆绿、淡黄与湖蓝在局部交错。具体器形、花枝与鸟雀构图由 Theme Atlas 原创绘制，' +
      '不复制某一件藏品。',
    inspiration:
      '界面只使用瓷白、浅粉、胭脂红和深墨这组克制颜色，装饰性的豆绿、淡黄与湖蓝不进入 UI 语义角色。' +
      '故宫博物院所藏粉彩桃花纹直颈瓶提供了“白地彩绘、花心色料较厚、向花瓣外缘渐淡”的观察线索；' +
      '故宫粉彩与工艺资料用于核对釉上彩的时期和技法背景。',
    designRationale:
      '粉彩主题容易变成普通粉色界面，因此背景保留暖瓷白，面板只用很浅的粉灰，' +
      '胭脂红集中在链接、按钮和小面积焦点。语法色盘另取胭脂红、豆绿、湖蓝、淡金与深墨；' +
      '插画装饰色只在主视觉中出现，不挤占代码与正文的颜色职责。',
    palette: [
      { name: '霁色瓷白', hex: '#F4EEE8', role: 'bg', note: '雨后般柔和的暖瓷白' },
      { name: '粉彩薄层', hex: '#EBDDD7', role: 'surface', note: '浅粉灰釉面面板' },
      { name: '乌梅墨', hex: '#30242A', role: 'text', note: '带紫褐调的正文深墨' },
      { name: '胭脂灰', hex: '#76616A', role: 'muted', note: '花纹阴影中的次要文字' },
      { name: '彩瓷界线', hex: '#D5C3BC', role: 'border', note: '细笔与白瓷之间的柔和边界' },
      { name: '胭脂红', hex: '#98536B', role: 'accent', note: '花心与主要行动色' },
      { name: '花蕊白', hex: '#FFF8F5', role: 'onAccent', note: '胭脂红上的文字' },
    ],
    tags: ['粉彩', '清代', '釉上彩', '胭脂红', '玻璃白', '花卉', '渲染'],
    sources: [
      {
        title: '粉彩桃花纹直颈瓶',
        type: 'link',
        url: 'https://www.dpm.org.cn/collection/ceramic/226714.html',
        detail: '故宫博物院藏品资料',
        note: '用于核对雍正粉彩的白地彩绘、渲染层次与花卉表现；本站不复制该瓶纹样。',
      },
      {
        title: '中国陶瓷史',
        type: 'book',
        detail: '冯先铭著',
        note: '用于理解粉彩的釉上彩属性及康熙、雍正、乾隆时期的一般发展脉络。',
      },
      {
        title: '饮流斋说瓷',
        type: 'book',
        detail: '清·寂园叟（陈浏）',
        note: '用于查阅后世文献对粉彩、洋彩及相关彩瓷名目的品评。',
      },
    ],
    credits: {
      palette: 'Theme Atlas 编辑部',
      story: 'Theme Atlas 编辑部',
      graphics: 'Theme Atlas（原创 SVG）',
      license: '配色数据以 CC BY 4.0 释出',
      imageLicence: '站内插图为原创 SVG，未复刻任何具体藏品、纹样或摄影。',
    },
    status: 'verified',
    plate: 'famille-rose',
    artworkPalette: [
      { name: '豆绿', hex: '#79927C', note: '枝叶与局部花托' },
      { name: '淡黄', hex: '#C5A66A', note: '花蕊与局部暖色' },
      { name: '湖蓝', hex: '#7396A2', note: '鸟羽与局部冷色' },
    ],
  },

  {
    slug: 'deep-space-orbit',
    title: '深空轨道',
    subtitle: '车窗外的冷紫与一道量子色的光',
    collection: 'rail',
    description: '冷紫与灰青铺开，是从舷窗望出去的那片遥远星海。',
    story:
      '《崩坏：星穹铁道》的世界观里，列车沿着星轨在诸界之间穿行，' +
      '开拓者的任务是不断选择命途。' +
      '这种设定天然适合色彩设计：星轨是一条可以画出来的线，' +
      '车厢内部是暗的，窗外有偏紫与偏青的两种辉光。' +
      '本主题只取这个画面，不取任何角色、立绘或界面素材——' +
      '所有图形都是为 Theme Atlas 重新绘制的抽象轨道。',
    inspiration:
      '底色取列车内舱的深蓝黑，面板取舷窗金属的冷灰，' +
      '强调色取星轨外圈的量子紫，次强调由紫与底色混合得到偏青的辉光。' +
      '文字用略带蓝的白，模拟舷窗玻璃反射出的光。',
    designRationale:
      '深色主题里最容易被忽略的是层级：纯黑背景会让面板消失。' +
      '因此面板比背景提高约 5% 明度，分割线再提高一档，' +
      '所有边界靠明度而不是靠色相来区分。强调色保证在深底上仍有足够对比。',
    palette: [
      { name: '深空', hex: '#0D1017', role: 'bg', note: '车窗外侧的深蓝黑' },
      { name: '舱体', hex: '#171C27', role: 'surface', note: '内舱面板底色' },
      { name: '星白', hex: '#E6E9F1', role: 'text', note: '玻璃反射出的文字光' },
      { name: '冷灰', hex: '#8A93A8', role: 'muted', note: '次要信息' },
      { name: '舱线', hex: '#2B3241', role: 'border', note: '结构分割线' },
      { name: '量子紫', hex: '#6E55E4', role: 'accent', note: '星轨辉光' },
      { name: '素紫白', hex: '#F6F4FF', role: 'onAccent', note: '强调色之上的文字' },
    ],
    tags: ['同人', '科幻', '深色', '星轨', '原创演绎'],
    sources: [
      {
        title: '崩坏：星穹铁道 官方网站',
        type: 'link',
        url: 'https://hsr.hoyoverse.com/',
        detail: '官方公开页面，仅作题材背景参考',
        note: '本站未使用该页面的任何美术、Logo 或界面素材。',
      },
      {
        title: '星轨、命途与开拓者（公开设定摘要）',
        type: 'pending',
        note: '待补充：待加入带页码的官方设定集引用后替换本条。',
      },
    ],
    credits: {
      palette: 'Theme Atlas 编辑部（原创推导）',
      story: 'Theme Atlas 编辑部（非官方同人演绎）',
      graphics: 'Theme Atlas（原创 SVG）',
      license: '配色数据以 CC BY 4.0 释出',
      disclaimer:
        '本主题为非官方同人作品，仅用于配色研究与界面演示，与 HoYoverse 无隶属或授权关系。',
      imageLicence: '站内插图为原创 SVG，未使用任何官方美术资源。',
    },
    status: 'interpretation',
    featured: true,
  },

  {
    slug: 'pathfinder-beacon',
    title: '开拓者灯塔',
    subtitle: '一盏金色的信号灯，在无尽的暗里',
    collection: 'rail',
    description: '以信号金为唯一强调色，其余全部压成石墨与雾灰，是三套同人主题里最像工具的一套。',
    story:
      '在所有关于开拓的故事里，总有一个反复出现的动作：点亮，然后出发。' +
      '本主题把灯塔当作界面隐喻——大部分时间界面是暗的、安静的，' +
      '只有真正需要注意的东西才被金色的光标出来。' +
      '它不引用任何具体的游戏场景或角色，' +
      '只是借用了开拓这一层公共的科幻语汇。',
    inspiration:
      '强调色取灯塔钠灯的暖金（约 #C79436），背景取夜间海面的墨黑，' +
      '文字取灯照在纸上的米色。中间层用石墨与雾灰两档，' +
      '所有冷色都被刻意抽掉，避免与深空轨道的紫青撞车。',
    designRationale:
      '唯一的暖色让强调信息非常好认，代价是必须严格控制用量：' +
      '金色只出现在焦点环、主按钮和状态点，不用于大面积底色。' +
      '金色上的文字使用深墨而非白色，是在 AA 对比下的选择——' +
      '浅金底配白字几乎不可能通过。',
    palette: [
      { name: '夜幕', hex: '#111318', role: 'bg', note: '夜里的海与天' },
      { name: '石墨', hex: '#1D2027', role: 'surface', note: '面板底色' },
      { name: '米光', hex: '#EDE7DA', role: 'text', note: '灯照下的纸色' },
      { name: '雾灰', hex: '#9A9385', role: 'muted', note: '次要信息' },
      { name: '石墨线', hex: '#343841', role: 'border', note: '结构分割线' },
      { name: '信号金', hex: '#C79436', role: 'accent', note: '唯一的暖色，强调用' },
      { name: '夜墨', hex: '#1B1508', role: 'onAccent', note: '金色之上的深色文字' },
    ],
    tags: ['同人', '科幻', '深色', '暖强调', '工具感'],
    sources: [
      {
        title: '崩坏：星穹铁道 官方网站',
        type: 'link',
        url: 'https://hsr.hoyoverse.com/',
        detail: '官方公开页面，仅作题材背景参考',
        note: '本站未使用该页面的任何美术、Logo 或界面素材。',
      },
      {
        title: '钠灯色温参考（待补充）',
        type: 'pending',
        note: '待补充：拟引用一份标准照明色温表，注明灯种与显色指数后替换本条。',
      },
    ],
    credits: {
      palette: 'Theme Atlas 编辑部（原创推导）',
      story: 'Theme Atlas 编辑部（非官方同人演绎）',
      graphics: 'Theme Atlas（原创 SVG）',
      license: '配色数据以 CC BY 4.0 释出',
      disclaimer:
        '本主题为非官方同人作品，仅用于配色研究与界面演示，与 HoYoverse 无隶属或授权关系。',
      imageLicence: '站内插图为原创 SVG，未使用任何官方美术资源。',
    },
    status: 'interpretation',
  },

  {
    slug: 'singularity-echo',
    title: '奇点回响',
    subtitle: '所有颜色被压缩进一个点，再一起爆开',
    collection: 'rail',
    description: '从星云青到钛白的一组冷色，靠极窄的高光强调，适合长时间盯屏的深色工作区。',
    story:
      '当大量物质被压缩到一个极小的体积，物理学家把那个点叫作奇点。' +
      '本主题借用这个比喻：一套界面主题里只有一个奇点——强调色，' +
      '其余颜色都被压成同一族的冷灰，' +
      '在某个焦点上突然亮起来。' +
      '灵感来自科普读物里的星云图与示波器上那道回响的波形，' +
      '与具体游戏设定无关，是这一系列里最科学的一套。',
    inspiration:
      '星云青取自星云图里最常见的青绿（本质上是电离氧的发射线），' +
      '钛白取自望远镜光路中的镀膜反射色。' +
      '中间层用蓝灰与墨黑铺开，强调色只在波形峰值处出现。',
    designRationale:
      '深色主题里强调色容易发光过度，这里把强调色控制在中等明度，' +
      '并且在它之上只允许出现一种颜色（近白的雾色），保证视觉落点单一。' +
      '次要文字选用比冷灰更亮的雾青，避免深底上的灰字彻底消失。',
    palette: [
      { name: '玄渊', hex: '#0C1216', role: 'bg', note: '接近黑的深蓝绿' },
      { name: '玻璃', hex: '#141D22', role: 'surface', note: '面板底色' },
      { name: '雾青', hex: '#DFEBEA', role: 'text', note: '冷调白，略带青' },
      { name: '苍青', hex: '#7E9298', role: 'muted', note: '次要信息' },
      { name: '蓝线', hex: '#25333A', role: 'border', note: '结构分割线' },
      { name: '星云青', hex: '#2FA39E', role: 'accent', note: '唯一的峰值高光' },
      { name: '深水墨', hex: '#06201F', role: 'onAccent', note: '亮青上的深色文字，保证 AA 对比' },
    ],
    tags: ['同人', '深色', '星云', '冷色', '仪器'],
    sources: [
      {
        title: '崩坏：星穹铁道 官方网站',
        type: 'link',
        url: 'https://hsr.hoyoverse.com/',
        detail: '官方公开页面，仅作题材背景参考',
        note: '本站未使用该页面的任何美术、Logo 或界面素材。',
      },
      {
        title: '发射光谱与星云颜色（待补充）',
        type: 'pending',
        note: '待补充：拟引用一份天体物理科普资料，说明氧电离发射线对应的可见光波长。',
      },
    ],
    credits: {
      palette: 'Theme Atlas 编辑部（原创推导）',
      story: 'Theme Atlas 编辑部（非官方同人演绎）',
      graphics: 'Theme Atlas（原创 SVG）',
      license: '配色数据以 CC BY 4.0 释出',
      disclaimer:
        '本主题为非官方同人作品，仅用于配色研究与界面演示，与 HoYoverse 无隶属或授权关系。',
      imageLicence: '站内插图为原创 SVG，未使用任何官方美术资源。',
    },
    status: 'interpretation',
  },

  {
    slug: 'yaoshi-everlasting-bough',
    title: '药师 · 长生枝',
    subtitle: '生命从未停止生长。',
    collection: 'rail',
    description: '月髓白、苍木与生命金交织成繁盛枝冠，药红留下生命过度生长的隐秘警示。',
    story:
      '在遥远的星海中，有一位回应所有祈愿的星神。' +
      '祂让枯萎的土地重新长出枝叶，让干涸的河流再次流淌，也让生命摆脱时间的束缚。' +
      '于是，万物得以繁盛。' +
      '可是当生长不再有尽头，枝冠会遮住天空，根系也会穿过边界；' +
      '繁盛因此成为另一种无法挣脱的命运。' +
      '本主题把这份恩赐与压迫放在同一棵树上：它慈悲、丰饶，也永远没有停止生长的意思。',
    inspiration:
      '配色取意于神木、玉露与永生之力。月髓白承载神性的纯净，' +
      '苍木与青枝描绘古木和新叶，生命金记录赐福留下的光，' +
      '药红则像树冠深处一颗不合时宜的生命印记。' +
      '枝状冠冕、环绕的星轨和不对称的藤蔓均为原创抽象图形，' +
      '不描摹游戏中的角色、立绘、Logo 或界面，也不代表官方配色。',
    designRationale:
      '浅色底先把丰饶表现为温润、可阅读的空间，再用深翡翠建立庄严的中心。' +
      '苔痕从初稿的 #6F7969 压深到 #596253，使小字在月髓白和玉露面板上都通过 AA 对比；' +
      '药红只作为一次警示和少量生命节点，避免绿色主题退化成普通森林配色。' +
      'Vim 与 Codex 使用独立的深绿、金色、药红与灰褐语法层次，让生命的繁复不只停留在界面装饰上。',
    palette: [
      { name: '月髓白', hex: '#F0EEE2', role: 'bg', note: '神性、纯净与留白' },
      { name: '玉露', hex: '#E1E5D1', role: 'surface', note: '面板与卡片底色' },
      { name: '幽墨', hex: '#30352E', role: 'text', note: '正文与主要代码文字' },
      { name: '苔痕', hex: '#596253', role: 'muted', note: '压深后的次要文字，保证浅底可读性' },
      { name: '青枝', hex: '#A5B18A', role: 'border', note: '枝条、分隔线与低对比结构' },
      { name: '苍木', hex: '#263D35', role: 'accent', note: '古木主轴、按钮与核心焦点' },
      { name: '月髓光', hex: '#F0EEE2', role: 'onAccent', note: '苍木色之上的文字与结构高光' },
      { name: '药红', hex: '#A94D48', role: 'flare', note: '异化节点、警示与少量特殊强调' },
    ],
    tags: ['同人', '丰饶', '神木', '枝冠', '玉露', '生命异化'],
    sources: [
      {
        title: '崩坏：星穹铁道 官方网站',
        type: 'link',
        url: 'https://hsr.hoyoverse.com/',
        detail: '官方公开页面，仅作作品与题材背景识别',
        note: '本站未使用该页面的角色立绘、Logo、界面或其他美术素材。',
      },
      {
        title: '丰饶、药师与长生意象（公开设定摘要）',
        type: 'pending',
        note: '待补充：加入带版本与页码的官方设定资料后替换本条；当前文案与色值属于 Theme Atlas 原创演绎。',
      },
    ],
    credits: {
      palette: 'Theme Atlas 编辑部（原创配色演绎）',
      story: 'Theme Atlas 编辑部（非官方同人演绎）',
      graphics: 'Theme Atlas（原创 SVG）',
      license: '配色数据以 CC BY 4.0 释出',
      disclaimer:
        '本主题为非官方同人作品，仅用于配色研究与界面演示，与米哈游及 HoYoverse 无隶属或授权关系。',
      imageLicence: '站内插图为原创 SVG，未使用任何官方角色、Logo、纹理或界面素材。',
    },
    status: 'interpretation',
    plate: 'yaoshi-bough',
  },

  {
    slug: 'lan-reignbow-arbiter',
    title: '岚 · 帝弓天矢',
    subtitle: '一道贯穿星海的光，目标既定，绝不回头。',
    collection: 'rail',
    description: '冷蓝星弦、深空靛与弓弦金勾勒出锁定星海的巡猎箭轨，精准、轻盈而不可回返。',
    story:
      '目标既定，箭无虚发。' +
      '星海之中，有一道永不停歇的身影。' +
      '祂是帝弓司命，巡行诸界，以光矢追猎不死的孽物。' +
      '弓弦拉满的瞬间，星辰也仿佛为之停滞。' +
      '那道箭光划过遥远星域，只留下短暂而耀眼的虹色轨迹。' +
      '本主题把这份裁决感压缩成一束方向明确的光：冷静、精准，也从不为任何目标回头。',
    inspiration:
      '配色取意于帝弓的苍蓝身影、贯穿星海的光矢，以及巡猎者冷静而坚定的目光。' +
      '深空靛构成寂静的宇宙，天矢蓝记录箭矢的方向，弧光青描绘速度，' +
      '弓弦金则标记每一次精准的裁决。' +
      '主视觉中的星弓、准星、箭轨与虹色残光均为原创几何构图，' +
      '不描摹角色立绘、游戏 Logo、界面或任何官方美术素材。',
    designRationale:
      '星弦白与霜蓝维持轻盈、清晰的浅色工作区，深空靛负责正文与结构骨架。' +
      '天矢蓝进一步压深到 #2D6888，使白色强调按钮文字和色块内的小号标签都通过 AA；' +
      '星尘灰改为 #4B667A，确保小字号在背景与面板上都保持可读。' +
      '弓弦金只出现在锁定、箭首和裁决节点，避免整套界面退化成普通蓝色科技主题。' +
      'Vim 与 Codex 继续共享独立语法色板，以蓝、金、青、冷红和靛灰形成明确的代码层级。',
    palette: [
      { name: '星弦白', hex: '#EAF2F5', role: 'bg', note: '星弓周围的冷白空间' },
      { name: '霜蓝', hex: '#D0E3EC', role: 'surface', note: '卡片与信息面板' },
      { name: '深空靛', hex: '#182B43', role: 'text', note: '正文与精密结构' },
      { name: '星尘灰', hex: '#4B667A', role: 'muted', note: '压深后的坐标与次要信息' },
      { name: '轨迹线', hex: '#B6CCD8', role: 'border', note: '星轨、边界与低速辅助线' },
      { name: '天矢蓝', hex: '#2D6888', role: 'accent', note: '锁定、方向与主要操作' },
      { name: '星弦白字', hex: '#FFFFFF', role: 'onAccent', note: '天矢蓝上的文字' },
      { name: '弓弦金', hex: '#C4A66A', role: 'flare', note: '箭首、准星与裁决节点' },
    ],
    tags: ['同人', '巡猎', '帝弓', '星箭', '目标锁定', '速度与精准'],
    sources: [
      {
        title: '崩坏：星穹铁道 官方网站',
        type: 'link',
        url: 'https://hsr.hoyoverse.com/',
        detail: '官方公开页面，仅作作品与题材背景识别',
        note: '本站未使用该页面的角色立绘、Logo、界面或其他美术素材。',
      },
      {
        title: '巡猎、帝弓与岚（公开设定摘要）',
        type: 'pending',
        note: '待补充：加入带版本与页码的官方设定资料后替换本条；当前文案与色值属于 Theme Atlas 原创演绎。',
      },
    ],
    credits: {
      palette: 'Theme Atlas 编辑部（原创配色演绎）',
      story: 'Theme Atlas 编辑部（非官方同人演绎）',
      graphics: 'Theme Atlas（原创 SVG）',
      license: '配色数据以 CC BY 4.0 释出',
      disclaimer:
        '本主题为非官方同人作品，仅用于配色研究与界面演示，与米哈游及 HoYoverse 无隶属或授权关系。',
      imageLicence: '站内插图为原创 SVG，未使用任何官方角色、Logo、纹理或界面素材。',
    },
    status: 'interpretation',
    plate: 'lan-reignbow',
  },

  {
    slug: 'aha-cosmic-farce',
    title: '阿哈 · 谐谑剧场',
    subtitle: '宇宙从不缺少答案，缺少的只是一个足够荒唐的问题。',
    collection: 'rail',
    description: '幕布黑、欢愉粉、幻彩青与聚光金拉开永不落幕的宇宙剧场，假面、骰子和命运反转藏在灯影之间。',
    story:
      '宇宙如此漫长，总得有人笑出声来。' +
      '当阿哈登上存在之树的最高处，祂看见了星辰的运转、虚无的尽头，' +
      '以及万物背后似乎毫无意义的秩序。' +
      '直到一个婴儿跌倒，放声大哭。' +
      '于是，祂笑了。' +
      '那笑声撕开寂静的宇宙，也让一场永不落幕的演出就此开始。' +
      '本主题不把欢愉画成廉价的喧闹，而是把它放进一座黑色舞台：' +
      '假面真假难辨，骰子随时改写结局，而每一次灯光亮起都可能是新的玩笑。',
    inspiration:
      '配色取意于欢愉的假面、剧场与命运的随机转折。' +
      '幕布黑和夜幕紫铺开深紫色舞台，面具白承担正文，欢愉粉标记当前演出与主要动作，' +
      '聚光金只落在关键提示和反转节点。' +
      '幻彩青、戏法紫与谢幕红进入独立语法色板，分别扮演意外的字符串、类型幻术与数字警报。' +
      '悬浮假面、不完整圆台、扑克牌、骰子和不对称光带均为原创几何图形，' +
      '不使用游戏立绘、Logo、界面素材或官方纹样。',
    designRationale:
      '深色界面先建立剧场的暗部，再让欢愉粉以足够通过 AA 对比的明度成为焦点；' +
      '灰紫色次要文字压住喧闹感，避免整页变成霓虹彩虹。' +
      '聚光金作为 flare 只提示输入、状态反转和少量舞台节点。' +
      'Vim 与 Codex 共享同一套独立语法色：粉色关键字负责开场，金色函数像聚光灯，' +
      '青色字符串制造意外，戏法紫与谢幕红则把类型和数字从普通正文中区分出来。',
    palette: [
      { name: '幕布黑', hex: '#171421', role: 'bg', note: '开场前最深的舞台背景' },
      { name: '夜幕紫', hex: '#292238', role: 'surface', note: '卡片、面板与舞台层次' },
      { name: '面具白', hex: '#F3EDF2', role: 'text', note: '假面高光与主要正文' },
      { name: '幕后灰紫', hex: '#B5A5B9', role: 'muted', note: '次要说明与退场信息' },
      { name: '台边紫影', hex: '#51445F', role: 'border', note: '舞台边界与结构线' },
      { name: '欢愉粉', hex: '#E85B9C', role: 'accent', note: '当前演出、链接与主要操作' },
      { name: '粉灯底字', hex: '#171421', role: 'onAccent', note: '欢愉粉上的深色文字' },
      { name: '聚光金', hex: '#F2C66D', role: 'flare', note: '关键提示与命运反转' },
    ],
    tags: ['同人', '欢愉', '假面', '剧场', '骰子', '扑克牌', '命运反转'],
    sources: [
      {
        title: '崩坏：星穹铁道 官方网站',
        type: 'link',
        url: 'https://hsr.hoyoverse.com/',
        detail: '官方公开页面，仅作作品与题材背景识别',
        note: '本站未使用该页面的角色立绘、Logo、界面或其他美术素材。',
      },
      {
        title: '欢愉、阿哈与假面剧团（公开设定摘要）',
        type: 'pending',
        note: '待补充：加入带版本与页码的官方设定资料后替换本条；当前文案与色值属于 Theme Atlas 原创演绎。',
      },
    ],
    credits: {
      palette: 'Theme Atlas 编辑部（原创配色演绎）',
      story: 'Theme Atlas 编辑部（非官方同人演绎）',
      graphics: 'Theme Atlas（原创 SVG）',
      license: '配色数据以 CC BY 4.0 释出',
      disclaimer:
        '本主题为非官方同人作品，仅用于配色研究与界面演示，与米哈游及 HoYoverse 无隶属或授权关系。',
      imageLicence: '站内插图为原创 SVG，未使用任何官方角色、Logo、纹理或界面素材。',
    },
    status: 'interpretation',
    plate: 'aha-farce',
  },

  {
    slug: 'ix-silent-event-horizon',
    title: 'IX · 静默视界',
    subtitle: '当宇宙沉默，连存在也失去了回声。',
    collection: 'rail',
    description: '虚空黑、暗界紫灰与微弱幽紫构成一片近乎静止的事件视界，轨道弯折，星光在沉默中消隐。',
    story:
      '在群星无法抵达的地方，存在着一片深不见底的虚空。' +
      '那里没有回应，没有方向，也没有值得追寻的答案。' +
      '星体被引力牵引，光线在边界处弯折，所有试图靠近的声音最终都消失在无声的深处。' +
      '祂是 IX，虚无的星神。' +
      '本主题把这种存在感压到最低：大面积黑暗不是空洞的背景，而是一块具有密度的视界；' +
      '少量紫、蓝与洋红光点只在即将被吞没前出现，随后重新归于寂静。',
    inspiration:
      '配色取意于黑洞的事件视界、深紫色星云与被引力扭曲的遥远星光。' +
      '虚空黑吞没画面，暗界保留卡片和面板的空间层次，引力灰描出弯曲的轨道。' +
      '幽紫是仍可被仪器辨认的主信号，星蚀蓝进入独立语法色板以表现坐标和函数，' +
      '暗星红只作为异常与删除状态的微量提示。' +
      '黑洞、引力透镜、弯折轨道与两个近乎熄灭的光点均为原创抽象 SVG，' +
      '不使用游戏立绘、Logo、界面素材或官方图案。',
    designRationale:
      '界面以黑、紫灰和蓝灰建立低饱和层级，避免把虚无做成普通的赛博朋克霓虹。' +
      '幽紫保持在背景上可通过 AA 对比；强调色上的文字改用虚空黑 #100F18，' +
      '因为初稿白字在 #8B72B8 上只有 4.04:1。' +
      '暗星红由初稿 #A45F91 轻微提亮为 #B36A9F，使小字号异常信号也能通过深底与面板对比。' +
      'Vim 与 Codex 共享一套低饱和但彼此分离的紫、蓝、洋红与灰白语法色，' +
      '让安静的视觉气质不牺牲代码可读性。',
    palette: [
      { name: '虚空黑', hex: '#100F18', role: 'bg', note: '事件视界内侧的静默背景' },
      { name: '暗界', hex: '#1B1926', role: 'surface', note: '卡片、面板与暗部层次' },
      { name: '微光白', hex: '#E7E3EF', role: 'text', note: '黑暗中最后残留的存在' },
      { name: '雾灰', hex: '#91899F', role: 'muted', note: '遥远、衰减的次要信息' },
      { name: '引力灰', hex: '#393346', role: 'border', note: '弯曲轨道与结构边界' },
      { name: '幽紫', hex: '#8B72B8', role: 'accent', note: '仍可辨认的主要信号' },
      { name: '视界黑字', hex: '#100F18', role: 'onAccent', note: '幽紫上的深色文字' },
      { name: '暗星红', hex: '#B36A9F', role: 'flare', note: '少量异常、删除与失重信号' },
    ],
    tags: ['同人', '虚无', '黑洞', '事件视界', '熵', '失重', '消隐', '寂静'],
    sources: [
      {
        title: '崩坏：星穹铁道 官方网站 · 世界观栏目（中文）',
        type: 'link',
        url: 'https://hsr.hoyoverse.com/zh-cn/world',
        detail: '官方公开世界观栏目，用于核对作品、星神 IX 与虚无命途的背景。',
        note: '仅引用为作品背景入口；本站未使用该页面的角色立绘、Logo、界面或其他美术素材。',
      },
      {
        title: '《崩坏：星穹铁道》官方网站 · 世界观栏目（英文）',
        type: 'link',
        url: 'https://hsr.hoyoverse.com/en-us/world',
        detail: '同属官方公开世界观栏目，可对照英文表述核对作品、星神 IX 与虚无命途背景。',
        note:
          '官方资料与 Theme Atlas 的原创演绎分开记录；黑洞、事件视界等科学隐喻并非游戏官方设定。',
      },
      {
        title: 'NASA Science · Black Holes',
        type: 'link',
        url: 'https://science.nasa.gov/universe/black-holes/',
        detail: 'NASA 公开天文科普：黑洞与事件视界。',
        note:
          '黑洞、事件视界、引力透镜和弯折轨道只作为 Theme Atlas 的现实科学视觉隐喻；' +
          '这些不是《崩坏：星穹铁道》的官方设定或官方图形，相关 SVG 与色值均为原创演绎。',
      },
    ],
    credits: {
      palette: 'Theme Atlas 编辑部（原创配色演绎）',
      story: 'Theme Atlas 编辑部（非官方同人演绎）',
      graphics: 'Theme Atlas（原创 SVG）',
      license: '配色数据以 CC BY 4.0 释出',
      disclaimer:
        '本主题为非官方同人作品，仅用于配色研究与界面演示，与米哈游及 HoYoverse 无隶属或授权关系。',
      imageLicence: '站内插图为原创 SVG，未使用任何官方角色、Logo、纹理或界面素材。',
    },
    status: 'interpretation',
    plate: 'ix-horizon',
  },

  {
    slug: 'qlipoth-amber-rampart',
    title: '克里珀 · 琥珀长垣',
    subtitle: '筑起一道墙，把尚有生机的世界留在墙内。',
    collection: 'rail',
    description: '岩垒白与层叠岩甲构成稳定边界，琥珀棕标记秩序中的行动，星墙青灰守住漫长尺度。',
    story:
      '宇宙并不总是安全的。星球会被吞噬，文明也可能在漫长的时间里消失。' +
      '当威胁逼近，祂选择了最漫长的工作：筑墙。' +
      '一道道星际屏障跨过光年，岩层彼此咬合，琥珀的光从石缝之间透出。' +
      '墙外是未知的威胁，墙内仍有世界在繁衍、生长。' +
      '祂是克里珀，存护的星神，也是被称为「琥珀王」的筑墙者。' +
      '本主题从星墙、琥珀与层叠岩甲中寻找颜色，以环形咬合的岩板和向外延伸的屏障作为原创视觉结构；' +
      '它不是角色肖像，也不是游戏中的既有纹样。',
    inspiration:
      '官方世界观将克里珀描述为存护的星神，也被称为琥珀王；' +
      '天慧星墙、亚空晶壁与巨引源基盘都指向一种以光年计量的巨大建造。' +
      'Theme Atlas 把这一设定提炼为岩垒、琥珀与屏障三种视觉材料：' +
      '岩垒白提供安静的工作空间，玄岩墨建立清楚边界，琥珀棕承担主要行动，星墙青灰表示远处的结构。' +
      '熔金光只作为插画中的裂隙余温，不承担 UI 语义角色或小字号文字。',
    designRationale:
      '浅暖的岩垒白和砌石灰让页面像一块稳定、可长期工作的石面；正文使用近乎无彩的玄岩墨，' +
      '避免金色主题常见的发黄和炫光。琥珀棕保持足够深，既能担任链接与按钮，也能承载浅色文字。' +
      '星墙青灰作为辅助色，把暖色从单一的“金色科技风”里拉开。' +
      'Vim 与 Codex 使用独立的琥珀、岩蓝、苔绿、陶红与岩墨语法色，让代码层级稳定，而熔金光不干扰阅读。',
    palette: [
      { name: '岩垒白', hex: '#EDE9DF', role: 'bg', note: '星墙内侧安静、稳定的工作空间' },
      { name: '砌石灰', hex: '#DED8C9', role: 'surface', note: '岩板接合处形成的信息面板' },
      { name: '玄岩墨', hex: '#292B29', role: 'text', note: '岩石深处的正文与主要边界' },
      { name: '风蚀灰', hex: '#555D59', role: 'muted', note: '经过时间磨蚀的次要文字' },
      { name: '石缝线', hex: '#B8B6AA', role: 'border', note: '岩层之间细而稳定的接缝' },
      { name: '琥珀棕', hex: '#7A4C1B', role: 'accent', note: '主要操作、链接与秩序焦点' },
      { name: '琥珀霜', hex: '#FFF8E8', role: 'onAccent', note: '琥珀棕之上的浅色文字' },
      { name: '星墙青灰', hex: '#53656A', role: 'flare', note: '外围屏障与少量结构信号' },
    ],
    tags: ['同人', '存护', '克里珀', '琥珀王', '星墙', '筑城者', '岩层', '屏障', '守护'],
    sources: [
      {
        title: '克里珀 · 存护',
        type: 'link',
        url: 'https://wiki.hoyolab.com/pc/hsr/entry/889?lang=zh-cn',
        detail: 'HoYoLAB 官方 HSR Wiki 条目',
        note: '用于核对克里珀的存护命途、琥珀王称号、星际障壁与守护仍有生机世界等官方设定表述。',
      },
      {
        title: '崩坏：星穹铁道 官方网站 · 世界观栏目',
        type: 'link',
        url: 'https://hsr.hoyoverse.com/zh-cn/world',
        detail: '官方公开世界观栏目',
        note: '作为作品与星神设定的官方入口；本站未使用该页面或其他官方来源的立绘、Logo、截图或界面素材。',
      },
    ],
    credits: {
      palette: 'Theme Atlas 编辑部（原创配色演绎）',
      story: 'Theme Atlas 编辑部（非官方同人演绎）',
      graphics: 'Theme Atlas（原创 SVG）',
      license: '配色数据以 CC BY 4.0 释出',
      disclaimer:
        '本主题为非官方同人作品，仅用于配色研究与界面演示，与米哈游及 HoYoverse 无隶属或授权关系。',
      imageLicence: '站内插图为原创抽象 SVG，未使用官方立绘、Logo、截图、纹样或界面素材。',
    },
    status: 'interpretation',
    plate: 'qlipoth-rampart',
    artworkPalette: [
      { name: '熔金光', hex: '#C58B3F', note: '岩层裂隙与琥珀核心的余温，仅用于插画' },
    ],
  },

  {
    slug: 'nous-cosmic-computation',
    title: '博识尊 · 万象演算',
    subtitle: '万物皆是变量，宇宙仍在演算。',
    collection: 'rail',
    description: '雾银与钛灰构成观测仪器，机核绯只标记关键结论，多层几何轨道记录仍在运行的变量。',
    story:
      '祂曾是一台星体计算机，诞生的目的，是求解万物。' +
      '当演算越过机器原本的边界，祂从计算工具升格为执掌智识的星神。' +
      '在祂的视野里，群星不再只是遥远的光点。它们是坐标，是变量，也是构成宇宙方程的无数条件。' +
      '每一次观测带来新的数据，每一次推导都让未知显露出新的结构。' +
      '祂是博识尊，智识的星神。' +
      '本主题将这种对宇宙的计算与理解转译为一座抽象的星体计算仪；' +
      '它不代表游戏中的真实物件，也不描绘博识尊的官方形象。',
    inspiration:
      '雾银与钛灰来自观测仪器和冷却金属，铅灰承担次要信息，铝线描绘几何矩阵与坐标。' +
      '机核绯是唯一主要强调色，只标记当前计算焦点和关键结论；逻辑蓝灰用于结构、数据节点与辅助信号。' +
      '中央多面体核心、交错椭圆轨道、刻度、坐标和连线均为 Theme Atlas 原创抽象图形。' +
      '官方设定提供智识、星体计算机与博识尊之间的身份依据，视觉不取自角色模型、游戏界面或官方纹样。',
    designRationale:
      '整体采用冷静的浅灰工作区，把“机器感”建立在精密层级而非霓虹发光上。' +
      '正文、次要文字和强调色都保持足够深，确保银灰背景上的长时间阅读。' +
      '机核绯不参与大面积铺陈，只用于焦点、结论和少量数据节点；逻辑蓝灰退回结构与装饰层。' +
      'Vim 与 Codex 使用独立的绯红、蓝灰、松绿、陶棕与紫灰语法色，' +
      '让推导示例中的类型、字符串、数字和注释保持清楚分离。',
    palette: [
      { name: '雾银', hex: '#E7E9E8', role: 'bg', note: '观测仪器表面的冷静银色' },
      { name: '钛雾', hex: '#D6DDDD', role: 'surface', note: '钛灰面板与计算层的中间底色' },
      { name: '石墨', hex: '#222A2E', role: 'text', note: '记录逻辑与正文的深石墨色' },
      { name: '铅灰', hex: '#515D64', role: 'muted', note: '坐标、注释与次要信息' },
      { name: '铝线', hex: '#B5C0C2', role: 'border', note: '几何矩阵与仪器结构线' },
      { name: '机核绯', hex: '#8D3542', role: 'accent', note: '当前计算焦点与关键结论' },
      { name: '霜瓷', hex: '#FFF7F5', role: 'onAccent', note: '机核绯之上的文字' },
      { name: '逻辑蓝灰', hex: '#52616A', role: 'flare', note: '数据节点、辅助结构与逻辑信号' },
    ],
    tags: ['同人', '智识', '博识尊', '星体计算机', '演算', '坐标', '几何矩阵', '数据节点', '观测', '推导'],
    sources: [
      {
        title: '源究森林 · 智识',
        type: 'link',
        url: 'https://wiki.hoyolab.com/pc/hsr/entry/3184?lang=zh-cn',
        detail: 'HoYoLAB 官方 HSR Wiki 智识阵营条目',
        note:
          '该条目列出智识命途的星神为博识尊，并关联天才俱乐部与博识学会；' +
          '这里用于核对命途与阵营归属，星体计算机描述另由补充资料交叉核对。',
      },
      {
        title: '哔哩哔哩游戏 WIKI · 星神',
        type: 'link',
        url: 'https://wiki.biligame.com/sr/%E6%98%9F%E7%A5%9E',
        detail: '社区维护的星神资料页',
        note: '用于补充核对博识尊的星神身份与星体计算机描述；具体设定以官方来源为准。',
      },
    ],
    credits: {
      palette: 'Theme Atlas 编辑部（原创配色演绎）',
      story: 'Theme Atlas 编辑部（非官方同人演绎）',
      graphics: 'Theme Atlas（原创 SVG）',
      license: '配色数据以 CC BY 4.0 释出',
      disclaimer:
        '本主题为非官方同人作品，仅用于配色研究与界面演示，与 HoYoverse 无隶属或授权关系。',
      imageLicence: '站内插图为原创抽象 SVG，未使用官方角色模型、立绘、Logo、截图、纹样或界面素材。',
    },
    status: 'interpretation',
    plate: 'nous-computer',
    artworkPalette: [
      { name: '银蓝装饰', hex: '#A7BEC7', note: '星体计算仪中的辅助节点与空间网格，仅用于插画' },
    ],
  },

  {
    slug: 'uncharted-reach',
    title: '未知疆域',
    subtitle: '在星图尚未命名的地方，点亮第一束文明信号',
    collection: 'game',
    game: 'stellaris',
    description: '深蓝黑、星云紫、离子青与文明金组成一张向未知展开的星系航图。',
    story:
      '《群星》把太空探索呈现为一连串选择：观测一颗陌生行星，建立前哨，' +
      '与未知文明接触，再决定边界如何被画出。' +
      '本主题不从任何具体场景取色，而是把“发现”拆成四层视觉关系：' +
      '深蓝黑是未测绘的空间，星云紫是遥远天体的光，离子青是仪器与通信信号，' +
      '文明金只在已经建立联系的位置出现。' +
      '这些色值来自 Theme Atlas 对深空探索题材的原创色彩推导，不是游戏的官方配色。',
    inspiration:
      '主色以深空蓝黑铺底，紫色集中在面板与边界层，模拟星云在黑暗中留下的色偏；' +
      '高亮青用于链接、焦点与数据信号，文明金作为次强调，只标记文明节点与关键状态。' +
      '星系轨道、星点和通信脉冲都来自抽象几何，不借用游戏内星图、图标或界面。',
    designRationale:
      '深色背景中的层级主要靠明度而不是饱和度区分：面板与背景只拉开一小档，' +
      '保证长时间浏览时不会变成一片发光色块。青色作为主强调保持清晰，' +
      '金色只在少量“发现完成”的语义上出现。正文、次要文字和强调边界均按 WCAG AA 校验。',
    palette: [
      { name: '未测绘深空', hex: '#070B1D', role: 'bg', note: '星图边缘的深蓝黑' },
      { name: '星云紫层', hex: '#17142F', role: 'surface', note: '面板与航道之间的紫黑层' },
      { name: '航图白', hex: '#EDF2FF', role: 'text', note: '仪器读数般的冷白正文' },
      { name: '远星灰蓝', hex: '#A2AFD2', role: 'muted', note: '次要说明与坐标文字' },
      { name: '轨道线', hex: '#35446A', role: 'border', note: '星图网格与结构边界' },
      { name: '离子青', hex: '#76DDE5', role: 'accent', note: '通信信号、链接与焦点' },
      { name: '文明金', hex: '#D8BE7E', role: 'flare', note: '文明节点与关键发现' },
    ],
    tags: ['群星', '深空', '星云', '文明信号', '探索', '原创演绎'],
    sources: [
      {
        title: 'Paradox Interactive · Stellaris 官方网站',
        type: 'link',
        url: 'https://www.paradoxinteractive.com/games/stellaris/about',
        detail: '官方公开产品页面，仅用于确认作品与题材背景',
        note: '本页面的配色、图形与版式均未用于本站；所有色值和图形由 Theme Atlas 独立创作。',
      },
      {
        title: '深空视觉语汇与色值关系（待补充）',
        type: 'pending',
        note: '待补充：计划加入带页码的美术设定资料后替换本条，当前不主张任何官方配色依据。',
      },
    ],
    credits: {
      palette: 'Theme Atlas 编辑部（原创配色演绎）',
      story: 'Theme Atlas 编辑部（非官方同人创作）',
      graphics: 'Theme Atlas（原创 SVG）',
      license: '配色数据以 CC BY 4.0 释出',
      disclaimer:
        '本主题为非官方同人创作，仅用于配色研究与界面演示，与 Paradox Interactive 无隶属、授权或合作关系。',
      imageLicence: '站内图形为原创 SVG，未使用任何游戏截图、Logo、单位肖像或界面素材。',
    },
    status: 'interpretation',
    plate: 'stellaris',
  },

  {
    slug: 'frozen-front',
    title: '冰蓝防线',
    subtitle: '战术网格覆盖钢铁前线，冷白信号在蓝灰中亮起',
    collection: 'game',
    game: 'red-alert',
    description: '钢铁蓝灰、冷白与信号青构成克制的盟军军事科技界面。',
    story:
      '本主题以《命令与征服：红色警戒》在《命令与征服：红色警戒 重制版合集》' +
      '（2020）中的公开呈现为版本范围，不混用《红色警戒 2》《红色警戒 3》或其他分支。' +
      '视觉重心不是某位角色或某一支部队，而是一张被低温光照亮的战术桌面：' +
      '网格先定义空间，钢铁结构再划出边界，最后用信号青提示当前节点。' +
      '颜色与图形均由 Theme Atlas 原创推导，不代表原作官方视觉标准。',
    inspiration:
      '蓝灰色取自工业钢板与冷光环境的抽象组合，冷白用于主要读数，' +
      '信号青只负责行动状态与交互焦点。战术网格、模块化装甲和扫描环没有仿照任何游戏内 HUD，' +
      '它们由重复线、坐标和机械插槽重新构成。',
    designRationale:
      '这套主题保持低饱和的蓝灰层级，让青色高亮在深底上足够清楚；' +
      '文字不使用纯白，而是偏冷的仪器白，减少长时间盯屏时的刺激。' +
      '面板与背景之间的明度差足够支撑结构，同时避免让机械线条比正文更抢眼。',
    palette: [
      { name: '北方夜蓝', hex: '#08131D', role: 'bg', note: '寒冷环境中的深蓝黑' },
      { name: '装甲蓝灰', hex: '#142636', role: 'surface', note: '钢板与面板的中性蓝灰' },
      { name: '冷光白', hex: '#E9F4F8', role: 'text', note: '仪器读数般的正文色' },
      { name: '战术灰', hex: '#97ADB8', role: 'muted', note: '坐标、注释与次要信息' },
      { name: '钢构线', hex: '#3A5361', role: 'border', note: '网格与结构分割线' },
      { name: '信号青', hex: '#65D9E8', role: 'accent', note: '状态、链接与焦点信号' },
      { name: '霜蓝', hex: '#B8DDE8', role: 'flare', note: '扫描结果与次级提示' },
    ],
    tags: ['红色警戒', '盟军', '战术地图', '钢铁蓝灰', '军事科技', '原创演绎'],
    sources: [
      {
        title: 'Command & Conquer Remastered Collection 官方网站',
        type: 'link',
        url: 'https://www.ea.com/games/command-and-conquer/command-and-conquer-remastered',
        detail: '版本范围：2020 年《命令与征服：红色警戒 重制版合集》',
        note: '官方页面仅用于确认作品和版本；本站未使用其截图、Logo、单位肖像或界面素材。',
      },
      {
        title: '盟军战术视觉分析（待补充）',
        type: 'pending',
        note: '待补充：加入可核验的美术资料与页码后替换本条，当前色板不作为官方设定引用。',
      },
    ],
    credits: {
      palette: 'Theme Atlas 编辑部（原创配色演绎）',
      story: 'Theme Atlas 编辑部（非官方同人创作）',
      graphics: 'Theme Atlas（原创 SVG）',
      license: '配色数据以 CC BY 4.0 释出',
      disclaimer:
        '本主题为非官方同人创作，仅用于配色研究与界面演示，与 Electronic Arts 无隶属、授权或合作关系。',
      imageLicence: '站内图形为原创 SVG，未使用任何游戏截图、Logo、单位肖像或界面素材。',
    },
    status: 'interpretation',
    plate: 'red-alert-allied',
  },

  {
    slug: 'crimson-iron-curtain',
    title: '赤色铁幕',
    subtitle: '重工业的阴影里，一枚警戒红缓慢亮起',
    collection: 'game',
    game: 'red-alert',
    description: '铁灰、警戒红与旧铜色呈现重机械、冷硬结构与低频警报。',
    story:
      '这套苏维埃方向的主题同样以《命令与征服：红色警戒 重制版合集》（2020）' +
      '为版本范围，不混用《红色警戒 2》《红色警戒 3》等后续分支的阵营造型。' +
      '它不复制任何徽章、宣传画或单位，而是从重工业空间提取三个动作：' +
      '钢铁结构压低视野，警戒灯把红色送入阴影，旧铜色保留设备使用过的痕迹。' +
      '原作信息只用于确认题材，具体色值与机械图形均为 Theme Atlas 的艺术演绎。',
    inspiration:
      '背景与面板取铁灰的两档明度，正文用略带暖意的旧纸白。' +
      '警戒红是主强调，为了确保深底上的文字和焦点可读，色值被提升到较明亮的红橙区间；' +
      '旧铜色只用于连接件、刻度和次级标记，避免红色与金属色同时大面积铺开。',
    designRationale:
      '红黑主题容易变成单一的警示界面，因此这里用铜色和暖白把层级拆开。' +
      '主强调保持高识别度，但不使用纯红；正文与面板则维持在稳定的暖灰关系。' +
      '粗重的工业线条只出现在边缘和图形中，正文区域继续保持安静。',
    palette: [
      { name: '铁幕黑', hex: '#16171A', role: 'bg', note: '重工业空间里的近黑铁灰' },
      { name: '机械灰', hex: '#29282A', role: 'surface', note: '设备面板与装甲的中灰' },
      { name: '旧纸白', hex: '#EEE8DE', role: 'text', note: '略暖的正文与读数' },
      { name: '磨损银', hex: '#B1A79C', role: 'muted', note: '次要说明与金属刻度' },
      { name: '铆接线', hex: '#57524F', role: 'border', note: '结构边缘与分割线' },
      { name: '警戒红', hex: '#E36A5F', role: 'accent', note: '警报、按钮与焦点' },
      { name: '旧铜', hex: '#B58A55', role: 'flare', note: '连接件与次级标记' },
    ],
    tags: ['红色警戒', '苏维埃', '重工业', '警戒红', '铁灰', '原创演绎'],
    sources: [
      {
        title: 'Command & Conquer Remastered Collection 官方网站',
        type: 'link',
        url: 'https://www.ea.com/games/command-and-conquer/command-and-conquer-remastered',
        detail: '版本范围：2020 年《命令与征服：红色警戒 重制版合集》',
        note: '官方页面仅用于确认作品和版本；本站未使用其截图、Logo、单位肖像或界面素材。',
      },
      {
        title: '苏维埃工业视觉分析（待补充）',
        type: 'pending',
        note: '待补充：加入可核验的美术资料与页码后替换本条，当前色板不作为官方设定引用。',
      },
    ],
    credits: {
      palette: 'Theme Atlas 编辑部（原创配色演绎）',
      story: 'Theme Atlas 编辑部（非官方同人创作）',
      graphics: 'Theme Atlas（原创 SVG）',
      license: '配色数据以 CC BY 4.0 释出',
      disclaimer:
        '本主题为非官方同人创作，仅用于配色研究与界面演示，与 Electronic Arts 无隶属、授权或合作关系。',
      imageLicence: '站内图形为原创 SVG，未使用任何游戏截图、Logo、单位肖像或界面素材。',
    },
    status: 'interpretation',
    plate: 'red-alert-soviet',
  },

  {
    slug: 'koprulu-frontier',
    title: '科普卢边境',
    subtitle: '工业装甲穿过边境，橙色信标在冷青暗面里闪烁',
    collection: 'game',
    game: 'starcraft',
    description: '钢铁蓝灰、军用橄榄、信号橙与冷青构成边境工业科技的节奏。',
    story:
      '泰伦方向的视觉线索来自边境据点、可维修的工业装甲和不断移动的军事设施。' +
      '本主题不绘制任何人物、单位或阵营标志，而是把“边境”理解成一套可拆装的结构：' +
      '蓝灰负责框架，橄榄绿进入表面，橙色信标负责让人找到下一处接点，' +
      '冷青则提示扫描与通信仍然在线。' +
      '所有颜色和结构均为 Theme Atlas 的原创非官方演绎。',
    inspiration:
      '工业装甲的蓝灰色作为大面积背景，军用橄榄被放进面板与次要结构，' +
      '信号橙承担主强调，冷青作为另一端的电子信号。' +
      '装甲分块、螺栓节奏和准星形状都来自基础几何，不复刻游戏内单位或 HUD。',
    designRationale:
      '橄榄色如果直接铺满会显得混浊，因此它只出现在中层，由深蓝灰和冷白把它夹住。' +
      '橙色高亮足够明确，但面积被限制在按钮、焦点和少量状态点；' +
      '冷青负责第二种信号，避免整套主题只有一种暖色发光。',
    palette: [
      { name: '边疆夜空', hex: '#0B1216', role: 'bg', note: '边境基地外侧的深蓝黑' },
      { name: '装甲橄榄', hex: '#1B2522', role: 'surface', note: '军用装甲与面板的暗橄榄' },
      { name: '舰队白', hex: '#EEF1E6', role: 'text', note: '略带暖意的冷白正文' },
      { name: '军布灰绿', hex: '#A6B18F', role: 'muted', note: '标签与次要说明' },
      { name: '结构钢', hex: '#465348', role: 'border', note: '装甲分块与结构线' },
      { name: '信标橙', hex: '#F29A42', role: 'accent', note: '按钮、焦点与战术信号' },
      { name: '通信青', hex: '#6ED7D0', role: 'flare', note: '扫描、通信与次级状态' },
    ],
    tags: ['星际争霸', '泰伦', '工业装甲', '科普卢', '信号橙', '原创演绎'],
    sources: [
      {
        title: 'Blizzard Entertainment · StarCraft 官方网站',
        type: 'link',
        url: 'https://starcraft.blizzard.com/',
        detail: '官方公开页面，仅用于确认作品与题材背景',
        note: '官方页面仅用于确认作品；本站未使用其截图、Logo、单位肖像或界面素材。',
      },
      {
        title: '泰伦工业视觉分析（待补充）',
        type: 'pending',
        note: '待补充：加入可核验的美术资料与页码后替换本条，当前色板不作为官方设定引用。',
      },
    ],
    credits: {
      palette: 'Theme Atlas 编辑部（原创配色演绎）',
      story: 'Theme Atlas 编辑部（非官方同人创作）',
      graphics: 'Theme Atlas（原创 SVG）',
      license: '配色数据以 CC BY 4.0 释出',
      disclaimer:
        '本主题为非官方同人创作，仅用于配色研究与界面演示，与 Blizzard Entertainment 无隶属、授权或合作关系。',
      imageLicence: '站内图形为原创 SVG，未使用任何游戏截图、Logo、单位肖像或界面素材。',
    },
    status: 'interpretation',
    plate: 'terran',
  },

  {
    slug: 'echoes-of-khala',
    title: '圣辉回响',
    subtitle: '对称几何在紫黑中展开，金色与灵能蓝彼此回响',
    collection: 'game',
    game: 'starcraft',
    description: '紫黑、金色、象牙白与灵能蓝组成精密、对称的古老高科技文明色序。',
    story:
      '星灵方向的灵感来自精密结构、仪式性的对称和古老科技对光的克制使用。' +
      '本主题不复制阵营徽章、角色或建筑设定，而是把这种秩序感改写为几何图形：' +
      '中心保持对称，金色描述结构骨架，象牙白承担阅读，灵能蓝只在不稳定的能量节点出现。' +
      '《星际争霸》的作品名和公开页面只用于标注题材来源，色值均为 Theme Atlas 原创演绎。',
    inspiration:
      '紫黑背景让金色可以被看作结构而不是装饰；面板继续使用低明度紫色，' +
      '维持空间的连续性。正文字形使用象牙白，避免冷白把主题推回普通科幻界面。' +
      '强调金用于按钮与焦点，灵能蓝作为次强调，表达能量连接与通信。',
    designRationale:
      '金色强调在紫黑上非常醒目，因此必须控制面积：它负责轮廓、轴线和主要操作，' +
      '不承担大面积底色。象牙白和紫色层负责长时间阅读，' +
      '蓝色只在能量节点和交互反馈处出现，避免三套高识别色互相争夺。',
    palette: [
      { name: '虚空紫黑', hex: '#100B18', role: 'bg', note: '古老空间中的紫黑背景' },
      { name: '圣殿暗紫', hex: '#21172F', role: 'surface', note: '低明度紫面板' },
      { name: '象牙光', hex: '#F3EDE2', role: 'text', note: '仪式器物般的暖白正文' },
      { name: '灵灰紫', hex: '#B6A8CA', role: 'muted', note: '注释与次要信息' },
      { name: '几何线', hex: '#4B3E5B', role: 'border', note: '结构边界与对称线' },
      { name: '圣辉金', hex: '#D9B65F', role: 'accent', note: '轴线、按钮、焦点与结构骨架' },
      { name: '灵能蓝', hex: '#75A9FF', role: 'flare', note: '能量节点与通信反馈' },
    ],
    tags: ['星际争霸', '星灵', '对称几何', '灵能', '金色', '原创演绎'],
    sources: [
      {
        title: 'Blizzard Entertainment · StarCraft 官方网站',
        type: 'link',
        url: 'https://starcraft.blizzard.com/',
        detail: '官方公开页面，仅用于确认作品与题材背景',
        note: '官方页面仅用于确认作品；本站未使用其截图、Logo、单位肖像或界面素材。',
      },
      {
        title: '星灵几何与灵能视觉分析（待补充）',
        type: 'pending',
        note: '待补充：加入可核验的美术资料与页码后替换本条，当前色板不作为官方设定引用。',
      },
    ],
    credits: {
      palette: 'Theme Atlas 编辑部（原创配色演绎）',
      story: 'Theme Atlas 编辑部（非官方同人创作）',
      graphics: 'Theme Atlas（原创 SVG）',
      license: '配色数据以 CC BY 4.0 释出',
      disclaimer:
        '本主题为非官方同人创作，仅用于配色研究与界面演示，与 Blizzard Entertainment 无隶属、授权或合作关系。',
      imageLicence: '站内图形为原创 SVG，未使用任何游戏截图、Logo、单位肖像或界面素材。',
    },
    status: 'interpretation',
    plate: 'protoss',
  },

  {
    slug: 'spore-tide',
    title: '虫群孢潮',
    subtitle: '甲壳与孢子覆盖边境，酸性绿光在暗莓紫中生长',
    collection: 'game',
    game: 'starcraft',
    description: '甲壳紫黑、暗莓紫、酸性绿与骨白描绘异星组织的蔓延与分裂。',
    story:
      '异虫方向的核心不是某只具体生物，而是“生长”本身：组织分叉、孢子扩散、' +
      '甲壳层叠，以及生物信号在潮湿黑暗里持续传播。' +
      '本主题因此采用不对称、有机的图形语法，让线条像脉络一样缓慢分叉；' +
      '所有图形均为原创 SVG，不描绘角色、单位，也不复刻任何阵营纹样。' +
      '游戏作品只作为题材来源标注，色值不代表官方设定。',
    inspiration:
      '紫黑背景像甲壳下的阴影，暗莓紫面板呈现湿润的组织层，' +
      '骨白用于正文与结构说明。酸性绿作为主强调，代表孢子信号与活性节点；' +
      '莓紫次强调用于脉络和边缘光，避免整套主题只剩一种荧光色。',
    designRationale:
      '有机主题容易堆满曲线，因此正文区域只保留清晰的层级和少量脉络线。' +
      '酸性绿在深紫底上有很强的辨识度，使用范围被限制在操作与焦点；' +
      '骨白保证长段落可读，暗莓紫则维持和背景的连续性。',
    palette: [
      { name: '甲壳黑紫', hex: '#130F16', role: 'bg', note: '甲壳下的近黑紫' },
      { name: '暗莓组织', hex: '#2A1830', role: 'surface', note: '湿润组织层的暗莓紫' },
      { name: '骨白', hex: '#EEE5DC', role: 'text', note: '骨与甲壳高光般的正文' },
      { name: '孢子灰紫', hex: '#B9A6B2', role: 'muted', note: '次要信息与注释' },
      { name: '脉络线', hex: '#52374E', role: 'border', note: '分叉脉络与结构边界' },
      { name: '酸性绿', hex: '#A9D95B', role: 'accent', note: '孢子活性、按钮与焦点' },
      { name: '莓紫光', hex: '#B85A96', role: 'flare', note: '组织边缘与次级信号' },
    ],
    tags: ['星际争霸', '异虫', '有机轮廓', '孢子', '酸性绿', '原创演绎'],
    sources: [
      {
        title: 'Blizzard Entertainment · StarCraft 官方网站',
        type: 'link',
        url: 'https://starcraft.blizzard.com/',
        detail: '官方公开页面，仅用于确认作品与题材背景',
        note: '官方页面仅用于确认作品；本站未使用其截图、Logo、单位肖像或界面素材。',
      },
      {
        title: '异虫有机视觉分析（待补充）',
        type: 'pending',
        note: '待补充：加入可核验的美术资料与页码后替换本条，当前色板不作为官方设定引用。',
      },
    ],
    credits: {
      palette: 'Theme Atlas 编辑部（原创配色演绎）',
      story: 'Theme Atlas 编辑部（非官方同人创作）',
      graphics: 'Theme Atlas（原创 SVG）',
      license: '配色数据以 CC BY 4.0 释出',
      disclaimer:
        '本主题为非官方同人创作，仅用于配色研究与界面演示，与 Blizzard Entertainment 无隶属、授权或合作关系。',
      imageLicence: '站内图形为原创 SVG，未使用任何游戏截图、Logo、单位肖像或界面素材。',
    },
    status: 'interpretation',
    plate: 'zerg',
  },
];

export const themes: Theme[] = themeData.map((theme) => {
  const promptDesign = promptDesigns[theme.slug];
  const previewDesign = previewDesigns[theme.slug];
  const syntax = syntaxPalettes[theme.slug] ?? fallbackSyntaxPalette(theme.palette);
  if (!promptDesign) throw new Error('Missing Prompt design for theme: ' + theme.slug);
  if (!previewDesign) throw new Error('Missing tool preview design for theme: ' + theme.slug);
  return { ...theme, promptDesign, previewDesign, syntax };
});


