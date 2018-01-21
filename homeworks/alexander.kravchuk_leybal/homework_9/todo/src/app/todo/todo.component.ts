import { Component, OnInit, Input } from '@angular/core';

import { ToDo, State } from '../toDoInterface';

@Component({
  selector: 'app-todo',
  templateUrl: './todo.component.html',
  styleUrls: ['./todo.component.css']
})
export class TodoComponent {

  @Input() task: ToDo;

  state = State;
}