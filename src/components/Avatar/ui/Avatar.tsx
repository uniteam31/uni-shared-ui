import React, { ImgHTMLAttributes, memo } from 'react';
import classNames from 'classnames';
import s from './Avatar.module.scss';

/** Можно ввести размеры для контроля, но здесь предполагается, что они задаются через className */
interface IAvatarProps extends ImgHTMLAttributes<HTMLImageElement> {
    src?: string;
    alt?: string;
    //
    className?: string;
}

export const Avatar = memo((props: IAvatarProps) => {
    const { src, alt, className, ...otherProps } = props;

    return <img className={classNames(s.Avatar, className)} src={src} alt={alt} {...otherProps} />;
});
