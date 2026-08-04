import { defineConfig } from 'astro/config';
import tailwindcss from '@tailwindcss/vite';
import sitemap from '@astrojs/sitemap';
import vercel from '@astrojs/vercel';
import { isIndexablePage } from './src/data/sitemapPages.ts';

import mdx from '@astrojs/mdx';

// https://astro.build/config
export default defineConfig({
  // https://docs.astro.build/en/guides/images/#authorizing-remote-images
  site: 'https://www.mehtapetro.com',
  adapter: vercel(),
  image: {
    domains: ['images.unsplash.com'],
  },
  prefetch: true,
  integrations: [
    sitemap({
      filter: isIndexablePage,
      changefreq: 'weekly',
      priority: 0.8,
      serialize(item) {
        const url = new URL(item.url);
        const path = url.pathname.replace(/\/$/, '') || '/';

        const priorities = {
          '/': 1,
          '/products': 0.9,
          '/about-us': 0.8,
          '/capabilities': 0.8,
          '/news': 0.7,
          '/contact': 0.7,
          '/career': 0.7,
        };

        return {
          ...item,
          priority: priorities[path] ?? 0.8,
        };
      },
    }),
    mdx(),
  ],
  experimental: {
    clientPrerender: true,
  },
  vite: {
    plugins: [tailwindcss()],
  },
});
