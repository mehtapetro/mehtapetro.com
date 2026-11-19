import type { ImageMetadata } from 'astro';

const clientLogoModules = import.meta.glob<ImageMetadata>(
  '/src/images/clients/*.{svg,png,jpg,jpeg,webp,avif,gif}',
  {
    eager: true,
    import: 'default',
  }
);

const collator = new Intl.Collator(undefined, {
  numeric: true,
  sensitivity: 'base',
});

const clientNames: Record<string, string> = {
  c1: 'ONGC',
  c2: 'Reliance Industries Limited',
  c3: 'Idemitsu',
  c4: 'Bharat Petroleum',
  c5: 'Hindustan Petroleum',
  c6: 'Micro Inks',
  c7: 'Dai-ichi Speciality Chemicals',
  c8: 'Kansai Nerolac Paints',
  c9: 'Dow',
  c10: 'Asian Paints',
  c11: 'Nippon Paint',
  c12: 'AkzoNobel',
  c13: 'Pidilite',
  c14: 'Balmer Lawrie',
};

export const clientLogos = Object.entries(clientLogoModules)
  .sort(([pathA], [pathB]) => collator.compare(pathA, pathB))
  .map(([path, src], index) => {
    const fileName = path.split('/').pop() ?? `client-${index + 1}`;
    const baseName = fileName.replace(/\.[^.]+$/, '');

    return {
      src,
      alt: clientNames[baseName] ?? `Client logo ${baseName}`,
    };
  });
