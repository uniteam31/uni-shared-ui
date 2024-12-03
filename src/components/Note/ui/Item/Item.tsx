import React, { FC, memo } from 'react';
import s from './Item.module.scss';
import classNames from 'classnames';

interface IItemProps {
    title?: string;
    text?: string;
    date?: string;
    //
    className?: string;
}

export const Item: FC<IItemProps> = memo((props) => {
    const { title, text, date, className } = props;

    // TODO добавить валидатор длины полей и скрывать под хайд и ...
    return (
        <div className={classNames(s.Item, className)}>
            <div className={s.title}>{title ?? 'Нет названия'}</div>
            <div className={s.text}>{text ?? 'Нет содержимого'}</div>
            <div className={s.date}>{date ?? 'Без даты создания'}</div>
        </div>
    );
});
