---
name: content-creation
description: Creates blog posts and notes content. Use when writing new Markdown/MDX files in src/content/.
---

# Content Creation

Use this skill when creating new blog posts or notes.

## Blog Posts

- Place in `src/content/blog/`
- Use frontmatter: `title`, `date` (YYYY-MM-DD), `tags` (lowercase kebab-case), `description`
- Use MDX for rich content with components
- Draft posts: set `draft: true` in frontmatter

## Notes (Microblog)

- Place in `src/content/notes/`
- Use frontmatter: `title`, `date`, `tags` (optional)
- Shorter form, no description needed
