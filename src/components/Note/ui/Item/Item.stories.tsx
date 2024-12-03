import type { Meta, StoryObj } from '@storybook/react';
import { Item } from './Item';

// More on how to set up stories at: https://storybook.js.org/docs/writing-stories#default-export
const meta = {
    title: 'Note/Item',
    component: Item,
    parameters: {
        layout: 'centered',
    },
    tags: ['autodocs'],
} satisfies Meta<typeof Item>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
    args: {
        title: 'Заметка номер 1',
        text: 'Содержание заметки под номером 1',
        date: '28.12.2024',
    },
};

export const EmptyProps: Story = {};
