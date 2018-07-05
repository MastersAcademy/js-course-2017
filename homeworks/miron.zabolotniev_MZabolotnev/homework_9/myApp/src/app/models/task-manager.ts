import { Task, State } from '../task-interface';


export class TaskManager {
  tasks: Array<Task>;

  constructor() {
    this.tasks = this.generateTask();
  }

  generateTask() {
    const tasks = [
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

  deleteTask(task){
    task.state = 3;
  }

  addToFavoriteTask(task){
    task.favorite = true;
  }

  changeStateTask(task){
    if (task.state < 2) {
      task.state +=1;
    } else if (task.state === 2) {
      task.state = 0;
    }
  }
}
