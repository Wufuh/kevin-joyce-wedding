import { defineConfig } from 'astro/config';

export default defineConfig({
  site: 'https://kevinandjoyce.com',
  i18n: {
    defaultLocale: 'en',
    locales: ['en', 'zh'],
    routing: {
      prefixDefaultLocale: false,
    },
  },
});
