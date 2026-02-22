# Tasks: Portfolio UI Design

**Input**: Design documents from `/specs/003-portfolio-ui/`
**Prerequisites**: plan.md, spec.md, research.md, data-model.md, contracts/

## Format: `[ID] [P?] [Story] Description`

- **[P]**: Can run in parallel (different files, no dependencies)
- **[Story]**: Which user story this task belongs to (e.g., [US1], [US2], [US3])
- Include exact file paths in descriptions

## Phase 1: Setup (Shared Infrastructure)

**Purpose**: Project initialization and basic structure

- [ ] T001 Create component and layout directories in src/components and src/layouts/
- [ ] T002 Initialize Layout component `src/layouts/Layout.astro` with global styles from plan.md
- [ ] T003 [P] Configure Tailwind utility classes in `src/styles/global.css` and configure plugins in `tailwind.config.mjs`
- [ ] T004 [P] Install `resend`, `@astrojs/mdx`, `@tailwindcss/typography` packages and create `.env` template (`RESEND_API_KEY`, `CONTACT_EMAIL_TO`, `CONTACT_EMAIL_FROM`)
- [ ] T005 [P] Configure `astro.config.mjs` for MDX support and built-in Shiki syntax highlighting for code blocks

## Phase 2: Foundational (Blocking Prerequisites)

**Purpose**: Core infrastructure that MUST be complete before ANY user story can be implemented

- [ ] T006 [P] Define `blog` collection Zod schema in `src/content/config.ts` enforcing `title`, `description`, `pubDate`, `heroImage`, `tags`, and `language`
- [ ] T007 Build Astro middleware in `src/middleware.ts` to redirect root `/` visits to `/[lang]/` based on `navigator.language`
- [ ] T008 [P] Build Theme and Language state logic (types/constants) in `src/utils/state.ts`
- [ ] T009 [P] Create Typography and Color tokens in Tailwind, including `prose` customization for `h2` (`mt-12 mb-4`), `h3` (`mt-8 mb-2`) margins
- [ ] T010 [P] Create base UI components (Badge, Button) in `src/components/ui/`
- [ ] T011 [P] Create explicit data types for `Project` and `Experience` in `src/types/models.ts` (Blog posts will strictly use auto-generated `CollectionEntry<'blog'>` types)

**Checkpoint**: Foundation ready - user story implementation can now begin in parallel

## Phase 3: User Story 1 - Portfolio Browsing & Navigation (Priority: P1) 🎯 MVP

**Goal**: Users can smoothly navigate through sections using mobile hamburger or desktop top navigation, and toggle Theme/Language.

**Independent Test**: Resize viewport to 375px and verify hamburger menu overlay. Test Theme/Language toggles.

### Implementation for User Story 1

- [ ] T012 [P] [US1] Build `Navigation` component with responsive states in `src/components/layout/Navigation.astro`
- [ ] T013 [P] [US1] Implement Theme (Day/Night) toggle interactive element in `src/components/layout/Navigation.astro`
- [ ] T014 [P] [US1] Implement `LanguageToggle` component allowing manual switch between PL and EN in `src/components/layout/Navigation.astro`
- [ ] T015 [US1] Integrate `Navigation` and Toggles into main `src/layouts/Layout.astro` wrapper
- [ ] T016 [US1] Build `Hero` section in `src/components/sections/Hero.astro`
- [ ] T017 [US1] Create localized page structure `src/pages/[lang]/index.astro` exporting `getStaticPaths` for 'pl' and 'en'

**Checkpoint**: At this point, User Story 1 should be fully functional and testable independently

## Phase 4: User Story 2 - Content Consumption & Interaction (Priority: P2)

**Goal**: Users experience smooth entrance animations and hover micro-interactions (project cards, blog posts). Code blocks and MDX markdown are styled.

**Independent Test**: Scroll down the page and hover over Project cards or BlogPost links to verify CSS transitions without layout shifts.

### Implementation for User Story 2

- [ ] T018 [P] [US2] Implement `ExperienceCard` component with UI matching data model in `src/components/ui/ExperienceCard.astro`
- [ ] T019 [P] [US2] Implement `ProjectCard` component with hover micro-interactions in `src/components/ui/ProjectCard.astro`
- [ ] T020 [P] [US2] Implement `BlogPostLink` component with delicate arrow animation in `src/components/ui/BlogPostLink.astro`
- [ ] T021 [P] [US2] Implement MDX layout wrapper `src/layouts/BlogPost.astro` with `@tailwindcss/typography` (`prose`) styling applied
- [ ] T022 [US2] Build `Expertise` and `Career` sections using `ExperienceCard` in `src/components/sections/Expertise.astro` and `Career.astro`
- [ ] T023 [US2] Build `Projects` section using `ProjectCard` in a 2-column grid in `src/components/sections/Projects.astro`
- [ ] T024 [US2] Build `Writing` section using `BlogPostLink` in `src/components/sections/Writing.astro` fetching data via `getCollection('blog')`
- [ ] T025 [US2] Create dynamic blog routes via `src/pages/[lang]/blog/[slug].astro` utilizing `getStaticPaths`
- [ ] T026 [US2] Integrate Expertise, Career, Projects, and Writing into `src/pages/[lang]/index.astro`

**Checkpoint**: At this point, User Stories 1 AND 2 should both work independently

## Phase 5: User Story 3 - Getting in Touch (Priority: P2)

**Goal**: Users can reach out via a secure contact form and quick social links in the footer.

**Independent Test**: Submit the form in the footer and verify the security text/badge and native email service response.

### Implementation for User Story 3

- [ ] T027 [P] [US3] Build `ContactForm` API handler using `resend` in `src/pages/api/contact.ts`
- [ ] T028 [P] [US3] Build client-side HTML5 contact form UI matching site palette in `src/components/layout/Footer.astro`
- [ ] T029 [US3] Add pad-lock security badge and loading state handling
- [ ] T030 [US3] Integrate `Footer` component at the bottom of `src/layouts/Layout.astro`

**Checkpoint**: All user stories should now be independently functional

## Phase 6: Polish & Cross-Cutting Concerns

**Purpose**: Improvements that affect multiple user stories

- [ ] T031 [P] Check all responsive breakpoints from 375px up to max-w-6xl
- [ ] T032 [P] Verify bilingual string mappings (PL/ENG) on all interactive components
- [ ] T033 Validate 100/100 Lighthouse performance, accessibility, and zero-JS budget

## Dependencies & Execution Order

### Phase Dependencies

- **Setup (Phase 1)**: No dependencies - can start immediately
- **Foundational (Phase 2)**: Depends on Setup completion - BLOCKS all user stories
- **User Stories (Phase 3+)**: All depend on Foundational phase completion
- **Polish (Final Phase)**: Depends on all desired user stories being complete
