import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';

export default defineConfig({
  site: 'https://kausthubh.in',
  integrations: [sitemap()],
  markdown: {
    rehypePlugins: [
      (await import('rehype-slug')).default,
      (await import('rehype-autolink-headings')).default
    ]
  }
});
