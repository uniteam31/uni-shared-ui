import classNames from 'classnames';
import { memo } from 'react';
import type { ChangeEvent, InputHTMLAttributes } from 'react';
import s from './TextArea.module.scss';

type HTMLTextAreaProps = Omit<InputHTMLAttributes<HTMLTextAreaElement>, 'value' | 'onChange'>;

interface ITextAreaProps extends HTMLTextAreaProps {
    value?: string | number;
    onChange?: (value: string) => void;
    //
    label: string;
    className?: string;
}

export const TextArea = memo((props: ITextAreaProps) => {
    const { className, value, onChange, label, ...otherProps } = props;

    const handleChange = (e: ChangeEvent<HTMLTextAreaElement>) => {
        onChange?.(e.target.value);
    };

    // передаем className сразу в обертку и input, чтобы размеры менялись у обоих сразу
    return (
        <div className={classNames(s.textAreaWrapper, {}, [className])}>
            <textarea
                value={value}
                onChange={handleChange}
                placeholder=""
                className={classNames(s.TextArea, {}, [className])}
                {...otherProps}
            />

            <label className={s.floatingLabel}>{label}</label>
        </div>
    );
});
