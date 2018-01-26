import { Component, Input } from '@angular/core';

import { ListItem, State } from '../itemInterface'


@Component({
  selector: 'app-list',
  templateUrl: './list-item.component.html',
  styleUrls: ['./list-item.component.css']
})
export class ListItemComponent {

  @Input() listItem: ListItem;

  state = State;

}
