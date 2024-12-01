import React, { FC } from 'react';
import s from './NoteItem.module.scss';
import classNames from 'classnames';

interface INoteItemProps {
    title?: string;
    inner?: string;
    data?: string;
    //
    className?: string;
}

export const NoteItem: FC<INoteItemProps> = (props) => {
    const { title, inner, data, className } = props;

    // TODO добавить валидатор длины полей и скрывать под хайд и ...
    return (
        <div className={classNames(s.NodeItem, className)}>
            <div className={s.title}>{title ?? 'Нет названия'}</div>
            <div className={s.inner}>{inner ?? 'Нет содержимого'}</div>
            <div className={s.data}>{data ?? 'Без даты создания'}</div>
        </div>
    );
};
