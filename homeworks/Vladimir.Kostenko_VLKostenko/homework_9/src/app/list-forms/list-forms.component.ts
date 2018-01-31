import { Component, EventEmitter, Output } from '@angular/core';
import { Task } from '../list.model';

@Component({
  selector: 'app-list-forms',
  templateUrl: './list-forms.component.html',
  styleUrls: ['./list-forms.component.sass']
})
export class ListFormsComponent {

  private id: number = 2 
  
  taskName: string = ''
  taskDescription: string = ''
    
  @Output () addTask = new EventEmitter<Task>()

  onAdd() {
    
    if (this.taskName == '' || this.taskDescription == '') return
  
    this.id = ++this.id
    
    const list = new Task (
      this.taskName,
      this.taskDescription,
      false,
      this.id
    )

    this.addTask.emit(list)

    this.taskName = ''
    this.taskDescription = ''
    
  }

 }
