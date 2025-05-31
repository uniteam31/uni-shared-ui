import classNames from 'classnames';
import React from 'react';
import type { PropsWithChildren, ReactNode } from 'react';
import { Link } from 'shared/ui';
import s from './Widget.module.scss';

type TSize = 'small' | 'medium' | 'large';

export interface IWidgetProps {
    Icon?: ReactNode;
    title?: string;
    /** Куда введет ссылка при клике на header */
    to?: string;
    //
    size?: TSize;
    className?: string;
}

export const Widget = (props: PropsWithChildren<IWidgetProps>) => {
    const { Icon, title, to = '', size, className, children } = props;

    return (
        <div className={classNames(s.Widget, className, to && s.clickable, size && s[size])}>
            {(Icon || title) && (
                <Link to={to}>
                    <div className={s.header}>
                        {Icon && <div className={s.icon}>{Icon}</div>}
                        {title && <div className={s.title}>{title}</div>}
                    </div>
                </Link>
            )}

            {children}
        </div>
    );
};
