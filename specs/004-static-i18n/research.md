# Phase 0 Research: Static Dictionaries i18n

**Decision**: Implement static dictionaries as prescribed in the user specification.

**Rationale**: The user explicitly requested this exact architecture (`src/i18n/ui.ts` & `src/i18n/utils.ts`) because it align perfectly with Astro's performance best practices, ensuring zero client-side JavaScript for translations and preventing layout shifts.

**Alternatives considered**:

- _Dynamic import of JSON files_: Rejected because it introduces unnecessary complexity and potential runtime overhead compared to a statically typed TypeScript object.
- _Third-party i18n libraries (e.g., i18next)_: Rejected as they usually add client-side bundle size, which conflicts with the strict performance goals of this project and the user's explicit instructions.
