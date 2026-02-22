# Phase 0: Research

**Feature**: Portfolio UI Design
**Branch**: `003-portfolio-ui`

## Research Tasks Resolved

### 1. Handling Animations in Astro / Tailwind securely

**Unknown**: How to implement fluid, performant animations (zoom on hover, subtle entrance animations) while adhering to strict rules of minimal client-side JS and Tailwind CSS exclusively.
**Decision**: Use native CSS transitions via Tailwind's `transition`, `duration`, `ease`, `hover:scale`, and `hover:shadow` utilities for micro-interactions (hover states). For entrance animations on scroll, use a minimal IntersectionObserver script placed inside a `<script>` tag in an Astro component, toggling a Tailwind class (e.g., opacity and translate).
**Rationale**: Adhering strictly to the "Minimal client-side JavaScript" and "Code Simplicity" principles in the Constitution. Using framer-motion or GSAP would violate the minimal JS and simplicity constraints. Tailwind utility classes are highly optimized and keep the styling unified.
**Alternatives considered**:

- _Framer Motion (React/Preact isolation)_: Rejected because it brings in a heavy JS payload which negatively impacts the 100/100 Lighthouse score goal, and violates "Minimal JS".
- _Astro View Transitions_: Good for page routing, but not suitable for scroll-triggered entrance animations of elements on the same page.

### 2. Form Submission Security Notice

**Unknown**: "FORMULARZ KONTAKTOWY - Z INFO. O BEZPIECZNYM WYSYŁANIU" (Contact Form with info about secure sending) requires UI representation.
**Decision**: Implement a native HTML form with client-side HTML5 validation. The form will submit natively or via a minimal fetch call, but the UI must include a padlock icon or security badge clearly stating "Your data is transmitted securely".
**Rationale**: Simple HTML forms require 0 JS unless a custom `onSubmit` is needed. This aligns with high performance constraints.
**Alternatives considered**: Complex form libraries like Formik/React Hook Form (Rejected due to JS bloat).
