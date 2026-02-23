# Quickstart: Static Dictionaries i18n

This feature implements native Astro i18n routing using static dictionaries for zero-JS localization.

## 1. Adding a new Translation

1. Open `src/i18n/ui.ts`.
2. Add your new key-value pair to **both** the `pl` (default) and `en` objects inside the `ui` constant.
   _(TypeScript will enforce that both languages have the exact same keys)._

```typescript
export const ui = {
  pl: {
    // ...existing
    'newSection.title': 'Nowa Sekcja',
  },
  en: {
    // ...existing
    'newSection.title': 'New Section',
  },
} as const;
```

## 2. Using Translations in `.astro` Components

Import the helper and get the translation function for the current language from the URL:

```astro
---
import { useTranslations } from '../i18n/utils';

// Astro.params.lang will be defined on translated routes (e.g., /en/)
// On the root route (/), it might be undefined, so the helper will fallback to defaultLang ('pl')
const lang = Astro.params.lang || 'pl';
const t = useTranslations(lang as any);
---

<h1>{t('newSection.title')}</h1>
```

## 3. Creating Translated Pages

Due to `routing: { prefixDefaultLocale: false }` in `astro.config.mjs`:

- Polish pages live at `/` (e.g., `src/pages/index.astro`).
- English pages live at `/en/` (e.g., `src/pages/en/index.astro`).

You can use Astro's `getRelativeLocaleUrl` helper to generate links:

```astro
---
import { getRelativeLocaleUrl } from 'astro:i18n';
---
<!-- Links to /en/about -->
<a href={getRelativeLocaleUrl('en', 'about')}>About</a>
```
