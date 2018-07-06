import {Component, OnInit} from '@angular/core';
import {TodoComponent} from "./todo/todo.component";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'Todo list';
}
