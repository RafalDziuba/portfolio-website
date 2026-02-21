# Implementation Plan: Local MDX Blog

**Branch**: `002-local-mdx-blog` | **Date**: 2026-02-21 | **Spec**: [002-local-mdx-blog/spec.md](spec.md)
**Input**: Feature specification from `/specs/002-local-mdx-blog/spec.md`

**Note**: This template is filled in by the `/speckit.plan` command. See `.specify/templates/plan-template.md` for the execution workflow.

## Summary

Migrate the blog content management from Sanity CMS to local MDX files using Astro Content Collections to ensure fully static builds and maintain the 100/100 Lighthouse score.

## Technical Context

**Language/Version**: TypeScript, HTML, CSS, MDX (Astro latest)
**Primary Dependencies**: Astro, Astro Content Collections, Tailwind CSS
**Storage**: Local `.mdx` files via Astro Content Collections
**Testing**: N/A (Zero-Test Policy enforced by Constitution)
**Target Platform**: Web (Modern browsers, mobile-first RWD)
**Project Type**: Static Web Application (Portfolio/Blog)
**Performance Goals**: 100/100 Google Lighthouse score on both mobile and desktop
**Constraints**: Tailwind CSS ONLY for styling, zero external CMS requests (no Sanity), 100% local MDX, colocated images
**Scale/Scope**: Developer portfolio/blog converting from remote CMS to fully statically built localized MDX content

## Constitution Check

_GATE: Must pass before Phase 0 research. Re-check after Phase 1 design._

- [x] **UX & Performance-First**: Complete local static generation will easily support the 100/100 Lighthouse score.
- [x] **Code Simplicity & Maintainability**: Uses Tailwind CSS. MDX adds a bit of complexity but reduces external dependencies.
- [x] **Bilingual by Default**: Supported via `src/content/blog/pl/` and `src/content/blog/en/` structure.
- [x] **Dual-Themed Design**: Stays intact using Tailwind/CSS variables.
- [x] **Focused Content Areas**: Fully respects Constitution v1.3.0 by strictly using Local MDX files and Astro Content Collections (Sanity CMS removed).
- [x] **Zero-Test Policy**: No automated testing frameworks introduced or planned.
- [x] **Mobile-First RWD**: Approach is inherently responsive and mobile-first.

## Project Structure

### Documentation (this feature)

```text
specs/002-local-mdx-blog/
├── plan.md              # This file (/speckit.plan command output)
├── research.md          # Phase 0 output (/speckit.plan command)
├── data-model.md        # Phase 1 output (/speckit.plan command)
├── quickstart.md        # Phase 1 output (/speckit.plan command)
├── contracts/           # Phase 1 output (/speckit.plan command)
└── tasks.md             # Phase 2 output (/speckit.tasks command - NOT created by /speckit.plan)
```

### Source Code (repository root)

```text
src/
├── content/             # Astro Content Collections
│   ├── config.ts        # Content Collections Schema (Zod)
│   └── blog/            # Blog collection directory
│       ├── en/          # English blog posts
│       │   └── [post-slug]/ # Post directory
│       │       ├── index.mdx # MDX content
│       │       └── image.jpg # Colocated assets
│       └── pl/          # Polish blog posts
├── components/          # UI Components
├── layouts/             # Base layouts (BaseLayout, MarkdownLayout)
├── pages/               # Astro routes
│   └── [lang]/          # Dynamic routes for i18n (/en, /pl)
│       └── blog/        # Blog section routing
├── styles/              # Global CSS, Tailwind entrypoint
└── utils/               # Helpers, i18n logic
```

**Structure Decision**: Standard Astro project structure extended with the `src/content/blog/` collection. Inside, content is separated by language folders (`en/`, `pl/`), and then by post slug folders to allow colocating images right next to the `index.mdx` files.

## Complexity Tracking

> **Fill ONLY if Constitution Check has violations that must be justified**

| Violation | Why Needed | Simpler Alternative Rejected Because |
| --------- | ---------- | ------------------------------------ |
