import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-todo',
  templateUrl: './todo.component.html',
  styleUrls: ['./todo.component.scss']
})
export class TodoComponent implements OnInit {

  tasks = ['Ride on a bike', 'Programming', 'Draw'];
  btnText: string = 'Add task';
  inputText: string = '';

  constructor() { }

  ngOnInit() {
  }

}
