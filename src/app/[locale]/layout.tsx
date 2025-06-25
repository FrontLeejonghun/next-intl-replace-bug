import {NextIntlClientProvider} from 'next-intl';
import {ReactNode} from 'react';
import SwitchLocale from "@/components/SwitchLocale";

type Props = {
    children: ReactNode;
    params: Promise<{ locale: string }>;
};

export default async function LocaleLayout({children, params}: Props) {
    const {locale} = await params;

    return (
        <html lang={locale}>
        <head>
            <title>next-intl-bug-repro-app-router</title>
        </head>
        <body>
        <NextIntlClientProvider>
            <SwitchLocale/>
            {children}
        </NextIntlClientProvider>
        </body>
        </html>
    );
}
