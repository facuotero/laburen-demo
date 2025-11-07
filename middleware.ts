import createMiddleware from 'next-intl/middleware';
import {routing} from './src/i18n/routing';

export default createMiddleware({
  ...routing,
  // Detecta automáticamente el idioma del browser
  localeDetection: true,
  // Si no puede detectar, usa el defaultLocale
  defaultLocale: 'en'
});

export const config = {
  matcher: [
    // Skip all internal paths (_next)
    '/((?!_next|_vercel|.*\\..*|api).*)',
    // Optional: only run on root (/) URL
    '/'
  ]
};