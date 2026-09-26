// Local stand-in for Vercel's static routing, for QA only: clean URLs, trailing-slash strip,
// redirects from .vercel/output/config.json, and 404.html. Usage: node scripts/serve-static.mjs [port]
import { createServer } from 'node:http';
import { readFileSync, existsSync, statSync } from 'node:fs';
import { join, extname } from 'node:path';
import { gzipSync } from 'node:zlib';

const ROOT = '.vercel/output/static';
const port = Number(process.argv[2] || 4400);
const config = JSON.parse(readFileSync('.vercel/output/config.json', 'utf8'));
const redirects = (config.routes || []).filter((r) => r.src && r.headers?.Location && r.status);
const TYPES = { '.html': 'text/html; charset=utf-8', '.css': 'text/css', '.js': 'text/javascript', '.webp': 'image/webp', '.png': 'image/png', '.svg': 'image/svg+xml', '.ico': 'image/x-icon', '.xml': 'application/xml', '.txt': 'text/plain; charset=utf-8', '.woff2': 'font/woff2', '.json': 'application/json', '.webmanifest': 'application/manifest+json' };

createServer((req, res) => {
  const url = new URL(req.url, 'http://x');
  for (const r of redirects) {
    const m = url.pathname.match(new RegExp(r.src));
    if (m) { const loc = r.headers.Location.replace(/\$(\d+)/g, (_, i) => m[i] ?? ''); res.writeHead(r.status, { Location: loc }); return res.end(); }
  }
  const p = decodeURIComponent(url.pathname);
  const candidates = [p, `${p}.html`, join(p, 'index.html')];
  for (const c of candidates) {
    const f = join(ROOT, c);
    if (existsSync(f) && statSync(f).isFile()) {
      const type = TYPES[extname(f)] || 'application/octet-stream';
      let body = readFileSync(f); const h = { 'Content-Type': type };
      if (/text|javascript|json|xml|svg/.test(type) && /gzip/.test(req.headers['accept-encoding'] || '')) { body = gzipSync(body); h['Content-Encoding'] = 'gzip'; }
      res.writeHead(200, h); return res.end(body);
    }
  }
  res.writeHead(404, { 'Content-Type': TYPES['.html'] });
  res.end(readFileSync(join(ROOT, '404.html')));
}).listen(port, () => console.log(`serving ${ROOT} on http://localhost:${port}`));
