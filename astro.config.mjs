import { defineConfig } from 'astro/config';
import mdx from '@astrojs/mdx';
import sitemap from '@astrojs/sitemap'; // Keep this import
import tailwind from "@astrojs/tailwind";

// https://astro.build/config
export default defineConfig({
  site: 'https://astrofy-template.netlify.app',
  // Comment out or remove sitemap() from the array below:
  integrations: [mdx(), /*sitemap(),*/ tailwind()] 
});