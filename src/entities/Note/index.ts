import { Item } from './ui/Item/Item';
import { List } from './ui/List/List';
import { ListItem } from './ui/ListItem/ListItem';

type TNoteComponents = {
    List: typeof List;
    ListItem: typeof ListItem;
    Item: typeof Item;
};

/** Экспортируем обертку для компонентов, которые связаны логически */
export const Note: TNoteComponents = {
    List,
    Item,
    ListItem,
};
