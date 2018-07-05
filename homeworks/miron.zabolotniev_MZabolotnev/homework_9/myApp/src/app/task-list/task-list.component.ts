import { Component, OnInit, Input } from '@angular/core';
import { Task, State } from '../task-interface';
import { TaskManager } from '../models/task-manager';

@Component({
  selector: 'app-task-list',
  templateUrl: './task-list.component.html',
  styleUrls: ['./task-list.component.css']
})
export class TaskListComponent {
  taskManager = new TaskManager();
  @Input() task: Task;
  tasks: Array<Task>;
  constructor() {
    this.tasks = this.taskManager.tasks;
  }

  changeTask(data) {
    switch (data.type) {
      case 'state': {
        this.taskManager.changeStateTask(data.task);
        break;
      }
      case 'favorite': {
        this.taskManager.addToFavoriteTask(data.task);
        break;
      }
      case 'delete': {
        this.taskManager.deleteTask(data.task);
        break;
      }
    }
  }
}
