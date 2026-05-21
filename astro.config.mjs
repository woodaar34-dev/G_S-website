// @ts-check
import { defineConfig } from 'astro/config';
import tailwind from '@astrojs/tailwind';

// https://astro.build/config
export default defineConfig({
  integrations: [tailwind()],
  base: '/G_S-website',
  site: 'https://woodaar34-dev.github.io/G_S-website/',
});
