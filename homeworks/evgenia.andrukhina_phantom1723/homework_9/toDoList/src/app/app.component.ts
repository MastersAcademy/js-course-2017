import {Component} from '@angular/core';
import {List} from './module/toDoList';
import {ListItem, State} from './itemInterface';


@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.css']
})

export class AppComponent {
    list: List;
    listItems: Array<ListItem>;

    constructor() {
        this.init();
        console.log(this.list);
    }

    changeState(listItem: ListItem) {
        if (listItem.state < 2) {
            listItem.state++;
        }
    }

    deleteItem(listItem: ListItem) {

        for (let i = 0; i < this.list.listItems.length; i++) {
            if (this.list.listItems[i] === listItem) {
                this.list.listItems.splice(i, 1);
            }
        }

        listItem.state = State.DECLINED;
    }

    makeFavorite(event) {
        event.target.parentNode.className = 'favorited';
    }

    private init() {
        this.list = new List([
            {
                id: '1',
                task: 'learn Angular',
                state: 'WAITING'
            },
            {
                id: '2',
                task: 'watch TV',
                state: 'COMPLETED'
            },
            {
                id: '3',
                task: 'work',
                state: 'IN_THE_PROCESS'
            }
        ]);

        this.listItems = this.list.listItems;
    }
}
