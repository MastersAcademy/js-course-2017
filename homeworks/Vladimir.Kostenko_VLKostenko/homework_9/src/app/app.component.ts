import { Component } from '@angular/core';
import { Task, TaskItem } from './list.model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.sass']
})
export class AppComponent {
  
  public list: Task[] = [
    new Task('Fist', 'work', false, 1),
    new Task('Second', 'work', false, 2)
  ]

  onAdd(task: Task ) {
    this.list.push(task)
  }

  onDelete(task: Task){
    this.list = this.list.filter(c => c.id !== task.id)
  }
}
