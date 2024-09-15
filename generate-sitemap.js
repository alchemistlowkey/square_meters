import fs from 'fs';
import path from 'path';

// Define the base URL
const BASE_URL = 'https://squaremetres.ng';

// Define the static pages you want to include in your sitemap
const staticPages = [
  '',
  '/about-us',
  '/agency',
  '/career',
  '/contact-us',
  '/faq',
  '/fitila-signature',
  '/investment',
  '/policy',
];

// Generate sitemap URLs
const urls = staticPages.map((page) => `
  <url>
    <loc>${BASE_URL}${page}</loc>
    <lastmod>${new Date().toISOString()}</lastmod>
    <changefreq>daily</changefreq>
    <priority>1.0</priority>
  </url>
`).join('');

// Create the full sitemap XML structure
const sitemap = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
  ${urls}
</urlset>`;

// Write the sitemap.xml to the 'build' folder (or 'static' folder if desired)
const outputDir = path.resolve('build');
if (!fs.existsSync(outputDir)) {
  fs.mkdirSync(outputDir, { recursive: true });
}

fs.writeFileSync(path.resolve(outputDir, 'sitemap.xml'), sitemap);

console.log('Sitemap generated successfully!');
