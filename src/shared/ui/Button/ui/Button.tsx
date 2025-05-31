import { memo } from 'react';
import type { ButtonHTMLAttributes } from 'react';
import cls from './Button.module.scss';
import classNames from 'classnames';

type TTheme = 'default' | 'red' | 'green';

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
    className?: string;
    theme?: TTheme;
}

export const Button = memo((props: ButtonProps) => {
    const { className, children, theme = 'default', ...otherProps } = props;

    return (
        <button className={classNames(cls.Button, cls[theme], className)} {...otherProps}>
            {children}
        </button>
    );
});
