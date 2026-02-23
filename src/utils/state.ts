export const LANGUAGES = ['en', 'pl'] as const;
export type Language = (typeof LANGUAGES)[number];

export const THEMES = ['light', 'dark'] as const;
export type Theme = (typeof THEMES)[number];

export const DEFAULT_LANGUAGE: Language = 'en';
export const DEFAULT_THEME: Theme = 'dark';
