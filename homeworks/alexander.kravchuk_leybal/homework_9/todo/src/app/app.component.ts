import { Component } from '@angular/core';

import { ToDoList } from './models/toDoList';
import { ToDo, State } from './toDoInterface';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  toDoList: ToDoList;
  toDos: Array<ToDo>;

  constructor() {
    this.init();
  }

  private init() {
    this.toDoList = new ToDoList();

    this.toDos = this.toDoList.getTasks();
  }

  changeState(task: ToDo) {
    if (task.state < 3){
      task.state++;
    } else if (task.state === 3) {
      task.state = 0;
    }
  }
}
