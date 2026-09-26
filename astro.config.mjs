// @ts-check
import { defineConfig } from 'astro/config';
import vercel from '@astrojs/vercel';

export default defineConfig({
  site: 'https://www.syntalixconsultancy.com',
  // Existing URLs have no trailing slash; keep them exactly.
  trailingSlash: 'never',
  build: { format: 'file', inlineStylesheets: 'always' },
  adapter: vercel({ webAnalytics: { enabled: false } }),
  // Retired URLs (also mirrored in vercel.json). 301 so link equity moves over.
  redirects: {
    '/team': { status: 301, destination: '/about' },
    '/case-studies/automated-document-processing-llm': { status: 301, destination: '/case-studies' },
    '/case-studies/predictive-maintenance-ai-infrastructure': { status: 301, destination: '/case-studies' },
    '/case-studies/enterprise-ecommerce-modernization': { status: 301, destination: '/case-studies' },
  },
  image: {
    responsiveStyles: true,
  },
  prefetch: { prefetchAll: false, defaultStrategy: 'hover' },
});
