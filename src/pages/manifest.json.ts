import type { APIRoute, ImageMetadata } from 'astro';
import { getImage } from 'astro:assets';
import appIcon from '@images/icon-maskable.png';

interface Favicon {
  purpose: 'any' | 'maskable' | 'monochrome';
  src: ImageMetadata;
  sizes: number[];
}

const sizes = [192, 512];
const favicons: Favicon[] = [
  {
    purpose: 'any',
    src: appIcon,
    sizes,
  },
  {
    purpose: 'maskable',
    src: appIcon,
    sizes,
  },
];

export const GET: APIRoute = async () => {
  const icons = await Promise.all(
    favicons.flatMap(favicon =>
      favicon.sizes.map(async size => {
        const image = await getImage({
          src: favicon.src,
          width: size,
          height: size,
          format: 'png',
        });
        return {
          src: image.src,
          sizes: `${size}x${size}`,
          type: 'image/png',
          purpose: favicon.purpose,
        };
      })
    )
  );

  const manifest = {
    short_name: 'Mehta Petro',
    name: 'Mehta Petro-Refineries Limited',
    description:
      'Manufacturer of petrochemical solvents, specialty base oils, and industrial chemicals since 1993.',
    icons,
    display: 'minimal-ui',
    id: '/',
    start_url: '/',
    theme_color: '#0039E6',
    background_color: '#F8FAFC',
  };

  return new Response(JSON.stringify(manifest), {
    headers: {
      'Content-Type': 'application/manifest+json',
    },
  });
};
