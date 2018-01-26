import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Task, State } from '../../task-interface';

@Component({
  selector: 'task',
  templateUrl: './task.component.html',
  styleUrls: ['./task.component.css']
})
export class TaskComponent {

  @Input() task: Task;
  @Output() change = new EventEmitter();
  constructor() {}
  changeState() {
    let data = {
      type: 'state',
      task: this.task
    };
    this.change.emit(data);
  }
  addToFavorite() {
    let data = {
      type: 'favorite',
      task: this.task
    };
    this.change.emit(data);
  }
  deleteTask() {
    let data = {
      type: 'delete',
      task: this.task
    };
    this.change.emit(data);
  }

}
