import type { APIRoute } from 'astro';
import { getCollection } from 'astro:content';
import { SITE } from '@/data/site';
import { SERVICES } from '@/data/services';
import { CASE_STUDIES } from '@/data/caseStudies';
import { lastModified } from '@/data/sitemap-dates.mjs';

// Served at /sitemap.xml, the URL already registered in Search Console.
export const GET: APIRoute = async () => {
  const posts = await getCollection('blog');
  const paths = [
    '/', '/services', ...SERVICES.map((s) => `/services/${s.slug}`),
    '/case-studies', ...CASE_STUDIES.map((c) => `/case-studies/${c.slug}`), '/portfolio',
    '/blog', ...posts.map((p) => `/blog/${p.id}`),
    '/about', '/careers', '/contact',
  ];
  const urls = paths.map((p) => `  <url><loc>${SITE.url}${p === '/' ? '' : p}</loc><lastmod>${lastModified(p)}</lastmod></url>`).join('\n');
  return new Response(`<?xml version="1.0" encoding="UTF-8"?>\n<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">\n${urls}\n</urlset>\n`, {
    headers: { 'Content-Type': 'application/xml; charset=utf-8' },
  });
};
