import type { APIRoute } from 'astro';
import fs from 'node:fs/promises';
import path from 'node:path';
import { getAllCategories, getCategoryBySlug } from '@/lib/productFs';

export const prerender = true;

export function getStaticPaths() {
  return getAllCategories().map(category => ({
    params: { category: category.slug },
  }));
}

function resolveCategoryFolder(param: string): string | null {
  const decoded = decodeURIComponent(param);
  const bySlug = getCategoryBySlug(decoded);
  if (bySlug) return bySlug.folderName;

  const byFolder = getAllCategories().find(c => c.folderName === decoded);
  return byFolder?.folderName ?? null;
}

export const GET: APIRoute = async ({ params }) => {
  const categoryParam = params.category ?? '';
  const folderName = resolveCategoryFolder(categoryParam);
  if (!folderName) {
    return new Response('Not found', { status: 404 });
  }

  const folderPath = path.join(process.cwd(), 'public', 'products', folderName);

  const candidates = ['cover.jpg', 'cover.jpeg', 'cover.png', 'cover.webp'];
  for (const fileName of candidates) {
    const filePath = path.join(folderPath, fileName);
    try {
      const image = await fs.readFile(filePath);
      const ext = path.extname(fileName).slice(1).toLowerCase();
      const type =
        ext === 'png'
          ? 'image/png'
          : ext === 'webp'
            ? 'image/webp'
            : 'image/jpeg';
      return new Response(image, {
        headers: {
          'Content-Type': type,
          'Cache-Control': 'public, max-age=31536000, immutable',
        },
      });
    } catch {
      // try next candidate
    }
  }

  return new Response('Not found', { status: 404 });
};
