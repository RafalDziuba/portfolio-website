import { defineMiddleware } from 'astro:middleware';

const SUPPORTED_LANGUAGES = ['pl', 'en'] as const;
type SupportedLanguage = (typeof SUPPORTED_LANGUAGES)[number];
const DEFAULT_LANGUAGE: SupportedLanguage = 'en';

export const onRequest = defineMiddleware((context, next) => {
  const { url, request, redirect } = context;

  // We only intercept visits to the root / (and potentially trailing slash)
  if (url.pathname === '/' || url.pathname === '') {
    const acceptLanguageInfo = request.headers.get('accept-language');
    let targetLang: SupportedLanguage = DEFAULT_LANGUAGE;

    if (acceptLanguageInfo) {
      if (acceptLanguageInfo.includes('pl')) {
        targetLang = 'pl';
      }
    }

    // Redirect permanently (301) or temporary (302) to the correct localized route
    return redirect(`/${targetLang}`, 302);
  }

  // Rewrite /pl to /pl/, etc. might not be strictly necessary if using Astro's trailingSlash config,
  // but let normal flow process any other routes like /[lang]/*
  return next();
});
