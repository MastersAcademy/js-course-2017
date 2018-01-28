import { Component, Input, Output, EventEmitter } from '@angular/core';
import { ToDo, State } from '../toDoInterface';



@Component({
  selector: 'app-todo',
  templateUrl: './todo.component.html',
  styleUrls: ['./todo.component.css']
})
export class TodoComponent {

  @Input() task: ToDo;
  @Output() action = new EventEmitter();

  state = State;

  changeState() {
    this.action.emit({type: 'STATUS_CHANGED', task: this.task});
  }

  changeFavorite() {
    this.action.emit({type: 'FAVORITE_CHANGED', task: this.task});
  }

  declineTask() {
    this.action.emit({type: 'STATUS_DECLINE', task: this.task});
  }
}
