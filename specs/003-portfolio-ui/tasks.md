---
description: 'Task list template for feature implementation'
---

# Tasks: Portfolio UI Design

**Feature**: 003-portfolio-ui
**Input**: Design documents from `/specs/003-portfolio-ui/`
**Prerequisites**: plan.md, spec.md, data-model.md, contracts/, quickstart.md, research.md
**Tests**: NONE (Zero-Test Policy per Constitution)

**Organization**: Tasks are grouped by user story to enable independent implementation and testing of each story.

## Phase 1: Setup (Shared Infrastructure)

**Purpose**: Project initialization and basic structure

- [ ] T001 Initialize Astro project with Tailwind CSS (if not already present) in `/`
- [ ] T002 Create base project directory structure (`src/components/ui/`, `src/components/sections/`, `src/components/layout/`, `src/layouts/`)
- [ ] T003 [P] Configure Tailwind CSS colors, typography, constraints, and custom properties in `tailwind.config.mjs`

---

## Phase 2: Foundational (Blocking Prerequisites)

**Purpose**: Core infrastructure that MUST be complete before ANY user story can be implemented

**⚠️ CRITICAL**: No user story work can begin until this phase is complete

- [ ] T004 Create base `Layout.astro` wrapper supporting English/Polish and theme variables in `src/layouts/Layout.astro`
- [ ] T005 [P] Create common UI `Badge` component for technologies in `src/components/ui/Badge.astro`
- [ ] T006 [P] Create common UI `Button` component in `src/components/ui/Button.astro`

**Checkpoint**: Foundation ready - user story implementation can now begin.

---

## Phase 3: User Story 1 - Portfolio Browsing & Navigation (Priority: P1) 🎯 MVP

**Goal**: Seamless navigation via mobile hamburger menu and desktop top-bar, supporting theme and language toggles.

**Independent Test**: Resize viewport to 375px to ensure hamburger works and overlay covers screen; test toggles for visual updates.

### Implementation for User Story 1

- [ ] T007 [P] [US1] Create `ThemeToggle` interactive component in `src/components/ui/ThemeToggle.astro`
- [ ] T008 [P] [US1] Create `LanguageToggle` interactive component in `src/components/ui/LanguageToggle.astro`
- [ ] T009 [US1] Implement responsive `Navigation` component with hamburger overlay in `src/components/layout/Navigation.astro`
- [ ] T010 [US1] Integrate `Navigation` into `src/layouts/Layout.astro` and fix constrained layout (`max-w-6xl`)

**Checkpoint**: At this point, User Story 1 should be fully functional and testable independently

---

## Phase 4: User Story 2 - Content Consumption & Interaction (Priority: P2)

**Goal**: Display all portfolio sections with interactive hover effects and smooth scroll-triggered entrance animations.

**Independent Test**: Scroll down the page and hover over Project cards and Article links to verify CSS transitions trigger without layout shifts.

### Implementation for User Story 2

- [ ] T011 [P] [US2] Create responsive `Hero` section component in `src/components/sections/Hero.astro`
- [ ] T012 [P] [US2] Create responsive `Expertise` section with 4x3 desktop grid in `src/components/sections/Expertise.astro`
- [ ] T013 [P] [US2] Create `Career` section timeline based on data-model in `src/components/sections/Career.astro`
- [ ] T014 [P] [US2] Create `Projects` section with mild 3D shadow and image hover zoom in `src/components/sections/Projects.astro`
- [ ] T015 [P] [US2] Create `Writing` section mapping Article entities in `src/components/sections/Writing.astro`
- [ ] T016 [US2] Implement global IntersectionObserver script for simple entrance animations in `src/layouts/Layout.astro`
- [ ] T017 [US2] Assemble and render all created sections sequentially in `src/pages/index.astro`

**Checkpoint**: Interaction animations and basic content layouts are complete and responsive.

---

## Phase 5: User Story 3 - Getting in Touch (Priority: P2)

**Goal**: Provide a footer containing a fully functional contact form and social links.

**Independent Test**: Submit form and verify native HTML5 validation and visual feedback state changes.

### Implementation for User Story 3

- [ ] T018 [P] [US3] Create `ContactForm` component with HTML5 validation and CSS loading states in `src/components/ui/ContactForm.astro`
- [ ] T019 [P] [US3] Implement Astro API route for form submission in `src/pages/api/contact.ts`
- [ ] T020 [US3] Create `Footer` layout integrating the form and external links in `src/components/layout/Footer.astro`
- [ ] T021 [US3] Integrate `Footer` component at the bottom of `src/pages/index.astro`

**Checkpoint**: All user stories should now be independently functional.

---

## Phase 6: Polish & Cross-Cutting Concerns

**Purpose**: Improvements that affect multiple user stories

- [ ] T022 [P] Prepare and link the standalone downloadable CV PDF document in `public/cv.pdf` and link it in the UI.
- [ ] T023 Run manual Lighthouse audits to ensure Performance, Accessibility, and SEO hit 100/100, and CLS is < 0.1.
- [ ] T024 Validate all language switching and dark mode state persists properly across the page.

---

## Dependencies & Execution Order

### Phase Dependencies

- **Setup (Phase 1)**: No dependencies - can start immediately
- **Foundational (Phase 2)**: Depends on Setup completion - BLOCKS all user stories
- **User Stories (Phase 3+)**: All depend on Foundational phase completion
  - User stories can then proceed in parallel (if staffed)
  - Or sequentially in priority order (P1 → P2 → P2)
- **Polish (Final Phase)**: Depends on all desired user stories being complete

### User Story Dependencies

- **User Story 1 (P1)**: Can start after Foundational (Phase 2).
- **User Story 2 (P2)**: Can start after Foundational. Relies on Layout from US1 for full context, but components can be built in isolation.
- **User Story 3 (P2)**: Can start after Foundational. Independent from US1 and US2.

### Parallel Opportunities

- Configuration (T003) and Component stubs (T005-T008, T011-T015, T018-T019) can be developed in parallel by multiple agents.

## Implementation Strategy

### MVP First (User Story 1 Only)

1. Complete Phase 1: Setup
2. Complete Phase 2: Foundational
3. Complete Phase 3: User Story 1 (Navigation)
4. **STOP and VALIDATE**: Ensure layout is responsive and themes work.

### Incremental Delivery

1. Add User Story 2 → Test animations and hover layout shifts independently.
2. Add User Story 3 → Test form submission independently.
3. Polish and fix up Final Details.
