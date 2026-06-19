/**
 * Prefix a site-relative path with the configured base URL.
 *
 * `import.meta.env.BASE_URL` reflects `base` in astro.config.ts
 * (e.g. `/untitled-space`). This helper guarantees a trailing slash on the
 * base so paths join cleanly, and works whether or not a base is configured.
 *
 * @example
 * withBase("/blog")        // "/untitled-space/blog"
 * withBase("/blog/foo")    // "/untitled-space/blog/foo"
 * withBase("/")            // "/untitled-space/"
 */
const BASE = import.meta.env.BASE_URL.endsWith("/")
  ? import.meta.env.BASE_URL
  : import.meta.env.BASE_URL + "/";

export function withBase(path: string): string {
  return BASE + path.replace(/^\//, "");
}
