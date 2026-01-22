import { defineConfig } from 'astro/config';

import tailwindcss from '@tailwindcss/vite';

import sitemap from '@astrojs/sitemap';

// https://astro.build/config
export default defineConfig({
  site: 'https://ozio-group.com',
  output: 'static',

  build: {
    format: 'directory'
  },

  vite: {
    build: {
      cssMinify: true
    },

    plugins: [tailwindcss()]
  },

  integrations: [sitemap()]
});