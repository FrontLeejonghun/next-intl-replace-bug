import {routing} from './routing';
import {createNavigation} from 'next-intl/navigation';

export const {useRouter, usePathname} =
    createNavigation(routing);
