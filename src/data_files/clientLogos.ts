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

export const clientLogos = Object.entries(clientLogoModules)
  .sort(([pathA], [pathB]) => collator.compare(pathA, pathB))
  .map(([path, src], index) => {
    const fileName = path.split('/').pop() ?? `client-${index + 1}`;
    const baseName = fileName.replace(/\.[^.]+$/, '');

    return {
      src,
      alt: `Client logo ${baseName}`,
    };
  });
