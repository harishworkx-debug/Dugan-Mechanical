import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const rootDir = path.resolve(__dirname, '..');

const BASE_URL = 'https://www.duganmechanical.com';

// 1. Read services from src/data/services.ts
const servicesFile = fs.readFileSync(path.join(rootDir, 'src/data/services.ts'), 'utf8');
const serviceMatches = [...servicesFile.matchAll(/slug:\s*'([^']+)'/g)].map((m) => m[1]);
const services = Array.from(new Set(serviceMatches));

// 2. Read locations from src/data/locations.ts
const locationsFile = fs.readFileSync(path.join(rootDir, 'src/data/locations.ts'), 'utf8');
const locationMatches = [...locationsFile.matchAll(/slug:\s*'([^']+)'/g)].map((m) => m[1]);
const locations = Array.from(new Set(locationMatches));

// Stable content release date to prevent Googlebot ignoring uniform lastmod changes
const RELEASE_DATE = '2026-03-25';
const CORE_UPDATE_DATE = '2026-04-10';

const coreRoutes = [
  { path: '/', changefreq: 'weekly', priority: '1.0', lastmod: CORE_UPDATE_DATE },
  { path: '/services', changefreq: 'weekly', priority: '0.9', lastmod: CORE_UPDATE_DATE },
  { path: '/service-areas', changefreq: 'weekly', priority: '0.9', lastmod: CORE_UPDATE_DATE },
  { path: '/about', changefreq: 'monthly', priority: '0.7', lastmod: RELEASE_DATE },
  { path: '/contact', changefreq: 'monthly', priority: '0.8', lastmod: CORE_UPDATE_DATE },
  { path: '/faq', changefreq: 'monthly', priority: '0.7', lastmod: CORE_UPDATE_DATE },
];

const urls = [];

// Add core pages
for (const route of coreRoutes) {
  urls.push({
    loc: route.path === '/' ? `${BASE_URL}/` : `${BASE_URL}${route.path}`,
    lastmod: route.lastmod,
    changefreq: route.changefreq,
    priority: route.priority,
  });
}

// Add service-location combinations
for (const service of services) {
  for (const location of locations) {
    const isPrimaryLocation = location === 'saco-me';
    urls.push({
      loc: `${BASE_URL}/${service}-${location}`,
      lastmod: isPrimaryLocation ? CORE_UPDATE_DATE : RELEASE_DATE,
      changefreq: 'monthly',
      priority: isPrimaryLocation ? '0.85' : '0.65',
    });
  }
}

// Generate sitemap XML content
const sitemapXml = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${urls
  .map(
    (item) => `  <url>
    <loc>${item.loc}</loc>
    <lastmod>${item.lastmod}</lastmod>
    <changefreq>${item.changefreq}</changefreq>
    <priority>${item.priority}</priority>
  </url>`
  )
  .join('\n')}
</urlset>
`;

const publicDir = path.join(rootDir, 'public');
if (!fs.existsSync(publicDir)) {
  fs.mkdirSync(publicDir, { recursive: true });
}

// Write public/sitemap.xml
const sitemapPath = path.join(publicDir, 'sitemap.xml');
fs.writeFileSync(sitemapPath, sitemapXml, 'utf8');
console.log(`Successfully generated ${sitemapPath} with ${urls.length} URLs.`);

// Generate & write public/robots.txt
const robotsTxt = `User-agent: *
Allow: /
Disallow: /404

Sitemap: ${BASE_URL}/sitemap.xml
`;

const robotsPath = path.join(publicDir, 'robots.txt');
fs.writeFileSync(robotsPath, robotsTxt, 'utf8');
console.log(`Successfully generated ${robotsPath}.`);
