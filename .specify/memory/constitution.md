# Portfolio Website Constitution

<!-- Constitution for the Developer Portfolio & CV Website -->

<!--
SYNC IMPACT REPORT:
- Version change: 1.2.0 → 1.3.0
- Modified principles: Focused Content Areas (replaced Sanity CMS with Local MDX Content Collections)
- Required updates:
  - checklist-template.md ✅ verified
  - plan-template.md ✅ verified
  - spec-template.md ✅ verified
  - tasks-template.md ✅ verified
-->

## Core Principles

### I. UX & Performance-First

The primary focus of this website is to provide an exceptional user experience while maintaining top-tier performance. All design decisions, animations, and feature additions MUST prioritize a flawless 100/100 Google Lighthouse score. Animations MUST be subtle, fluid, and highly optimized to avoid rendering bottlenecks. We are building with Astro to leverage partial hydration and minimal client-side JavaScript.

### II. Code Simplicity & Maintainability

The codebase MUST be simple and easy to maintain. We rely on the latest version of Tailwind CSS for a consistent design system. Complex abstractions and ad-hoc styling outside of Tailwind's utility classes are strictly PROHIBITED.

### III. Bilingual by Default

The website MUST support both Polish and English natively. The interface language MUST be auto-detected based on the user's browser preferences on first load, falling back gracefully to English if the preference is unknown. All content must be structured to accommodate both languages seamlessly.

### IV. Dual-Themed Design

The application MUST support both Light and Dark modes. The theme implementation should rely on CSS variables and prioritize the user's system preferences by default, while allowing manual overrides.

### V. Focused Content Areas

The website is strictly divided into two primary sections:

1. **Professional Profile**: Information relevant to recruiters and proxy clients (experience, skills, projects, CV).
2. **Blog**: Educational or professional articles accessible primarily via the `/blog` route. Blog content MUST be managed via **Local MDX files and Astro Content Collections**. No external headless CMS (like Sanity) should be used. Additionally, blog posts MUST adhere to strict SEO principles—all metadata tags, sitemaps, and structured data must be flawlessly implemented via MDX frontmatter to ensure maximum discoverability.
   These sections should be distinct but share the unified design system.

### VI. Zero-Test Policy

Automated tests are EXPLICITLY OUT OF SCOPE. No testing libraries (e.g., Jest, Cypress, Playwright) should be configured, and no test files should be written. Validation will be performed manually and via performance profiling tools (e.g., Lighthouse).

### VII. Mobile-First RWD

The project MUST be developed using a Responsive Web Design (RWD) and mobile-first approach. All layouts and components must be primarily designed and optimized for mobile devices, progressively enhancing the experience for larger screens.

## Technical Constraints

- **Framework**: Astro (latest stable version).
- **Styling**: The project MUST use the latest version of Tailwind CSS for all styling. Rely on Tailwind's utility classes and configuration for the design system.
- **Interactivity**: Minimal client-side JavaScript. Use Astro islands only when strictly necessary for dynamic components (e.g., theme toggle, language switcher).

## Development Workflow

- All styling must be derived from Tailwind CSS utility classes and its configuration (`tailwind.config.mjs`) using a mobile-first approach.
- New components must be checked against Lighthouse performance budgets before being considered complete.
- Content for both the blog and portfolio sections MUST be authored strictly using **Markdown/MDX and Astro's Content Collections** stored locally in the repository.

## Governance

All architectural decisions, component designs, and feature implementations MUST comply with the principles outlined in this constitution.
Amendments to this document require a version bump and documented rationale.

**Version**: 1.3.0 | **Ratified**: 2026-02-20 | **Last Amended**: 2026-02-21
