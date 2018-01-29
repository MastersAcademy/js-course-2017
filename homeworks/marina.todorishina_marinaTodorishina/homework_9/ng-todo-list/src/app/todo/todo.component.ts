import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-todo',
  templateUrl: './todo.component.html',
  styleUrls: ['./todo.component.scss']
})
export class TodoComponent implements OnInit {

  taskCount: number = 0;
  tasks = ['Ride on a bike', 'Programming', 'Draw'];
  btnText: string = 'Add task';
  inputText: string = '';

  constructor() { }

  ngOnInit() {
    this.taskCount = this.tasks.length;
  }

  addTask() {
    this.tasks.push(this.inputText);
    this.inputText = '';
    this.taskCount = this.tasks.length;
  }

}
