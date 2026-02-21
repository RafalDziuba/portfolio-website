# Phase 0: Outline & Research

## Technical Decisions & Rationale

### 1. Content Architecture

- **Decision**: Local MDX files via Astro Content Collections.
- **Rationale**: User explicitly demanded switching from Sanity CMS to local MDX stored directly in the repository.
- **Alternatives considered**: Sanity CMS (rejected by user request).

### 2. Internationalization (i18n) Structure

- **Decision**: Folder-based language separation (`src/content/blog/pl/` and `src/content/blog/en/`).
- **Rationale**: Clarified directly with the user. It is Astro's officially recommended and most robust structure for localized content collections, making routing simple.
- **Alternatives considered**: Frontmatter language flags (`lang: 'pl'`) in a single folder (rejected as less scalable and harder to map).

### 3. Image Optimization & Colocation

- **Decision**: Images will be colocated with their respective `index.mdx` files inside `[post-slug]` directories.
- **Rationale**: Clarified with the user. Colocating images allows Astro's `<Image />` component to automatically process assets at build time, ensuring the 100/100 Lighthouse score is maintained.
- **Alternatives considered**: Storing images centrally in `public/blog/` (rejected due to missing automatic build-time optimization).

## Conclusion

All ambiguities regarding the MDX blog migration have been resolved. The fully static, git-backed architecture is approved.
