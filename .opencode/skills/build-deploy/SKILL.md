---
name: build-deploy
description: Handles Astro build and GitHub Pages deployment tasks. Use when building, previewing, or deploying the site.
---

# Build & Deploy

Use this skill when running build commands or managing deployment.

## Commands

- `npm run dev` — Start dev server with hot reload
- `npm run build` — Static build to `dist/`
- `npm run preview` — Preview the production build locally

## Deployment

- Push to `main` branch triggers GitHub Actions
- Workflow file: `.github/workflows/deploy.yml`
- Builds with `npm ci && npm run build`
- Deploys to GitHub Pages via `actions/deploy-pages`

## Verification

Always verify the build succeeds before committing any changes.
