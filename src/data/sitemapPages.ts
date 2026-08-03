/**
 * Pages that should appear in the sitemap and be allowed in robots.txt.
 * All other routes are excluded from the sitemap and blocked for crawlers.
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

function normalizePathname(pathname: string): string {
  if (!pathname || pathname === '/') return '/';
  return pathname.endsWith('/') ? pathname : `${pathname}/`;
}

/** Returns true when a built page URL should be included in the sitemap. */
export function isIndexablePage(pageUrl: string): boolean {
  const pathname = normalizePathname(new URL(pageUrl).pathname);
  return (INDEXABLE_PATHS as readonly string[]).includes(pathname);
}

/** robots.txt Allow rules for each indexable path. */
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

  return rules;
}
