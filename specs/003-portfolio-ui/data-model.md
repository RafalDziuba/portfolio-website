# Data Model & State

**Feature**: Portfolio UI Design
**Branch**: `003-portfolio-ui`

This document outlines the data structures required for the UI components. Since this is a static site (Astro), these represent the TypeScript interfaces (`props` or MDX frontmatter) rather than database tables.

## Entities

### `Project`

Represents a portfolio project card.

- **title** (string): The name of the project.
- **description** (string): Short description.
- **image** (string): URL or path to the project screenshot.
- **githubUrl** (string): Link to the repository.
- **technologies** (string[]): List of technology names to display as badges.

### `Experience`

Represents a career timeline entry.

- **companyName** (string): Name of the employer.
- **companyLogo** (string): URL or path to the company logo.
- **isCurrent** (boolean): Shows the "Current" badge if true.
- **position** (string): Job title.
- **startDate** (string): e.g., "Jan 2021"
- **endDate** (string): e.g., "Present" or "Dec 2023"
- **description** (string[]): Bullet points of achievements/responsibilities.
- **technologies** (string[]): List of technology names used.

### `Article`

Represents a condensed view of a blog post in the Writing section.

- **title** (string): Title of the article.
- **date** (string): Publication date.
- **readTime** (string): Estimated reading time (e.g., "5 MIN READ").
- **slug** (string): Link/path to the article in `/blog/[slug]`.

## UI State

- **isMobileMenuOpen** (boolean): Toggles the hamburger menu overlay on mobile screens.
- **theme** ('light' | 'dark'): System preference or user override for current CSS theme.
- **language** ('en' | 'pl'): Current interface language.
