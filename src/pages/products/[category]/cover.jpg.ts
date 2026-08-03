import type { APIRoute } from 'astro';
import fs from 'node:fs/promises';
import path from 'node:path';

export const prerender = false;

export const GET: APIRoute = async ({ params }) => {
  const category = params.category ? decodeURIComponent(params.category) : '';
  const filePath = path.join(
    process.cwd(),
    'public',
    'products',
    category,
    'cover.jpg'
  );

  try {
    const image = await fs.readFile(filePath);
    return new Response(image, {
      headers: {
        'Content-Type': 'image/jpeg',
        'Cache-Control': 'public, max-age=31536000, immutable',
      },
    });
  } catch {
    return new Response('Not found', { status: 404 });
  }
};
