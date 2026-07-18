import { defineConfig } from 'astro/config';
import mdx from '@astrojs/mdx';
import tailwind from "@astrojs/tailwind";

export default defineConfig({
  site: 'https://vidhuchalla.github.io',
  base: '/VidhuChalla-Astrofy-Portfolio/',
  integrations: [mdx(), tailwind()] // Temporarily removed sitemap()
});