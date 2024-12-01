import React, { ChangeEvent, memo } from 'react';
import classNames from 'classnames';
import s from './NoteTitleInput.module.scss';

interface INoteTitleInputProps {
    onChange?: (value: string) => void;
    value?: string;
    //
    className?: string;
}

export const NoteTitleInput = memo((props: INoteTitleInputProps) => {
    const { onChange, value, className } = props;

    const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
        const value = event.target.value;
        onChange?.(value);
    };

    return (
        <input
            className={classNames(s.NoteTitleInput, className)}
            onChange={handleChange}
            value={value}
        ></input>
    );
});
