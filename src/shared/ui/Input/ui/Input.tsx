import classNames from 'classnames';
import { memo } from 'react';
import type { ChangeEvent, InputHTMLAttributes } from 'react';
import s from './Input.module.scss';

type HTMLInputProps = Omit<InputHTMLAttributes<HTMLInputElement>, 'value' | 'onChange'>;

interface IInputProps extends HTMLInputProps {
    value?: string | number;
    onChange?: (value: string) => void;
    //
    label: string;
    error?: boolean;
    className?: string;
}

export const Input = memo((props: IInputProps) => {
    const { className, value, onChange, label, error, ...otherProps } = props;

    const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
        onChange?.(e.target.value);
    };

    // передаем className сразу в обертку и input, чтобы размеры менялись у обоих сразу
    return (
        <div className={classNames(s.inputWrapper, className)}>
            <input
                value={value}
                onChange={handleChange}
                placeholder=" "
                className={classNames(s.Input, className, error && s.error)}
                {...otherProps}
            />

            <label className={classNames(s.floatingLabel, error && s.error)}>{label}</label>
        </div>
    );
});
