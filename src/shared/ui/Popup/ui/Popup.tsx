import { PropsWithChildren, ReactNode, useCallback, useEffect } from 'react';
import s from './Popup.module.scss';
import classNames from 'classnames';

type TPosition =
    | 'top-left'
    | 'top-right'
    | 'bottom-left'
    | 'bottom-right'
    | 'left-top'
    | 'left-bottom'
    | 'right-top'
    | 'right-bottom';

export type TPopupProps = {
    /** Элемент, относительно которого будет открываться Popup */
    target: ReactNode;
    //
    isOpen: boolean;
    onClose: () => void;
    //
    position?: TPosition;
    closeOnClickOutside?: boolean;
};

export const Popup = (props: PropsWithChildren<TPopupProps>) => {
    const {
        children,
        target,
        isOpen,
        onClose,
        position = 'bottom-right',
        closeOnClickOutside = true,
    } = props;

    const handleClose = useCallback(() => {
        if (!isOpen) {
            return;
        }

        onClose();
    }, [isOpen, onClose]);

    useEffect(() => {
        if (!closeOnClickOutside) {
            return;
        }

        document.addEventListener('click', handleClose);

        return () => {
            document.removeEventListener('click', handleClose);
        };
    }, [closeOnClickOutside, handleClose]);

    return (
        <div className={s.Popup}>
            <div className={s.target} onClick={(event) => event.stopPropagation()}>
                {target}
            </div>

            {isOpen && (
                <div className={s.contentWrapper}>
                    <div
                        onClick={(event) => event.stopPropagation()}
                        className={classNames(s.content, s[position])}
                    >
                        {children}
                    </div>
                </div>
            )}
        </div>
    );
};
