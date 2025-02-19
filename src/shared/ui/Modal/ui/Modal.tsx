import type { MouseEvent, ReactNode } from 'react';
import { Portal } from '../../Portal';
import s from './Modal.module.scss';
import classNames from 'classnames';

interface ModalProps {
    children: ReactNode;
    //
    onClose: () => void;
    isOpen: boolean;
    //
    className?: string;
}

export const Modal = (props: ModalProps) => {
    const { className, children, onClose, isOpen } = props;

    const onClickContent = (e: MouseEvent) => {
        e.stopPropagation();
    };

    return (
        <Portal>
            <div className={classNames(s.Modal, isOpen && [s.isOpen], className)}>
                <div className={s.overlay} onClick={onClose}>
                    <div className={s.content} onClick={(e) => onClickContent(e)}>
                        {<div className={s.cross} onClick={onClose}></div>}
                        {children}
                    </div>
                </div>
            </div>
        </Portal>
    );
};
