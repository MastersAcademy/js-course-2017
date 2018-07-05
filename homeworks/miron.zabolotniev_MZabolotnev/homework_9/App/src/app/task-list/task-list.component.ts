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
  taskClick(task){
    if (task.state < 3){
      task.state +=1;
    } else if (task.state === 3) {
      task.state = 0;
    }
  }


}
