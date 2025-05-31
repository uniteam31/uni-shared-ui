import React from 'react';
import type { ReactNode } from 'react';
import { Divider } from '../../../Divider';

import s from './DropdownMenuItem.module.scss';

export type TDropdownItem = {
    label: ReactNode;
    //
    dividerBefore?: boolean;
    dividerAfter?: boolean;
    //
    onClick?: () => void;
    items?: TDropdownItem[];
};

export const DropdownMenuItem = (item: TDropdownItem) => {
    return (
        <>
            {item.dividerBefore && <Divider className={s.divider} direction={'horizontal'} />}

            <li className={s.DropdownMenuItem} onClick={item.onClick}>
                {item.label}
            </li>

            {item.dividerAfter && <Divider className={s.divider} direction={'horizontal'} />}
        </>
    );
};
