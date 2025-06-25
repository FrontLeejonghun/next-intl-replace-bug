import {routing} from './routing';
import {createNavigation} from 'next-intl/navigation';

export const {usePathname, useRouter, Link} = createNavigation(routing);

