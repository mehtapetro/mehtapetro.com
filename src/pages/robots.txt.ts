// https://docs.astro.build/en/guides/integrations-guide/sitemap/#usage
import type { APIRoute } from 'astro';
import { getRobotsAllowRules } from '@/data/sitemapPages';

const allowRules = getRobotsAllowRules().join('\n');

const robotsTxt = `
User-agent: *
Disallow: /
${allowRules}

Sitemap: ${new URL('sitemap-index.xml', import.meta.env.SITE).href}
`.trim();

export const GET: APIRoute = () => {
  return new Response(robotsTxt, {
    headers: {
      'Content-Type': 'text/plain; charset=utf-8',
    },
  });
};
