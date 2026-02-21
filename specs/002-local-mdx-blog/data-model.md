# Data Model

This document defines the Astro Content Collections schemas used for the Local MDX Blog.

## 1. Astro Content Collections (Blog)

### `blog` Collection (Zod Schema in `src/content/config.ts`)

- `title` (ZodString): The blog post title.
- `excerpt` (ZodString): A short summary for the blog listing page.
- `publishedAt` (ZodDate): The original publish date.
- `updatedAt` (ZodDate, Optional): Last modified date.
- `seo` (ZodObject, Optional):
  - `metaTitle` (ZodString, Optional): Custom title for search engines.
  - `metaDescription` (ZodString, Optional): Custom description for search engines.
- _(Note: `lang` is omitted from the schema because it is derived automatically from the folder path `src/content/blog/[lang]/`)_
- _(Note: `image` metadata in frontmatter is omitted in favor of colocated `image.jpg` or `image.png` imported directly in the MDX file, though a `coverImage` field could be added if hero images are required)_

## State Transitions

Content management state transitions are handled entirely by Git.

- **Draft**: Branch created, MDX file added.
- **Published**: Merged to main, deployed to production hosting.
