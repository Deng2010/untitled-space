import { defineConfig } from "astro/config";

export default defineConfig({
  site: "https://your-username.github.io",
  base: "/untitled-space",
  trailingSlash: "always",
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
