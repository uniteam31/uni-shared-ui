import type { Meta, StoryObj } from '@storybook/react';
import { Popup } from './Popup';

const meta: Meta<typeof Popup> = {
    title: 'Popup',
    component: Popup,
    tags: ['autodocs'],
};

export default meta;
type Story = StoryObj<typeof Popup>;

export const Default: Story = {
    args: {
        children: 'КОНТЕНТ',
        target: <div style={{ width: '100px' }}>target</div>,
        isOpen: true,
    },
};

export const TopLeft: Story = {
    args: {
        children: 'КОНТЕНТ',
        target: <div style={{ width: '100px' }}>target</div>,
        isOpen: true,
        position: 'top-left',
    },
};
