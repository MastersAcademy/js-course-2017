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
  statusBtnText: string = 'OPEN';

  constructor() { }

  ngOnInit() {
    this.taskCount = this.tasks.length;
  }

  addTask() {
    if (!this.inputText){
      return alert('Write name of task');
    }
    this.tasks.push(this.inputText);
    this.inputText = '';
    this.taskCount = this.tasks.length;
  }

  changeTaskStatus(e){
    // console.log(e.target.value);

    if(e.target.value == 'OPEN'){
    e.target.value = 'WAITING';
      e.target.style.backgroundColor = 'gray';

    } else if(e.target.value == 'WAITING'){
      e.target.value = 'IN_THE_PROCESS';
      e.target.style.backgroundColor = '#ffc529';

    } else if (e.target.value == 'IN_THE_PROCESS') {
      e.target.value = 'COMPLETED';
      e.target.style.backgroundColor = 'green';

    } else {
      e.target.value = 'OPEN';
      e.target.style.backgroundColor = 'red';
    }
  }

}
