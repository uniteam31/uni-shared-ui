import type { Meta, StoryObj } from '@storybook/react';
import { NoteItem } from './NoteItem';

// More on how to set up stories at: https://storybook.js.org/docs/writing-stories#default-export
const meta = {
    title: 'Note/NoteItem',
    component: NoteItem,
    parameters: {
        layout: 'centered',
    },
    tags: ['autodocs'],
} satisfies Meta<typeof NoteItem>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
    args: {
        title: 'Заметка номер 1',
        inner: 'Содержание заметки под номером 1',
        data: '28.12.2024',
    },
};

export const EmptyProps: Story = {};
