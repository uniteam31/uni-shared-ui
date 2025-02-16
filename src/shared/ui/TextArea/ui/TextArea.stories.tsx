import type { Meta, StoryObj } from '@storybook/react';
import { TextArea } from './TextArea';

// More on how to set up stories at: https://storybook.js.org/docs/writing-stories#default-export
const meta: Meta<typeof TextArea> = {
    title: 'TextArea',
    component: TextArea,
    tags: ['autodocs'],
};

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
    args: {
        label: 'Label',
    },
};
