import type { Meta, StoryObj } from '@storybook/react';
import { Input } from './Input';

// More on how to set up stories at: https://storybook.js.org/docs/writing-stories#default-export
const meta: Meta<typeof Input> = {
    title: 'Input',
    component: Input,
    tags: ['autodocs'],
};

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
    args: {
        label: 'sdfsdafasd',
        style: {
            height: '40px',
        },
    },
};
