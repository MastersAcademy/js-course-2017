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
    }


    handleAction(data) {
        switch (data.type) {
            case 'FAVORITE':
                this.list.changeFavorite(data.listItem);
                break;
            case 'DELETE':
                this.list.deleteItem(data.listItem);
                break;
            case 'CHANGE_STATE':
                this.list.changeState(data.listItem);
                break;
        }
    }

    private init() {
        this.list = new List([
            {
                id: '1',
                task: 'learn Angular',
                favorite: true,
                state: 'WAITING'
            },
            {
                id: '2',
                task: 'watch TV',
                favorite: true,
                state: 'COMPLETED'
            },
            {
                id: '3',
                task: 'work',
                favorite: true,
                state: 'IN_THE_PROCESS'
            }
        ]);

        this.listItems = this.list.listItems;
    }
}
