# Implementation Plan: [FEATURE]

**Branch**: `[###-feature-name]` | **Date**: [DATE] | **Spec**: [link]
**Input**: Feature specification from `/specs/[###-feature-name]/spec.md`

**Note**: This template is filled in by the `/speckit.plan` command. See `.specify/templates/plan-template.md` for the execution workflow.

## Summary

[Extract from feature spec: primary requirement + technical approach from research]

## Technical Context

**Language/Version**: TypeScript, HTML, CSS (Astro latest)
**Primary Dependencies**: Astro, Tailwind CSS, Resend (for emails)
**Storage**: Local `.mdx` files via Astro Content Collections, static files for the rest
**Testing**: N/A (Zero-Test Policy enforced by Constitution)
**Target Platform**: Web (Modern browsers, mobile-first RWD)
**Project Type**: Static Site / Web Application
**Performance Goals**: 100/100 Google Lighthouse score on both mobile and desktop
**Constraints**: Tailwind CSS ONLY for styling, minimal client-side JS, strict SEO for blog, instant language switching without full reloads, fully local MDX content
**Scale/Scope**: Developer portfolio single-page feel with an added blog section at `/blog`

## Constitution Check

_GATE: Must pass before Phase 0 research. Re-check after Phase 1 design._

- [x] **UX & Performance-First**: Plan strictly aims for 100/100 Lighthouse score.
- [x] **Code Simplicity & Maintainability**: Plan utilizes exclusively Tailwind CSS.
- [x] **Bilingual by Default**: Support for PL/EN via Astro path routing `/pl/`, `/en/`.
- [x] **Dual-Themed Design**: Light/Dark mode via Tailwind/CSS variables.
- [x] **Focused Content Areas**: Local MDX and Astro Content Collections used specifically for the Blog.
- [x] **Zero-Test Policy**: No automated testing frameworks introduced or planned.
- [x] **Mobile-First RWD**: Approach is inherently responsive and mobile-first.

## Project Structure

### Documentation (this feature)

```text
specs/[###-feature]/
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
├── components/          # UI Components (Hero, Skills, Experience, Projects, Contact Form, etc.)
├── layouts/             # Base layouts (BaseLayout, MarkdownLayout)
├── pages/               # Astro routes
│   ├── [lang]/          # Dynamic routes for i18n (/en, /pl)
│   │   ├── index.astro  # Portfolio Landing
│   │   └── blog/        # Blog section routing
│   └── api/             # Astro API routes (e.g., /api/contact)
├── styles/              # Global CSS, Tailwind entrypoint
└── utils/               # Helpers, i18n logic
```

**Structure Decision**: Utilizing a standard Astro project structure. The `pages` directory uses a dynamic `[lang]` parameter at its root to handle the bilingual routing natively with Astro's View Transitions. Components are modularized for maintainability. Backend logic for the contact form lives in `src/pages/api`.

## Complexity Tracking

> **Fill ONLY if Constitution Check has violations that must be justified**

| Violation                  | Why Needed         | Simpler Alternative Rejected Because |
| -------------------------- | ------------------ | ------------------------------------ |
| [e.g., 4th project]        | [current need]     | [why 3 projects insufficient]        |
| [e.g., Repository pattern] | [specific problem] | [why direct DB access insufficient]  |
