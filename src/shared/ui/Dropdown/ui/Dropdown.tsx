import React, { useEffect, useState } from 'react';
import type { MouseEvent } from 'react';
import s from './Dropdown.module.scss';
import classNames from 'classnames';

import ArrowDownIcon from '../../../assets/icons/down.svg';
import CheckIcon from '../../../assets/icons/check.svg';

export type TDropdownItem = {
    name: string;
    value: string | number;
};

type TView = 'default' | 'clear';

interface DropdownProps {
    items: TDropdownItem[];
    selectedItem: TDropdownItem | null;
    onSelect: (value: TDropdownItem) => void;
    closeOnClickOutside?: boolean;
    //
    view?: TView;
    placeholder?: string;
    className?: string;
}

export const Dropdown = (props: DropdownProps) => {
    const {
        selectedItem,
        items,
        onSelect,
        placeholder,
        view = 'default',
        closeOnClickOutside = false,
        className,
    } = props;

    const [isOpen, setIsOpen] = useState<boolean>(false);

    useEffect(() => {
        if (!closeOnClickOutside) {
            return;
        }

        const handleClickOutside = () => {
            setIsOpen(false);
        };

        document.addEventListener('click', handleClickOutside);

        return () => {
            document.removeEventListener('click', handleClickOutside);
        };
    }, []);

    const toggleDropdown = (event: MouseEvent) => {
        event.stopPropagation();

        setIsOpen(!isOpen);
    };

    const handleSelect = (event: MouseEvent, item: TDropdownItem) => {
        event.stopPropagation();

        onSelect(item);

        setIsOpen(false);
    };

    return (
        <div className={classNames(s.dropdown, className)}>
            <button
                className={classNames(s.dropdownToggle, s[view])}
                onClick={(event) => toggleDropdown(event)}
            >
                {selectedItem?.name || placeholder}

                <ArrowDownIcon className={classNames(s.dropdownIcon, isOpen && s.open)} />
            </button>

            {isOpen && (
                <ul className={s.dropdownMenu}>
                    {items.map((item) => (
                        <li
                            key={item.value}
                            className={s.dropdownItem}
                            onClick={(event) => handleSelect(event, item)}
                        >
                            {item.name}

                            {item.value === selectedItem?.value && (
                                <CheckIcon className={s.checkIcon} />
                            )}
                        </li>
                    ))}
                </ul>
            )}
        </div>
    );
};
