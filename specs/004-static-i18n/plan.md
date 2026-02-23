# Implementation Plan: Static Dictionaries i18n

**Branch**: `004-static-i18n` | **Date**: 2026-02-23 | **Spec**: [spec.md](./spec.md)
**Input**: Feature specification from `/specs/004-static-i18n/spec.md`

## Summary

Implement a static dictionary-based i18n system for the Astro portfolio website to ensure a 100/100 Lighthouse performance score with zero client-side JavaScript. This involves creating a centralized translation dictionary (`src/i18n/ui.ts`), a typed translation helper (`src/i18n/utils.ts`), and configuring Astro's native i18n routing (`astro.config.mjs`) to support Polish (default) and English.

## Technical Context

**Language/Version**: TypeScript 5.x / Astro 5.x
**Primary Dependencies**: Astro
**Storage**: N/A (Static files)
**Testing**: N/A (Project constitution forbids automated tests; manual & Lighthouse only)
**Target Platform**: Web (SSG/SSR)
**Project Type**: Web application (Astro)
**Performance Goals**: 100/100 Lighthouse score, 0 Cumulative Layout Shift (CLS), zero JS for i18n on the frontend.
**Constraints**: Must strictly adhere to project constitution (no client JS for this, RWD mobile-first, zero tests).
**Scale/Scope**: 2 languages (pl, en), all UI text across the portfolio.

## Constitution Check

- **UX & Performance-First**: PASSED (Zero JS approach guarantees top performance).
- **Code Simplicity & Maintainability**: PASSED (Statically typed dictionary is simple and maintainable).
- **Bilingual by Default**: PASSED (Core feature implementation: pl/en support).
- **Dual-Themed Design**: N/A (Not impacted).
- **Focused Content Areas**: N/A (Applies globally to layout/UI).
- **Content Management & Data Models**: N/A (Applies to UI text, not content collections).
- **MDX Typography**: N/A (Not impacted).
- **Zero-Test Policy**: PASSED (No automated tests are included in this plan).
- **Mobile-First RWD**: N/A (Not directly impacted by i18n logic, but UI choices will respect it).

## Project Structure

### Documentation (this feature)

```text
specs/004-static-i18n/
├── plan.md              # This file
├── research.md          # Output of Phase 0
├── data-model.md        # N/A for this simple feature
├── quickstart.md        # Output of Phase 1
├── contracts/           # Output of Phase 1 (N/A)
└── tasks.md             # Phase 2 output
```

### Source Code (repository root)

```text
src/
├── i18n/
│   ├── ui.ts            # Dictionary and type definitions
│   └── utils.ts         # useTranslations helper
├── pages/
│   ├── [lang]/          # Dynamic language routing
│   │   └── index.astro
│   └── index.astro      # Root redirect or default language
astro.config.mjs         # Routing configuration
```

**Structure Decision**: Selected a standard Astro directory structure adding the `i18n` folder for localization utilities, as specified.

## Complexity Tracking
