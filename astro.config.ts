import { defineConfig } from "astro/config";

export default defineConfig({
  site: "https://deng2010.github.io",
  base: "/untitled-space",
  build: {
    format: "directory",
  },
  markdown: {
    shikiConfig: {
      themes: {
        light: "github-light",
        dark: "github-dark",
      },
    },
  },
});
