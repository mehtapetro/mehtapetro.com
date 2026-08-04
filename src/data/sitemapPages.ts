/**
 * Core pages that should appear in the sitemap and be allowed in robots.txt.
 * Product category/detail and news article URLs are also indexable via prefix rules.
 */
export const INDEXABLE_PATHS = [
  '/',
  '/about-us/',
  '/products/',
  '/capabilities/',
  '/news/',
  '/contact/',
  '/career/',
] as const;

export type IndexablePath = (typeof INDEXABLE_PATHS)[number];

const INDEXABLE_PREFIXES = ['/products/', '/news/'] as const;

function normalizePathname(pathname: string): string {
  if (!pathname || pathname === '/') return '/';
  return pathname.endsWith('/') ? pathname : `${pathname}/`;
}

function isExcludedPath(pathname: string): boolean {
  return (
    pathname.startsWith('/api/') ||
    pathname.startsWith('/_astro/') ||
    pathname.endsWith('/cover.jpg/') ||
    pathname.endsWith('/cover.jpg') ||
    pathname === '/manifest.json/' ||
    pathname === '/favicon.ico/' ||
    pathname === '/robots.txt/' ||
    pathname === '/404/'
  );
}

/** Returns true when a built page URL should be included in the sitemap. */
export function isIndexablePage(pageUrl: string): boolean {
  const pathname = normalizePathname(new URL(pageUrl).pathname);

  if (isExcludedPath(pathname)) return false;

  if ((INDEXABLE_PATHS as readonly string[]).includes(pathname)) return true;

  return INDEXABLE_PREFIXES.some(prefix => pathname.startsWith(prefix));
}

/** robots.txt Allow rules for sitemap and other crawler infrastructure. */
export function getRobotsInfrastructureAllowRules(): string[] {
  return [
    'Allow: /robots.txt$',
    'Allow: /sitemap-index.xml$',
    'Allow: /sitemap-0.xml$',
  ];
}

/** robots.txt Allow rules for each indexable path and nested sections. */
export function getRobotsAllowRules(): string[] {
  const rules: string[] = [];

  for (const path of INDEXABLE_PATHS) {
    if (path === '/') {
      rules.push('Allow: /$');
      continue;
    }

    const bare = path.replace(/\/$/, '');
    rules.push(`Allow: ${bare}$`);
    rules.push(`Allow: ${path}$`);
  }

  // Nested product and news pages (category, product, article)
  for (const prefix of INDEXABLE_PREFIXES) {
    rules.push(`Allow: ${prefix}`);
  }

  return rules;
}
