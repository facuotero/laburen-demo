import {getRequestConfig} from 'next-intl/server';
import {hasLocale} from 'next-intl';
import {routing} from '@/i18n/routing'; // {locales, defaultLocale}

export default getRequestConfig(async ({requestLocale}) => {
  const requested = await requestLocale; // 👈 clave
  const locale =
    hasLocale(routing.locales, requested) ? requested : routing.defaultLocale;

  return {
    locale,
    messages: (await import(`../../messages/${locale}.json`)).default
  };
});