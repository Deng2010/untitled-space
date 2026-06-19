---
name: index-page
description: Edits the homepage (index.astro) — hero banner, recent posts/notes, collection queries, and listing layout. Use when modifying the landing page.
---

# Index Page

Use this skill when editing `src/pages/index.astro` — the site's landing page.

## File

```
src/pages/index.astro
```

## Data Fetching

Uses `getCollection()` from `astro:content`:

```ts
const recentPosts = (await getCollection("blog"))
  .filter((p) => !p.data.draft)
  .sort((a, b) => b.data.date.valueOf() - a.data.date.valueOf())
  .slice(0, 5);

const recentNotes = (await getCollection("notes"))
  .filter((n) => !n.data.draft)
  .sort((a, b) => b.data.date.valueOf() - a.data.date.valueOf())
  .slice(0, 5);
```

- Filters out drafts
- Sorts by date descending (newest first)
- Limits to 5 items per section
- Date comparison uses `.valueOf()` for safety

## HTML Structure

```
<BaseLayout title="index">
  <section class="hero">
    <pre class="hero__ascii">  … ASCII box art …  </pre>
    <p class="hero__subtitle">  … tagline …  </p>
  </section>

  <pre class="divider"> ·  ·  ·  · [ SYSTEM ACTIVE ] ·  ·  ·  ·  </pre>

  <section class="section">
    <h2 class="section__title">* LATEST POSTS</h2>
    <ul class="post-list">  … posts …  </ul>
    <a class="section__more" href="/blog">> view all posts</a>
  </section>

  <section class="section">
    <h2 class="section__title">* LATEST NOTES</h2>
    <ul class="post-list">  … notes …  </ul>
    <a class="section__more" href="/notes">> view all notes</a>
  </section>
</BaseLayout>
```

## Hero Section

- Centered, `margin-bottom: var(--space-2xl)`
- ASCII box: pixel font, cyan color, dotted border, pixelated rendering
- Subtitle: muted color, small font size

```css
.hero { text-align: center; margin-bottom: var(--space-2xl); }
.hero__ascii {
  font-family: var(--font-pixel); font-size: var(--font-size-sm);
  color: var(--color-cyan); line-height: 1.4;
  display: inline-block; text-align: left;
  border: var(--border-width) dotted var(--color-border);
  padding: var(--space-md); image-rendering: pixelated;
}
.hero__subtitle { color: var(--color-text-muted); margin-top: var(--space-md); font-size: var(--font-size-sm); }
```

## Divider

- Pixel font, teal color, centered
- No background, border, or padding
- `overflow: hidden` to clip any overflow

```css
.divider {
  font-family: var(--font-pixel); font-size: var(--font-size-sm);
  color: var(--color-teal); text-align: center;
  background: transparent; border: none; padding: 0;
  margin: 0 0 var(--space-xl); line-height: 1.2; overflow: hidden;
}
```

## Post List

- `list-style: none`, no padding
- Each item: `display: flex`, `justify-content: space-between`, `align-items: baseline`
- Bottom border: `1px dotted var(--color-border-dashed)`
- Meta (date): muted color, right-aligned, `flex-shrink: 0`

```css
.post-list { list-style: none; padding: 0; }
.post-list__item {
  display: flex; justify-content: space-between; align-items: baseline;
  padding: var(--space-xs) 0; border-bottom: 1px dotted var(--color-border-dashed);
}
.post-list__meta {
  font-size: var(--font-size-sm); color: var(--color-text-muted);
  flex-shrink: 0; margin-left: var(--space-md);
}
```

## Empty State

When no posts/notes exist, show:
```html
<p class="empty">~ no posts yet</p>
```
```css
.empty { color: var(--color-text-muted); font-style: italic; font-size: var(--font-size-sm); }
```

## Section

- `margin-bottom: var(--space-xl)`
- Title: `var(--font-size-lg)`, `color: var(--color-teal)`, no top margin
- "More" link: `display: inline-block`, `font-size: var(--font-size-sm)`

## Link Format

Post/note links: `withBase(`/blog/${post.id}`)` — Astro's Content Layer produces
IDs from folder names (e.g., `"hello-world"` for `src/content/blog/hello-world/index.md`).

## Critical Rules

- All internal links must use `withBase()`
- Date format: `post.data.date.toLocaleDateString("zh-CN")`
- Draft posts excluded in the filter (`.filter(p => !p.data.draft)`)
- All CSS is hand-written in the scoped `<style>` block
- Uses CSS variables from `src/styles/tokens.css`
