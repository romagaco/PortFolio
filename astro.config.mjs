import { defineConfig } from 'astro/config';
import tailwind from '@astrojs/tailwind';  // Assuming you have this

export default defineConfig({
  site: 'https://romagaco.github.io',
  base: '/PortFolio',  // Key for subpath deploys!
  output: 'static',
  integrations: [tailwind()],
});