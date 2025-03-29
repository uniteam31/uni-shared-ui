import React, { memo } from 'react';
import type { ReactNode } from 'react';
import classNames from 'classnames';
import s from './Text.module.scss';

export enum TextTheme {
    PRIMARY = 'primary',
    ERROR = 'error',
}

export enum TextAlign {
    LEFT = 'left',
    RIGHT = 'right',
    CENTER = 'center',
}

type TSize = 'small' | 'medium' | 'large';

interface ITextProps {
    className?: string;
    title?: string;
    text?: ReactNode;
    theme?: TextTheme;
    align?: TextAlign;
    size?: TSize;
}

export const Text = memo((props: ITextProps) => {
    const {
        className,
        title,
        text,
        theme = TextTheme.PRIMARY,
        align = TextAlign.LEFT,
        size = 'medium',
    } = props;

    const additional = [className, s[theme], s[align], s[size]];

    return (
        <div className={classNames(additional)}>
            {title && <p className={s.title}>{title}</p>}
            {text && <p className={s.text}>{text}</p>}
        </div>
    );
});
