// @ts-check
import { defineConfig } from 'astro/config';

// Production domain. Confirm before launch: it drives canonical URLs, Open Graph
// URLs, sitemap.xml and robots.txt.
const site = 'https://freediverote.com';

export default defineConfig({
  site,
  output: 'static',
  trailingSlash: 'never',
  build: { format: 'file' },
  redirects: {
    '/contact': '/#contact',
    '/courses/all': '/courses',
  },
});
