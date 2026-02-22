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
**Primary Dependencies**: Astro, Tailwind CSS, Resend Node.js SDK (`resend`)
**Storage**: Local MDX (Astro Content Collections)
**Testing**: None (Zero-Test Policy per Constitution)
**Target Platform**: Web Browsers
**Project Type**: Web application
**Performance Goals**: 100/100 Google Lighthouse score
**Constraints**: Minimal client-side JavaScript, Tailwind CSS exclusively for styling, mobile-first Responsive Web Design
**Scale/Scope**: Developer portfolio landing page layout and interactive elements

### Environment Variables (.env)

The following environment variables MUST be configured for the contact form functionality:

- `RESEND_API_KEY`: API key for the Resend service.
- `CONTACT_EMAIL_TO`: The destination email address where contact form submissions will be sent.
- `CONTACT_EMAIL_FROM`: The verified sender email address on Resend (e.g., `onboarding@resend.dev` or a custom domain).

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
├── pages/
│   ├── index.astro  # Main portfolio page entry point
│   └── api/         # API routes (e.g., contact form handler)
└── middleware.ts    # Astro Middleware for language detection/redirection
```

**Structure Decision**: A single web application focusing on modular components grouped by domain (ui, sections, layout) inside the src directory.

### Key Implementation Details

1. **Language Detection & Redirection**: To comply with the "Bilingual by Default" principle and prevent Layout Shifts, we will implement an `Astro Middleware` (`src/middleware.ts`) or an inline script in `<head>` that reads `navigator.language`. On the first visit, it will redirect the user to the correct localized route (e.g., `/pl` or `/en`) before the page content visually renders.
2. **Contact Form Email Service**: The contact form will submit data to a native Astro API route (e.g., `src/pages/api/contact.ts`), which will use the `resend` SDK and environment variables to securely dispatch the email.
3. **Blog Content Collections**: The blog will be driven entirely by local MDX files. We will define a strict Zod schema in `src/content/config.ts` to enforce frontmatter structure:

   ```typescript
   import { defineCollection, z } from 'astro:content';
   const blogCollection = defineCollection({
     type: 'content',
     schema: z.object({
       title: z.string(),
       description: z.string().max(160),
       pubDate: z.coerce.date(),
       heroImage: z.string(),
       tags: z.array(z.string()),
       language: z.enum(['pl', 'en']),
     }),
   });
   export const collections = { blog: blogCollection };
   ```

4. **MDX Configuration & Syntax Highlighting**: `astro.config.mjs` must be configured to process MDX integrations via `@astrojs/mdx`. Code blocks within MDX files will utilize Astro's built-in Shiki integration for high-performance syntax highlighting without client-side JS.
5. **MDX Typography (Prose)**: Blog articles will be styled using the `@tailwindcss/typography` plugin. Following the constitution, specific margin utilities must be applied (either via Tailwind's prose modifiers or global CSS nested within prose) to enforce spacing on headers: `h2` (`mt-12`, `mb-4`) and `h3` (`mt-8`, `mb-2`).

## Complexity Tracking

> **Fill ONLY if Constitution Check has violations that must be justified**

| Violation                  | Why Needed         | Simpler Alternative Rejected Because |
| -------------------------- | ------------------ | ------------------------------------ |
| [e.g., 4th project]        | [current need]     | [why 3 projects insufficient]        |
| [e.g., Repository pattern] | [specific problem] | [why direct DB access insufficient]  |
