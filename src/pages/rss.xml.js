import rss from '@astrojs/rss';
import { BRAND } from '../config';

export async function GET() {
  const postImports = import.meta.glob('./blog/*.{md,mdx}', { eager: true });
  const items = Object.entries(postImports).map(([path, mod]) => ({
    link: path.replace('./', '/'),
    title: mod.frontmatter?.title ?? path,
    pubDate: new Date(mod.frontmatter?.pubDate ?? Date.now()),
    description: mod.frontmatter?.description ?? ''
  }));

  return rss({
    title: BRAND.title,
    description: BRAND.tagline,
    site: import.meta.env.SITE,
    items
  });
}
