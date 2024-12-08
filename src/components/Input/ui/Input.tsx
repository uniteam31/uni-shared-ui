import classNames from 'classnames';
import { ChangeEvent, InputHTMLAttributes, memo } from 'react';
import s from './Input.module.scss';

type HTMLInputProps = Omit<InputHTMLAttributes<HTMLInputElement>, 'value' | 'onChange'>;

interface IInputProps extends HTMLInputProps {
    value?: string | number;
    onChange?: (value: string) => void;
    //
    label: string;
    className?: string;
}

export const Input = memo((props: IInputProps) => {
    const { className, value, onChange, label, ...otherProps } = props;

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
                className={classNames(s.Input, {}, [className])}
                {...otherProps}
            />

            <label className={s.floatingLabel}>{label}</label>
        </div>
    );
});
