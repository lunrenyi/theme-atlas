import type { Collection, CollectionId } from './types';

export const collections: Collection[] = [
  {
    id: 'myth',
    title: '中国神话',
    titleEn: 'Chinese Mythology',
    short: '中国神话',
    tagline: '矿物颜料写下的神兽、祥云与昆仑',
    description:
      '青铜器上的饕餮纹、汉画像石里的祥云、敦煌壁画剥落后的土红——' +
      '这个系列从神话文本与古代器物中提取颜色，重的是“矿物感”：朱砂、石青、赭石、铅白，' +
      '每一笔都像从矿石上磨下来的。',
    accent: '#C0513C',
    accentAlt: '#4A8CA8',
    motif: 'ruyi',
  },
  {
    id: 'porcelain',
    title: '中国瓷器',
    titleEn: 'Chinese Porcelain',
    short: '中国瓷器',
    tagline: '窑火里长出来的釉色，温度与耐心',
    description:
      '汝窑的天青、钧窑的玫瑰紫、景德镇的青花——釉色是烧成之后才决定的结果，' +
      '无法精确控制。这个系列因此格外克制：低饱和、有呼吸感，靠明度差而不是彩度差建立层次。',
    accent: '#6FA3A6',
    accentAlt: '#A4739B',
    motif: 'glaze',
  },
  {
    id: 'rail',
    title: '崩坏：星穹铁道 同人主题',
    titleEn: 'Honkai: Star Rail - fan themes',
    short: '星穹铁道',
    tagline: '在虚构的银河里调一次光',
    description:
      '同一款游戏的世界观，在同人作品里被拆成光谱：星轨的冷紫、开拓者的信号金、模拟宇宙的青。' +
      '这个系列里的颜色全部由本站重新推导，图形也全部为原创 SVG，不含任何官方美术资源。',
    accent: '#9885FF',
    accentAlt: '#DCC38B',
    motif: 'orbit',
  },
];

export const collectionMap = new Map<CollectionId, Collection>(
  collections.map((c) => [c.id, c]),
);

export function getCollection(id: CollectionId): Collection {
  const found = collectionMap.get(id);
  if (!found) throw new Error('Unknown collection: ' + id);
  return found;
}

