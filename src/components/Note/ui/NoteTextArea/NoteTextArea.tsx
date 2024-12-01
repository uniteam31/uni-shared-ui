import React, { ChangeEvent } from 'react';
import s from './NoteTextArea.module.scss';
import classNames from 'classnames';

interface INoteTextAreaProps {
    onChange?: (value: string) => void;
    value?: string;
    //
    className?: string;
}

export const NoteTextArea = (props: INoteTextAreaProps) => {
    const { onChange, value, className } = props;

    const handleChange = (event: ChangeEvent<HTMLTextAreaElement>) => {
        const value = event.target.value;
        onChange?.(value);
    };

    return (
        <textarea
            onChange={handleChange}
            className={classNames(s.NoteTextArea, className)}
            value={value}
        ></textarea>
    );
};
