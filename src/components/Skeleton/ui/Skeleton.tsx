import s from './Skeleton.module.scss';
import classNames from 'classnames';

interface ISkeletonProps {
    className?: string;
}

export const Skeleton = ({ className }: ISkeletonProps) => {
    return (
        <div className={classNames(s.skeleton, className)}>
            <div className={s.shimmer}></div>
        </div>
    );
};
