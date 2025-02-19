import React, { memo } from 'react';
import type { ReactNode } from 'react';
import { Text } from '../../Text';
import s from './Warning.module.scss';
import classNames from 'classnames';

type TWarningTheme = 'green' | 'blue' | 'red';

interface IWarningProps {
    Icon?: ReactNode;
    title?: string;
    text?: ReactNode;
    //
    theme?: TWarningTheme;
    className?: string;
}

export const Warning = memo((props: IWarningProps) => {
    const { Icon, title, text } = props;
    //
    const { theme = 'green', className } = props;

    return (
        <div className={classNames(s.Warning, className, s[theme])}>
            <div className={s.headerLine} />

            <div className={s.wrapper}>
                {Icon}
                <Text className={s.text} title={title} text={text} />
            </div>
        </div>
    );
});
