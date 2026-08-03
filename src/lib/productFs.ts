import fs from 'fs';
import path from 'path';

function slugify(name: string) {
  return name
    .toString()
    .trim()
    .toLowerCase()
    .replace(/\s+/g, '-')
    .replace(/[^a-z0-9\-]/g, '')
    .replace(/-+/g, '-')
    .replace(/^-|-$/g, '');
}

function formatCategoryName(folderName: string) {
  return folderName
    .replace(/hydriocarbon/gi, 'hydrocarbon')
    .replace(/_/g, ' ')
    .toLowerCase()
    .replace(/\b\w/g, letter => letter.toUpperCase());
}

function formatProductDescription(productName: string, categoryName: string) {
  const categoryLabel = categoryName.toLowerCase();
  return `Explore ${productName} in the ${categoryLabel} range with supporting product details, datasheets, and industrial supply information.`;
}

const PRODUCTS_DIR = path.join(process.cwd(), 'public', 'products');

function safeReadJSON(filePath: string) {
  try {
    if (!fs.existsSync(filePath)) return null;
    return JSON.parse(fs.readFileSync(filePath, 'utf-8'));
  } catch (e) {
    return null;
  }
}

function findFileInsensitive(dir: string, prefixes: string[], exts: string[]) {
  if (!fs.existsSync(dir)) return null;
  const files = fs.readdirSync(dir);
  for (const p of prefixes) {
    for (const e of exts) {
      const candidate = files.find(
        f => f.toLowerCase() === `${p.toLowerCase()}.${e}`
      );
      if (candidate) return candidate;
    }
  }
  return null;
}

function findFirstByExt(dir: string, exts: string[]) {
  if (!fs.existsSync(dir)) return null;
  const files = fs.readdirSync(dir);
  const pattern = new RegExp(`\.(${exts.join('|')})$`, 'i');
  return files.find(f => pattern.test(f)) || null;
}

export interface CategoryInfo {
  folderName: string;
  slug: string;
  name: string;
  description?: string;
  coverUrl?: string;
}

export interface ProductInfo {
  folderName: string;
  slug: string;
  name: string;
  description?: string;
  imageUrl?: string;
  datasheetUrl?: string;
  datasheetUrls?: string[];
}

export function getAllCategories(): CategoryInfo[] {
  if (!fs.existsSync(PRODUCTS_DIR)) return [];
  const entries = fs.readdirSync(PRODUCTS_DIR, { withFileTypes: true });
  const categories = entries
    .filter(e => e.isDirectory())
    .map(e => {
      const folderName = e.name;
      const folderPath = path.join(PRODUCTS_DIR, folderName);
      const meta = safeReadJSON(path.join(folderPath, 'category.json')) || {};
      const coverFile = findFileInsensitive(
        folderPath,
        ['cover', 'cover-image', 'cover.jpg'],
        ['jpg', 'jpeg', 'png', 'webp', 'avif']
      );
      const coverUrl = coverFile
        ? `/products/${encodeURIComponent(folderName)}/${encodeURIComponent(coverFile)}`
        : undefined;
      const displayName = meta.name || formatCategoryName(folderName);
      return {
        folderName,
        slug: slugify(folderName),
        name: displayName,
        description:
          meta.description ||
          meta.desc ||
          `Browse the ${displayName.toLowerCase()} range.`,
        coverUrl,
      } as CategoryInfo;
    });
  return categories;
}

export function getCategoryBySlug(slug: string): CategoryInfo | null {
  return getAllCategories().find(c => c.slug === slug) || null;
}

export function getProductsForCategory(slug: string): ProductInfo[] {
  const category = getCategoryBySlug(slug);
  if (!category) return [];
  const folderPath = path.join(PRODUCTS_DIR, category.folderName);
  if (!fs.existsSync(folderPath)) return [];

  const entries = fs.readdirSync(folderPath, { withFileTypes: true });
  const productDirs = entries.filter(e => e.isDirectory());
  const products: ProductInfo[] = productDirs.map(d => {
    const folderName = d.name;
    const productPath = path.join(folderPath, folderName);
    const meta = safeReadJSON(path.join(productPath, 'product.json')) || {};
    let imageFile = findFileInsensitive(
      productPath,
      ['image', 'image.jpg', 'photo'],
      ['jpg', 'jpeg', 'png', 'webp', 'avif']
    );
    // fallback: pick the first image file in the folder
    if (!imageFile) {
      imageFile = findFirstByExt(productPath, [
        'jpg',
        'jpeg',
        'png',
        'webp',
        'avif',
      ]);
    }

    // collect all pdf files in the product folder
    const allFiles = fs.readdirSync(productPath);
    const pdfFiles = allFiles.filter(f => /\.pdf$/i.test(f));
    let datasheet = null;
    if (pdfFiles.length) {
      // prefer explicit-named files when present
      datasheet =
        pdfFiles.find(f => /datasheet|tds|spec|data-sheet/i.test(f)) ||
        pdfFiles[0];
    }
    const datasheetUrls = pdfFiles.map(
      f =>
        `/products/${encodeURIComponent(category.folderName)}/${encodeURIComponent(folderName)}/${encodeURIComponent(f)}`
    );
    return {
      folderName,
      slug: slugify(folderName),
      name: meta.name || folderName,
      description:
        meta.description ||
        meta.desc ||
        formatProductDescription(meta.name || folderName, category.name),
      imageUrl: imageFile
        ? `/products/${encodeURIComponent(category.folderName)}/${encodeURIComponent(folderName)}/${encodeURIComponent(imageFile)}`
        : undefined,
      datasheetUrl: datasheet
        ? `/products/${encodeURIComponent(category.folderName)}/${encodeURIComponent(folderName)}/${encodeURIComponent(datasheet)}`
        : undefined,
      datasheetUrls: datasheetUrls.length ? datasheetUrls : undefined,
    } as ProductInfo;
  });

  return products;
}

export function getProduct(
  slugCategory: string,
  slugProduct: string
): ProductInfo | null {
  const products = getProductsForCategory(slugCategory);
  return products.find(p => p.slug === slugProduct) || null;
}

export function getAllProductPaths() {
  const categories = getAllCategories();
  return categories.flatMap(cat => {
    const products = getProductsForCategory(cat.slug);
    return products.map(p => ({ category: cat.slug, product: p.slug }));
  });
}
