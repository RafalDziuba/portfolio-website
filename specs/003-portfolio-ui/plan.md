# Implementation Plan: [FEATURE]

**Branch**: `[###-feature-name]` | **Date**: [DATE] | **Spec**: [link]
**Input**: Feature specification from `/specs/[###-feature-name]/spec.md`

**Note**: This template is filled in by the `/speckit.plan` command. See `.specify/templates/plan-template.md` for the execution workflow.

## Summary

Implementation of the portfolio UI (Navigation, Hero, Expertise, Career, Projects, Writing, Footer) using Astro and Tailwind CSS. The interface will be fully responsive (Mobile-First) with dual-language and dark/light mode support, relying on Tailwind's utility classes and native CSS transitions for animations.

## Technical Context

<!--
  ACTION REQUIRED: Replace the content in this section with the technical details
  for the project. The structure here is presented in advisory capacity to guide
  the iteration process.
-->

**Language/Version**: TypeScript / HTML (Astro)
**Primary Dependencies**: Astro, Tailwind CSS
**Storage**: N/A
**Testing**: None (Zero-Test Policy per Constitution)
**Target Platform**: Web Browsers
**Project Type**: Web application
**Performance Goals**: 100/100 Google Lighthouse score
**Constraints**: Minimal client-side JavaScript, Tailwind CSS exclusively for styling, mobile-first Responsive Web Design
**Scale/Scope**: Developer portfolio landing page layout and interactive elements

## Constitution Check

_GATE: Must pass before Phase 0 research. Re-check after Phase 1 design._

- **UX & Performance**: Focus on 100/100 Lighthouse score. Avoid heavy JS animation libraries. (Pass)
- **Code Simplicity**: Will strictly use Tailwind CSS utility classes and config. No complex custom CSS. (Pass)
- **Bilingual by Default**: The UI supports PL/ENG toggles in the Navigation. (Pass)
- **Dual-Themed Design**: The UI supports Light/Dark toggles in the Navigation, relying on CSS variables mapping to Tailwind colors. (Pass)
- **Zero-Test Policy**: No automated tests specified in the requirements. (Pass)
- **Mobile-First RWD**: Layout is primarily designed for 375px mobile, then scales to `max-w-6xl` for Desktop. (Pass)

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
├── components/
│   ├── ui/          # Reusable UI elements (Badges, Buttons)
│   ├── sections/    # Hero, Expertise, Career, Projects, Writing
│   └── layout/      # Navigation, Footer
├── layouts/
│   └── Layout.astro # Main page wrapper
└── pages/
    └── index.astro  # Main portfolio page entry point
```

**Structure Decision**: A single web application focusing on modular components grouped by domain (ui, sections, layout) inside the src directory.

## Complexity Tracking

> **Fill ONLY if Constitution Check has violations that must be justified**

| Violation                  | Why Needed         | Simpler Alternative Rejected Because |
| -------------------------- | ------------------ | ------------------------------------ |
| [e.g., 4th project]        | [current need]     | [why 3 projects insufficient]        |
| [e.g., Repository pattern] | [specific problem] | [why direct DB access insufficient]  |
