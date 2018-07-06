import { Component, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-tasks',
  templateUrl: './tasks.component.html',
  styleUrls: ['./tasks.component.css']
})

export class TasksComponent {
  @Input() task;
  isDeclined = false;

  onClickNexState() {
    if (this.task.state === 'WAITING') {
      this.task.state = 'IN_THE_PROCESS';
    } else if (this.task.state === 'IN_THE_PROCESS') {
      this.task.state = 'COMPLETED';
    } else if (this.task.state === 'DECLINED') {
      this.isDeclined = true;
    }
  }

  onClickBut() {
    this.task.state = 'DECLINED';
    this.isDeclined = true;
  }
}
