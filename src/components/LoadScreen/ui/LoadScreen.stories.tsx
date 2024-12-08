import type { Meta, StoryObj } from '@storybook/react';
import { LoadScreen } from './LoadScreen';

const meta: Meta<typeof LoadScreen> = {
    title: 'LoadScreen',
    component: LoadScreen,
    tags: ['autodocs'],
};

export default meta;
type Story = StoryObj<typeof LoadScreen>;

export const Default: Story = {
    args: {
        label: 'Заметки',
    },
};
