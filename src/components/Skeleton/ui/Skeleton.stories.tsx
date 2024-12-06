import type { Meta, StoryObj } from '@storybook/react';
import { Skeleton } from './Skeleton';

const meta: Meta<typeof Skeleton> = {
    title: 'Skeleton',
    component: Skeleton,
    tags: ['autodocs'],
};

export default meta;
type Story = StoryObj<typeof Skeleton>;

// TODO чтобы увидеть в сторибуке, нужно напрямую задавать стили
export const Default: Story = {
    args: {},
};
