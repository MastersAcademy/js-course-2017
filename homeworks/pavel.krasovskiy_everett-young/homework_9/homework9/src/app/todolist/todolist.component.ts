import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { State } from '../list-inter';

@Component({
  selector: 'app-todolist',
  templateUrl: './todolist.component.html',
  styleUrls: ['./todolist.component.css']
})
export class TodolistComponent {
  @Input() indexInArray;
  @Input() task;
  @Output() action = new EventEmitter();

   changeFavorite(e){
     this.action.emit({type: 'AddFavorite', data: !this.task.favorite,
                              arrIndex: this.indexInArray});
     e.stopPropagation();
   }

   declined(e){
        this.action.emit({type: 'Declined', data: 3,arrIndex: this.indexInArray});
        e.stopPropagation();
   }

   changeState() {

     switch (this.task.state) {
       case 1: this.action.emit({type: 'Change_state', data: 0,
       arrIndex: this.indexInArray}); break;

       case 2: this.action.emit({type: 'Change_state', data: 1,
       arrIndex: this.indexInArray}); break;

     }
   }

}
