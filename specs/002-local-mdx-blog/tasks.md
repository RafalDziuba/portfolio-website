# Tasks: Local MDX Blog

**Input**: Design documents from `/specs/002-local-mdx-blog/`
**Prerequisites**: plan.md (required), spec.md (required for user stories), research.md, data-model.md, quickstart.md

**Tests**: Tests are explicitly **excluded** due to the project's Zero-Test Policy mandated by the constitution. Validation will be entirely manual and via Lighthouse profiling.

**Organization**: Tasks are grouped by user story to enable independent implementation and testing of each story.

---

## Phase 1: Setup (Shared Infrastructure)

**Purpose**: Project initialization and basic structure for the new content collections.

- [ ] T001 Create project structure for Astro Content Collections in `src/content/blog/`

---

## Phase 2: Foundational (Blocking Prerequisites)

**Purpose**: Core infrastructure that MUST be complete before ANY user story can be implemented

**⚠️ CRITICAL**: No user story work can begin until this phase is complete

- [ ] T002 Configure Astro Content Collections Zod schema for blog posts in `src/content/config.ts`

**Checkpoint**: Foundation ready - user story implementation can now begin in parallel

---

## Phase 3: User Story 1 - Developer Publishing a Post (Priority: P1) 🎯 MVP

**Goal**: The portfolio owner (developer) wants to publish a new blog post without logging into an external CMS by creating a new `.mdx` file in the repository's content directory.

**Independent Test**: Add a dummy `.mdx` file in the content collection folder and confirm that Astro builds successfully without schema validation errors.

### Implementation for User Story 1

- [ ] T003 [P] [US1] Create a sample English MDX post with a colocated image in `src/content/blog/en/sample-post/index.mdx`
- [ ] T004 [P] [US1] Create a sample Polish MDX post with a colocated image in `src/content/blog/pl/sample-post/index.mdx`

**Checkpoint**: At this point, User Story 1 should be fully functional (data exists correctly and validates against the schema).

---

## Phase 4: User Story 2 - Visitor Reading a Fast Statically Generated Post (Priority: P2)

**Goal**: A visitor to the site clicks on a blog post and it loads instantly because it was statically generated at build time directly from the repository's MDX files.

**Independent Test**: Navigate to the blog section on the dev server (`/en/blog` or `/pl/blog`) and confirm the listing and post pages load instantly with 0 requests to Sanity CMS.

### Implementation for User Story 2

- [ ] T005 [P] [US2] Implement helper functions to query, filter, and sort blog collections by language in `src/utils/blog.ts`
- [ ] T006 [US2] Implement base layout for rendering markdown content in `src/layouts/MarkdownLayout.astro`
- [ ] T007 [US2] Implement the Blog Listing Page to display localized articles in `src/pages/[lang]/blog/index.astro`
- [ ] T008 [US2] Implement the dynamic single Blog Post route and Astro Image rendering in `src/pages/[lang]/blog/[...slug].astro`

**Checkpoint**: At this point, User Stories 1 AND 2 should both work independently. Blog posts are fetched naturally from MDX and rendered completely.

---

## Phase 5: Polish & Cross-Cutting Concerns

**Purpose**: Improvements that affect multiple user stories

- [ ] T009 Ensure complete removal of any lingering Sanity CMS endpoints or integrations (if any remain)
- [ ] T010 Perform manual Google Lighthouse profiling on the blog URLs to ensure 100/100 scores
- [ ] T011 Validate proper responsive behavior of the blog pages on mobile viewports
- [ ] T012 Run quickstart.md validation locally to ensure new writers can easily follow the guide

---

## Dependencies & Execution Order

### Phase Dependencies

- **Setup (Phase 1)**: No dependencies - can start immediately
- **Foundational (Phase 2)**: Depends on Setup completion - BLOCKS all user stories
- **User Stories (Phase 3+)**: All depend on Foundational phase completion
  - User stories can proceed sequentially in priority order (P1 → P2)
- **Polish (Final Phase)**: Depends on all desired user stories being complete

### User Story Dependencies

- **User Story 1 (P1)**: Can start after Foundational (Phase 2) - No dependencies on other stories
- **User Story 2 (P2)**: Depends on US1 existing so that there is local data to render on the pages.

### Parallel Opportunities

- Content generation (US1) tasks T003 and T004 can be run entirely in parallel.
- Data fetching utilities (T005) can be developed independently of the frontend layouts being styled.

---

## Implementation Strategy

### MVP First (User Story 1 Only)

1. Complete Phase 1: Setup
2. Complete Phase 2: Foundational (CRITICAL)
3. Complete Phase 3: User Story 1
4. **STOP and VALIDATE**: Verify that throwing an MDX file into the folder correctly parses the Frontmatter through the Astro Zod schema.

### Incremental Delivery

1. Complete Setup + Foundational → Foundation ready. Data shape strict.
2. Add User Story 1 → Create mock MDX posts.
3. Add User Story 2 → Consume those MDX posts in Astro components. Test UI locally.
