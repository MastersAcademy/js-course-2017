import {ListItem, State} from '../itemInterface'

export class List {
    listItems: Array<ListItem>;

    constructor(list) {
        this.listItems = this.generateItems(list);
    }

    generateItems(list) {

        const listItems = [];

        for (const item of list) {
            let state = item.state;

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
                state: getState()
            });
        }

        return listItems;
    }
}