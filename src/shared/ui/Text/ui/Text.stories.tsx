import type { Meta, StoryObj } from '@storybook/react';
import { Text, TextAlign, TextTheme } from './Text';

// More on how to set up stories at: https://storybook.js.org/docs/writing-stories#default-export
const meta: Meta<typeof Text> = {
    title: 'Text',
    component: Text,
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

export const Error: Story = {
    args: {
        title: 'Заголовок',
        text: 'Текст',
        theme: TextTheme.ERROR,
    },
};

export const Center: Story = {
    args: {
        title: 'Заголовок',
        text: 'Текст',
        align: TextAlign.CENTER,
    },
};

export const Right: Story = {
    args: {
        title: 'Заголовок',
        text: 'Текст',
        align: TextAlign.RIGHT,
    },
};
