import { defineConfig } from 'astro/config';
import tailwindcss from "@tailwindcss/vite";

export default defineConfig({
  build: {
		inlineStylesheets: "always",
	},
	compressHTML: true,
	prefetch: true,
	devToolbar: {
		enabled: false,
	},
  integrations: [],
  output: 'static',
  vite: {
    plugins: [tailwindcss()]
  }
});