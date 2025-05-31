import classNames from 'classnames';
import s from './Divider.module.scss';

type TDividerDirection = 'horizontal' | 'vertical';

interface IDividerProps {
    direction?: TDividerDirection;
    className?: string;
}

export const Divider = (props: IDividerProps) => {
    const { direction = 'vertical', className } = props;

    return <div className={classNames(s.Divider, s[direction], className)}></div>;
};
