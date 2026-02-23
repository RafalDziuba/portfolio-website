// @ts-check
import { defineConfig } from 'astro/config';

import tailwindcss from '@tailwindcss/vite';
import mdx from '@astrojs/mdx';

import vercel from '@astrojs/vercel';

// https://astro.build/config
export default defineConfig({
  output: 'static',

  vite: {
    plugins: [tailwindcss()],
  },

  integrations: [mdx()],

  i18n: {
    defaultLocale: 'pl',
    locales: ['pl', 'en'],
    routing: {
      prefixDefaultLocale: false,
    },
  },

  adapter: vercel(),
});