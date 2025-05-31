import type { TSelectItem } from '../SelectItem/SelectItem';
import React from 'react';

import s from './Placeholder.module.scss';

type Props = {
    selectedItems: TSelectItem[];
    placeholder?: string;
};

export const Placeholder = (props: Props) => {
    const { selectedItems, placeholder } = props;

    return (
        <div className={s.Placeholder}>
            {selectedItems.length === 0 && placeholder}

            {selectedItems.length === 1 && (
                <div className={s.selectedItem}>
                    {selectedItems[0].contentLeft} {selectedItems[0].label}
                </div>
            )}

            {selectedItems.length > 1 && (
                <div className={s.selectedItem}>Выбрано {selectedItems.length}</div>
            )}
        </div>
    );
};
