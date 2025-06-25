import {getRequestConfig} from 'next-intl/server';
import { routing, SUPPORTED_LOCALE_LIST} from './routing';

export default getRequestConfig(async ({requestLocale}) => {
  let locale = await requestLocale;

  if (!locale || !SUPPORTED_LOCALE_LIST.includes(locale)) {
    locale = routing.defaultLocale;
  }



  return {
    locale,
    messages: (await import(`../../messages/${locale}.json`)).default
  };
});
