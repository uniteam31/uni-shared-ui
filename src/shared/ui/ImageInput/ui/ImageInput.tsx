import { ChangeEvent, InputHTMLAttributes, memo } from 'react';
import cls from './ImageInput.module.scss';
import classNames from 'classnames';

type HTMLInputProps = Omit<InputHTMLAttributes<HTMLInputElement>, 'onChange'>;

type InputFileShapeType = 'square' | 'circle';

interface InputFileProps extends HTMLInputProps {
    selectedFile?: string;
    className?: string;
    onChange?: (file: ChangeEvent<HTMLInputElement>) => void;
    onRemove?: () => void;
    label: string;
    shape?: InputFileShapeType;
}

export const ImageInput = memo((props: InputFileProps) => {
    const {
        selectedFile,
        className,
        onChange,
        onRemove,
        label,
        shape = 'square',
        ...otherProps
    } = props;

    const onHandleChange = (e: ChangeEvent<HTMLInputElement>) => {
        onChange?.(e);
    };

    const additional = [className, cls[shape]];

    return (
        <div className={classNames(cls.ImageInput, {}, additional)}>
            <input
                type="file"
                id="fileInput"
                className={cls.input}
                onChange={(e) => onHandleChange(e)}
                {...otherProps}
            />

            {!selectedFile && (
                <label htmlFor="fileInput" className={cls.inputLabel}>
                    {label}
                </label>
            )}

            {selectedFile && (
                <div className={cls.imageContainer}>
                    <img src={selectedFile} alt="Uploaded" className={cls.image} />
                    <button onClick={onRemove} className={cls.removeButton}>
                        ×
                    </button>
                </div>
            )}
        </div>
    );
});
