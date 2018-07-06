import { Component, Input, Output, EventEmitter } from '@angular/core';
import { Task } from '../list.model';

@Component({
  selector: 'app-list-status',
  templateUrl: './list-status.component.html',
  styleUrls: ['./list-status.component.sass']
})
export class ListStatusComponent {
  
  @Input() list: Task

  @Output() deleteTask = new EventEmitter<Task>()
  
  onDelete() {
    this.deleteTask.emit(this.list)
  }

  onDone() {
    this.list.doneTask = true
  }
}
