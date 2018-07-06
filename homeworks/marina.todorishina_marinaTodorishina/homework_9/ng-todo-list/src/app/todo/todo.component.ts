import {Component, OnInit} from '@angular/core';
import {Tasks} from "./tasks-list";

@Component({
  selector: 'app-todo',
  templateUrl: './todo.component.html',
  styleUrls: ['./todo.component.scss']
})
export class TodoComponent implements OnInit {

  tasks = Tasks;
  btnText: string = 'Add task';
  inputText: string = '';
  declineBtnText: string = 'DECLINE';
  addToFavoriteBtnText: string = 'Add to favorite';
  lastId = this.tasks[this.tasks.length - 1].id;
  declined = [];

  constructor() {
  }

  ngOnInit() {
  }

  addTask() {
    let taskName = this.inputText;

    if (!this.inputText) {
      return alert('Write name of task');
    }

    this.lastId += 1;

    this.tasks.push({
      id: this.lastId,
      name: taskName,
      status: 'OPEN',
      favorite: false
    });

    this.inputText = '';
  }

  changeTaskStatus(e, task) {

    if (task.status == 'OPEN') {
      task.status = 'WAITING';
      e.target.style.backgroundColor = 'gray';

    } else if (task.status == 'WAITING') {
      task.status = 'IN_THE_PROCESS';
      e.target.style.backgroundColor = '#ffc529';

    } else if (task.status == 'IN_THE_PROCESS') {
      task.status = 'COMPLETED';
      e.target.style.backgroundColor = 'green';

    } else if (task.status == 'IN_THE_PROCESS') {
      task.status = 'OPEN';
      e.target.style.backgroundColor = 'red';
    }
  }

  declineOfTask(e, task) {
    task.status = 'DECLINED';
    this.declined.push(task);
    e.target.parentNode.remove();
  }

  addToFavorite (e, task){
    if (task.favorite == 'false'){

      task.favorite = 'true';
      e.target.style.backgroundColor = 'yellow';
      e.target.parentNode.style.backgroundColor = 'yellow';
      e.target.style.color = 'brown';
      console.log(task.favorite);
      e.target.value = 'Remove from favorite';

    } else {

      task.favorite = 'false';
      e.target.style.backgroundColor = '#fff';
      e.target.style.color = '#000';
      e.target.parentNode.style.backgroundColor = 'transparent';
      console.log(task.favorite);
      e.target.value = 'Add to favorite';
    }

  }


}
