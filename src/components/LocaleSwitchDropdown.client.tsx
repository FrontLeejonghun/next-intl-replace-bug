"use client";

import {useRouter, usePathname, Link as NextIntlLink} from "@/i18n/navigation";
import {useSearchParams} from "next/navigation";
import {SUPPORTED_LOCALE_LIST} from "@/i18n/routing";
import {useLocale} from "next-intl";
import NextLink from "next/link";


interface LocaleSwitchDropdownProps {
    withNextLink?: boolean;
}

const LocaleSwitchDropdownClient = ({withNextLink}: LocaleSwitchDropdownProps) => {
    const {replace} = useRouter();
    const locale = useLocale();
    const pathname = usePathname();
    const searchParams = useSearchParams();

    const Link = withNextLink ? NextLink : NextIntlLink;
    const infoText = withNextLink ? "with next/Link" : "with next-intl/Link";
    const linkProps = withNextLink
        ? {}
        : {locale};



    /**
     * 1. Access / route.
     * 2. Since this is Korea, the locale is changed to 'ko' due to locale detection.
     * 3. Click "go to Test with next/Link".
     * 4. Click "CHANGE TO en".
     * 5. No action occurs.
     * **/

    return (
        <div style={{
            display: 'flex',
            alignItems: 'center',
            gap: '10px',
            flexWrap: 'wrap',
            flexDirection:'column'
        }}>
            <div >
                <Link href={"/test"}
                      locale={locale}
                >
                    go to Test {infoText}
                </Link>
            </div>

            <div >
                <Link href={"/"}
                      locale={locale}
                >
                    go to root {infoText}
                </Link>
            </div>


            {SUPPORTED_LOCALE_LIST.map((value) => {
                return (
                    <button
                        disabled={locale === value}
                        onClick={() => {

                            console.log({
                                pathname,
                                searchParams,
                                targetLocale: value,
                            });

                            replace(pathname, {
                                locale: value,
                            });
                        }}
                    >
                        CHANGE TO {value}
                    </button>
                );
            })}
        </div>
    );
};

export default LocaleSwitchDropdownClient;
