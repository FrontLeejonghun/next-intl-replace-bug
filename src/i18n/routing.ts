import {defineRouting} from 'next-intl/routing';

const SUPPORTED_LOCALE_LIST = ['ko', 'en'];
const DEFAULT_LOCALE = 'en';

const routing = defineRouting({
    locales: SUPPORTED_LOCALE_LIST,
    defaultLocale: DEFAULT_LOCALE,
    localePrefix:'as-needed'
});

export {SUPPORTED_LOCALE_LIST, routing, DEFAULT_LOCALE}