import { defineConfig } from 'astro/config';

const isGitHubPages = process.env.GITHUB_PAGES === 'true';

export default defineConfig({
  output: 'static',
  site: isGitHubPages ? 'https://Yamil1701.github.io' : undefined,
  base: isGitHubPages ? '/mora-web' : '/',
});
