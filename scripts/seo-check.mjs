// SEO guardrail run after every build. Fails the build on any error.
// Checks every built HTML page for the rules in the plan: title, description, H1, canonical,
// JSON-LD, <main>, image alt/dimensions, blog-to-service links and leftover placeholders.
import { readFileSync, readdirSync, statSync, existsSync } from 'node:fs';
import { join, relative, sep } from 'node:path';

const roots = ['.vercel/output/static', 'dist/client', 'dist'].filter((d) => existsSync(d));
if (!roots.length) { console.error('seo-check: no build output found'); process.exit(1); }
const ROOT = roots[0];
const files = [];
(function walk(d) { for (const f of readdirSync(d)) { const p = join(d, f); if (statSync(p).isDirectory()) { if (f !== '_astro') walk(p); } else if (p.endsWith('.html')) files.push(p); } })(ROOT);

const errors = [], warnings = [], titles = new Map();
const text = (s) => s.replace(/<[^>]+>/g, '').replace(/&amp;/g, '&').replace(/&#39;|&apos;/g, "'").replace(/&quot;/g, '"').replace(/\s+/g, ' ').trim();
for (const f of files) {
  const rel = '/' + relative(ROOT, f).split(sep).join('/').replace(/\.html$/, '').replace(/(^|\/)index$/, '');
  const html = readFileSync(f, 'utf8');
  const noindex = /<meta name="robots" content="noindex/.test(html);
  const err = (m) => errors.push(`${rel}: ${m}`), warn = (m) => warnings.push(`${rel}: ${m}`);
  const title = text((html.match(/<title>([\s\S]*?)<\/title>/) || [])[1] || '');
  const desc = (html.match(/<meta name="description" content="([^"]*)"/) || [])[1] || '';
  if (!title) err('missing <title>'); else if (title.length > 65) err(`title ${title.length} chars: "${title}"`); else if (title.length > 60) warn(`title ${title.length} chars`);
  if (!noindex) { if (titles.has(title)) err(`duplicate title with ${titles.get(title)}`); titles.set(title, rel); }
  if (desc.length < 110 || desc.length > 160) err(`description ${desc.length} chars`);
  const h1 = (html.match(/<h1[\s>]/g) || []).length; if (h1 !== 1) err(`${h1} <h1> elements`);
  if (!/<link rel="canonical" href="https:\/\/www\.syntalixconsultancy\.com/.test(html)) err('missing absolute www canonical');
  const ld = [...html.matchAll(/<script type="application\/ld\+json">([\s\S]*?)<\/script>/g)];
  if (!ld.length) err('missing JSON-LD'); for (const m of ld) { try { JSON.parse(m[1]); } catch { err('invalid JSON-LD'); } }
  if ((html.match(/<main[\s>]/g) || []).length !== 1) err('needs exactly one <main>');
  for (const img of html.match(/<img\b[^>]*>/g) || []) {
    if (!/\salt(="|[\s>/])/.test(img)) err(`img without alt: ${img.slice(0, 90)}`);
    if (!/\swidth="/.test(img) || !/\sheight="/.test(img)) err(`img without width/height: ${img.slice(0, 90)}`);
  }
  if (/\[(VERIFY|METRIC|TO CONFIRM|PLACEHOLDER)/i.test(html)) err('placeholder text left in page');
  if (/x\.com\/syntalix|twitter:site/.test(html)) err('points at x.com/syntalix, which is not ours');
  if (rel.startsWith('/blog/') && !/href="\/services\//.test(html)) err('blog post does not link to a service page');
}
console.log(`seo-check: ${files.length} pages checked in ${ROOT}`);
warnings.forEach((w) => console.warn('  warn  ' + w));
if (errors.length) { errors.forEach((e) => console.error('  FAIL  ' + e)); console.error(`seo-check: ${errors.length} error(s)`); process.exit(1); }
console.log('seo-check: all pages pass');
