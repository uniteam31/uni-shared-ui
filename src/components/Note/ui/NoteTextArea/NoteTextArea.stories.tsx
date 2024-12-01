import type { Meta, StoryObj } from '@storybook/react';
import { NoteTextArea } from './NoteTextArea';

// More on how to set up stories at: https://storybook.js.org/docs/writing-stories#default-export
const meta = {
    title: 'Note/NoteTextArea',
    component: NoteTextArea,
    tags: ['autodocs'],
} satisfies Meta<typeof NoteTextArea>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
    args: {
        onChange: (value: string) => console.log(value),
        value: 'Содержание заметки под номером 2. В этой заметке можно писать сразу же, как в любом редакторе.',
    },
};
