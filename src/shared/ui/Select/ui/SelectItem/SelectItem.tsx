import React from 'react';
import type { ReactNode, MouseEvent } from 'react';
import classNames from 'classnames';
import s from './SelectItem.module.scss';

import CheckIcon from '../../../../assets/icons/check.svg';

export type TSelectItem = {
    label: string;
    value: string | number;
    contentLeft?: ReactNode;
};

type Props = TSelectItem & {
    onSelect: (event: MouseEvent, item: TSelectItem) => void;
    isActive?: boolean;
};

export const SelectItem = (props: Props) => {
    const { contentLeft, label, value, onSelect, isActive = false } = props;

    const handleSelectItem = (event: MouseEvent) => {
        const item = {
            label,
            value,
            contentLeft,
        };

        onSelect(event, item);
    };

    return (
        <li
            key={value}
            className={classNames(s.SelectItem, isActive && s.selected)}
            onClick={(event) => handleSelectItem(event)}
        >
            <div className={s.content}>
                {contentLeft}

                {label}
            </div>

            {isActive && <CheckIcon className={s.checkIcon} />}
        </li>
    );
};
