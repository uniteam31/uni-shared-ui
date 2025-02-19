import classNames from 'classnames';
import s from './Divider.module.scss';

export enum DividerDirection {
    HORIZONTAL = 'horizontal',
    VERTICAL = 'vertical',
}

interface IDividerProps {
    direction?: DividerDirection;
    className?: string;
}

export const Divider = (props: IDividerProps) => {
    const { direction = DividerDirection.VERTICAL, className } = props;

    return <div className={classNames(s.Divider, s[direction], className)}></div>;
};
