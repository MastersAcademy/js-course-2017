import { Component, OnInit, Input } from '@angular/core';
import { Task, State } from '../../task-interface';

@Component({
  selector: 'task',
  templateUrl: './task.component.html',
  styleUrls: ['./task.component.css']
})
export class TaskComponent {

  @Input() task: Task;
  constructor() {

  }

}
