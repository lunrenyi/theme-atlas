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
  'taotie-cinnabar': {
    title: 'Taotie · Cinnabar',
    subtitle: 'The beast mask on a bronze ritual vessel, and the touch of cinnabar below it',
    description:
      'The taotie mask of Shang and Zhou bronzes rebuilt as an interface: cinnabar, ' +
      'azurite and umber for a palette that is quiet but still sharp.',
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

  'ru-ware-sky': {
    title: 'Ru Ware · Sky After Rain',
    subtitle: 'That indefinable blue after the rain, fixed only when the kiln opens',
    description:
      'Four steps of lightness in the sky-blue glaze of Ru ware, with a touch of incense ' +
      'ash underneath: the quietest interface in the archive.',
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
      'The picture of a train running along a stellar track compressed into seven colours: ' +
      'cold violet as the anchor, blue-grey as the ground, like a night cockpit.',
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
};
