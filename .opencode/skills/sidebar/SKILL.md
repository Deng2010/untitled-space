---
name: sidebar
description: Edits the sidebar within BaseLayout — logo columns, navigation links, status deco, and mobile behavior. Use when modifying the left sidebar panel.
---

# Sidebar

Use this skill when editing the sidebar inside `src/layouts/BaseLayout.astro`.

## Location

The sidebar lives in `<aside class="sidebar">` within `BaseLayout.astro`. All
sidebar CSS is in the scoped `<style>` block at the bottom of that file.

## HTML Structure

```html
<aside class="sidebar">
  <a href={withBase("/")} class="sidebar__logo">
    <span class="sidebar__logo-col">SPACE</span>
    <span class="sidebar__logo-col">UNTITLED</span>
  </a>

  <nav class="sidebar__nav" aria-label="Main navigation">
    <a href={withBase("/")}>~ INDEX</a>
    <a href={withBase("/blog")}>/ BLOG</a>
    <a href={withBase("/notes")}>/ NOTES</a>
    <a href={withBase("/about")}>/ ABOUT</a>
  </nav>

  <pre class="sidebar__deco">
+-----------------+
| > STATUS : OK   |
| > NODE   : 0x1A |
| > UPLINK : ON   |
+-----------------+
  </pre>
</aside>
```

## Logo Columns

- Two `<span class="sidebar__logo-col">` elements: `SPACE` (first in DOM, appears on right in vertical-rl), `UNTITLED` (second, appears on left)
- Font: `var(--font-pixel)`, color: `var(--color-cyan)`
- Both use `writing-mode: vertical-rl` (desktop) → `horizontal-tb` (mobile)
- `display: flex`, `flex-direction: row`, `gap: var(--space-sm)` on parent
- `image-rendering: pixelated` on parent
- Visited links stay cyan (overridden to maintain logo identity)
- Hover shifts to `var(--color-blue)`

### Typing order
The typewriter script iterates logo columns in **reverse** DOM order:
`UNTITLED` types first, then `SPACE`. After all animations, the final cursor
stays on the last character of `SPACE` (the "E") as a rotated horizontal block.

## Navigation

- Four links: INDEX, BLOG, NOTES, ABOUT
- Font size: `var(--font-size-sm)`, text-transform: lowercase
- Flex column gap: `var(--space-sm)` (desktop) → row (mobile)

## Status Deco

- Pixel font pre block, pushed to bottom via `margin-top: auto`
- Font: `var(--font-pixel)`, color: `var(--color-teal)`
- Font size: `calc(var(--font-size-sm) - 1px)`
- No background, border, or padding (transparent container)

## Sidebar Container CSS

```css
.sidebar {
  grid-row: 1 / 3;                                    /* spans both rows */
  border: var(--border-width) dashed var(--color-border-dashed);
  padding: var(--space-lg);
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: var(--space-lg);
}
```

## Mobile (≤ 700px)

```css
@media (max-width: 700px) {
  .sidebar {
    grid-row: 1;              /* only top row */
    flex-direction: row;
    flex-wrap: wrap;
    align-items: baseline;
    gap: var(--space-md);
    padding: var(--space-md);
  }
  .sidebar__logo   { font-size: var(--font-size-2xl); }
  .sidebar__logo-col { writing-mode: horizontal-tb; }
  .sidebar__nav    { flex-direction: row; gap: var(--space-sm); margin-top: 0; }
}
```

## Critical Rules

- All nav links must use `withBase()` from `src/utils/paths.ts`
- Sidebar is within BaseLayout.astro scoped `<style>` — will have `data-astro-cid` hash
- If adding new sections, maintain the flex column order and `margin-top: auto` pattern for bottom-pushed items
- The `sidebar__deco` content is static ASCII art — changes must preserve the box-drawing character alignment
- 404 page overrides sidebar colors via `:global(.sidebar)` and `:global(.sidebar__logo)` selectors in `404.astro` scoped style
