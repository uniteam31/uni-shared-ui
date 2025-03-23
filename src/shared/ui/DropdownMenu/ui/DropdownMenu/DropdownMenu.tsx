import { DropdownMenuItem } from '../DropdownMenuItem/DropdownMenuItem';
import type { TDropdownItem } from '../DropdownMenuItem/DropdownMenuItem';
import { Popup } from '../../../Popup';
import type { TPopupProps } from '../../../Popup';

import s from './DropdownMenu.module.scss';

type Props = TPopupProps & {
    /** Элемент, относительно которого будет открываться меню */
    items: TDropdownItem[];
};

export const DropdownMenu = (props: Props) => {
    const { target, items, isOpen, position, onClose } = props;

    return (
        <Popup target={target} isOpen={isOpen} onClose={onClose} position={position}>
            <ul className={s.DropdownMenu}>
                {items.map((item, index) => (
                    <DropdownMenuItem key={index} {...item} />
                ))}
            </ul>
        </Popup>
    );
};
