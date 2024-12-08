import React, { ReactNode } from 'react';
import s from './LoadScreen.module.scss';
import { Text } from '../../Text';
import { Loader } from '../../Loader';

interface ILoadScreenProps {
    Icon?: ReactNode;
    label?: string;
}

export const LoadScreen = (props: ILoadScreenProps) => {
    const { Icon, label } = props;

    return (
        <div className={s.LoadScreen}>
            <div>{Icon}</div>

            {label && <div className={s.label}>{label}</div>}

            <Loader />
        </div>
    );
};
