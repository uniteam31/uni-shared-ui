import { memo } from 'react';
import s from './Loader.module.scss';
import classNames from 'classnames';

interface LoaderProps {
    className?: string;
}

export const Loader = memo((props: LoaderProps) => {
    const { className } = props;

    return (
        <div className={classNames(s.ldsSpinner, className)}>
            {Array.from({ length: 12 }).map((_, index) => (
                <div key={index}></div>
            ))}
        </div>
    );
});
