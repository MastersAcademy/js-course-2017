import {Component} from '@angular/core';

import {ToDoList} from './models/toDoList';
import {ToDo, State} from './toDoInterface';
import {UserService} from "./user.service";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers: [UserService]
})
export class AppComponent {
  toDoList: ToDoList;
  toDos: Array<ToDo>;
  users = [];

  constructor(private userService: UserService) {
    this.init();
  }

  ngOnInit() {
    this.userService.getUsers().subscribe(users => {
      return this.users = users;
    });
  }

  private init() {
    this.toDoList = new ToDoList();
    this.toDos = this.toDoList.getTasks();
  }

  handleAction(data) {
    switch (data.type) {
      case 'STATUS_CHANGED': {
        this.toDoList.changeState(data.task);
        break;
      }
      case 'FAVORITE_CHANGED': {
        this.toDoList.changeFavorite(data.task);
        break;
      }
      case 'STATUS_DECLINE': {
        this.toDoList.declineTask(data.task);
        break;
      }
    }
  }
}
