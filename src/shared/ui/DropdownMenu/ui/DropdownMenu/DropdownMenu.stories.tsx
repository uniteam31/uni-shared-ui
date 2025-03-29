import type { Meta, StoryObj } from '@storybook/react';
import { DropdownMenu } from './DropdownMenu';

const meta: Meta<typeof DropdownMenu> = {
    title: 'DropdownMenu',
    component: DropdownMenu,
    tags: ['autodocs'],
};

export default meta;
type Story = StoryObj<typeof DropdownMenu>;

export const Default: Story = {
    args: {
        items: [
            {
                label: 'Item 1',
                dividerAfter: true,
            },
            {
                label: 'Item 2',
            },
            {
                label: 'Item 2 Item 2 Item 2 Item 2 Item 2 Item 2 Item 2',
            },
        ],
        isOpen: true,
        target: <div>target</div>,
    },
};
