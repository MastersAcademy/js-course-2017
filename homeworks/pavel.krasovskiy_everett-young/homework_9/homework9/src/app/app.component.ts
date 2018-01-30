import { Component } from '@angular/core';
import { Task, State } from './list-inter';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  Tasks: Array<Task>;

  constructor() {
    this.Tasks = [
      {
      id: 17,
      state: State.COMPLETED,
      description: 'Learn es-6',
      favorite: true,
      dueDate: 1514757600000
      },
      {
        id: 18,
        state: State.IN_THE_PROCESS,
        description: 'Learn typescript',
        favorite: false,
        dueDate: 1514757600000
      },
      {
        id: 19,
        state: State.WAITING,
        description: 'Learn redux',
        favorite: false,
        dueDate: 1519855200000
      },
      {
        id: 20,
        state: State.DECLINED,
        description: 'Learn Japanese',
        favorite: false,
        dueDate: 1519855200000
      },
      {
        id: 21,
        state: State.IN_THE_PROCESS,
        description: 'Learn angular',
        favorite: true,
        dueDate: 1519855200000
      },
      {
        id: 22,
        state: State.IN_THE_PROCESS,
        description: 'Learn sombody',
        favorite: true,
        dueDate: 1519855200000
      }
    ];
}

handleAction(event) {
  let itemIndex = event.arrIndex;

  switch (event.type) {
    case "AddFavorite": this.Tasks[itemIndex].favorite = event.data; break;
    case "Declined": this.Tasks[itemIndex].state = event.data; break;
    case "Change_state": this.Tasks[itemIndex].state = event.data; break;
  }

}

}
