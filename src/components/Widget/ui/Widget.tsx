import React, { PropsWithChildren, ReactElement } from 'react';
import classNames from 'classnames';
import s from './Widget.module.scss';

// TODO расширить?
type Icon = ReactElement;

interface IWidgetProps {
    icon?: Icon;
    title?: string;
    //
    className?: string;
}

export const Widget = (props: PropsWithChildren<IWidgetProps>) => {
    const { className, icon, title, children } = props;

    return (
        <div className={classNames(s.Widget, className)}>
            {icon && <div className={s.icon}>{icon}</div>}
            {title && <div className={s.title}>{title}</div>}

            {children}
        </div>
    );
};
