import type { Meta, StoryObj } from '@storybook/react';
import { Dropdown } from './Dropdown';

const meta: Meta<typeof Dropdown> = {
    title: 'Dropdown',
    component: Dropdown,
    tags: ['autodocs'],
};

export default meta;
type Story = StoryObj<typeof Dropdown>;

export const Default: Story = {
    args: {
        placeholder: 'Выберите элемент',
        items: [
            {
                name: 'Item 1',
                value: 'Item 1',
            },
            {
                name: 'Item 2',
                value: 'Item 2',
            },
            {
                name: 'Item 2 Item 2 Item 2 Item 2 Item 2 Item 2 Item 2',
                value: 'Item 2',
            },
        ],
        onSelect: (item) => console.log(item),
    },
};
