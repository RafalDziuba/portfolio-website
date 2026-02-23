# Feature Specification: Static Dictionaries i18n

**Feature Branch**: `004-static-i18n`  
**Created**: 2026-02-23  
**Status**: Draft  
**Input**: User description: "Wdrożenie statycznych słowników i18n wg specyfikacji Astro. src/i18n/ui.ts z obsługą pl/en. src/i18n/utils.ts z helperem useTranslations. Konfiguracja src/pages/[lang]/index.astro. astro.config.mjs routing setup."

## User Scenarios & Testing _(mandatory)_

### User Story 1 - View site in default language (Priority: P1)

As a visitor, I want to see the website interface in Polish by default, so that I can understand the content without manual configuration.

**Why this priority**: Polish is the primary language of the portfolio. This is the baseline functionality for all users.

**Independent Test**: Load the root URL (`/`) and verify that all navigation and hero section texts are displayed in Polish.

**Acceptance Scenarios**:

1. **Given** a new visitor accessing the root URL (`/`), **When** the page loads, **Then** the interface elements (like "Start", "Projekty", "Cześć, jestem Rafał") are in Polish.
2. **Given** a visitor browsing Polish pages, **When** they navigate between sections, **Then** there is no layout shift or text flickering.

---

### User Story 2 - Switch to English language (Priority: P1)

As an international visitor, I want to be able to view the website in English, so that I can read the portfolio content.

**Why this priority**: Dual language support is a core feature identified in the project constitution.

**Independent Test**: Access the `/en` route and verify that all UI texts are translated to English.

**Acceptance Scenarios**:

1. **Given** a visitor on the site, **When** they navigate to the `/en` path, **Then** interface elements (like "Home", "Projects", "Hi, I'm Rafal") are displayed in English.
2. **Given** a visitor accesses a non-existent language path, **When** the routing occurs, **Then** they are handled gracefully by Astro's native i18n routing.

### Edge Cases

- What happens when a translation key is missing in one of the languages? (TypeScript should catch this at build time due to strict typing).
- How does the system handle accessing a route without a language prefix if the default language is intended to be at the root?

## Requirements _(mandatory)_

### Functional Requirements

- **FR-001**: System MUST provide a centralized dictionary of UI texts for both Polish ('pl') and English ('en') languages.
- **FR-002**: System MUST define a default language (Polish).
- **FR-003**: System MUST enforce strict typing for translation keys to prevent typos and missing translations at build time.
- **FR-004**: System MUST provide a translation helper function that retrieves the correct text based on the current language or falls back to the default language.
- **FR-005**: System MUST utilize native framework routing capabilities to handle multi-language URL structures correctly.
- **FR-006**: System MUST NOT use client-side JavaScript for determining and rendering UI text translations. All translations must be resolved at build/render time.
- **FR-007**: System MUST automatically detect the user's preferred language on their first visit based on browser settings (`Accept-Language` headers) and redirect them to the appropriate localized version.

### Key Entities

- **Dictionary**: A statically typed object containing key-value pairs of UI texts for all supported languages.
- **Translation Helper**: A utility function that takes a language code and returns a typed function for retrieving specific translation strings.

## Success Criteria _(mandatory)_

### Measurable Outcomes

- **SC-001**: Lighthouse performance score for the page must remain at 100/100, specifically with zero increase in client-side JavaScript bundle size related to i18n.
- **SC-002**: Passing build process without any TypeScript errors related to missing or misspelled translation keys.
- **SC-003**: Zero layout shift (Cumulative Layout Shift = 0) caused by text translation during page load or route transitions.
