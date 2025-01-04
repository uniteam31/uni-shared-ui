import { ButtonHTMLAttributes, memo } from 'react';
import cls from './Button.module.scss';
import classNames from 'classnames';

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
    className?: string;
}

export const Button = memo((props: ButtonProps) => {
    const { className, children, ...otherProps } = props;

    return (
        <button className={classNames(cls.Button, className)} {...otherProps}>
            {children}
        </button>
    );
});
