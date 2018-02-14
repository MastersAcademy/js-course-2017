import { Component, Input, Output, EventEmitter } from '@angular/core';

import { Card, State } from '../cardInterface';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.css']
})
export class CardComponent {

  @Input() card: Card;

  @Output() action = new EventEmitter();

  state = State;

  constructor() {
    this.action.emit({
      actionType: 'INITIALIZED',
      message: 'Card component created'
    });
  }

  func() {
    obs.subscribe(
      (value) => {console.log(value)},
      (err) => {console.log(err)},
      () => {console.log('done')}
    );


    this.action.emit({
      actionType: 'FUNC_EXECUTED',
      message: 'Payload'
    });

  }
}
