import { defineConfig } from 'astro/config';
import tailwind from '@astrojs/tailwind';

// https://astro.build/config
export default defineConfig({
  integrations: [
    tailwind({
      applyBaseStyles: false, // Disable base styles injection to avoid path issues
    })
  ],
  site: 'https://romagaco.github.io',
  base: '/PortFolio',
});