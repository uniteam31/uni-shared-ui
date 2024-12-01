import type { Meta, StoryObj } from '@storybook/react';
import { NoteTitleInput } from './NoteTitleInput';

// More on how to set up stories at: https://storybook.js.org/docs/writing-stories#default-export
const meta = {
    title: 'Note/NoteTitleInput',
    component: NoteTitleInput,
    tags: ['autodocs'],
} satisfies Meta<typeof NoteTitleInput>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
    args: {
        onChange: (value: string) => console.log(value),
        value: 'Заметка номер 2',
    },
};
