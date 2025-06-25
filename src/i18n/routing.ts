import { defineRouting } from 'next-intl/routing';

const SUPPORTED_LOCALE_LIST = ['en', 'ko'];
const DEFAULT_LOCALE = 'en';

const routing = defineRouting({
  locales: SUPPORTED_LOCALE_LIST,
  localePrefix: 'as-needed',
  defaultLocale: DEFAULT_LOCALE,
  localeDetection: false,
});

export { SUPPORTED_LOCALE_LIST, routing, DEFAULT_LOCALE };