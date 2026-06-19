---
name: baselayout
description: Edits the BaseLayout.astro shell — layout grid, typewriter script, background effects, footer, and mobile responsiveness. Use when modifying the global page shell.
---

# BaseLayout

Use this skill when editing `src/layouts/BaseLayout.astro` — the global shell
that wraps every page on the site.

## File

```
src/layouts/BaseLayout.astro
```

## Props

```ts
interface Props {
  title: string;        // required, appended as "title :: untitled-space"
  description?: string; // meta description, defaults to "untitled-space"
}
```

## Structure

```
<html lang="zh-CN">
  <head> … </head>
  <body>
    <!-- Character-based starfield (3 fixed spans) -->
    <span class="bg-star bg-star--dot" aria-hidden="true"></span>
    <span class="bg-star bg-star--ast" aria-hidden="true"></span>
    <span class="bg-star bg-star--bit" aria-hidden="true"></span>

    <div class="layout">
      <aside class="sidebar"> … </aside>   <!-- grid-row: 1/3 -->
      <main class="main"><slot /></main>   <!-- main content -->
      <footer class="footer"> … </footer>  <!-- ASCII cat -->
    </div>

    <!-- Typewriter animation script (inline, self-invoking) -->
    <script>…</script>
  </body>
</html>
```

## Layout Grid (CSS)

- `max-width: 1000px`, `margin: 0 auto`
- `grid-template-columns: 200px 1fr`
- `grid-template-rows: 1fr auto`
- Sidebar spans both rows (`grid-row: 1 / 3`)
- Gap: `var(--space-xl)`

## Mobile (≤ 700px)

- Grid collapses to single column: `grid-template-columns: 1fr`
- Sidebar becomes horizontal bar: `flex-direction: row`, `align-items: baseline`
- Sidebar logo switches to `writing-mode: horizontal-tb`
- Navigation changes to `flex-direction: row`

## Background Patterns

Backgrounds live in `src/styles/global.css` (not in BaseLayout scoped style):

- **Circuit traces**: SVG data-URI in `html { background-image }` — 96px tile with irregular routing lines + nodes. Light mode: 12% opacity, dark mode: 8%.
- **Starfield**: Three fixed-position `<span>` elements rendered via `text-shadow` strings:
  - `.bg-star--dot` — `·` characters (cyan, ~40 positions, vw/vh units)
  - `.bg-star--ast` — `*` characters (sky blue, ~16 positions)
  - `.bg-star--bit` — `0` / `1` characters (low opacity, ~12 positions)
  - Hidden when `prefers-reduced-motion: reduce`
  - Must have `z-index: 0`, `pointer-events: none`, `overflow: hidden`

## Typewriter Script

Inline `<script>` at end of `<body>`. Three-phase terminal animation:

| Phase | What types | Cursor |
|-------|-----------|--------|
| 0 | Sidebar logo columns (UNTITLED → SPACE, reversed DOM order) | blinking block · on sidebar |
| (pause) | Sidebar done → no cursor | hidden (classList.remove) |
| 1 | Main content (all `.main` text nodes) | blinking block · on main |
| Done | Unwrap spans, keep last sidebar char | horizontal (rotated 90°) bar |

### Key details
- Skips entirely if `.error` in main (404 page) or `prefers-reduced-motion: reduce`
- SKIP set: `SCRIPT`, `STYLE`, `PRE`, `CODE`, `KBD`, `SVG`
- Walk function: wraps each non-whitespace char in `<span class="tw-char">` (opacity 0)
- Speed: `max(8, min(25, 2500 / totalChars))` — adaptive to ~2.5s total
- Sidebar chars collected via `querySelectorAll(".sidebar__logo-col")` in **reverse** iteration
- `tw-now::after` creates the blinking block cursor (CSS in global.css)
- `tw-done::after` rotates cursor 90° via `transform: rotate(90deg)` (CSS in global.css)
- `finish()`: unwraps all main spans to text, unwraps all sidebar spans except the last one

### CSS classes involved (global.css)
```css
.tw-char           { opacity: 0; }
.tw-char.tw-now::after { /* vertical block cursor, blinking */ }
.tw-char.tw-done::after { /* rotated 90° horizontal cursor, blinking */ }
```

## Footer ASCII Art

```text
<*> handmade with cat /\_/\
    ( o.o )
     > ^ <
```

Font: `var(--font-pixel)`, color: `var(--color-text-muted)`.
Top border: `var(--border-width) dashed var(--color-border-dashed)`.

## Critical Rules

- All internal links must use `withBase()` from `src/utils/paths.ts`
- Import `src/styles/global.css` in frontmatter (already done)
- Scoped `<style>` block at bottom of file for all layout CSS
- No Tailwind, hand-written CSS only
- Use CSS variables from `src/styles/tokens.css` for all design tokens
