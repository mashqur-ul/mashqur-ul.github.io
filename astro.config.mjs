// @ts-check
import { defineConfig } from 'astro/config';

// https://astro.build/config
export default defineConfig({
  vite: {
    css: {
      preprocessorOptions: {
        sass: {
          api: 'modern-compiler', // or 'modern'
          silenceDeprecations: ['import']
        },
      },
    },
  }
});
