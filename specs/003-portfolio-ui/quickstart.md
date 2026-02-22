# Quickstart: Portfolio UI Development

## Prerequisites

- Node.js (v18+)
- Astro CLI
- Tailwind CSS

## Running the Application

1. **Install dependencies**:

   ```bash
   npm install
   ```

2. **Start the development server**:

   ```bash
   npm run dev
   ```

3. **View the site**:
   Open `http://localhost:4321` in your browser.

## Component Workflow

When implementing new UI sections:

1. Define the layout wrapper in `src/layouts/`.
2. Create stateless UI atoms (badges, buttons) in `src/components/ui/`.
3. Build the main sections (Hero, Expertise, Career) in `src/components/sections/`.
4. Assemble them in `src/pages/index.astro`.

## Styling

- Exclusively use Tailwind CSS utility classes.
- For hover animations, use `transition-all duration-300` combined with `hover:scale-105` or similar. Do not use external animation libraries.
