# Feature Specification: Portfolio Landing Page

**Feature Branch**: `001-portfolio-landing`  
**Created**: 2026-02-20  
**Status**: Draft  
**Input**: User description: "Dwujęzyczna strona portfolio, która ma zachęcać do podjęcia ze mną współpracy. Oprócz kluczowych dla CV sekcji, powinna zawierać również informacje o moich top-5 z testu gallupa oraz krótki opis mojej osobowości. umiejętności miękkich oraz teog, na czym skupiam się w pracy. Strona powinna zawierać sekcje widoczne na załączonym obrazku, tzn. nawigacja, header/hero section, umiejętności i technologie, doświadczenie zawodowe, wybrane projekty, najnowsze artykuły, testimonials z linkedina, (top5 gallup strenghts, opis mojej osobowości) - to wszystko w jakoś specjalnie wydzielonej sekcji z tytułem np. 'Coś więcej o mnie' - nie wiem jak dokładnie można nazwać taką sekcję, footer zawierający prosty formularz kontaktowy, ikony z linkami do githuba i linkedina, uproszczoną nawigację, a na samym dole 'Imię Nazwisko 2026 All rights reserved'"

## Clarifications

### Session 2026-02-20

- Q: How should contact form submissions be handled regarding backend/spam protection? → A: Serverless Email API (e.g., Resend) via Astro API Route + invisible Honeypot.
- Q: How should multi-language support (i18n) be implemented structurally? → A: Path-based routing (`/pl/`, `/en/`) using Astro View Transitions for instant switching.

## User Scenarios & Testing _(mandatory)_

### User Story 1 - Evaluate Professional Experience (Priority: P1)

A recruiter or potential client visits the landing page to assess the candidate's professional background before contacting them. They review the Hero section, Skills, Experience, and selected Projects, then use the contact form to reach out.

**Why this priority**: Showcasing professional experience and enabling contact is the core purpose of a portfolio website aiming to encourage collaboration.

**Independent Test**: The page can be fully tested by verifying the presence and correct rendering of the Hero, Skills, Experience, Projects, and Footer sections, and ensuring the contact form submits data successfully.

**Acceptance Scenarios**:

1. **Given** a user is on the landing page, **When** they scroll through the main content, **Then** they see clearly organized sections for Skills & Technologies, Experience, and Projects.
2. **Given** a user is in the footer, **When** they fill out and submit the contact form, **Then** the message is successfully sent and a confirmation is displayed.

---

### User Story 2 - Understand Personality and Soft Skills (Priority: P2)

A recruiter wants to understand the candidate's cultural fit and personality. They navigate to the "Coś więcej o mnie" (More about me) section to read about the candidate's Top 5 Gallup strengths, soft skills, and work focus.

**Why this priority**: Beyond technical skills, cultural fit and personality are critical for successful long-term collaboration.

**Independent Test**: Can be tested by verifying the "Coś więcej o mnie" section exists and correctly displays the Gallup strengths and personality description.

**Acceptance Scenarios**:

1. **Given** a user is on the landing page, **When** they reach the "Coś więcej o mnie" section, **Then** they see the Top 5 Gallup strengths, personality description, and soft skills clearly presented.
2. **Given** a user reads the Testimonials section, **When** they view the entries, **Then** they see LinkedIn testimonials that reinforce the candidate's soft skills and work ethic.

---

### User Story 3 - Bilingual Content Consumption (Priority: P3)

An international client visits the website. The site detects their browser language or allows them to manually switch to English (or Polish) to consume the content seamlessly.

**Why this priority**: The site must be bilingual by default according to the constitution, ensuring accessibility for both local and international clients.

**Independent Test**: Can be tested by loading the site with different browser language preferences and verifying the content language adapts accordingly.

**Acceptance Scenarios**:

1. **Given** a user has an English browser preference, **When** they load the site, **Then** the content is displayed in English by default.
2. **Given** a user wants to read in Polish, **When** they use the language switcher, **Then** the site translates all sections instantly to Polish.

### Edge Cases

- **Local Content Missing**: If an expected recent article `.mdx` file is missing or invalid, the build MUST fail cleanly via Zod schema validation.
- **Contact Form Failure**: If the form submission fails (e.g., due to network error or backend issue), the user MUST be informed with a clear error message and prompted to try again or use direct email.

### Dependencies & Assumptions

- **Local Content Infrastructure**: Assumed that Astro Content Collections and MDX are correctly configured.
- **Testimonials**: Assumed to be sourced manually from LinkedIn or via a static data file, not requiring complex real-time API integrations.
- **Browser Language**: Relies on standard HTTP headers or browser APIs (`navigator.language`) to determine the default setting.

## Requirements _(mandatory)_

### Functional Requirements

- **FR-001**: System MUST display the following sections in order (or logically structured): Navigation, Header/Hero, Skills & Technologies, Experience, Projects, Recent Articles, Testimonials, "Coś więcej o mnie" (More about me), and Footer.
- **FR-002**: System MUST include a working simple contact form within the Footer section, processing submissions via a Serverless API Route and employing an invisible honeypot for spam protection.
- **FR-003**: System MUST provide social links (GitHub, LinkedIn) and simplified navigation in the Footer.
- **FR-004**: System MUST display a copyright notice ("Imię Nazwisko 2026 All rights reserved") at the very bottom of the page in the Footer.
- **FR-005**: System MUST showcase the Top 5 Gallup strengths, a personality description, soft skills, and work focus in the "Coś więcej o mnie" section.
- **FR-006**: System MUST display Recent Articles by querying them locally via Astro Content Collections (as mandated by constitution v1.3.0).
- **FR-007**: System MUST be fully responsive and designed mobile-first.
- **FR-008**: System MUST support Polish and English content natively via path-based routing (`/pl/`, `/en/`) and use Astro View Transitions for instant switching without full page reloads.
- **FR-009**: System MUST support dual-theme functionality (Light/Dark mode) respecting system preferences by default, with a manual toggle in the UI.

### Key Entities

- **Project**: Title, description, image asset, external link.
- **Experience Item**: Role, company/client, start/end dates, key responsibilities/achievements.
- **Article**: Title, excerpt, publish date, estimated read time, local MDX file reference.
- **Testimonial**: Author name, author role, content, LinkedIn profile link.
- **Gallup Strength**: Name, short description.
- **Skill**: Name, category (e.g., Frontend, Backend, Tools), appropriate icon.

## Success Criteria _(mandatory)_

### Measurable Outcomes

- **SC-001**: The landing page achieves a perfect 100/100 score on Google Lighthouse (Performance, Accessibility, Best Practices, SEO) on both mobile and desktop.
- **SC-002**: 100% of contact form submissions are successfully delivered to the predefined destination.
- **SC-003**: All sections render correctly and usably on mobile viewports (320px width and up) without horizontal scrolling or overlapping elements.
- **SC-004**: Language switching happens instantly without full page reloads for optimal UX.
