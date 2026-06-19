# AGENTS.md — untitled-space

> Vibe coding configuration for this project.

## Project Identity

**untitled-space** is a highly customized static personal blog powered by Astro. Its visual identity is rooted in **Y2K avant-garde sci-fi** and **early internet aesthetics** — think *Serial Experiments Lain*, *The Matrix*, *Ghost in the Shell*, and hand-coded Homepage culture from 1999.

## Design Constraints (MANDATORY)

### DO
- Use **dotted/dashed borders** as primary decorative elements
- **Blue-green color palette**: `#00FFCC` (cyan/teal), `#0066FF` (deep blue), `#00CCFF` (sky blue), `#003366` (dark blue), `#FFFF00` (accent yellow)
- **Flat colors** — no gradients unless explicitly retro (e.g. old-school browser gradients)
- **Monospace fonts** (JetBrains Mono, Iosevka, IBM Plex Mono, or system monospace)
- **ASCII-art decorations**: `+--`, `|`, `*`, `~`, `#`, `> ` for dividers and ornaments
- **Classic blue underlined links** (`#0000EE` / `#551A8B`)
- **Block cursor** on interactive elements (like a terminal cursor)
- **CRT scanline overlay** as a subtle texture on images or backgrounds
- **Low or no border-radius** (max 4px, prefer 0)
- **Thin, hard shadows** or no shadows at all
- Footer with `<*> handmade with cat / __ /\_/\` style ASCII art

### DO NOT
- ❌ No `backdrop-filter: blur()` — no glassmorphism
- ❌ No large border-radius (> 8px)
- ❌ No Tailwind CSS utility classes (handwrite CSS)
- ❌ No smooth/shiny shadows
- ❌ No Inter, SF Pro, system-ui as primary font
- ❌ No "modern AI-era" UI patterns (huge whitespace, floating FABs, mega-menus)
- ❌ No animation frameworks; use minimal `@keyframes` if needed

## Tech Stack

| Aspect | Choice |
|--------|--------|
| Framework | Astro 5 |
| Content | Markdown + MDX |
| Styling | Hand-written CSS, CSS Variables |
| Deployment | GitHub Pages |
| Feed | Astro RSS plugin |

## Content Collections

```
src/content/
  blog/    # Long-form articles (Markdown/MDX)
  notes/   # Short thoughts / microblog
```

## Coding Patterns

### CSS approach
- Global tokens in `:root` via `src/styles/tokens.css`
- Component-scoped `<style>` in Astro components
- BEM-like naming with kebab-case: `.post-card`, `.post-card__title`
- CSS Variables for all colors, fonts, spacing
- Media queries for dark mode via `prefers-color-scheme`

### Astro patterns
- Use `.astro` components for layout and pages
- `.mdx` for content with frontmatter
- Frontmatter schema: `title`, `date`, `tags`, `description`

### File naming
- kebab-case for all files
- Components: `ComponentName.astro` (PascalCase)
- Pages: `page-name.astro`

## Build & Deploy

```bash
bun dev      # dev server
bun build    # static build to dist/
bun preview  # preview build
```

Deploy: push to `main` → GitHub Actions builds and deploys to GitHub Pages.

## Visual Reference Keywords

"Y2K aesthetic", "net art", "retro web", "cyberpunk 1999", "ASCII art", "dotted borders", "blue-green color scheme", "monospace", "CRT scanlines", "dial-up era design", "personal homepage 90s"
