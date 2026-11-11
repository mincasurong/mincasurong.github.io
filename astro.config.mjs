import { defineConfig } from 'astro/config';

export default defineConfig({
  site: 'https://mincasurong.github.io',
  trailingSlash: 'always',
  build: {
    format: 'directory',
  },
});
