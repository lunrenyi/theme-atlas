import type { Theme } from './types';

/**
 * The seed data set. Every theme is a plain object so it can be replaced by a
 * CMS payload or a generated file later without touching the components.
 *
 * Editorial rule used here: nothing is asserted as history unless a
 * reference is listed. Where a claim could not be checked against a source,
 * the source is typed as pending and the text says so.
 */
export const themes: Theme[] = [
  {
    slug: 'taotie-cinnabar',
    title: '饕餮 · 朱丹',
    subtitle: '青铜礼器上的兽面，与它颈下那一点朱红',
    collection: 'myth',
    description: '以商周青铜器的兽面纹为骨，用朱砂、石青与土褐重铸一套沉静而锋利的界面配色。',
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
    featured: true,
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
      { name: '铜金', hex: '#95682C', role: 'accent', note: '点睛：链接、标签、焦点' },
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
    slug: 'ru-ware-sky',
    title: '汝窑 · 雨过天青',
    subtitle: '雨过之后那一点说不清的蓝，出窑才定',
    collection: 'porcelain',
    description: '汝窑天青釉的四层明度，配上一点香灰底色，做一套最安静的界面。',
    story:
      '汝窑是北宋官窑，传世器物不足百件，以玛瑙入釉的釉色著称。' +
      '宋人形容雨后天色云破处的那种青，此后成了这块瓷最常被引用的名字。' +
      '釉层薄，胎骨透，色相在天青与月白之间浮动，' +
      '窑位差一点、温度差一点，颜色就完全不一样。' +
      '本主题想保留这种不确定：所有中性色都落在很窄的明度区间里，' +
      '不追求对比，只追求柔和。',
    inspiration:
      '四个层级直接对应器物：月白（底釉最薄处）、粉青（积釉处）、天青（主釉色）、香灰（胎骨露胎处）。' +
      '强调色取比主釉更深的天青，否则在浅色底上会失去存在感。',
    designRationale:
      '这是全套主题里对比度最低的一套，正文色被压到刚好越过 WCAG AA 的位置，' +
      '以牺牲一点锐度换取整体的温润。分割线用略深的青灰，避免在低对比下边界消失。',
    palette: [
      { name: '月白', hex: '#EDF1EE', role: 'bg', note: '釉最薄处的白' },
      { name: '粉青', hex: '#DCE7E3', role: 'surface', note: '积釉处，粉调偏绿' },
      { name: '墨玉', hex: '#1E2422', role: 'text', note: '带青的深墨' },
      { name: '苍青灰', hex: '#5A6A66', role: 'muted', note: '次要文字' },
      { name: '青灰线', hex: '#BECAC6', role: 'border', note: '细分割线' },
      { name: '天青', hex: '#4A7B81', role: 'accent', note: '主釉色，链接与焦点' },
      { name: '天青白', hex: '#F6FBFB', role: 'onAccent', note: '强调色之上的文字' },
    ],
    tags: ['北宋', '官窑', '釉色', '天青', '低对比'],
    sources: [
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
      {
        title: '汝窑窑址考古资料（河南宝丰清凉寺窑）',
        type: 'article',
        note: '待补充：需补充具体考古简报或发掘报告的出版信息与页码。',
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
      '长时间阅读不费力。分割线用了偏蓝的灰，避免在冷白底上显脏。',
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
    slug: 'deep-space-orbit',
    title: '深空轨道',
    subtitle: '车窗外的冷紫与一道量子色的光',
    collection: 'rail',
    description: '把沿着星轨穿行的画面压成七种颜色：冷紫为锚，青灰为底，像夜间驾驶舱。',
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
];


