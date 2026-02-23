---
description: 'Implementation tasks for Static Dictionaries i18n'
---

# Tasks: Static Dictionaries i18n

**Input**: Design documents from `/specs/004-static-i18n/`
**Prerequisites**: plan.md (required), spec.md (required for user stories), research.md, quickstart.md

**Tests**: As per the project constitution, automated tests are explicitly OUT OF SCOPE. No test tasks are included.

**Organization**: Tasks are grouped by user story to enable independent implementation and testing of each story.

## Format: `[ID] [P?] [Story] Description`

- **[P]**: Can run in parallel (different files, no dependencies)
- **[Story]**: Which user story this task belongs to (e.g., US1, US2, US3)
- Include exact file paths in descriptions

## Phase 1: Setup (Shared Infrastructure)

**Purpose**: Project initialization and basic structure

(No general project initialization tasks needed as this is a feature added to an existing codebase.)

---

## Phase 2: Foundational (Blocking Prerequisites)

**Purpose**: Core infrastructure that MUST be complete before ANY user story can be implemented

**⚠️ CRITICAL**: No user story work can begin until this phase is complete

- [x] T001 Configure Astro i18n routing (locales 'pl', 'en', default 'pl', disabled prefixing) in `astro.config.mjs`
- [x] T002 Create the translation dictionary (`ui` object and `defaultLang`) in `src/i18n/ui.ts`
- [x] T003 Create the translation helper hook (`useTranslations`) in `src/i18n/utils.ts`
- [x] T004 Implement root route middleware or client-side script in `src/pages/index.astro` to auto-detect browser language and redirect first-time visitors based on `Accept-Language` headers.

**Checkpoint**: Foundation ready - i18n configuration and utilities are available for the components.

---

## Phase 3: User Story 1 - View site in default language (Priority: P1) 🎯 MVP

**Goal**: As a visitor, I want to see the website interface in Polish by default, so that I can understand the content without manual configuration.

**Independent Test**: Load the root URL (`/`) and verify that all navigation and hero section texts are displayed in Polish. Ensure there is no layout shift or text flickering.

### Implementation for User Story 1

- [x] T005 [P] [US1] Add Polish translations for Navigation links to `src/i18n/ui.ts`
- [x] T006 [P] [US1] Add Polish translations for Hero section texts to `src/i18n/ui.ts`
- [x] T007 [P] [US1] Add Polish translations for Footer texts to `src/i18n/ui.ts`
- [x] T008 [US1] Implement `useTranslations` in `src/components/layout/Navigation.astro` to render Polish texts
- [x] T009 [US1] Implement `useTranslations` in `src/components/sections/Hero.astro` (or equivalent) to render Polish texts
- [x] T010 [US1] Implement `useTranslations` in `src/components/layout/Footer.astro` to render Polish texts
- [x] T011 [US1] Update `src/pages/index.astro` to pass the correct language parameter (or fallback to default) to components

**Checkpoint**: At this point, User Story 1 should be fully functional and testable independently in Polish.

---

## Phase 4: User Story 2 - Switch to English language (Priority: P1)

**Goal**: As an international visitor, I want to be able to view the website in English, so that I can read the portfolio content.

**Independent Test**: Access the `/en` route and verify that all UI texts are translated to English, handled gracefully by Astro's native i18n routing.

### Implementation for User Story 2

- [x] T012 [P] [US2] Add matching English translations for Navigation links to `src/i18n/ui.ts`
- [x] T013 [P] [US2] Add matching English translations for Hero section texts to `src/i18n/ui.ts`
- [x] T014 [P] [US2] Add matching English translations for Footer texts to `src/i18n/ui.ts`
- [x] T015 [US2] Create English routing endpoints in `src/pages/en/index.astro` using Astro's dynamic routing or static file mapping.
- [x] T016 [US2] Ensure `src/components/layout/Navigation.astro` links correctly use `getRelativeLocaleUrl` for language switching.

**Checkpoint**: At this point, User Stories 1 AND 2 should both work independently. The site is fully bilingual.

---

## Phase 5: Polish & Cross-Cutting Concerns

**Purpose**: Improvements that affect multiple user stories

- [x] T017 Check Lighthouse score locally to ensure 100/100 and 0 CLS.
- [x] T018 Verify that TypeScript compilation passes strictly with no missing keys in `src/i18n/ui.ts`.

---

## Dependencies & Execution Order

### Phase Dependencies

- **Setup (Phase 1)**: N/A
- **Foundational (Phase 2)**: Starts immediately - BLOCKS all user stories.
- **User Stories (Phase 3+)**: All depend on Foundational phase completion.
  - US1 (Polish baseline) should be completed before US2 (English additions) to establish the working component pattern.
- **Polish (Final Phase)**: Depends on all desired user stories being complete.

### User Story Dependencies

- **User Story 1 (P1)**: Can start after Foundational (Phase 2) - Configures the base UI.
- **User Story 2 (P1)**: Can start after User Story 1 or in parallel - depends on the components updated in US1 to accept the English dictionary.

### Parallel Opportunities

- Foundational tasks (T001, T002, T003, T004) must be done sequentially as the helper depends on the dictionary.
- Adding dictionary keys (T005, T006, T007 and T012, T013, T014) can be done in parallel.
- Updating individual components (T008, T009, T010) can be done in parallel once the dictionary is populated.

---

## Implementation Strategy

### MVP First (User Story 1 Only)

1. Complete Phase 2: Foundational (CRITICAL - blocks all stories)
2. Complete Phase 3: User Story 1
3. **STOP and VALIDATE**: Verify the Polish version works perfectly with no layout shift or client JS before adding the English routes.
4. Complete Phase 4: User Story 2 to finish the translation support.
