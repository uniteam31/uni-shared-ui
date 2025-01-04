import React, { ReactNode } from 'react';
import s from './LoadScreen.module.scss';
import { Loader } from '../../Loader';
import classNames from 'classnames';

interface ILoadScreenProps {
    Icon?: ReactNode;
    label?: string;
    //
    className?: string;
}

export const LoadScreen = (props: ILoadScreenProps) => {
    const { Icon, label, className } = props;

    return (
        <div className={classNames(s.LoadScreen, className)}>
            <div>{Icon}</div>

            {label && <div className={s.label}>{label}</div>}

            <Loader />
        </div>
    );
};
