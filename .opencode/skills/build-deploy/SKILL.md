---
name: build-deploy
description: Handles Astro build and GitHub Pages deployment tasks. Use when building, previewing, or deploying the site.
---

# Build & Deploy

Use this skill when running build commands or managing deployment.

## Commands

- `bun dev` — Start dev server with hot reload
- `bun run build` — Static build to `dist/`
- `bun preview` — Preview the production build locally

## Deployment

- Push to `main` branch triggers GitHub Actions
- Workflow file: `.github/workflows/deploy.yml`
- Uses the official [`withastro/action@v5`](https://github.com/withastro/action) with
  `package-manager: bun@latest` (auto-detected from `bun.lock`)
- Deploys to GitHub Pages via `actions/deploy-pages@v4`
- Site URL: `https://deng2010.github.io/untitled-space/`

### Workflow Steps

```
push to main
 → actions/checkout@v5
 → withastro/action@v5 (install + build + upload artifact)
 → actions/deploy-pages@v4 (publish to GitHub Pages)
```

## Verification

Always verify the build succeeds before committing any changes:
```bash
bun run build
```

The `withastro/action` auto-detects bun from `bun.lock` — no manual
`oven-sh/setup-bun` step needed.

## Configuration

- `astro.config.ts`: `site: "https://deng2010.github.io"`, `base: "/untitled-space"`
- All internal links must use `withBase()` from `src/utils/paths.ts`
