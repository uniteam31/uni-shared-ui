import type { Meta, StoryObj } from '@storybook/react';
import { Warning } from './Warning';

// More on how to set up stories at: https://storybook.js.org/docs/writing-stories#default-export
const meta: Meta<typeof Warning> = {
    title: 'Warning',
    component: Warning,
    tags: ['autodocs'],
};

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
    args: {
        title: 'Заголовок',
        text: 'Текст',
    },
};

export const Blue: Story = {
    args: {
        title: 'Заголовок',
        text: 'Текст',
        theme: 'blue',
    },
};

export const Red: Story = {
    args: {
        title: 'Заголовок',
        text: 'Текст',
        theme: 'red',
    },
};
