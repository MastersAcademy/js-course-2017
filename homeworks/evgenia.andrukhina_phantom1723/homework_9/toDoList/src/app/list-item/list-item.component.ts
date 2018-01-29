import { Component, Input, Output, EventEmitter } from '@angular/core';

import { ListItem, State } from '../itemInterface'


@Component({
  selector: 'app-list',
  templateUrl: './list-item.component.html',
  styleUrls: ['./list-item.component.css']
})
export class ListItemComponent {

  @Input() listItem: ListItem;

  @Output() action = new EventEmitter();

  changeFavorite() {
    this.action.emit({type: 'FAVORITE', listItem: this.listItem});
  }

  deleteItem() {
    this.action.emit({type: 'DELETE', listItem: this.listItem});
  }

  changeState() {
    this.action.emit({type: 'CHANGE_STATE', listItem: this.listItem});
  }

  addClass(listItem) {
    let classes = ['waiting', 'process', 'completed', 'declined'];

    for(let i = 0; i < 4; i++) {
      if(listItem.state === i) {
        return classes[i];
      }
    }
  }
}
