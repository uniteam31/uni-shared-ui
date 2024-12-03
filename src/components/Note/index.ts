import { Item } from './ui/Item/Item';
import { TextArea } from './ui/TextArea/TextArea';
import { TitleInput } from './ui/TitleInput/TitleInput';

type NoteComponents = {
    Item: typeof Item;
    TextArea: typeof TextArea;
    TitleInput: typeof TitleInput;
};

/** Экспортируем обертку для компонентов, которые связаны логически */
export const Note: NoteComponents = {
    Item,
    TextArea,
    TitleInput,
};
