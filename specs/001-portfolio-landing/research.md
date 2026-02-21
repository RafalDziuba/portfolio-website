# Phase 0: Outline & Research

## Technical Decisions & Rationale

### 1. Framework & Routing

- **Decision**: Astro with View Transitions and dynamic base path `/[lang]/`
- **Rationale**: Mandated by constitution (Astro) and user clarification (path-based routing + instant switching). It provides perfect SEO via distinct localized URLs while matching SPA-like transition speed.
- **Alternatives considered**: Client-side translation (React/i18next), which would harm SEO and conflict with Constitution Principle I (fast, minimal JS).

### 2. Styling System

- **Decision**: Tailwind CSS exclusively (via `tailwind.config.mjs`).
- **Rationale**: Mandated by constitution v1.2.0. Ensured consistent design system and rapid mobile-first development.
- **Alternatives considered**: Custom CSS with global variables (prohibited by v1.2.0).

### 3. Blog Content Management

- **Decision**: Local MDX and Astro Content Collections.
- **Rationale**: Explicitly mandated by the user in constitution v1.3.0. Provides a fast, fully statically generated, and repository-bound solution for content.
- **Alternatives considered**: Sanity CMS (originally considered, but rejected and replaced with local MDX by the user).

### 4. Contact Form Backend

- **Decision**: Astro API Route (`/api/contact`) + Resend (Serverless Email API) + Invisible Honeypot.
- **Rationale**: Evaluated during clarification step. Provides 100% submission delivery without degrading the Lighthouse score via heavy CAPTCHA scripts.
- **Alternatives considered**: Google reCAPTCHA v3 (rejected due to JS bundle size), Third-party form providers (rejected for better UI/UX control).

## Conclusion

All `NEEDS CLARIFICATION` items from the initial planning template have been resolved through user consultation. The architecture is fully defined and complies with the project constitution.
