import React, { useEffect, useState } from 'react';
import type { MouseEvent } from 'react';
import classNames from 'classnames';
import { SelectItem } from '../SelectItem/SelectItem';
import type { TSelectItem } from '../SelectItem/SelectItem';
import { Placeholder } from '../Placeholder/Placeholder';

import s from './Select.module.scss';
import ArrowDownIcon from '../../../../assets/icons/down.svg';

type TView = 'default' | 'clear';

interface Props {
    items: TSelectItem[];
    selectedItems: TSelectItem[];
    onSelect: (selectedItems: TSelectItem[]) => void;
    //
    closeOnClickOutside?: boolean;
    multiselect?: boolean;
    //
    view?: TView;
    placeholder?: string;
    className?: string;
}

// TODO отрефачить компонент!!!
export const Select = (props: Props) => {
    const { selectedItems, items, onSelect } = props;

    const { placeholder, className, view = 'default' } = props;

    const { closeOnClickOutside = false, multiselect = false } = props;

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

    const toggleSelect = (event: MouseEvent) => {
        event.stopPropagation();
        setIsOpen(!isOpen);
    };

    const handleSelectItem = (event: MouseEvent, item: TSelectItem) => {
        event.stopPropagation();

        let newSelectedItems: TSelectItem[];

        if (multiselect) {
            const isSelected = selectedItems.some((selected) => selected.value === item.value);

            if (isSelected) {
                newSelectedItems = selectedItems.filter(
                    (selected) => selected.value !== item.value,
                );
            } else {
                newSelectedItems = [...selectedItems, item];
            }
        } else {
            newSelectedItems = [item];
            setIsOpen(false);
        }

        onSelect(newSelectedItems);
    };

    const isItemSelected = (item: TSelectItem) => {
        return selectedItems.some((selected) => selected.value === item.value);
    };

    return (
        <div className={classNames(s.select, className)}>
            <button
                type={'button'}
                className={classNames(s.selectToggle, s[view])}
                onClick={(event) => toggleSelect(event)}
            >
                <Placeholder selectedItems={selectedItems} placeholder={placeholder} />

                <ArrowDownIcon className={classNames(s.selectIcon, isOpen && s.open)} />
            </button>

            {isOpen && (
                <ul className={s.selectMenu}>
                    {items.map((item) => (
                        <SelectItem
                            key={item.value}
                            {...item}
                            onSelect={handleSelectItem}
                            isActive={isItemSelected(item)}
                        />
                    ))}
                </ul>
            )}
        </div>
    );
};
