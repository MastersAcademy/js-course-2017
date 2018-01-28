import {ToDo, State} from '../toDoInterface';

export class ToDoList {
  tasks: Array<ToDo>;

  constructor() {
    this.tasks = this.getTasks();
  }

  getTasks() {
    let tasks = [
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
        dueDate: 1514757600000
      },
      {
        id: 20,
        state: State.DECLINED,
        description: 'Learn Japanese',
        favorite: false,
        dueDate: 1514757600000
      },
      {
        id: 21,
        state: State.IN_THE_PROCESS,
        description: 'Learn angular',
        favorite: true,
        dueDate: 1519855200000
      }
    ];
    return tasks;
  }

  changeState(task) {
    if (task.state < 3) {
      task.state += 1;
    } else if (task.state === 3) {
      task.state = 0;
    }
  }

  changeFavorite(task) {
    task.favorite = !task.favorite;
  }

  declineTask(task) {
    task.state = 0;
  }
}
