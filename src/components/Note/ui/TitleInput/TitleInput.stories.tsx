import type { Meta, StoryObj } from '@storybook/react';
import { TitleInput } from './TitleInput';

// More on how to set up stories at: https://storybook.js.org/docs/writing-stories#default-export
const meta = {
    title: 'Note/TitleInput',
    component: TitleInput,
    tags: ['autodocs'],
} satisfies Meta<typeof TitleInput>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
    args: {
        onChange: (value: string) => console.log(value),
        value: 'Заметка номер 2',
    },
};
