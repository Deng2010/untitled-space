```
+-----------------------------------------------------------------------+
|                                                                       |
|   _    _ _   _ _______ _____ _    _ _____ ______   _____               |
|  | |  | | \ | |__   __|_   _| |  | |_   _|  ____| |  __ \              |
|  | |  | |  \| |  | |    | | | |  | | | | | |__    | |__) |__   ___    |
|  | |  | | . ` |  | |    | | | |  | | | | |  __|   |  ___/ _ \ / _ \   |
|  | |__| | |\  |  | |   _| |_| |__| |_| |_| |____  | |  | (_) | (_) |  |
|   \____/|_| \_|  |_|  |_____|\____/|_____|______| |_|   \___/ \___/   |
|                                                                       |
|            S P A C E          >_  personal blog v0.1                  |
|                                                                       |
+-----------------------------------------------------------------------+
```

# untitled-space

> `~$` A static personal blog at the intersection of code, design, and
> retro futures. Hand-crafted with love, monospace fonts, and too many
> dotted borders.

Built with **[Astro](https://astro.build)** · Deployed on **[GitHub Pages](https://pages.github.com)** · Styled like **1999**.

---

```
+--[ DESIGN ]-----------------------------------------------------------+
|                                                                        |
|  * Y2K avant-garde sci-fi aesthetic                                    |
|  * Hand-written CSS (no Tailwind, no frameworks)                       |
|  * Blue-green palette: #00FFCC / #0066FF / #00CCFF                    |
|  * Monospace fonts: JetBrains Mono + Zpix (pixel font)                |
|  * Dotted & dashed borders everywhere                                  |
|  * CRT scanline overlay textures                                       |
|  * ASCII-art decorations & dividers                                    |
|  * Terminal typewriter landing animation                               |
|                                                                        |
+------------------------------------------------------------------------+
```

## Tech Stack

| Layer      | Choice                          |
|------------|---------------------------------|
| Framework  | Astro 6                         |
| Content    | Markdown + MDX (Content Layer)  |
| Styling    | Hand-written CSS (CSS Variables)|
| Runtime    | Bun                             |
| Deploy     | GitHub Actions → GitHub Pages   |
| Fonts      | JetBrains Mono, Zpix            |

## Getting Started

```bash
# Install dependencies
bun install

# Start dev server
bun dev

# Build for production
bun run build

# Preview production build
bun preview
```

## Project Structure

```
untitled-space/
├── src/
│   ├── assets/fonts/       # Zpix pixel font
│   ├── content/
│   │   ├── blog/           # Long-form articles (Markdown/MDX)
│   │   └── notes/          # Short thoughts / microblog
│   ├── layouts/
│   │   ├── BaseLayout.astro # Global shell (sidebar, typewriter, starfield)
│   │   └── PostLayout.astro # Blog post wrapper
│   ├── pages/
│   │   ├── index.astro     # Homepage
│   │   ├── about.astro     # System info
│   │   ├── 404.astro       # Signal lost (glitch theme)
│   │   ├── blog/[...page].astro
│   │   └── notes/[...page].astro
│   ├── styles/
│   │   ├── tokens.css      # Design tokens (CSS Variables)
│   │   └── global.css      # Reset, typewriter, backgrounds
│   └── utils/
│       └── paths.ts        # withBase() helper
├── public/
│   └── favicon.svg         # Terminal cursor icon
├── .github/workflows/
│   └── deploy.yml          # GitHub Pages deploy
├── astro.config.ts
├── bun.lock
├── opencode.json           # Vibe coding config
├── AGENTS.md               # Agent instructions
└── README.md               # You are here
```

## Content Collections

### Blog (`src/content/blog/`)
Long-form articles with frontmatter:

```yaml
---
title: "Hello, World"
date: 2026-06-18
tags: ["intro", "meta"]
description: "First post on untitled-space."
---
```

### Notes (`src/content/notes/`)
Shorter thoughts, microblog style:

```yaml
---
title: "the void whispers back"
date: 2026-06-18
tags: ["misc"]
---
```

## Design Philosophy

```
+--[ CONSTRAINTS ]------------------------------------------------------+
|                                                                        |
|  DO                         |  DON'T                                   |
|  ---------------------------|----------------------------------        |
|  > Dotted/dashed borders    |  X backdrop-filter: blur()              |
|  > Flat colors              |  X Large border-radius (>8px)           |
|  > Monospace fonts          |  X Tailwind utility classes             |
|  > ASCII-art decorations    |  X Smooth shadows                       |
|  > Classic blue links       |  X Inter / SF Pro / system-ui           |
|  > CRT scanline textures    |  X Glassmorphism                        |
|  > Block cursor on inputs   |  X Animation frameworks                 |
|                                                                        |
+------------------------------------------------------------------------+
```

> Inspired by: *Serial Experiments Lain*, *The Matrix*, *Ghost in the Shell*,
> hand-coded Homepages from 1999, and the dial-up era.

## Deployment

Push to `main` → GitHub Actions builds and deploys to GitHub Pages via
[`withastro/action`](https://github.com/withastro/action).

Live at: **<https://deng2010.github.io/untitled-space/>**

---

```
     /\_/\     <*> handmade with cat
    ( o.o )    # monospace everything
     > ^ <     # dotted borders forever
```

*Last updated: 2026-06-19 · System status: ONLINE*
