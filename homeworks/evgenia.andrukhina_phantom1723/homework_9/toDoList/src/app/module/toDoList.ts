import {ListItem, State} from '../itemInterface'

export class List {
    listItems: Array<ListItem>;

    constructor(list) {
        this.listItems = this.generateItems(list);
    }

    changeFavorite (listItem: ListItem) {
        listItem.favorite = !listItem.favorite;
    }

    deleteItem(listItem: ListItem) {
        listItem.state = State.DECLINED;
    }

    changeState(listItem: ListItem) {
        if (listItem.state < 2) {
            listItem.state++;
        }
    }


    generateItems(list) {
        const listItems = [];

        for (const item of list) {

            function getState() {
                if (item.state === 'WAITING') {
                    return State.WAITING;
                }
                if (item.state === 'IN_THE_PROCESS') {
                    return State.IN_THE_PROCESS;
                }
                if (item.state === 'COMPLETED') {
                    return State.COMPLETED;
                }
            }
            listItems.push({
                id: item.id,
                task: item.task,
                favorite: item.favorite,
                state: getState()
            });

        }

        return listItems;
    }


}