import { defineConfig } from 'astro/config';

import node from "@astrojs/node";

import tailwindcss from "@tailwindcss/vite";

export default defineConfig({
  integrations: [],

  adapter: node({
    mode: "standalone"
  }),

  vite: {
    plugins: [tailwindcss()]
  }
});