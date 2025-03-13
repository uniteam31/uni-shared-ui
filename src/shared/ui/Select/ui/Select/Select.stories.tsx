import type { Meta, StoryObj } from '@storybook/react';
import { Select } from './Select';

const meta: Meta<typeof Select> = {
    title: 'Select',
    component: Select,
    tags: ['autodocs'],
};

export default meta;
type Story = StoryObj<typeof Select>;

export const Default: Story = {
    args: {
        placeholder: 'Выберите элемент',
        items: [
            {
                label: 'Item 1',
                value: 'Item 1',
            },
            {
                label: 'Item 2',
                value: 'Item 2',
                contentLeft: (
                    <img
                        src={
                            'https://avatars.mds.yandex.net/i?id=29f7366ac823f46165612d9480e60f0e_l-13215132-images-thumbs&n=13'
                        }
                        style={{ width: '50px' }}
                    />
                ),
            },
            {
                label: 'Item 3 Item 3 Item 3 Item 3 Item 3 Item 3 Item 3',
                value: 'Item 3',
            },
        ],
        selectedItems: [
            {
                label: 'Item 3 Item 3 Item 3 Item 3 Item 3 Item 3 Item 3',
                value: 'Item 3',
            },
        ],
        onSelect: (item) => console.log(item),
        closeOnClickOutside: true,
    },
};
