// Checks every URL from the pre-relaunch baseline against a deployment.
// Usage: node scripts/url-parity.mjs https://<preview>.vercel.app
import { readFileSync } from 'node:fs';

const base = (process.argv[2] || '').replace(/\/$/, '');
if (!base) { console.error('usage: node scripts/url-parity.mjs <base-url>'); process.exit(1); }
const { pages } = JSON.parse(readFileSync(new URL('./baseline.json', import.meta.url), 'utf8'));
const RETIRED = { '/team': '/about', '/case-studies/automated-document-processing-llm': '/case-studies', '/case-studies/predictive-maintenance-ai-infrastructure': '/case-studies', '/case-studies/enterprise-ecommerce-modernization': '/case-studies' };
const headers = process.env.VERCEL_BYPASS ? { 'x-vercel-protection-bypass': process.env.VERCEL_BYPASS } : {};
let fails = 0;
for (const { path } of [...pages, { path: '/typography' }]) {
  const res = await fetch(base + path, { redirect: 'manual', headers });
  const loc = res.headers.get('location') || '';
  let ok, note = '';
  if (path === '/typography') { ok = res.status === 404; note = 'expected 404'; }
  else if (RETIRED[path]) { ok = [301, 308].includes(res.status) && loc.endsWith(RETIRED[path]); note = `-> ${loc}`; }
  else {
    ok = res.status === 200;
    if (ok) {
      const html = await res.text();
      const canon = (html.match(/<link rel="canonical" href="([^"]+)"/) || [])[1] || '';
      const want = `https://www.syntalixconsultancy.com${path === '/' ? '' : path}`;
      if (canon !== want) { ok = false; note = `canonical ${canon}`; }
    }
  }
  if (!ok) fails++;
  console.log(`${ok ? 'ok  ' : 'FAIL'} ${res.status} ${path} ${note}`);
}
console.log(fails ? `${fails} URL(s) failed` : 'all baseline URLs pass');
process.exit(fails ? 1 : 0);
