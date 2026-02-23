# Tasks: Portfolio UI Design

**Input**: Design documents from `/specs/003-portfolio-ui/`
**Prerequisites**: plan.md, spec.md, research.md, data-model.md, contracts/

## Format: `[ID] [P?] [Story] Description`

- **[P]**: Can run in parallel (different files, no dependencies)
- **[Story]**: Which user story this task belongs to (e.g., [US1], [US2], [US3])
- Include exact file paths in descriptions

## Phase 1: Setup (Shared Infrastructure)

**Purpose**: Project initialization and basic structure

- [x] T001 Create component and layout directories in src/components and src/layouts/
- [x] T002 Initialize Layout component `src/layouts/Layout.astro` with global styles from plan.md
- [x] T003 [P] Configure Tailwind utility classes in `src/styles/global.css` and configure plugins in `tailwind.config.mjs`
- [x] T004 [P] Install `resend`, `@astrojs/mdx`, `@tailwindcss/typography` packages and create `.env` template (`RESEND_API_KEY`, `CONTACT_EMAIL_TO`, `CONTACT_EMAIL_FROM`)
- [x] T005 [P] Configure `astro.config.mjs` for MDX support and built-in Shiki syntax highlighting for code blocks

## Phase 2: Foundational (Blocking Prerequisites)

**Purpose**: Core infrastructure that MUST be complete before ANY user story can be implemented

- [x] T006 [P] Define `blog` collection Zod schema in `src/content/config.ts` enforcing `title`, `description`, `pubDate`, `heroImage`, `tags`, and `language`
- [x] T007 Build Astro middleware in `src/middleware.ts` to redirect root `/` visits to `/[lang]/` based on `navigator.language`
- [x] T008 [P] Build Theme and Language state logic (types/constants) in `src/utils/state.ts`
- [x] T009 [P] Create Typography and Color tokens in Tailwind, including `prose` customization for `h2` (`mt-12 mb-4`), `h3` (`mt-8 mb-2`) margins
- [x] T010 [P] Create base UI components (Badge, Button) in `src/components/ui/`
- [x] T011 [P] Create explicit data types for `Project` and `Experience` in `src/types/models.ts` (Blog posts will strictly use auto-generated `CollectionEntry<'blog'>` types)

**Checkpoint**: Foundation ready - user story implementation can now begin in parallel

## Phase 3: User Story 1 - Portfolio Browsing & Navigation (Priority: P1) 🎯 MVP

**Goal**: Users can smoothly navigate through sections using mobile hamburger or desktop top navigation, and toggle Theme/Language.

**Independent Test**: Resize viewport to 375px and verify hamburger menu overlay. Test Theme/Language toggles.

### Implementation for User Story 1

- [x] T012 [P] [US1] Build `Navigation` component with responsive states in `src/components/layout/Navigation.astro`
- [x] T013 [P] [US1] Implement Theme (Day/Night) toggle interactive element in `src/components/layout/Navigation.astro`
- [x] T014 [P] [US1] Implement `LanguageToggle` component allowing manual switch between PL and EN in `src/components/layout/Navigation.astro`
- [x] T015 [US1] Integrate `Navigation` and Toggles into main `src/layouts/Layout.astro` wrapper
- [x] T016 [US1] Build `Hero` section in `src/components/sections/Hero.astro`
- [x] T017 [US1] Create localized page structure `src/pages/[lang]/index.astro` exporting `getStaticPaths` for 'pl' and 'en'

**Checkpoint**: At this point, User Story 1 should be fully functional and testable independently

## Phase 4: User Story 2 - Content Consumption & Interaction (Priority: P2)

**Goal**: Users experience smooth entrance animations and hover micro-interactions (project cards, blog posts). Code blocks and MDX markdown are styled.

**Independent Test**: Scroll down the page and hover over Project cards or BlogPost links to verify CSS transitions without layout shifts.

### Implementation for User Story 2

- [x] T018 [P] [US2] Implement `ExperienceCard` component with UI matching data model in `src/components/ui/ExperienceCard.astro`
- [x] T019 [P] [US2] Implement `ProjectCard` component with hover micro-interactions in `src/components/ui/ProjectCard.astro`
- [x] T020 [P] [US2] Implement `BlogPostLink` component with delicate arrow animation in `src/components/ui/BlogPostLink.astro`
- [x] T021 [P] [US2] Implement MDX layout wrapper `src/layouts/BlogPost.astro` with `@tailwindcss/typography` (`prose`) styling applied
- [x] T022 [US2] Build `Expertise` and `Career` sections using `ExperienceCard` in `src/components/sections/Expertise.astro` and `Career.astro`
- [x] T023 [US2] Build `Projects` section using `ProjectCard` in a 2-column grid in `src/components/sections/Projects.astro`
- [x] T024 [US2] Build `Writing` section using `BlogPostLink` in `src/components/sections/Writing.astro` fetching data via `getCollection('blog')`
- [x] T025 [US2] Create dynamic blog routes via `src/pages/[lang]/blog/[slug].astro` utilizing `getStaticPaths`
- [x] T026 [US2] Integrate Expertise, Career, Projects, and Writing into `src/pages/[lang]/index.astro`

**Checkpoint**: At this point, User Stories 1 AND 2 should both work independently

## Phase 5: User Story 3 - Getting in Touch (Priority: P2)

**Goal**: Users can reach out via a secure contact form and quick social links in the footer.

**Independent Test**: Submit the form in the footer and verify the security text/badge and native email service response.

### Implementation for User Story 3

- [x] T027 [P] [US3] Build `ContactForm` API handler using `resend` in `src/pages/api/contact.ts`
- [x] T028 [P] [US3] Build client-side HTML5 contact form UI matching site palette in `src/components/layout/Footer.astro`
- [x] T029 [US3] Add pad-lock security badge and loading state handling
- [x] T030 [US3] Integrate `Footer` component at the bottom of `src/layouts/Layout.astro`

**Checkpoint**: All user stories should now be independently functional

## Phase 6: Polish & Cross-Cutting Concerns

**Purpose**: Improvements that affect multiple user stories

- [x] T031 [P] Check all responsive breakpoints from 375px up to max-w-6xl
- [x] T032 [P] Verify bilingual string mappings (PL/ENG) on all interactive components
- [x] T033 Validate 100/100 Lighthouse performance, accessibility, and zero-JS budget

## Dependencies & Execution Order

### Phase Dependencies

- **Setup (Phase 1)**: No dependencies - can start immediately
- **Foundational (Phase 2)**: Depends on Setup completion - BLOCKS all user stories
- **User Stories (Phase 3+)**: All depend on Foundational phase completion
- **Polish (Final Phase)**: Depends on all desired user stories being complete
