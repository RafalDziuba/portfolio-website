# Quickstart Guide: Portfolio Landing Page

This guide covers how to set up the development environment for the portfolio landing page and integrate its external services.

## Prerequisites

- Node.js (v24+ recommended)
- NPM or PNPM
- Sanity CMS Account
- Resend Account (for emails)

## Setup Steps

1. **Install dependencies**:

   ```bash
   npm install
   ```

2. **Environment Variables**:
   Create a `.env` file in the root directory based on `.env.example`:

   ```env
   # Resend Configuration
   RESEND_API_KEY=your_resend_api_key
   CONTACT_EMAIL_TO=your_email@example.com
   CONTACT_EMAIL_FROM=onboarding@resend.dev # or your verified domain
   ```

3. **Start the Development Server**:

   ```bash
   npm run dev
   ```

   The site will be available at `http://localhost:4321`.

## Development Notes

- **Language Routing**: The site routes are nested under `/[lang]/...`. Access the English version at `/en/` and the Polish version at `/pl/`.
- **Styling**: Tailored completely via Tailwind configurations (`tailwind.config.mjs`). Do not add custom CSS files unless strictly related to Tailwind entry directives.
- **Testing**: No test runner is provided. Validate changes manually and always run Google Lighthouse audits in Chrome DevTools using an Incognito window before committing major UI changes.
