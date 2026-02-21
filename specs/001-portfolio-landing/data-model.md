# Data Model

This document defines the data structures used in the Portfolio Landing Page, managed partially natively in Astro (Content Collections) and partially in Sanity CMS.

## 1. Astro Content Collections / Static Data (Portfolio)

_Note: As per constitution, portfolio data can be static MDX or Sanity-driven. For extreme performance and simplicity, static typed collections are recommended unless the user wants to edit the portfolio frequently._

### `Experience`

- `id` (String): Unique identifier.
- `role` (String, Localized): Job title.
- `company` (String): Employer or client name.
- `startDate` (Date)
- `endDate` (Date | 'Present')
- `description` (Array of Strings, Localized): Key achievements.

### `Project`

- `id` (String)
- `title` (String, Localized)
- `description` (String, Localized)
- `image` (String): Path to optimized asset.
- `link` (String): External URL.
- `tags` (Array of Strings): Tech stack used.

### `Testimonial`

- `id` (String)
- `author` (String)
- `role` (String, Localized)
- `content` (String, Localized)
- `linkedinUrl` (String)

### `GallupStrength`

- `rank` (Number 1-5)
- `name` (String, Localized)
- `description` (String, Localized)

### `Skill`

- `name` (String)
- `category` (Enum: 'Frontend', 'Backend', 'Tools', 'Soft')
- `icon` (String)
