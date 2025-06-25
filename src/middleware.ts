import type { NextRequest } from 'next/server';
import createIntlMiddleware from 'next-intl/middleware';
import { routing } from '@/i18n/routing';

export default async function middleware(request: NextRequest) {
    const handleI18nRouting = createIntlMiddleware({
        ...routing,
        localeDetection: true,
    });

    const response = handleI18nRouting(request);

    console.log('🌐 Locale Debug Info:', {
        pathname: request.nextUrl.pathname,
        searchParams: Object.fromEntries(request.nextUrl.searchParams),
        acceptLanguage: request.headers.get('accept-language'),
        localeCookie: request.cookies.get('NEXT_LOCALE')?.value,
        timestamp: new Date().toISOString(),
    });

    return response;
}

export const config = {
    matcher: ['/((?!api|_next|_vercel|.*\\..*).*)'],
};
