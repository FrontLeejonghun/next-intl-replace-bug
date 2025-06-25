import {NextIntlClientProvider} from "next-intl";
import {ReactNode} from "react";
import LocaleSwitchDropdownClient from "@/components/LocaleSwitchDropdown.client";
import {getMessages, setRequestLocale} from "next-intl/server";
import {SUPPORTED_LOCALE_LIST} from "@/i18n/routing";
import {notFound} from "next/navigation";

type Props = {
    children: ReactNode;
    params: { locale: string };
};

export default async function LocaleLayout({children, params}: Props) {
    const {locale} = params;
    const isValidLocale = SUPPORTED_LOCALE_LIST.some(
        (supportedLocale) => supportedLocale === locale
    );

    if (!isValidLocale) {
        notFound();
    }

    const messages = await getMessages();

    setRequestLocale(locale);

    return (
        <html lang={locale}>
        <head>
            <title>테스트</title>
        </head>
        <body>
        <NextIntlClientProvider locale={locale} messages={messages}>
            <div style={{
                display: 'flex',
                alignItems: 'center',
                gap: '10px',
            }}>
                <LocaleSwitchDropdownClient withNextLink={false}/>
                <LocaleSwitchDropdownClient withNextLink={true}/>

            </div>

            {children}
        </NextIntlClientProvider>
        </body>
        </html>
    );
}
