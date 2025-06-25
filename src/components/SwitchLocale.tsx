'use client';

import {useRouter,usePathname} from "@/i18n/navigation";
import { useSearchParams} from "next/navigation";
import {SUPPORTED_LOCALE_LIST} from "@/i18n/routing";
import {useLocale} from "next-intl";

const SwitchLocale = () => {
    const {replace} = useRouter();

    const locale = useLocale()
    const pathname = usePathname();
    const searchParams = useSearchParams();

    return (
        SUPPORTED_LOCALE_LIST.map(
            (value) => {
                return <button onClick={() => {
                    if (locale === value) {
                        return;
                    }

                    const url = [pathname, searchParams.toString()].filter(Boolean).join('?');
                    console.log({
                        pathname,
                        searchParams,
                        url,
                        targetLocale: value,
                    });
                    replace(url, {
                        locale: value
                    });
                }}>
                    {value}
                </button>
            }
        )
    );
}
export default SwitchLocale
