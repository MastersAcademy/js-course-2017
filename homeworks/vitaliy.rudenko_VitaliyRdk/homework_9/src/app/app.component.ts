import { Component } from '@angular/core';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent {
  tasks = [
    {
      id: 1,
      state: 'COMPLETED',
      description: 'Learn es-6'
    },
    {
      id: 2,
      state: 'IN_THE_PROCESS',
      description: 'Learn typescript'
    },
    {
      id: 3,
      state: 'WAITING',
      description: 'Learn redux'
    },
    {
      id: 4,
      state: 'WAITING',
      description: 'Learn Japanese'
    },
    {
      id: 5,
      state: 'IN_THE_PROCESS',
      description: 'Learn angular'
    },
  ];
}
