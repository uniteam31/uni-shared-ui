import React from 'react';
import { ReactNode } from 'react';
import { createPortal } from 'react-dom';

interface PortalProps {
    children: ReactNode;
    element?: HTMLElement;
}

export const Portal = (props: PortalProps) => {
    const { children, element = document.body } = props;

    // @ts-ignore
    return <>{createPortal(children, element)}</>;
};
