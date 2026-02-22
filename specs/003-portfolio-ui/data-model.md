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

### `BlogPost` (MDX Frontmatter)

Represents a blog post defined via Astro Content Collections (MDX).
Each post MUST contain the following properties in its frontmatter:

- **title** (string): Title of the blog post.
- **description** (string): Short description or excerpt.
- **pubDate** (string/date): Publication date.
- **heroImage** (string): Path to the image file.
- **tags** (string[]): Collection of tags.
- **language** ('pl' | 'en'): Language identifier.

## UI State

- **isMobileMenuOpen** (boolean): Toggles the hamburger menu overlay on mobile screens.
- **theme** ('light' | 'dark'): System preference or user override for current CSS theme.
- **language** ('en' | 'pl'): Current interface language.
