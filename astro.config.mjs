// @ts-check
import { defineConfig } from 'astro/config';

// GitHub Pages project sites are served from `https://<user>.github.io/<repo>/`,
// so every asset and route needs the repository name as a prefix. The value is
// injected by the deploy workflow (see .github/workflows/deploy.yml) and can be
// overridden locally with `BASE_PATH=/theme npm run build`.
const base = process.env.BASE_PATH ?? '/';
const site = process.env.SITE_URL ?? 'https://lunrenyi.github.io';

export default defineConfig({
  site,
  base,
  trailingSlash: 'ignore',
  build: {
    format: 'directory',
    inlineStylesheets: 'auto',
  },
  devToolbar: { enabled: false },
});
