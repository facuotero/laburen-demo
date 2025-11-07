import {getRequestConfig} from 'next-intl/server';
import {routing} from '@/i18n/routing';

export default getRequestConfig(async ({requestLocale}) => {
  // Obtener el locale solicitado o usar el default
  let locale = await requestLocale;
  
  // Si no hay locale o no está soportado, usar el default
  if (!locale || !routing.locales.includes(locale as 'en' | 'es')) {
    locale = routing.defaultLocale;
  }

  return {
    locale,
    messages: (await import(`../../messages/${locale}.json`)).default
  };
});