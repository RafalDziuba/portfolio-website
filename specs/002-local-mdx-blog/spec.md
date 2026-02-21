# Feature Specification: Local MDX Blog

**Feature Branch**: `002-local-mdx-blog`  
**Created**: 2026-02-21  
**Status**: Draft  
**Input**: User description: "Zmieniamy sposób zarządzania treścią. Usuwamy Sanity CMS. Wszystkie posty blogowe będą przechowywane lokalnie jako pliki MDX wewnątrz repozytorium przy użyciu Astro Content Collections."

## Clarifications

### Session 2026-02-21

- Q: How should images used in blog posts be managed to guarantee the Lighthouse score? → A: Colocate images with MDX files for automatic Astro optimization.
- Q: Structurally, how should Polish and English versions of blog posts be separated? → A: Folder-based separation (`src/content/blog/pl/` and `src/content/blog/en/`).

## User Scenarios & Testing _(mandatory)_

### User Story 1 - Developer Publishing a Post (Priority: P1)

The portfolio owner (developer) wants to publish a new blog post without logging into an external CMS. They create a new `.mdx` file in the repository's content directory, write the content using Markdown/JSX, and push the changes to trigger a deployment.

**Why this priority**: Shifting the content management workflow from a CMS to local files is the core requirement of this feature.

**Independent Test**: Can be tested by creating a dummy `.mdx` file in the content collection folder, running the local build, and verifying the new post appears on the blog listing and its distinct URL.

**Acceptance Scenarios**:

1. **Given** the developer has a new article draft, **When** they add a correctly formatted `.mdx` file to the content collection, **Then** the Astro build successfully processes and statically generates the page.

---

### User Story 2 - Visitor Reading a Fast Statically Generated Post (Priority: P2)

A visitor to the site clicks on a blog post. The post loads instantly because it was statically generated at build time directly from the repository's MDX files, with zero overhead from external CMS queries.

**Why this priority**: Maintaining the 100/100 Lighthouse performance constraint is crucial when changing data sources.

**Independent Test**: Can be tested by navigating the blog section and confirming no external network requests are made to a CMS to fetch the content.

**Acceptance Scenarios**:

1. **Given** a user navigates to a blog post, **When** the page loads, **Then** the content is served instantly as static HTML without any external CMS data fetching.

### Edge Cases

- **Missing Frontmatter**: If a required frontmatter field is missing (e.g., SEO metadata or Title), the Astro build MUST fail cleanly via Zod schema validation, ensuring broken posts never reach production.
- **Language Undefined**: If the language field/path is ambiguous, the system MUST throw an error during build rather than defaulting incorrectly.

### Dependencies & Assumptions

- **Content Migration**: It is assumed that any previous Sanity API connections or components will be entirely removed from the codebase.
- **Astro Features**: Based on Astro's modern native MDX integration and Content Collections API being fully supported on the target deployment platform.

## Requirements _(mandatory)_

### Functional Requirements

- **FR-001**: System MUST NOT depend on Sanity CMS or any external headless CMS for storing or fetching blog content.
- **FR-002**: System MUST utilize Astro Content Collections to define, validate, and query blog posts.
- **FR-003**: System MUST store all blog posts locally within the repository as `.mdx` files (e.g., in `src/content/blog/`).
- **FR-004**: System MUST enforce strict typing for MDX frontmatter (Title, Date, Excerpt, SEO metadata) via Zod schemas in Astro Content Collections.
- **FR-005**: System MUST maintain the existing bilingual requirement by supporting localized content via folder-based separation (`src/content/blog/en/` and `src/content/blog/pl/`).
- **FR-006**: System MUST maintain all strict SEO capabilities (metadata, sitemaps) entirely driven by the local MDX frontmatter.
- **FR-007**: System MUST colocate image assets with their respective MDX files to enable automated build-time optimization via Astro's Image component.

### Key Entities

- **Blog Post (MDX Content Collection)**:
  - `title` (String): Post title.
  - `excerpt` (String): Short summary for listing.
  - `publishedAt` (Date): Publish date.
  - `lang` (String): Content language (e.g., 'en' or 'pl').
  - `seo` (Object): Meta title, description, and OG image data.
  - _Assets_: Colocated image files.
  - _Body content_: Markdown / MDX JSX elements.

## Success Criteria _(mandatory)_

### Measurable Outcomes

- **SC-001**: 100% of blog content is successfully sourced from local `.mdx` files during the Astro build process.
- **SC-002**: Zero (0) network requests are made to Sanity CMS or any external content provider anywhere in the application.
- **SC-003**: The website strictly maintains its perfect 100/100 Google Lighthouse score on both mobile and desktop.
- **SC-004**: Adding a new `.mdx` file with valid frontmatter automatically makes the post available on the live site without manual routing configuration.
