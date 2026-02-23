export const languages = {
  pl: 'Polski',
  en: 'English',
};

export const defaultLang = 'pl';

export const ui = {
  pl: {
    // Navigation
    'nav.home': 'Start',
    'nav.about': 'O mnie',
    'nav.projects': 'Projekty',

    // Hero
    'hero.greeting': 'Cześć, tu Rafał Dziuba',
    'hero.role': 'Astro, Node & Fullstack Developer',
    'hero.description':
      'Zajmuję się budowaniem responsywnych, wydajnych i dostępnych aplikacji webowych. Dbam o UX oraz czysty kod.',
    'hero.primary': 'Skontaktuj się ze mną',
    'hero.secondary': 'Moje projekty',

    // Footer
    'footer.title': 'Bądźmy w kontakcie',
    'footer.subtitle': 'Szukasz programisty do swojego projektu? Napisz do mnie.',
    'footer.name': 'Imię',
    'footer.email': 'Adres e-mail',
    'footer.message': 'Wiadomość',
    'footer.send': 'Wyślij wiadomość',
    'footer.sending': 'Wysyłanie...',
    'footer.success': 'Wiadomość wysłana pomyślnie!',
    'footer.error': 'Wystąpił błąd. Spróbuj ponownie.',
    'footer.security': 'Wiadomość zabezpieczona certyfikatem SSL. Dane trafiają bezpośrednio na moją skrzynkę.',
  },
  en: {
    // Navigation
    'nav.home': 'Home',
    'nav.about': 'About',
    'nav.projects': 'Projects',

    // Hero
    'hero.greeting': "Hi, I'm Rafał Dziuba",
    'hero.role': 'Astro, Node & Fullstack Developer',
    'hero.description':
      'I focus on building responsive, high-performance, and accessible web applications. I care about UX and clean code.',
    'hero.primary': 'Get in touch',
    'hero.secondary': 'View my work',

    // Footer
    'footer.title': 'Get in touch',
    'footer.subtitle': 'Looking for a developer for your next project? Drop me a line.',
    'footer.name': 'Name',
    'footer.email': 'Email address',
    'footer.message': 'Message',
    'footer.send': 'Send message',
    'footer.sending': 'Sending...',
    'footer.success': 'Message sent successfully!',
    'footer.error': 'An error occurred. Please try again.',
    'footer.security': 'Message secured by SSL. Data goes directly to my inbox.',
  },
} as const;
