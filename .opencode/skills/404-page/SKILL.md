---
name: 404-page
description: Edits the 404 error page — glitch effects, red theme, CRT scanlines, VHS tear bars, error ASCII art, and command-list navigation. Use when modifying the 404 page.
---

# 404 Error Page

Use this skill when editing `src/pages/404.astro` — the error/signal-lost page.

## File

```
src/pages/404.astro
```

## Theme Philosophy

The 404 page breaks the site's blue-green palette and replaces it with a
**deep-red "corrupted signal" aesthetic**. It should feel like a CRT monitor
displaying a critical failure — scanlines, chromatic aberration, vignette
darkening, and intermittent VHS-style tear bars.

## Page Structure

```html
<BaseLayout title="404 :: signal lost">
  <!-- Corrupt bars: 3 thin horizontal slices that drift sideways -->
  <div class="corrupt" aria-hidden="true">
    <span class="corrupt__bar corrupt__bar--1"></span>
    <span class="corrupt__bar corrupt__bar--2"></span>
    <span class="corrupt__bar corrupt__bar--3"></span>
  </div>

  <section class="error">
    <!-- Big 404 ASCII art with RGB split -->
    <pre class="error__ascii" data-glitch aria-hidden="true"> 404 </pre>

    <!-- Terminal log output -->
    <pre class="error__log">
      > connecting to node ............ [ OK ]
      > requesting resource .......... [ FAIL ]
      > status: 404 NOT FOUND
      ...
    </pre>

    <!-- Command-list navigation -->
    <div class="error__actions">
      <p class="error__hint">~ available commands:</p>
      <ul class="error__cmd-list">
        <li><a class="error__cmd" href="/">cd /</a> <span class="error__cmd-desc">— return to index</span></li>
        ...
      </ul>
    </div>
  </section>
</BaseLayout>
```

## Body Overrides (`:global`)

These break out of Astro scoped styles to repaint the page shell:

```css
:global(body) {
  background-color: #1a0303;
  color: #f0d6d6;
  position: relative;
  overflow-x: hidden;
}
```

Sidebar/footer recolor (complementary red tones):
```css
:global(.sidebar__logo),
:global(.sidebar__nav a) { color: #ff5555; }
:global(.sidebar),
:global(.footer) { border-color: #660000; }
:global(.footer__ascii) { color: #8a4444; }
```

## CRT Scanlines (`:global(body)::before`)

Fixed overlay above content, below text (`z-index: 1`):
```css
background: repeating-linear-gradient(
  0deg,
  rgba(0, 0, 0, 0.25) 0px,
  rgba(0, 0, 0, 0.25) 1px,
  transparent 1px,
  transparent 3px
);
mix-blend-mode: multiply;
```

## Vignette (`:global(body)::after`)

Radial gradient darkening the edges (`z-index: 2`):
```css
background: radial-gradient(
  ellipse at center,
  transparent 40%,
  rgba(40, 0, 0, 0.55) 100%
);
```

## Error ASCII Art (`.error__ascii`)

- Font: `var(--font-pixel)`, color: `#ffcccc`
- **RGB split** via `text-shadow`: red offset right, cyan offset left
- Gentle **glitch jitter** animation (`glitch-jitter`, 3.2s cycle):
  - 92% of the time: static with normal RGB split
  - Brief moments: ±1-3px horizontal shift, shadow channels swap

```css
text-shadow:
  2px 0 #ff0033,
  -2px 0 #00ffee,
  0 0 6px rgba(255, 0, 51, 0.35);
animation: glitch-jitter 3.2s steps(2, end) infinite;
```

## Corrupt Bars (`.corrupt__bar`)

Three fixed-position horizontal slices that briefly appear and drift sideways,
simulating VHS tracking errors:

| Bar | Top | Height | Color | Cycle | Delay |
|-----|-----|--------|-------|-------|-------|
| --1 | 22% | 2px | red (rgba(255,0,51,0.5)) | 7s | 0.5s |
| --2 | 48% | 1px | cyan (rgba(0,255,238,0.4)) | 5.5s | 2s |
| --3 | 71% | 3px | red | 9s | 4s |

`mix-blend-mode: screen`, low opacity, `z-index: 4`.

## Error Log (`.error__log`)

- Pixel font, inline-block, left-aligned
- Color: `#f0d6d6`, border: `var(--border-width) dotted #aa2222`
- Background: `rgba(20, 0, 0, 0.4)`
- Text-shadow: red tint for subtle bleed
- Red block cursor (`.error__cursor`): `width: 0.6em`, `background: #ff3333`, `blink` animation (1s)

## Command List (`.error__actions`)

- Hint: `color: #aa6666`, small font
- Command links: `font-weight: 700`, `color: #00ffee`, visited stays teal
- Hover: `color: #ffff00` (yellow accent stands out against red theme)
- Descriptions: `color: #aa6666`, small font
- Items: flex with dotted border-bottom

## Keyframe Animations

### `glitch-jitter`
Very gentle RGB-channel jitter — only ±1-3px, never violent. Steps-based
for discrete "snap" feel rather than smooth slide.

### `tear`
VHS bar: 0% opacity → 80% briefly → screen blend → back to 0%.
Slow cycles (5.5-9s) so bars are rare and unexpected.

### `blink`
Standard block cursor blink via `visibility: hidden` toggle.

## Accessibility

```css
@media (prefers-reduced-motion: reduce) {
  .error__ascii, .corrupt__bar, .error__cursor {
    animation: none;
  }
  .corrupt__bar { opacity: 0; }
}
```

The RGB-split text-shadow persists (still readable, just tinted).

## Typewriter Skip

The BaseLayout typewriter script checks for `.error` in main:
```js
if (main.querySelector(".error")) return; // 404 page
```
So add `.error` class to your error section wrapper to skip typewriter entirely.

## Critical Rules

- Page overrides use `:global()` to break out of Astro scoping
- Body `::before` and `::after` must use `:global(body)::before` pattern
- All navigation links still use `withBase()`
- Keep the red palette distinct from the site's blue-green — don't reuse `var(--color-cyan)` directly
- The error__ascii uses hardcoded colors, not CSS variables, to enforce the corrupted look
