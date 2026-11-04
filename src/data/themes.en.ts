/**
 * English text for every theme.
 *
 * Only prose is translated here. Hex values, semantic roles, slugs and the
 * source types stay in themes.ts, so the two languages can never drift apart
 * on anything that is actually data.
 *
 * The palette array is positional: entry i carries the English name and note
 * for the colour at index i of the Chinese palette.
 */
import type { Credits } from './types';

export interface ThemeTranslation {
  title: string;
  subtitle: string;
  description: string;
  story: string;
  inspiration: string;
  designRationale: string;
  tags: string[];
  palette: Array<{ name: string; note?: string }>;
  sources: Array<{ title?: string; detail?: string; note?: string }>;
  credits: Partial<Credits>;
}

const editorial = 'Theme Atlas editorial team';
const derived = 'Theme Atlas editorial team (original derivation)';
const fanText = 'Theme Atlas editorial team (unofficial fan interpretation)';
const licence = 'Palette data released under CC BY 4.0';
const originalSvg = 'All illustrations are original SVGs; no third-party imagery is used.';
const noOfficialArt = 'All illustrations are original SVGs; no official artwork is used.';
const fanDisclaimer =
  'This theme is an unofficial fan work, made for colour research and interface ' +
  'demonstration only. It is not affiliated with or endorsed by HoYoverse.';

export const themeTranslations: Record<string, ThemeTranslation> = {
  'pangu-creation': {
    title: 'Pangu · Creation of the World',
    subtitle: 'One stroke parts the cosmic egg, and clarity and turbidity gain up and down',
    description:
      'Egg-white and creation blue separate heaven and earth; first-light gold appears only at the first rift.',
    story:
      'The Pangu creation narrative is commonly traced back to Sanwu Liji, attributed to Xu Zheng ' +
      'of the Three Kingdoms Wu period. The original work is lost, and surviving fragments were ' +
      'preserved through quotations in encyclopedias such as Yiwen Leiju and Taiping Yulan. In the ' +
      'story, heaven and earth begin as an undifferentiated mass like an egg, with Pangu inside. ' +
      'After long ages, the clear and luminous rises to become heaven while the heavy and turbid ' +
      'settles as earth, giving the world its first vertical order. This theme does not reproduce ' +
      'any painted image of Pangu. Its core is the act of separation itself: a creation line, an ' +
      'orb not yet fully dispersed, and first-light gold in the rift.',
    inspiration:
      'Moon white and jade green-blue imagine the rising clear breath and settling turbid earth. ' +
      'Deep ink carries the ground and body text, creation blue carries primary interface actions, ' +
      'and first-light gold is restricted to the small accent of the opening moment. Public museum ' +
      'resources such as Henan Museum help frame early material culture; the SVG is an original ' +
      'abstraction and does not copy a museum object as a portrait of Pangu.',
    designRationale:
      'The light ground keeps the warmth of an eggshell, while a slightly jade surface separates ' +
      'the two primordial layers without heavy shadows. Body text is a low-saturation dark ink, the ' +
      'primary accent is a grounded blue-green, and gold remains a small signal. The code palette ' +
      'derives deeper blue, antique gold, mineral green and clay red from the same materials, giving ' +
      'syntax clear hierarchy without turning the theme neon.',
    tags: ['Pangu', 'Creation', 'Cosmic egg', 'Clear and turbid', 'Genesis'],
    palette: [
      { name: 'Primordial Egg White', note: 'Warm white before heaven and earth are separated' },
      { name: 'Clear-Turbid Jade', note: 'Pale jade panel between the rising and settling layers' },
      { name: 'Mysterious Ink', note: 'Deep body ink from the primordial depth' },
      { name: 'Rock Blue-Grey', note: 'Secondary text like stratified rock' },
      { name: 'Creation Line', note: 'Calm boundary at the first division' },
      { name: 'Creation Blue-Green', note: 'Primary actions, links and focus' },
      { name: 'Clear Breath White', note: 'Text on the blue-green accent' },
      { name: 'First Sun Gold', note: 'Small emphasis for the first light in the rift' },
    ],
    sources: [
      {
        title: 'Sanwu Liji (三五历纪)',
        detail: 'Attributed to Xu Zheng, Three Kingdoms Wu; lost work surviving in encyclopedic quotations',
        note: 'Key source for the Pangu creation, cosmic egg and clear/turbid division; quotations should be identified as reconstructed fragments.',
      },
      {
        title: 'Chinese Mythology (中国神话)',
        detail: 'Yuan Ke, People’s Literature Publishing House',
        note: 'A modern scholarly survey of Pangu traditions and their variants.',
      },
      {
        title: 'Henan Museum',
        detail: 'Public museum portal',
        note: 'A gateway to early Central Plains material culture; no specific object is claimed or reproduced as a Pangu image.',
      },
      {
        title: 'Taiping Yulan (太平御览)',
        detail: 'Compiled by Li Fang and others, Song dynasty',
        note: 'Preserves fragments of lost works including Sanwu Liji; quotations should be checked against a reconstruction.',
      },
    ],
    credits: {
      palette: editorial,
      story: editorial,
      graphics: 'Theme Atlas (original SVG)',
      license: licence,
      imageLicence: originalSvg,
    },
  },

  'xingtian-war-dance': {
    title: 'Xingtian · Shield and Axe Unbowed',
    subtitle: 'While shield and axe remain in hand, the war dance has not ended',
    description:
      'Dry earth holds the frame, war-ochre carries the relentless action, and cold steel-blue only grazes armour edges.',
    story:
      'The “Classic of the Great Wilderness: West” in the Classic of Mountains and Seas tells how ' +
      'Xingtian contended with the supreme deity for divine rule. After his head was cut off and ' +
      'buried at Mount Changyang, he continued to dance, using his nipples as eyes and navel as a ' +
      'mouth, holding a shield (gan) and axe (qi). The myth is not designed here as gore or a body ' +
      'spectacle. Its visual core is the crossed shield and axe, the cracked plain, and a dance that ' +
      'refuses to stop.',
    inspiration:
      'Warm plain beige and leather brown come from loess earth, wooden shields and old woven ' +
      'materials. War-ochre red evokes warrior pigment and ritual dance; cold steel-blue is reserved ' +
      'for metal edges and status nodes. The motif draws on the textual myth and the broader visual ' +
      'context of ancient weapons and martial dance, while the SVG itself is an original Theme Atlas ' +
      'abstraction.',
    designRationale:
      'To keep resistance forceful without becoming noisy, the background is a low-chroma warm ' +
      'earth colour and body text is dark scorched brown. The primary accent is a restrained clay ' +
      'red, with steel blue as the secondary colour. The syntax palette adds steel, bronze and dark ' +
      'violet on the same warm ground, preserving clear code hierarchy.',
    tags: ['Xingtian', 'Classic of Mountains and Seas', 'Shield and axe', 'War dance', 'Resistance'],
    palette: [
      { name: 'Wasteland Plain', note: 'Dry pale earth beneath Mount Changyang' },
      { name: 'Leather Brown', note: 'Panels like wood shield and old armour' },
      { name: 'Scorched Wood Ink', note: 'Primary text and incised lines' },
      { name: 'Dusty Weapon Grey', note: 'Secondary text in drifting sand' },
      { name: 'Earth-Crack Rule', note: 'Dry fissures and module boundaries' },
      { name: 'Shield-Axe Red', note: 'Axe, action and focus in clay red' },
      { name: 'Ritual Dance White', note: 'Text on the red accent' },
      { name: 'Cold Steel Blue', note: 'Blade edge and a small status colour' },
    ],
    sources: [
      {
        title: 'Classic of Mountains and Seas · Great Wilderness West',
        detail: 'Chinese Text Project public text',
        note: 'Source for Xingtian’s contest, beheading, burial at Changyang and continued shield-and-axe dance.',
      },
      {
        title: 'Classic of Mountains and Seas (山海经)',
        detail: 'Ancient text with a long transmission history and multiple modern annotated editions',
        note: 'Specific wording and imagery should be checked against annotated editions rather than read solely through later illustrations.',
      },
      {
        title: 'Chinese Mythology (中国神话)',
        detail: 'Yuan Ke, People’s Literature Publishing House',
        note: 'Context for modern interpretations of Xingtian and the myth’s transmission.',
      },
      {
        title: 'Henan Museum',
        detail: 'Public museum portal',
        note: 'A resource for ancient weapons and Central Plains material culture; the graphic does not depict a specific object.',
      },
    ],
    credits: {
      palette: editorial,
      story: editorial,
      graphics: 'Theme Atlas (original SVG)',
      license: licence,
      imageLicence: originalSvg,
    },
  },

  'qixi-magpie-bridge': {
    title: 'Qixi · Magpie Bridge Across the Milky Way',
    subtitle: 'The star river keeps its appointment, and one night each year becomes a crossing',
    description:
      'Deep river-blue holds the loom’s warp and weft; the bridge is linked by star points, with shuttle gold at the meeting place.',
    story:
      'Early imagery of the Cowherd and Weaver Girl appears in “Great East” in the Classic of ' +
      'Poetry, though the stellar imagery there is not identical to the later complete romance. From ' +
      'the Han and Wei periods onward, the separated lovers, the magpie bridge across the celestial ' +
      'river, and the needle-begging customs of Qixi gradually converged in poetry, folklore and ' +
      'festival practice. Rather than reducing Qixi to a generic heart or wedding image, this theme ' +
      'returns to three older visual clues: the galaxy, the geometry of a loom, and a bridge made of ' +
      'birds and star points.',
    inspiration:
      'Night blue and star-rock blue form the summer galaxy, moon-weave white provides starlight and ' +
      'fabric, and river blue traces the main path. Shuttle gold is restricted to small focal points, ' +
      'like a brief reflection as a golden shuttle crosses the threads. Qixi needle-begging customs ' +
      'are informed by public intangible-heritage resources; modern wedding imagery is deliberately ' +
      'avoided.',
    designRationale:
      'This is one of the few dark themes in Chinese Mythology, so body text uses a bright moon-weave ' +
      'tone while muted text still clears 4.5:1. Borders remain low-contrast like stellar mist. River ' +
      'blue is the primary action colour and shuttle gold is the secondary accent. The syntax palette ' +
      'uses pale blue, gold, rose and wisteria light, making code read like threads in a night sky ' +
      'rather than a generic neon-blue theme.',
    tags: ['Qixi', 'Cowherd and Weaver Girl', 'Milky Way', 'Magpie bridge', 'Needle-begging', 'Loom'],
    palette: [
      { name: 'Night Sky', note: 'Near-black blue of the Qixi night' },
      { name: 'Star Rock', note: 'Panel colour deep within the galaxy' },
      { name: 'Moon Weave', note: 'Body text like moonlit white fabric' },
      { name: 'Misty Star Grey', note: 'Distant star haze and supporting text' },
      { name: 'Sky Boundary', note: 'Low-light tracks and loom structure' },
      { name: 'River Blue', note: 'Galaxy path, links and focus' },
      { name: 'Deep Space Blue', note: 'Dark text on the river-blue accent' },
      { name: 'Shuttle Gold', note: 'Small glint of the golden shuttle and meeting node' },
    ],
    sources: [
      {
        title: 'Classic of Poetry · Lesser Ya · Great East',
        detail: 'Chinese Text Project public text',
        note: 'An early poetic source for the Cowherd and Weaver stellar imagery; later narrative details should not be projected back wholesale.',
      },
      {
        title: 'China Intangible Cultural Heritage Network',
        detail: 'Portal for Qixi customs and folk literature',
        note: 'A public resource for Qixi needle-begging, festival transmission and folklore; a more specific project page may be added as site sections change.',
      },
      {
        title: 'Chinese Mythology (中国神话)',
        detail: 'Yuan Ke, People’s Literature Publishing House',
        note: 'Context for how the Cowherd and Weaver Girl myth converged with folk festival traditions.',
      },
      {
        title: 'Jingchu Suishi Ji (荆楚岁时记)',
        detail: 'Zong Lin, Southern Dynasties Liang',
        note: 'An important source for traditional seasonal customs and Qixi needle-begging; read through a modern annotated edition.',
      },
    ],
    credits: {
      palette: editorial,
      story: editorial,
      graphics: 'Theme Atlas (original SVG)',
      license: licence,
      imageLicence: originalSvg,
    },
  },

  'eight-immortals-crossing': {
    title: 'Eight Immortals · Each Reveals Their Power',
    subtitle: 'They cross the same sea, but not with the same method',
    description:
      'Sea-green and crossing gold form eight cloud-wave paths, with the treasures kept as small surrounding signs.',
    story:
      'The saying “the Eight Immortals cross the sea, each revealing divine power” was shaped across ' +
      'folklore, drama, painting and fiction. Iron-Crutch Li, Zhongli Quan, Zhang Guolao, Lü Dongbin, ' +
      'He Xiangu, Lan Caihe, Han Xiangzi and Cao Guojiu come from different roles and traditions, and ' +
      'each crosses with a different object: gourd, fan, fish drum, sword, lotus, flower basket, flute ' +
      'or jade tablet. For an interface, the strongest structure is not a crowded figure scene but ' +
      '“eight directions, one destination”: cloud waves converge toward a centre while the eight signs ' +
      'stay restrained rather than becoming eight saturated character colours.',
    inspiration:
      'Warm paper white and sea-mist green come from cloud sea and tide, pine ink carries body text, ' +
      'and crossing-gold only touches the edges of the treasures. Public museum resources such as the ' +
      'Palace Museum offer ways to study Eight Immortals imagery in painting, textiles and decorative ' +
      'arts. The site copies no painting or object pattern; it abstracts the eight-part orbit, waves ' +
      'and object silhouettes.',
    designRationale:
      'This is a warm light theme built around structure. Sea-green is the primary colour and crossing ' +
      'gold marks small nodes, preventing the theme from becoming a multicoloured costume set. The ' +
      'syntax palette separates code through green, antique gold, moss, terracotta and indigo while a ' +
      'dark ink keeps ordinary text grounded.',
    tags: ['Eight Immortals', 'Crossing the sea', 'Treasures', 'Cloud sea', 'Folklore'],
    palette: [
      { name: 'Cloud Paper', note: 'Warm white above the cloud sea' },
      { name: 'Tide White', note: 'Pale panels of surf and cloud clusters' },
      { name: 'Pine Soot Ink', note: 'Body text and primary lines' },
      { name: 'Moss Rock Grey', note: 'Distant cloud waves and secondary text' },
      { name: 'Cloud-Wave Rule', note: 'Low-contrast boundaries in sea fog' },
      { name: 'Sea Promontory Green', note: 'Crossing path, buttons and focus' },
      { name: 'Pure White', note: 'Text on the sea-green accent' },
      { name: 'Crossing Gold', note: 'Treasure edges and a few node highlights' },
    ],
    sources: [
      {
        title: 'Journey of the East (东游记)',
        detail: 'Ming-dynasty supernatural novel; authorship and editions vary',
        note: 'The crossing story was formed jointly by fiction, drama and folklore, so no single text should be treated as the sole origin.',
      },
      {
        title: 'Chinese Mythology (中国神话)',
        detail: 'Yuan Ke, People’s Literature Publishing House',
        note: 'A survey of the Eight Immortals’ names and folk-myth transmission.',
      },
      {
        title: 'Palace Museum',
        detail: 'Public museum portal',
        note: 'A resource for Eight Immortals imagery across traditional painting, objects and decorative arts; no specific collection item is reproduced.',
      },
      {
        title: 'China Intangible Cultural Heritage Network',
        detail: 'Portal for folk literature and customs',
        note: 'Context for the continuation of Eight Immortals stories in regional performance and folk culture.',
      },
    ],
    credits: {
      palette: editorial,
      story: editorial,
      graphics: 'Theme Atlas (original SVG)',
      license: licence,
      imageLicence: 'All illustrations are original SVGs; no historical painting, museum image or film asset is used.',
    },
  },

  'nezha-lotus-flame': {
    title: 'Nezha · Lotus Flame Rebirth',
    subtitle: 'The lotus reshapes the body while the wind-fire wheels keep turning forward',
    description:
      'Lotus white and lotus red form a rebirth structure, with sea-blue holding the speed of the wind-fire wheels in check.',
    story:
      'In the familiar narrative of Investiture of the Gods, Nezha passes through the return of bone ' +
      'and flesh, then a lotus incarnation, before acting again through the Universe Ring, Armillary ' +
      'Silk and Wind-Fire Wheels. The Nezha figure did not begin as the youthful war god familiar ' +
      'today: the name and protective-deity elements can be traced through earlier Buddhist sources ' +
      'and were repeatedly reshaped by religion, fiction, drama and folk belief. This theme uses the ' +
      'most recognisable novel-based materials — lotus, wheels, silk sash and ring — without borrowing ' +
      'the design of any film or animation.',
    inspiration:
      'Lotus-petal white and cloud pink come from petals and warm jade; lotus red describes the wind-fire ' +
      'wheels and Armillary Silk, while sea-blue sets up the contrast with the Eastern Sea and water. ' +
      'The design does not depict the character or a media-specific pose. It uses original geometry for ' +
      'petals, wheel rings, flowing silk and the meeting of water and fire.',
    designRationale:
      'High-chroma lotus red is kept as an accent rather than covering the page, preserving the warmer, ' +
      'almost floral quality of the light ground. Sea-blue creates a cold counterpoint. The syntax palette ' +
      'separates lotus red, sea blue, bronze and rose violet so the code reflects the theme while retaining ' +
      'mature editor hierarchy.',
    tags: ['Nezha', 'Lotus incarnation', 'Wind-Fire Wheels', 'Armillary Silk', 'Investiture of the Gods'],
    palette: [
      { name: 'Lotus Petal White', note: 'Light ground of petals and warm jade' },
      { name: 'Ribbon Cloud Pink', note: 'Pale pink panels touched by the Armillary Silk' },
      { name: 'Dark Ink', note: 'Deep body text that stabilises the composition' },
      { name: 'Purple-Clay Grey', note: 'Secondary text in clay and dark lotus tones' },
      { name: 'Ribbon Edge', note: 'Soft boundaries like woven fabric' },
      { name: 'Lotus Flame Red', note: 'Wind-fire wheels, action and primary focus' },
      { name: 'True Flame White', note: 'Text on lotus-flame red' },
      { name: 'Sea-Tide Blue', note: 'Water, contrast and a small cold focal point' },
    ],
    sources: [
      {
        title: 'Investiture of the Gods (封神演义)',
        detail: 'Wikisource public-text portal',
        note: 'Used to check the familiar novel system of the lotus incarnation, Universe Ring, Armillary Silk and Wind-Fire Wheels.',
      },
      {
        title: 'Sanjiao Yuanliu Soushen Daquan (三教源流搜神大全)',
        detail: 'Ming compilation of religious and folk deity imagery; multiple editions survive',
        note: 'Helps distinguish pre-novel religious and folk sources from the later fictional Nezha image.',
      },
      {
        title: 'Chinese Mythology (中国神话)',
        detail: 'Yuan Ke, People’s Literature Publishing House',
        note: 'Context for Nezha’s evolution from Buddhist protective elements to a fictional character.',
      },
      {
        title: 'Palace Museum',
        detail: 'Public museum portal',
        note: 'A resource for traditional lotus, cloud and water motifs in objects and textiles; no collection item is reproduced.',
      },
    ],
    credits: {
      palette: editorial,
      story: editorial,
      graphics: 'Theme Atlas (original SVG)',
      license: licence,
      imageLicence: 'All illustrations are original SVGs; no film, animation, game or museum asset is used.',
    },
  },

  'yangjian-celestial-eye': {
    title: 'Yang Jian · All-Seeing Celestial Eye',
    subtitle: 'When the celestial eye opens, neither clouds nor mountain ridges can hide',
    description:
      'Cold metal lines and celestial-eye blue form a precise composition, with armour gold reserved for the focused instant.',
    story:
      'Belief in Erlang Shen has complex variants across texts, drama and religious worship. In Journey ' +
      'to the West, the Illustrious Sage Erlang fights Sun Wukong; in Investiture of the Gods, Yang Jian ' +
      'is widely known through his nine-and-eight transformations, three-pointed double-edged spear and ' +
      'the Howling Celestial Dog. Other materials, including the Precious Scroll of Erlang, preserve a folk ' +
      'religious lineage. These traditions should not be flattened into one identical version. This theme ' +
      'selects the stable visual cues of later popular storytelling: the celestial eye, mountain clouds, ' +
      'the central axis of the spear, and the calm precision of an all-seeing gaze.',
    inspiration:
      'Cloud-ridge white and cold-jade blue come from mountain mist and polished metal, while deep blue ink ' +
      'carries text. Celestial-eye blue is the only clear beam, and armour gold is used for rings, plates ' +
      'and a small verdict point. The graphic is an original abstraction; it does not use a film, game or ' +
      'temple-sculpture image of Yang Jian.',
    designRationale:
      'The high-key light palette stays cool, with muted blue-grey lifted enough for small AA text. Borders ' +
      'behave like clouds and measurement lines and remain quiet. Eye-blue handles actions and focus, while ' +
      'gold marks a small judgement signal. The code palette separates cool blue, antique gold, sea-green ' +
      'and dark red for precision without monotony.',
    tags: ['Yang Jian', 'Erlang Shen', 'Celestial eye', 'Three-pointed spear', 'Mountains'],
    palette: [
      { name: 'Cloud Ridge White', note: 'Cool white ground above high mountain clouds' },
      { name: 'Cold Jade Blue', note: 'Panels like cold jade and reflected metal' },
      { name: 'Mystic Blue Ink', note: 'Deep blue-black body text and ridges' },
      { name: 'Distant Peak Grey', note: 'Far mountains, clouds and secondary text' },
      { name: 'Cloud Realm Silver Rule', note: 'Calm measurement and outline lines' },
      { name: 'Celestial Eye Blue', note: 'The eye, actions and primary focus' },
      { name: 'Sky Light White', note: 'Text on celestial-eye blue' },
      { name: 'Armour Gold', note: 'Armour plates, spear rings and verdict nodes' },
    ],
    sources: [
      {
        title: 'Journey to the West (西游记)',
        detail: 'Wikisource public-text portal',
        note: 'One source for the popular Erlang narrative and his contest with Sun Wukong; it should be read separately from the Yang Jian tradition in Investiture of the Gods.',
      },
      {
        title: 'Investiture of the Gods (封神演义)',
        detail: 'Wikisource public-text portal',
        note: 'A major popular-fiction source for Yang Jian and the three-pointed double-edged spear.',
      },
      {
        title: 'Precious Scroll of Erlang (二郎宝卷)',
        detail: 'Ming folk-religious precious scroll; surviving and modern editions require separate collation',
        note: 'Shows that Erlang belief also includes a folk-religious lineage not fully explained by the novels.',
      },
      {
        title: 'Palace Museum',
        detail: 'Public museum portal',
        note: 'A resource for traditional armour, mountain and cloud motifs; no specific statue or collection object is reproduced.',
      },
    ],
    credits: {
      palette: editorial,
      story: editorial,
      graphics: 'Theme Atlas (original SVG)',
      license: licence,
      imageLicence: 'All illustrations are original SVGs; no film, game, statue or museum asset is used.',
    },
  },

  'taotie-cinnabar': {
    title: 'Taotie · Cinnabar',
    subtitle: 'The beast mask on a bronze ritual vessel, and the touch of cinnabar below it',
    description:
      'Bronze holds the frame quiet; cinnabar shows its edge in a single stroke.',
    story:
      'The name taotie appears in pre-Qin texts, and the beast mask turns up in large ' +
      'numbers on ritual bronzes from the late Shang to the early Western Zhou: staring ' +
      'eyes, a wide mouth, a body that spreads towards both ends, ornament following the ' +
      'curve of the vessel wall until almost no ground is left bare. It was never a gentle ' +
      'motif — the decoration of that period carried intimidation and ritual, pinning an ' +
      'invisible order onto a visible object. This theme translates that dense, ordered ' +
      'structure into an interface: a ground of paper aged by time, graphics kept to thin ' +
      'lines, and a single deliberate stroke of cinnabar.',
    inspiration:
      'The colours come from three checkable material clues: cinnabar (mercuric sulphide, ' +
      'HgS), the pure red seen on Han dynasty pictorial stones and lacquerware; azurite ' +
      '(copper carbonate), the cool blue that appears in bronze inlay and painted ' +
      'decoration; and the umber left behind in the crevices of corroded metal. The ' +
      'ornament itself reproduces no specific vessel — it keeps only the structural logic ' +
      'of a mask plus a key-fret band.',
    designRationale:
      'The ground is deliberately desaturated so that cinnabar stays the only high-chroma ' +
      'anchor. Body text uses a warm ink black rather than pure black, which keeps it from ' +
      'looking harsh on paper. Azurite acts as the secondary accent, mainly for links and ' +
      'focus states. Body and secondary text are checked against WCAG AA, and every swatch ' +
      'is labelled with the semantic role it fills.',
    tags: ['Shang–Zhou', 'Bronze ware', 'Ornament', 'Mineral pigment', 'Warm'],
    palette: [
      { name: 'Xuan Paper', note: 'Paper white oxidised with age, faintly warm' },
      { name: 'Plain Silk', note: 'Panel ground, one step deeper than the background' },
      { name: 'Ink Black', note: 'Warm body text rather than absolute black' },
      { name: 'Ochre Brown', note: 'Secondary explanatory text' },
      { name: 'Ash Rule', note: 'Dividers and outlines' },
      { name: 'Cinnabar', note: 'Primary accent: buttons, links, focus' },
      { name: 'Rice White', note: 'Text on the accent colour' },
    ],
    sources: [
      {
        title: 'Lüshi Chunqiu (吕氏春秋)',
        detail: 'Compiled by Lü Buwei’s retainers in the Qin period; received edition in 26 juan',
        note:
          'One of the important pre-Qin attestations of the word taotie; the exact quoted ' +
          'passage is still to be collated word by word.',
      },
      {
        title: 'Shuowen Jiezi (说文解字)',
        detail: 'Xu Shen, Han dynasty',
        note:
          'Consult the entries on characters such as 餮 (tiè) and 飧 (sūn) to understand the ' +
          'semantic history of gluttony.',
      },
      {
        title: 'Chinese Mythology (中国神话)',
        detail: 'Yuan Ke, People’s Literature Publishing House',
        note:
          'Surveys the names and origins of mythical figures in classical texts, which ' +
          'helps check how the imagery was transmitted.',
      },
      {
        title: 'Five Thousand Years of Chinese Art (中国美术五千年)',
        detail: 'Edited by Yang Qi',
        note:
          'Chapters on the materials and colours of bronze ornament, lacquer and silk painting.',
      },
      {
        title: 'Tiangong Kaiwu (天工开物) · Metallurgy',
        detail: 'Song Yingxing, Ming dynasty',
        note: 'Records the gathering and use of cinnabar (mercuric sulphide).',
      },
    ],
    credits: {
      palette: editorial,
      story: editorial,
      graphics: 'Theme Atlas (original SVG)',
      license: licence,
      imageLicence: originalSvg,
    },
  },

  'nuwa-five-stones': {
    title: 'Nuwa · Five-Coloured Stones',
    subtitle: 'The stone that mended the sky, its colours written down in the Huainanzi',
    description:
      'The five-coloured stones of Nuwa as the narrative spine, with azurite and cinnabar ' +
      'balancing each other on a cool white ground.',
    story:
      'The “Lie revealed” chapter of the Huainanzi records that Nuwa refined five-coloured ' +
      'stones to mend the azure sky and cut the legs of the giant turtle to set the four ' +
      'pillars. The five colours — blue, red, yellow, white and black — correspond to the ' +
      'five directions and the five virtues. The most interesting part of the tale is its ' +
      'action: repairing an incomplete world into a whole shape. The interface logic here ' +
      'comes from the same place — a large neutral cool white carries the sky, and the two ' +
      'saturated colours appear only in the few positions that need to be seen, with ' +
      'everything else left to the empty space around them.',
    inspiration:
      'The main colour is azurite (copper carbonate hydroxide, Cu3(CO3)2(OH)2), matching ' +
      'the cool blue of painted decoration in the bronze era; the secondary accent is ' +
      'cinnabar red from the hematite family (Fe2O3). The other three of the five colours ' +
      '— yellow, white and black — are not promoted to accents; they are folded into the ' +
      'background, panel and text levels instead.',
    designRationale:
      'The ground is a cool grey-white, deliberately pulling away from the warmer themes in ' +
      'the myth collection. The panel uses a cooler green-grey, and body text is a deep ink ' +
      'with a cyan cast, so the whole set stays cool and the single high-chroma colour ' +
      'reads like the moment the mending stone is finally noticed.',
    tags: ['Kunlun', 'Five colours', 'Mineral pigment', 'Cool', 'Mending the sky'],
    palette: [
      { name: 'Pale Grey', note: 'A sky-like cool grey-white' },
      { name: 'Plain Jade', note: 'Panel ground, a step cooler still' },
      { name: 'Dark Cyan', note: 'Body text with a cyan cast' },
      { name: 'Green Grey', note: 'Secondary text and notes' },
      { name: 'Jade Rule', note: 'Cool-toned dividers' },
      { name: 'Azurite', note: 'Primary accent: links, focus, buttons' },
      { name: 'Frost White', note: 'Text on the accent colour' },
    ],
    sources: [
      {
        title: 'Huainanzi (淮南子)',
        detail: 'Compiled by Liu An and others in the Western Han; “Lie revealed” chapter',
        note:
          'The source of “Nuwa refined five-coloured stones to mend the azure sky”. The ' +
          'verbatim quotation is still to be checked against the Zhonghua Book Company ' +
          'punctuated edition.',
      },
      {
        title: 'Classic of Mountains and Seas (山海经)',
        detail: 'Compiled over the Han period from mixed sources',
        note:
          'Its accounts of the mountains and deities around Kunlun help build the spatial ' +
          'imagery behind the five directional colours.',
      },
      {
        title: 'Chinese Mythology (中国神话)',
        detail: 'Yuan Ke, People’s Literature Publishing House',
        note: 'A survey of the motifs and textual sources of the Nuwa myth.',
      },
      {
        title: 'Kaogong Ji (考工记)',
        detail: 'A chapter of the Zhouli, compiled between the Warring States and early Han',
        note:
          'Ancient institutional records of the five colours, the six ritual jewels and ' +
          'painting practice, which corroborate the five-direction scheme.',
      },
    ],
    credits: {
      palette: editorial,
      story: editorial,
      graphics: 'Theme Atlas (original SVG)',
      license: licence,
      imageLicence: originalSvg,
    },
  },

  'baize-omens': {
    title: 'Baize · Album of Auspicious Beasts',
    subtitle: 'The beast that knows the name of everything, painted on old silk',
    description:
      'The colouring logic of Song dynasty albums of auspicious beasts moved into an ' +
      'interface: a low-chroma silk ground, golden-brown outlines, a few touches of cinnabar.',
    story:
      'Baize is an auspicious beast of legend. A fragment of the Xuanyuan Benji records ' +
      'that the Yellow Emperor met Baize while touring and mounted; Baize enumerated the ' +
      'words of the spirits and monsters. It never fights — its office is to remember the ' +
      'name of every thing in the world. From the Song dynasty onwards, the imperial painting ' +
      'studios recorded auspicious creatures in albums — Baize, Pixiu, Tianlu, Suanni — drawn ' +
      'with the finest brushwork and restrained colour on silk. This theme borrows that ' +
      'documentary character: dense with information, but with room left to breathe ' +
      'everywhere.',
    inspiration:
      'The colours follow the usual layers of colour on silk: a plain silk ground, a panel ' +
      'tone of darkened old paper, the beast drawn in ink lines, and small accents of ' +
      'antique gold and cinnabar. Compared with the taotie theme the hues sit warmer and ' +
      'the chroma lower, and the accent moves to antique gold so that neither copper ' +
      'verdigris nor cinnabar is repeated.',
    designRationale:
      'This is a low-chroma theme: every neutral sits within a narrow band of lightness, so ' +
      'the layout is divided by hairlines rather than by blocks of colour. Antique gold is ' +
      'the primary accent, used only on link underlines, focus rings and small labels, ' +
      'so that it always reads as a highlight rather than the subject.',
    tags: ['Auspicious beasts', 'On silk', 'Song painting', 'Low chroma', 'Gold and umber'],
    palette: [
      { name: 'Plain Silk', note: 'Aged silk ground, soft and warm' },
      { name: 'Aged Paper', note: 'Panel and card ground' },
      { name: 'Ink', note: 'Body text the colour of an ink line' },
      { name: 'Sandalwood Brown', note: 'Colophons and annotations' },
      { name: 'Silk Rule', note: 'The fine ruling lines on silk' },
      { name: 'Antique Gold', note: 'Highlight: links, labels, focus' },
      { name: 'Plain White', note: 'Text on the accent colour' },
    ],
    sources: [
      {
        title: 'Xuanyuan Benji (轩辕本纪)',
        detail: 'An ancient chronicle, long lost and surviving only in encyclopedic quotations',
        note:
          'The story of Baize naming the spirits comes from a reconstructed text; the ' +
          'original is lost, so any citation should name the edition used.',
      },
      {
        title: 'Taiping Yulan (太平御览)',
        detail: 'Compiled by Li Fang and others, Song dynasty',
        note:
          'Preserves quotations from many lost works and is useful for checking fragments ' +
          'of the Xuanyuan Benji.',
      },
      {
        title: 'Chinese Mythology (中国神话)',
        detail: 'Yuan Ke, People’s Literature Publishing House',
        note: 'A survey of how the imagery of auspicious beasts such as Baize changed over time.',
      },
      {
        title: 'Five Thousand Years of Chinese Art (中国美术五千年)',
        detail: 'Edited by Yang Qi',
        note: 'Materials and technique of Song court painting and colour on silk.',
      },
      {
        title: 'Song dynasty album of auspicious beasts (catalogue of objects)',
        note:
          'Pending: the specific museum album and its catalogue number have to be confirmed ' +
          'before this entry is replaced.',
      },
    ],
    credits: {
      palette: editorial,
      story: editorial,
      graphics: 'Theme Atlas (original SVG)',
      license: licence,
      imageLicence: originalSvg,
    },
  },

  'qitian-pojie': {
    title: 'The Great Sage · Unbound',
    subtitle: 'Born of stone. Bound by nothing.',
    description:
      'Stone, dark iron, gilt gold and ember-red converge beneath the cool sweep of cloud.',
    story:
      'From the moment the immortal stone split open, Sun Wukong was never content with ' +
      'the place the heavens had assigned him. The rock of Flower-Fruit Mountain, the ' +
      'iron of the Dragon King\'s arsenal, the gold of his crown and armour, and the ' +
      'banner that named him Great Sage Equal to Heaven supply the materials for this ' +
      'palette. Nothing here is copied from any screen version of the legend: the colours ' +
      'are an original reading of the imagery in Journey to the West, rearranged so that ' +
      'defiance and freedom become something an interface can actually show.',
    inspiration:
      'Each colour comes from something the text actually names: the stone of ' +
      'Flower-Fruit Mountain that the Monkey King was born from; the iron of the staff ' +
      'he takes from the Dragon King\'s arsenal and the gold bands around it; the gilt ' +
      'the eye reads in his crown and armour; and the cold white of the cloud he rides. ' +
      'The banner that names him Great Sage Equal to Heaven maps to no colour of its ' +
      'own — it supplies an attitude, a claim of rank. Ember vermilion is the one ' +
      'addition Theme Atlas makes: the novel never gives that banner a colour, so the ' +
      'red stands for motion rather than description. The values are an original Theme ' +
      'Atlas derivation from that imagery — not the official colours of any film, ' +
      'animation or game adaptation.',
    designRationale:
      'Dark iron holds the ground. Body text is the cold white of cloud, and secondary ' +
      'text uses celestial blue, lifted one step from #58788A to #86A6B8 so that small ' +
      'type still clears WCAG AA against the dark ground. Stone grey draws the rules ' +
      'and the outlines. Gilt gold is the primary accent — buttons, links, focus — while ' +
      'ember vermilion is held back as a secondary accent for flames, alerts and the one ' +
      'instant that must be seen, never as a field. Text on the accent falls back to the ' +
      'ground colour, which is also the darkest ink this gold can carry.',
    tags: [
      'Sun Wukong',
      'Great Sage Equal to Heaven',
      'Golden cudgel',
      'Stone Monkey',
      'Auspicious cloud',
      'Breaking bounds',
    ],
    palette: [
      { name: 'Dark Iron', note: 'The cold weight of a weapon, and the ink on the gold' },
      { name: 'Flower-Fruit Brown', note: 'Panel ground, the warmth of earth and bark' },
      { name: 'Cloud White', note: 'Headings and body text, cold white with room to breathe' },
      { name: 'Celestial Blue', note: 'Captions and notes; lifted from #58788A to clear AA' },
      { name: 'Stone', note: 'Dividers and outlines, the neutral grey of rock' },
      { name: 'Gilt Gold', note: 'Primary accent: buttons, links, focus' },
      { name: 'Ember Vermilion', note: 'Secondary accent: sparks, alerts, a single decisive moment' },
    ],
    sources: [
      {
        title: 'Journey to the West, Chapter 1 (西游记 · 第一回)',
        detail: 'Public text on Wikisource',
        note:
          'The stone that splits, the stone that becomes a monkey, and the gathering of ' +
          'the troop on Flower-Fruit Mountain — the source of the stone imagery.',
      },
      {
        title: 'Journey to the West, Chapter 3 (西游记 · 第三回)',
        detail: 'Public text on Wikisource',
        note:
          'The Dragon King offers the staff that pins the sea and the Monkey King takes ' +
          'it as his golden cudgel: an iron shaft bound with gold at both ends, ' +
          'inscribed with the weight it carries. This is where dark iron and gilt gold ' +
          'meet in the palette.',
      },
      {
        title: 'Journey to the West, Chapter 4 (西游记 · 第四回)',
        detail: 'Public text on Wikisource',
        note:
          '“What is the harm in calling myself Great Sage Equal to Heaven?”, the banner ' +
          'bearing those four characters, and the descriptions of the armour and crown ' +
          'he wears.',
      },
      {
        title: 'Journey to the West (西游记)',
        detail: 'Ming dynasty; traditionally attributed to Wu Cheng\'en, authorship still discussed',
        note:
          'Every image quoted here is taken from the novel itself, not from the ' +
          'storyteller\'s tradition, opera or any screen adaptation.',
      },
      {
        title: 'Metals and pigments behind the gold and the red (to be added)',
        note:
          'Still to be added: the link between gilt gold and ember vermilion and specific ' +
          'minerals and workshop processes has to be checked one by one before this ' +
          'entry is replaced.',
      },
    ],
    credits: {
      palette: derived,
      story: editorial,
      graphics: 'Theme Atlas (original SVG)',
      license: licence,
      imageLicence: originalSvg,
    },
  },

  'ru-ware-sky': {
    title: 'Ru Ware · Sky After Rain',
    subtitle: 'That indefinable blue after the rain, fixed only when the kiln opens',
    description:
      'Glaze laid down in quiet layers — warm, restrained, never competing.',
    story:
      'Ru ware was an imperial kiln of the Northern Song; fewer than a hundred pieces ' +
      'survive, and it is famous for a glaze in which agate was ground and mixed into the ' +
      'body. Song writers described the blue that appears when the sky breaks after rain, ' +
      'and that became the name this porcelain is most often quoted by. The glaze layer is ' +
      'thin, the body shows through, and the hue drifts between sky blue and moon white; a ' +
      'different kiln position or a slightly different temperature produces a completely ' +
      'different colour. This theme keeps that uncertainty: all the neutrals sit inside a ' +
      'very narrow band of lightness, chasing softness rather than contrast.',
    inspiration:
      'The four levels map straight onto the object: moon white (where the glaze is ' +
      'thinnest), powder blue (where the glaze pools), sky blue (the main glaze colour) and ' +
      'incense ash (where the body is left bare). The accent is a deeper shade of the same ' +
      'sky blue, because the main glaze would otherwise lose its presence on a pale ground.',
    designRationale:
      'This is the lowest-contrast theme in the archive: body text is pushed down to just ' +
      'past the WCAG AA threshold, trading a little sharpness for an overall warmth. ' +
      'Dividers use a slightly deeper blue-grey so that edges do not disappear in the ' +
      'low-contrast scheme.',
    tags: ['Northern Song', 'Imperial kiln', 'Glaze', 'Sky blue', 'Low contrast'],
    palette: [
      { name: 'Moon White', note: 'The white where the glaze is thinnest' },
      { name: 'Powder Blue', note: 'Where the glaze pools, a soft green cast' },
      { name: 'Ink Jade', note: 'A deep ink with a blue-green cast' },
      { name: 'Pale Blue-Grey', note: 'Secondary text' },
      { name: 'Blue-Grey Rule', note: 'Fine dividers' },
      { name: 'Sky Blue', note: 'The main glaze colour: links and focus' },
      { name: 'Sky Blue White', note: 'Text on the accent colour' },
    ],
    sources: [
      {
        title: 'A History of Chinese Ceramics (中国陶瓷史)',
        detail: 'Feng Xianming',
        note: 'Dates, glaze materials and craft background of the named Song kilns.',
      },
      {
        title: 'Yinliuzhai Shuoci (饮流斋说瓷)',
        detail: 'Ji Yuansou (Chen Liu), Qing dynasty',
        note:
          'A classic Qing-era discussion of porcelain that records how Ru and Jun glazes were ' +
          'described and appraised in the Ming and Qing periods.',
      },
      {
        title: 'Taoya (陶雅)',
        detail: 'Chen Jieqi, Qing dynasty',
        note:
          'A catalogue of famous wares by form and glaze colour, useful for tracing how ' +
          'phrases such as “sky blue after rain” travelled.',
      },
      {
        title: 'Archaeological material from the Ru kiln site (Qingliangsi kiln, Baofeng, Henan)',
        note:
          'Pending: the publication details and page numbers of the excavation report still ' +
          'have to be added.',
      },
    ],
    credits: {
      palette: editorial,
      story: editorial,
      graphics: 'Theme Atlas (original SVG)',
      license: licence,
      imageLicence: originalSvg,
    },
  },

  'jun-ware-violet': {
    title: 'Jun Ware · Rose Purple',
    subtitle: 'Kiln transmutation cannot be controlled, so every firing is a one-off',
    description:
      'The kiln-born purple and crab-apple red of Jun ware, dramatic but held in check by ' +
      'a rice-white ground and a lotus-root panel.',
    story:
      'Jun ware became famous in the Song dynasty for entering the kiln in one colour and ' +
      'leaving in many. Copper separates out in a reducing atmosphere, and the colour shifts ' +
      'with kiln position, body thickness and glaze depth: rose purple, crab-apple red, ' +
      'earthworm tracks in the mud, blue-grey and cream. That unpredictability is both its ' +
      'charm and its problem, because an interface needs to be predictable. This theme ' +
      'keeps the uncontrollable part in the story and in the middle of the palette; what ' +
      'actually reaches the interface are the tamed layers.',
    inspiration:
      'The ground takes the cream end of the kiln range, seen where Jun glaze thins at the ' +
      'rim; the panel takes a lotus-root purple; the accent is a deepened shade of the rose ' +
      'purple. Crab-apple red is not used as an accent but appears as a short fading band ' +
      'at the top of a card.',
    designRationale:
      'This is the only set in the porcelain collection with a clear violet cast, so the ' +
      'ground has to stay neutral enough: rice white and lotus root sandwich the violet so ' +
      'the interface does not turn heavy. Body text uses a deep ink with a violet cast ' +
      'rather than pure black, which keeps text and panels in the same family.',
    tags: ['Song dynasty', 'Jun kiln', 'Kiln transmutation', 'Rose purple', 'Glaze'],
    palette: [
      { name: 'Rice White', note: 'The cream end of the kiln range' },
      { name: 'Lotus Root', note: 'A pale panel ground with a violet cast' },
      { name: 'Ink Purple', note: 'A deep ink with a violet cast' },
      { name: 'Grey Purple', note: 'Secondary text' },
      { name: 'Clay Rule', note: 'Clay-coloured dividers' },
      { name: 'Rose Purple', note: 'A deepened value of the kiln purple' },
      { name: 'Lotus White', note: 'Text on the accent colour' },
    ],
    sources: [
      {
        title: 'A History of Chinese Ceramics (中国陶瓷史)',
        detail: 'Feng Xianming',
        note: 'Jun firing technique, the mechanism behind copper red, and the kiln sites.',
      },
      {
        title: 'Yinliuzhai Shuoci (饮流斋说瓷)',
        detail: 'Ji Yuansou (Chen Liu), Qing dynasty',
        note: 'Records and critical vocabulary for kiln transmutation and violet glazes.',
      },
      {
        title: 'Taoya (陶雅)',
        detail: 'Chen Jieqi, Qing dynasty',
        note: 'A catalogue of Jun wares and the names given to their glaze colours.',
      },
    ],
    credits: {
      palette: editorial,
      story: editorial,
      graphics: 'Theme Atlas (original SVG)',
      license: licence,
      imageLicence: originalSvg,
    },
  },

  'jingdezhen-blue-white': {
    title: 'Jingdezhen · Blue and White',
    subtitle: 'Cobalt painted on white porcelain — the whiter the body, the bluer the line',
    description:
      'The depth of Sumali cobalt against the clean white of shadowy-green porcelain, with ' +
      'a set of blue-cast neutrals: the most tool-like of the porcelain themes.',
    story:
      'When Jingdezhen fired mature blue and white in the Yuan dynasty, it used an imported ' +
      'cobalt rich in iron, which pooled under the glaze into black-brown speckles known as ' +
      'iron-rust spots or tin sheen. Cobalt was expensive and the kiln was hard to control, ' +
      'so a fine Yuan blue-and-white bowl was never a rational product. From the Ming ' +
      'dynasty onwards, when domestic cobalt appeared and colours shifted towards the ' +
      'greyer Pingdianqing and Huixin recipes, blue and white turned from a rare material ' +
      'into a reproducible image language. This theme takes the character of that second ' +
      'stage: a clear blue-and-white relationship, which suits a working interface that has ' +
      'to be looked at for a long time.',
    inspiration:
      'The background is shadowy-green white, the slightly blue porcelain white; the panel ' +
      'is one step deeper in the blue-and-white glaze; the accent is the deep cobalt of ' +
      'blue-and-white shading. Body text carries a blue cast rather than neutral black, so ' +
      'the screen reads more like a shard of porcelain than like a monitor.',
    designRationale:
      'This set has the highest contrast of the porcelain collection — the lightness ' +
      'difference between body text and background approaches 90%, so long reading stays ' +
      'easy. Dividers use a blue-cast grey so that they do not look grubby on a cold white ' +
      'ground.',
    tags: ['Yuan blue and white', 'Cobalt', 'Jingdezhen', 'Cool', 'Tool-like'],
    palette: [
      { name: 'Yingqing White', note: 'The white of shadowy-green porcelain, faintly blue' },
      { name: 'Celadon Glaze', note: 'Panel ground' },
      { name: 'Ink Blue', note: 'A deep ink with a blue cast' },
      { name: 'Indigo Grey', note: 'Secondary text' },
      { name: 'Blue-White Rule', note: 'Dividers with a blue cast' },
      { name: 'Blue and White', note: 'Deep cobalt: links and focus' },
      { name: 'Shadow White', note: 'Text on the accent colour' },
    ],
    sources: [
      {
        title: 'A History of Chinese Ceramics (中国陶瓷史)',
        detail: 'Feng Xianming',
        note: 'The ceramic industry of Jingdezhen through its periods, and the phasing of blue and white.',
      },
      {
        title: 'Yinliuzhai Shuoci (饮流斋说瓷)',
        detail: 'Ji Yuansou (Chen Liu), Qing dynasty',
        note:
          'Critical records of how blue-and-white colour and the iron-rust spots of Sumali ' +
          'cobalt were appraised over the dynasties.',
      },
      {
        title: 'Taoya (陶雅)',
        detail: 'Chen Jieqi, Qing dynasty',
        note: 'A catalogue of blue-and-white wares, their shading technique and brushwork.',
      },
      {
        title: 'Tiangong Kaiwu (天工开物) · The Official Kilns (porcelain making)',
        detail: 'Song Yingxing, Ming dynasty',
        note: 'Records of Ming dynasty Jingdezhen porcelain production and the use of cobalt.',
      },
    ],
    credits: {
      palette: editorial,
      story: editorial,
      graphics: 'Theme Atlas (original SVG)',
      license: licence,
      imageLicence: originalSvg,
    },
  },

  'deep-space-orbit': {
    title: 'Deep-Space Orbit',
    subtitle: 'Cold violet beyond the window, and one streak of quantum colour',
    description:
      'Cold violet and blue-grey, the way a far-off sea of stars looks through a window.',
    story:
      'In the world of Honkai: Star Rail, a train travels along stellar tracks between ' +
      'worlds, and the Trailblazer’s task is a constant choice of path. The setting is ' +
      'naturally suited to colour design: a stellar track is a line that can actually be ' +
      'drawn, the carriage interior is dark, and outside there are two kinds of glow, one ' +
      'violet and one teal. This theme takes only that picture — no characters, no ' +
      'character art, no interface assets. Every graphic is an abstract orbit redrawn for ' +
      'Theme Atlas.',
    inspiration:
      'The ground is the deep blue-black of the train interior, the panel the cold grey of ' +
      'the window frames, and the accent the quantum violet of the outer stellar track; ' +
      'the secondary accent is a teal glow mixed from violet and the ground. Text is a ' +
      'slightly blue white, imitating light reflected in the carriage glass.',
    designRationale:
      'Hierarchy is the thing most often lost in a dark theme: against a pure black ground ' +
      'the panels disappear. So the panel sits about 5% lighter than the background, ' +
      'dividers one step lighter again, and every boundary is separated by lightness ' +
      'rather than by hue. The accent is guaranteed to keep enough contrast on the dark ' +
      'ground.',
    tags: ['Fan work', 'Sci-fi', 'Dark', 'Stellar tracks', 'Original interpretation'],
    palette: [
      { name: 'Deep Space', note: 'The blue-black outside the window' },
      { name: 'Cabin', note: 'Interior panel ground' },
      { name: 'Starlight White', note: 'Text light reflected in the glass' },
      { name: 'Cold Grey', note: 'Secondary information' },
      { name: 'Cabin Rule', note: 'Structural dividers' },
      { name: 'Quantum Violet', note: 'The glow of the stellar track' },
      { name: 'Violet White', note: 'Text on the accent colour' },
    ],
    sources: [
      {
        title: 'Honkai: Star Rail official website',
        detail: 'Official public page, used only as background on the subject matter',
        note: 'No artwork, logo or interface asset from that page is used on this site.',
      },
      {
        title: 'Stellar tracks, Paths and the Trailblazer (summary of public lore)',
        note:
          'Pending: to be replaced with a page reference into an official lore compendium.',
      },
    ],
    credits: {
      palette: derived,
      story: fanText,
      graphics: 'Theme Atlas (original SVG)',
      license: licence,
      disclaimer: fanDisclaimer,
      imageLicence: noOfficialArt,
    },
  },

  'pathfinder-beacon': {
    title: "Trailblazer's Beacon",
    subtitle: 'One golden signal lamp in endless dark',
    description:
      'Signal gold as the only accent, everything else pressed down into graphite and mist ' +
      'grey: the most tool-like of the three fan themes.',
    story:
      'In every story about setting out, one gesture keeps repeating: light the lamp, then ' +
      'go. This theme uses the beacon as an interface metaphor — most of the time the ' +
      'interface is dark and quiet, and only what genuinely needs attention is marked out ' +
      'in gold. It quotes no specific scene or character from the game; it borrows only the ' +
      'shared science-fiction vocabulary of exploration.',
    inspiration:
      'The accent is the warm gold of a sodium lamp (around #C79436), the background the ' +
      'ink black of a night sea, the text the cream of lamplight on paper. The middle ' +
      'layers use graphite and mist grey, and every cool hue has been deliberately removed ' +
      'so the theme does not collide with the violet and teal of Deep-Space Orbit.',
    designRationale:
      'A single warm colour makes accented information very easy to recognise, at the price ' +
      'of having to control its use strictly: gold appears only on focus rings, primary ' +
      'buttons and status dots, never as a large ground. Text on gold is a deep ink rather ' +
      'than white — a decision made for AA contrast, since pale gold with white type would ' +
      'almost never pass.',
    tags: ['Fan work', 'Sci-fi', 'Dark', 'Warm accent', 'Tool-like'],
    palette: [
      { name: 'Nightfall', note: 'The sea and the sky at night' },
      { name: 'Graphite', note: 'Panel ground' },
      { name: 'Lamplight', note: 'The cream of lamplight on paper' },
      { name: 'Mist Grey', note: 'Secondary information' },
      { name: 'Graphite Rule', note: 'Structural dividers' },
      { name: 'Signal Gold', note: 'The only warm colour, used for accents' },
      { name: 'Night Ink', note: 'Dark text on the gold' },
    ],
    sources: [
      {
        title: 'Honkai: Star Rail official website',
        detail: 'Official public page, used only as background on the subject matter',
        note: 'No artwork, logo or interface asset from that page is used on this site.',
      },
      {
        title: 'Colour temperature reference for sodium lamps (pending)',
        note:
          'Pending: to cite a standard lighting colour temperature table, naming the lamp ' +
          'type and its colour rendering index.',
      },
    ],
    credits: {
      palette: derived,
      story: fanText,
      graphics: 'Theme Atlas (original SVG)',
      license: licence,
      disclaimer: fanDisclaimer,
      imageLicence: noOfficialArt,
    },
  },

  'singularity-echo': {
    title: 'Singularity Echo',
    subtitle: 'Every colour compressed into a single point, then blown apart together',
    description:
      'A set of cool colours running from nebula teal to titanium white, with a very narrow ' +
      'highlight: built for a dark working area watched for hours.',
    story:
      'When a great deal of matter is compressed into a very small volume, physicists call ' +
      'that point a singularity. This theme borrows the metaphor: an interface theme has ' +
      'only one singularity — the accent colour — and everything else is pressed into the ' +
      'same family of cool greys, then lights up suddenly at one focus point. The ' +
      'inspiration comes from nebula photographs in popular science writing and the ' +
      'echoing waveform on an oscilloscope; it has nothing to do with specific game lore, ' +
      'and it is the most scientific of the three.',
    inspiration:
      'Nebula teal is the blue-green most common in nebula photographs (in effect the ' +
      'emission line of ionised oxygen), and titanium white is the colour of a coated ' +
      'reflection in a telescope optical path. The middle layers spread out in blue-grey ' +
      'and ink black, and the accent appears only at the peak of the waveform.',
    designRationale:
      'In a dark theme the accent easily glows too much, so here it is held at a middle ' +
      'lightness, and only one colour is allowed to sit on top of it (a near-white mist) so ' +
      'that the eye has a single place to land. Secondary text uses a mist cyan brighter ' +
      'than the cool grey, so that grey type does not disappear against the dark ground.',
    tags: ['Fan work', 'Dark', 'Nebula', 'Cool', 'Instrument'],
    palette: [
      { name: 'Abyss', note: 'A near-black deep blue-green' },
      { name: 'Glass', note: 'Panel ground' },
      { name: 'Mist Cyan', note: 'A cool white with a hint of cyan' },
      { name: 'Pale Cyan', note: 'Secondary information' },
      { name: 'Blue Rule', note: 'Structural dividers' },
      { name: 'Nebula Teal', note: 'The only peak highlight' },
      { name: 'Deep Water Ink', note: 'Dark text on the teal, AA contrast kept' },
    ],
    sources: [
      {
        title: 'Honkai: Star Rail official website',
        detail: 'Official public page, used only as background on the subject matter',
        note: 'No artwork, logo or interface asset from that page is used on this site.',
      },
      {
        title: 'Emission spectra and nebula colours (pending)',
        note:
          'Pending: to cite an astrophysics source explaining the visible wavelength of the ' +
          'oxygen ionisation line.',
      },
    ],
    credits: {
      palette: derived,
      story: fanText,
      graphics: 'Theme Atlas (original SVG)',
      license: licence,
      disclaimer: fanDisclaimer,
      imageLicence: noOfficialArt,
    },
  },

  'yaoshi-everlasting-bough': {
    title: 'Yaoshi · Everlasting Bough',
    subtitle: 'Life has never stopped growing.',
    description:
      'Moon-marrow white, deep jade and life gold form an abundant crown, while medicine red keeps one quiet warning beneath the bloom.',
    story:
      'Somewhere in the distant sea of stars, an Aeon answers every prayer. Wasted ground ' +
      'sprouts again, dry rivers return, and living things are released from the limits of ' +
      'time. All things flourish. Yet when growth has no end, the crown can close over the ' +
      'sky and roots can pass through every boundary; abundance becomes another fate from ' +
      'which nothing can escape. This theme holds both sides of that gift in one tree — ' +
      'merciful and fertile, but never willing to stop growing.',
    inspiration:
      'The palette is drawn from the imagined sacred tree, jade dew and the force of ' +
      'everlasting life. Moon-marrow white carries divine purity, deep jade and pale branch ' +
      'green describe old wood and new leaves, and life gold records the trace of a blessing. ' +
      'Medicine red appears as an untimely living mark deep in the crown. The crowned branches, ' +
      'stellar rings and asymmetric vines are original abstract forms; no character, official ' +
      'artwork, logo, texture or interface from the game is reproduced.',
    designRationale:
      'The light ground first presents abundance as a warm, readable space, while deep ' +
      'emerald establishes a solemn centre. The original mineral-grey secondary text was ' +
      'darkened to #596253 so small copy passes AA on both moon-marrow white and jade-dew ' +
      'surfaces. Medicine red is limited to a warning and a few living nodes so the theme ' +
      'never becomes an ordinary forest palette. Vim and Codex use their own deep-green, ' +
      'gold, medicine-red and grey-brown syntax hierarchy, carrying the idea of flourishing ' +
      'life into the code itself.',
    tags: ['Fan work', 'Abundance', 'Sacred tree', 'Branch crown', 'Jade dew', 'Biological excess'],
    palette: [
      { name: 'Moon-Marrow White', note: 'Divine purity and open space' },
      { name: 'Jade Dew', note: 'Panel and card ground' },
      { name: 'Deep Ink', note: 'Body text and primary code' },
      { name: 'Moss Trace', note: 'Darkened secondary text for readable contrast' },
      { name: 'Pale Branch', note: 'Boughs, dividers and low-contrast structure' },
      { name: 'Deep Jade', note: 'Ancient wood, primary actions and focus' },
      { name: 'Moon-Marrow Light', note: 'Text and highlights on deep jade' },
      { name: 'Medicine Red', note: 'Altered growth, warnings and rare emphasis' },
    ],
    sources: [
      {
        title: 'Honkai: Star Rail official website',
        detail: 'Official public page, used only to identify the work and subject',
        note:
          'No character artwork, logo, interface or other imagery from that page is used on ' +
          'this site.',
      },
      {
        title: 'Abundance, Yaoshi and visions of eternal life (public setting summary)',
        note:
          'Pending: an official setting reference with version and page details will replace ' +
          'this entry. The current writing and colour values are original Theme Atlas work.',
      },
    ],
    credits: {
      palette: derived,
      story: fanText,
      graphics: 'Theme Atlas (original SVG)',
      license: licence,
      disclaimer: fanDisclaimer,
      imageLicence: noOfficialArt,
    },
  },

  'lan-reignbow-arbiter': {
    title: 'Lan · Reignbow Arbiter',
    subtitle: 'A light crosses the sea of stars; once the target is set, it never turns back.',
    description:
      'Cold star-string blue, deep-space indigo and bow gold trace a locked hunting flight through the stars.',
    story:
      'Once the target is set, the arrow does not miss. Somewhere in the sea of stars moves a ' +
      'figure that never rests. Lan, the Reignbow Arbiter, patrols the worlds and hunts the ' +
      'deathless abominations with arrows of light. In the instant the string is drawn fully ' +
      'back, even the stars seem to stop. The shot crosses a distant region and leaves only ' +
      'a brief, brilliant rainbow trace. This theme compresses that verdict into a beam with ' +
      'one direction: cold, exact, and unwilling to turn back for any target.',
    inspiration:
      'The colours come from the imagined blue figure of the Reignbow, the light arrow crossing ' +
      'the stars and the hunter’s calm, unwavering gaze. Deep-space indigo forms the silent ' +
      'cosmos, arrow blue records the trajectory, arc cyan describes speed, and bow gold marks ' +
      'each precise verdict. The star bow, reticle, flight trails and rainbow afterimage are ' +
      'original geometric forms; no character art, game logo, interface or official visual ' +
      'asset is reproduced.',
    designRationale:
      'Star-string white and frost blue keep the workspace light and exact, while deep-space ' +
      'indigo anchors body copy and structural geometry. Arrow blue is deepened slightly to ' +
      '#2D6888 so both white action text and small labels inside the accent block pass AA; stardust grey is adjusted to ' +
      '#4B667A so small labels remain readable on both the background and panels. Bow gold is ' +
      'reserved for locks, arrowheads and verdict points, preventing the interface from ' +
      'becoming a generic blue technology theme. Vim and Codex share an independent syntax ' +
      'palette of blue, gold, cyan, cool rose and indigo-grey.',
    tags: ['Fan work', 'The Hunt', 'Reignbow', 'Star arrow', 'Target lock', 'Speed and precision'],
    palette: [
      { name: 'Star-String White', note: 'The cold white space around the star bow' },
      { name: 'Frost Blue', note: 'Cards and information panels' },
      { name: 'Deep-Space Indigo', note: 'Body text and precise structure' },
      { name: 'Stardust Grey', note: 'Darkened coordinates and secondary information' },
      { name: 'Trajectory Rule', note: 'Star tracks, boundaries and low-priority guides' },
      { name: 'Arrow Blue', note: 'Lock-on, direction and primary actions' },
      { name: 'Star-String White Type', note: 'Text on arrow blue' },
      { name: 'Bow Gold', note: 'Arrowhead, reticle and verdict nodes' },
    ],
    sources: [
      {
        title: 'Honkai: Star Rail official website',
        detail: 'Official public page, used only to identify the work and subject',
        note:
          'No character artwork, logo, interface or other imagery from that page is used on ' +
          'this site.',
      },
      {
        title: 'The Hunt, the Reignbow and Lan (public setting summary)',
        note:
          'Pending: an official setting reference with version and page details will replace ' +
          'this entry. The current writing and colour values are original Theme Atlas work.',
      },
    ],
    credits: {
      palette: derived,
      story: fanText,
      graphics: 'Theme Atlas (original SVG)',
      license: licence,
      disclaimer: fanDisclaimer,
      imageLicence: noOfficialArt,
    },
  },

  'aha-cosmic-farce': {
    title: 'Aha · Cosmic Farce',
    subtitle: 'The universe never lacks answers; it only lacks a ridiculous enough question.',
    description:
      'Curtain black, elation pink, illusion cyan and spotlight gold open a never-ending cosmic theatre, where masks, dice and reversals wait in the wings.',
    story:
      'The cosmos is long enough that someone ought to laugh at it. When Aha climbed to the ' +
      'highest point of the Tree of Existence, the Aeon saw the turning of stars, the edge of ' +
      'the void, and the apparently senseless order behind all things. Then an infant fell ' +
      'and cried aloud. So Aha laughed. That laughter tore open the silence of the universe, ' +
      'and a performance that never ends began. This theme does not turn Elation into cheap ' +
      'noise. It places the idea on a black stage: masks keep truth uncertain, dice are ready ' +
      'to rewrite the ending, and every new beam of light may be the next joke.',
    inspiration:
      'The palette is drawn from the mask, theatre and chance reversals associated with ' +
      'Elation. Curtain black and night violet open the dark stage, mask white carries body ' +
      'copy, and elation pink marks the current act and primary actions. Spotlight gold is ' +
      'reserved for key cues and reversals. Illusion cyan, trick violet and curtain red enter ' +
      'through the independent syntax palette, acting as unexpected strings, typographical ' +
      'sleight of hand and numeric alarms. The floating mask, broken circular stage, cards, ' +
      'dice and asymmetric light trails are original geometric forms; no character artwork, ' +
      'logo, interface asset or official pattern is reproduced.',
    designRationale:
      'The dark interface establishes the theatre’s shadow first, then lets elation pink ' +
      'become a focus bright enough to pass AA contrast. Dusty violet secondary copy keeps ' +
      'the noise in check so the page never becomes a neon rainbow. Spotlight gold acts as ' +
      'the flare, limited to input cues, status reversals and a few stage nodes. Vim and ' +
      'Codex share one independent syntax palette: pink keywords open the scene, gold ' +
      'functions read like spotlights, cyan strings introduce the unexpected, and trick ' +
      'violet and curtain red separate types and numbers from ordinary text.',
    tags: ['Fan work', 'Elation', 'Mask', 'Theatre', 'Dice', 'Playing cards', 'Reversal'],
    palette: [
      { name: 'Curtain Black', note: 'The deepest stage before the opening act' },
      { name: 'Night Violet', note: 'Cards, panels and layers of the stage' },
      { name: 'Mask White', note: 'Mask highlights and primary body text' },
      { name: 'Backstage Grey-Violet', note: 'Secondary notes and exit information' },
      { name: 'Proscenium Violet', note: 'Stage boundaries and structural rules' },
      { name: 'Elation Pink', note: 'The current act, links and primary actions' },
      { name: 'Pink-Lamp Type', note: 'Dark text on elation pink' },
      { name: 'Spotlight Gold', note: 'Key cues and reversals of fortune' },
    ],
    sources: [
      {
        title: 'Honkai: Star Rail official website',
        detail: 'Official public page, used only to identify the work and subject',
        note:
          'No character artwork, logo, interface or other imagery from that page is used on ' +
          'this site.',
      },
      {
        title: 'Elation, Aha and the masked troupe (public setting summary)',
        note:
          'Pending: an official setting reference with version and page details will replace ' +
          'this entry. The current writing and colour values are original Theme Atlas work.',
      },
    ],
    credits: {
      palette: derived,
      story: fanText,
      graphics: 'Theme Atlas (original SVG)',
      license: licence,
      disclaimer: fanDisclaimer,
      imageLicence: noOfficialArt,
    },
  },

  'ix-silent-event-horizon': {
    title: 'IX · Silent Event Horizon',
    subtitle: 'When the cosmos falls silent, even existence loses its echo.',
    description:
      'Void black, dark-bound violet and faint muted purple form a nearly motionless event horizon where tracks bend and starlight disappears.',
    story:
      'Beyond the reach of the stars lies a void with no visible bottom. There is no answer, ' +
      'no direction, and no question worth pursuing. Star bodies are pulled by gravity, light ' +
      'bends at the boundary, and every voice that approaches vanishes into the silent deep. ' +
      'That presence is IX, the Aeon of the Nihility. This theme reduces that presence to its ' +
      'quietest form: the broad darkness is not an empty background but a horizon with density, ' +
      'while the few violet, blue and magenta signals appear only just before they are consumed.',
    inspiration:
      'The palette is drawn from the event horizon of a black hole, deep-violet nebulae and ' +
      'distant starlight bent by gravity. Void black absorbs the composition, dark-bound keeps ' +
      'cards and panels legible as separate layers, and gravitational grey traces the bending ' +
      'tracks. Muted violet is the primary signal the instruments can still resolve; eclipse ' +
      'blue enters the independent syntax palette for coordinates and functions; dark star-red ' +
      'is kept for rare anomalies and removed states. The black hole, gravitational lens, bent ' +
      'orbits and two almost extinguished points are original abstract SVG forms; no character ' +
      'artwork, logo, interface asset or official pattern is reproduced.',
    designRationale:
      'Black, violet-grey and blue-grey build a low-saturation hierarchy so Nihility does not ' +
      'become a generic neon cyberpunk theme. Muted violet stays bright enough for AA contrast ' +
      'on the ground; text on the accent uses void black #100F18 because the initial white-on-' +
      'violet pairing reached only 4.04:1. Dark star-red is lifted slightly from #A45F91 to ' +
      '#B36A9F so small anomaly signals remain readable on both background and surface. Vim and ' +
      'Codex share a restrained but clearly separated syntax palette of violet, blue, muted ' +
      'magenta and pale grey-white.',
    tags: ['Fan work', 'Nihility', 'Black hole', 'Event horizon', 'Entropy', 'Weightlessness', 'Fading', 'Silence'],
    palette: [
      { name: 'Void Black', note: 'The silent ground inside the event horizon' },
      { name: 'Dark Bound', note: 'Cards, panels and layers of shadow' },
      { name: 'Faint Light White', note: 'The last presence remaining in the dark' },
      { name: 'Nebula Grey', note: 'Distant, attenuated secondary information' },
      { name: 'Gravitational Grey', note: 'Bent orbits and structural boundaries' },
      { name: 'Muted Violet', note: 'The primary signal still resolvable' },
      { name: 'Horizon Black Type', note: 'Dark text on muted violet' },
      { name: 'Dark Star-Red', note: 'Rare anomalies, deletions and weightless signals' },
    ],
    sources: [
      {
        title: 'Honkai: Star Rail official website · World section (English)',
        detail: 'Official public world section for the game, Aeon IX and the Nihility context.',
        note:
          'It is used only as the official entry point for the setting; no character artwork, ' +
          'logo, interface or other imagery from that page is used on this site.',
      },
      {
        title: 'Honkai: Star Rail official website · World section (Chinese)',
        detail: 'Official Chinese world section for the game, Aeon IX and the Nihility context.',
        note:
          'Official source material and Theme Atlas interpretation are recorded separately; ' +
          'the black-hole and event-horizon metaphors are not presented as official game setting.',
      },
      {
        title: 'NASA Science · Black Holes',
        detail: 'Public NASA astronomy reference for black holes and event horizons.',
        note:
          'The black hole, event horizon, gravitational lensing and bent orbits are only ' +
          'Theme Atlas scientific visual metaphors. They are not official Honkai: Star Rail ' +
          'setting details or official graphics; the SVG and colours are an original interpretation.',
      },
    ],
    credits: {
      palette: derived,
      story: fanText,
      graphics: 'Theme Atlas (original SVG)',
      license: licence,
      disclaimer: fanDisclaimer,
      imageLicence: noOfficialArt,
    },
  },

  'uncharted-reach': {
    title: 'Uncharted Reach',
    subtitle: 'Light the first signal from a region the charts have not named',
    description:
      'Deep navy, nebula violet, ion cyan and civilisation gold form a stellar navigation chart opening towards the unknown.',
    story:
      'Stellaris presents exploration as a chain of decisions: survey a strange planet, plant ' +
      'an outpost, meet an unknown civilisation, then decide where the border should be drawn. ' +
      'This theme takes no colours from a specific scene. It treats discovery as four visual ' +
      'relationships: deep navy is unmapped space, nebula violet is the light of distant ' +
      'bodies, ion cyan is instrumentation and communication, and civilisation gold appears ' +
      'only where contact has been established. The values are an original Theme Atlas ' +
      'reading of deep-space exploration, not official game colours.',
    inspiration:
      'A deep-space blue-black carries the ground, violet gathers in panels and boundaries as ' +
      'the cast left by a nebula, bright cyan marks links, focus and data signals, and ' +
      'civilisation gold is held back for contact points and key states. Orbits, star points ' +
      'and communication pulses are abstract geometry; no in-game star map, icon or interface ' +
      'is reused.',
    designRationale:
      'Hierarchy in this dark theme relies on lightness rather than saturation: panel and ' +
      'ground stay close enough for long reading without becoming one luminous field. Cyan ' +
      'keeps the primary emphasis legible while gold is reserved for the small semantics of ' +
      'discovery. Body text, secondary text and the accent are checked against WCAG AA.',
    tags: ['Stellaris', 'Deep space', 'Nebula', 'Civilisation signal', 'Exploration', 'Original interpretation'],
    palette: [
      { name: 'Uncharted Deep', note: 'The blue-black at the edge of the chart' },
      { name: 'Nebula Violet', note: 'The violet-black layer between panels and routes' },
      { name: 'Chart White', note: 'Cool instrument-white body text' },
      { name: 'Distant Blue', note: 'Secondary notes and coordinate labels' },
      { name: 'Orbit Rule', note: 'Chart grids and structural boundaries' },
      { name: 'Ion Cyan', note: 'Communication signals, links and focus' },
      { name: 'Civilisation Gold', note: 'Contact nodes and discoveries' },
    ],
    sources: [
      {
        title: 'Paradox Interactive · Stellaris official site',
        detail: 'Official public product page, used only to identify the work and subject',
        note:
          'No colour, graphic or layout from that page is used here; all values and visuals ' +
          'are original Theme Atlas work.',
      },
      {
        title: 'Deep-space visual language and colour relationships (to be added)',
        note:
          'Pending: a page-referenced art source will replace this entry. The current palette ' +
          'makes no claim to be official.',
      },
    ],
    credits: {
      palette: derived,
      story: fanText,
      graphics: 'Theme Atlas (original SVG)',
      license: licence,
      disclaimer:
        'This is an unofficial Theme Atlas interpretation for colour research and interface ' +
        'demonstration only. It is not affiliated with, licensed by or endorsed by Paradox Interactive.',
      imageLicence: noOfficialArt,
    },
  },

  'frozen-front': {
    title: 'Frozen Front',
    subtitle: 'A tactical grid covers the steel front as cold signals rise through blue-grey',
    description:
      'Steel blue-grey, cold white and signal cyan produce a restrained Allied military-technology study.',
    story:
      'This study takes Command & Conquer: Red Alert as represented in the Command & Conquer ' +
      'Remastered Collection (2020) as its version boundary; Red Alert 2, Red Alert 3 and ' +
      'other continuities are not mixed in. The subject is not a character or a particular ' +
      'unit but a tactical table lit by cold light: a grid defines space, steel structure ' +
      'draws the frame, and a cyan signal marks the current node. Colours and forms are ' +
      'original Theme Atlas interpretations, not official visual standards.',
    inspiration:
      'Blue-grey combines an abstract industrial-steel surface with cold ambient light, ' +
      'cold white is used for readings, and signal cyan is reserved for actions and focus. ' +
      'The grid, modular armour and scanning rings imitate no in-game HUD; they are rebuilt ' +
      'from repeated lines, coordinates and mechanical slots.',
    designRationale:
      'The study keeps a low-saturation blue-grey hierarchy so the cyan highlight remains ' +
      'clear. Text uses a cool instrument white rather than pure white to reduce glare, and ' +
      'the panel/ground separation gives structure without letting technical lines outrank ' +
      'the writing.',
    tags: ['Red Alert', 'Allied', 'Tactical map', 'Steel blue', 'Military technology', 'Original interpretation'],
    palette: [
      { name: 'Northern Night', note: 'The blue-black of a cold environment' },
      { name: 'Armour Blue-Grey', note: 'Neutral steel and panel blue-grey' },
      { name: 'Cold Readout White', note: 'Instrument-like body text' },
      { name: 'Tactical Grey', note: 'Coordinates, notes and secondary information' },
      { name: 'Steel Rule', note: 'Grid and structural dividers' },
      { name: 'Signal Cyan', note: 'Status, links and focus' },
      { name: 'Frost Blue', note: 'Scan results and secondary prompts' },
    ],
    sources: [
      {
        title: 'Command & Conquer Remastered Collection official site',
        detail: 'Version boundary: Command & Conquer: Red Alert in the 2020 remastered collection',
        note:
          'The official page only identifies the work and version. No screenshot, logo, unit ' +
          'portrait or interface asset is reused.',
      },
      {
        title: 'Allied tactical visual analysis (to be added)',
        note:
          'Pending: a verifiable art reference with page numbers will replace this entry. ' +
          'The current palette is not presented as official canon.',
      },
    ],
    credits: {
      palette: derived,
      story: fanText,
      graphics: 'Theme Atlas (original SVG)',
      license: licence,
      disclaimer:
        'This is an unofficial Theme Atlas interpretation for colour research and interface ' +
        'demonstration only. It is not affiliated with, licensed by or endorsed by Electronic Arts.',
      imageLicence: noOfficialArt,
    },
  },

  'crimson-iron-curtain': {
    title: 'Crimson Iron Curtain',
    subtitle: 'In the shadow of heavy industry, one warning red lights slowly',
    description:
      'Iron grey, warning red and aged copper carry heavy machinery, hard structure and a low industrial alarm.',
    story:
      'This Soviet-direction study is also bounded to Command & Conquer: Red Alert as presented ' +
      'in the Remastered Collection (2020); later Red Alert continuities are not mixed in. ' +
      'It reproduces no insignia, propaganda image or unit. Three gestures are drawn ' +
      'from heavy-industrial space: steel structure lowers the horizon, a warning lamp sends ' +
      'red into shadow, and aged copper keeps the trace of machinery in use. Game information ' +
      'identifies the subject only; the palette and forms are Theme Atlas artistry.',
    inspiration:
      'Background and panel use two grades of iron grey, with warm aged-paper white for text. ' +
      'Warning red is the primary accent, lifted into a brighter red-orange range so accent ' +
      'contrast remains readable. Aged copper is kept for joints, scales and secondary marks, ' +
      'preventing red and metal from spreading across large fields at once.',
    designRationale:
      'A red-and-black theme easily collapses into one alarm panel, so copper and warm white ' +
      'split the hierarchy. Red stays highly recognisable without becoming a flat pure red, ' +
      'while the writing surfaces keep a stable warm-grey relationship. Heavy lines remain at ' +
      'edges and inside graphics; the reading area stays quiet.',
    tags: ['Red Alert', 'Soviet', 'Heavy industry', 'Warning red', 'Iron grey', 'Original interpretation'],
    palette: [
      { name: 'Iron Curtain Black', note: 'Near-black iron in an industrial interior' },
      { name: 'Machine Grey', note: 'Equipment panels and armour' },
      { name: 'Aged Paper White', note: 'Warm body text and readings' },
      { name: 'Worn Silver', note: 'Secondary notes and metal scales' },
      { name: 'Rivet Rule', note: 'Structural edges and dividers' },
      { name: 'Warning Red', note: 'Alarms, actions and focus' },
      { name: 'Aged Copper', note: 'Joints and secondary markers' },
    ],
    sources: [
      {
        title: 'Command & Conquer Remastered Collection official site',
        detail: 'Version boundary: Command & Conquer: Red Alert in the 2020 remastered collection',
        note:
          'The official page only identifies the work and version. No screenshot, logo, unit ' +
          'portrait or interface asset is reused.',
      },
      {
        title: 'Soviet industrial visual analysis (to be added)',
        note:
          'Pending: a verifiable art reference with page numbers will replace this entry. ' +
          'The current palette is not presented as official canon.',
      },
    ],
    credits: {
      palette: derived,
      story: fanText,
      graphics: 'Theme Atlas (original SVG)',
      license: licence,
      disclaimer:
        'This is an unofficial Theme Atlas interpretation for colour research and interface ' +
        'demonstration only. It is not affiliated with, licensed by or endorsed by Electronic Arts.',
      imageLicence: noOfficialArt,
    },
  },

  'koprulu-frontier': {
    title: 'Koprulu Frontier',
    subtitle: 'Industrial armour crosses the frontier while orange beacons pulse against cold cyan',
    description:
      'Steel blue-grey, military olive, signal orange and cool cyan establish the rhythm of frontier industry.',
    story:
      'The Terran direction begins with frontier outposts, serviceable industrial armour and ' +
      'military facilities that keep moving. Nothing here depicts a person, unit or faction ' +
      'mark. The frontier becomes a structure that can be taken apart: blue-grey holds the ' +
      'frame, olive enters the surfaces, orange beacons lead the eye to the next connection, ' +
      'and cool cyan confirms that scanning and communication are still online. Every colour ' +
      'and form is an original, unofficial Theme Atlas interpretation.',
    inspiration:
      'Industrial blue-grey fills the background, military olive moves into panels and ' +
      'secondary structure, signal orange becomes the primary accent, and cool cyan supplies ' +
      'the opposite electronic signal. Armour divisions, bolt rhythm and reticles derive from ' +
      'basic geometry rather than any in-game unit or HUD.',
    designRationale:
      'Olive becomes muddy if spread across the whole page, so it remains a middle layer ' +
      'between deep blue-grey and cold white. Orange is unmistakable but limited to actions, ' +
      'focus and a few status points; cyan gives the palette a second signal so the interface ' +
      'does not glow with a single warm accent.',
    tags: ['StarCraft', 'Terran', 'Industrial armour', 'Koprulu', 'Signal orange', 'Original interpretation'],
    palette: [
      { name: 'Frontier Night', note: 'Deep blue-black beyond the outpost' },
      { name: 'Armour Olive', note: 'Dark olive armour and panel surfaces' },
      { name: 'Fleet White', note: 'Slightly warm cool-white body text' },
      { name: 'Field Grey-Green', note: 'Labels and secondary explanation' },
      { name: 'Structural Steel', note: 'Armour divisions and structural lines' },
      { name: 'Beacon Orange', note: 'Actions, focus and tactical signals' },
      { name: 'Comm Cyan', note: 'Scanning, communication and secondary states' },
    ],
    sources: [
      {
        title: 'Blizzard Entertainment · StarCraft official site',
        detail: 'Official public page, used only to identify the work and subject',
        note:
          'The official page only identifies the work. No screenshot, logo, unit portrait or ' +
          'interface asset is reused.',
      },
      {
        title: 'Terran industrial visual analysis (to be added)',
        note:
          'Pending: a verifiable art reference with page numbers will replace this entry. ' +
          'The current palette is not presented as official canon.',
      },
    ],
    credits: {
      palette: derived,
      story: fanText,
      graphics: 'Theme Atlas (original SVG)',
      license: licence,
      disclaimer:
        'This is an unofficial Theme Atlas interpretation for colour research and interface ' +
        'demonstration only. It is not affiliated with, licensed by or endorsed by Blizzard Entertainment.',
      imageLicence: noOfficialArt,
    },
  },

  'echoes-of-khala': {
    title: 'Echoes of the Khala',
    subtitle: 'Symmetry unfolds through violet-black as gold and psionic blue answer each other',
    description:
      'Violet-black, gold, ivory and psionic blue form a precise, symmetrical order for an ancient high-technology civilisation.',
    story:
      'The Protoss direction draws on precise structure, ceremonial symmetry and the restrained ' +
      'use of light by an ancient technological culture. It copies no faction insignia, ' +
      'character or architecture. Instead, that sense of order becomes geometry: the centre ' +
      'remains symmetrical, gold describes the structural skeleton, ivory carries reading, ' +
      'and psionic blue appears only at unstable energy nodes. StarCraft identifies the source ' +
      'subject; all values are original Theme Atlas interpretations.',
    inspiration:
      'The violet-black ground lets gold read as structure rather than decoration. Panels stay ' +
      'in a low-lightness violet to preserve spatial continuity. Ivory keeps long text away ' +
      'from the ordinary cool-white science-fiction interface, while gold handles actions and ' +
      'focus and psionic blue becomes the secondary accent for energy and communication.',
    designRationale:
      'Gold has enormous presence on violet-black, so its area is controlled: it carries ' +
      'outlines, axes and primary actions but not large fields. Ivory and violet support long ' +
      'reading, and blue appears only at energy nodes and interaction feedback so the three ' +
      'strong colours do not compete.',
    tags: ['StarCraft', 'Protoss', 'Symmetry', 'Psionic', 'Gold', 'Original interpretation'],
    palette: [
      { name: 'Void Violet-Black', note: 'The violet-black space around an ancient structure' },
      { name: 'Temple Violet', note: 'Low-lightness violet panels' },
      { name: 'Ivory Light', note: 'Warm-white body text like a ceremonial object' },
      { name: 'Psionic Grey-Violet', note: 'Notes and secondary information' },
      { name: 'Geometry Rule', note: 'Structural and symmetrical boundaries' },
      { name: 'Sacred Gold', note: 'Axes, actions, focus and structural skeleton' },
      { name: 'Psionic Blue', note: 'Energy nodes and communication feedback' },
    ],
    sources: [
      {
        title: 'Blizzard Entertainment · StarCraft official site',
        detail: 'Official public page, used only to identify the work and subject',
        note:
          'The official page only identifies the work. No screenshot, logo, unit portrait or ' +
          'interface asset is reused.',
      },
      {
        title: 'Protoss geometry and psionic visual analysis (to be added)',
        note:
          'Pending: a verifiable art reference with page numbers will replace this entry. ' +
          'The current palette is not presented as official canon.',
      },
    ],
    credits: {
      palette: derived,
      story: fanText,
      graphics: 'Theme Atlas (original SVG)',
      license: licence,
      disclaimer:
        'This is an unofficial Theme Atlas interpretation for colour research and interface ' +
        'demonstration only. It is not affiliated with, licensed by or endorsed by Blizzard Entertainment.',
      imageLicence: noOfficialArt,
    },
  },

  'spore-tide': {
    title: 'Spore Tide',
    subtitle: 'Carapace and spores cover the frontier as acid green grows through berry-violet',
    description:
      'Carapace violet-black, berry purple, acid green and bone white describe alien tissue spreading and dividing.',
    story:
      'The Zerg direction is not about one creature but about growth itself: branching tissue, ' +
      'dispersing spores, layered carapace and biological signals travelling through damp ' +
      'darkness. The visual grammar is therefore asymmetric and organic, with lines dividing ' +
      'slowly like veins. Every SVG is original; no character, unit or faction pattern is ' +
      'depicted or copied. The game identifies the subject, while the colours remain an ' +
      'interpretation rather than official settings.',
    inspiration:
      'Violet-black is the shadow beneath a carapace, berry-purple panels form a damp tissue ' +
      'layer, and bone white carries body text and structural explanation. Acid green is the ' +
      'primary accent for spore signals and live nodes; berry light becomes the secondary ' +
      'accent for veins and edge glow, preventing the palette from relying on a single neon.',
    designRationale:
      'Organic themes can easily fill every space with curves, so reading areas keep a clear ' +
      'hierarchy and only a few vein lines. Acid green is highly recognisable on deep violet ' +
      'and is therefore restricted to actions and focus. Bone white keeps long paragraphs ' +
      'legible while berry-violet maintains continuity with the ground.',
    tags: ['StarCraft', 'Zerg', 'Organic contours', 'Spores', 'Acid green', 'Original interpretation'],
    palette: [
      { name: 'Carapace Violet-Black', note: 'Near-black violet beneath a carapace' },
      { name: 'Berry Tissue', note: 'Damp berry-violet panel layers' },
      { name: 'Bone White', note: 'Body text like a bone-and-shell highlight' },
      { name: 'Spore Grey-Violet', note: 'Secondary notes and explanation' },
      { name: 'Vein Rule', note: 'Branching veins and structural boundaries' },
      { name: 'Acid Green', note: 'Spore activity, actions and focus' },
      { name: 'Berry Glow', note: 'Tissue edges and secondary signals' },
    ],
    sources: [
      {
        title: 'Blizzard Entertainment · StarCraft official site',
        detail: 'Official public page, used only to identify the work and subject',
        note:
          'The official page only identifies the work. No screenshot, logo, unit portrait or ' +
          'interface asset is reused.',
      },
      {
        title: 'Zerg organic visual analysis (to be added)',
        note:
          'Pending: a verifiable art reference with page numbers will replace this entry. ' +
          'The current palette is not presented as official canon.',
      },
    ],
    credits: {
      palette: derived,
      story: fanText,
      graphics: 'Theme Atlas (original SVG)',
      license: licence,
      disclaimer:
        'This is an unofficial Theme Atlas interpretation for colour research and interface ' +
        'demonstration only. It is not affiliated with, licensed by or endorsed by Blizzard Entertainment.',
      imageLicence: noOfficialArt,
    },
  },
};
