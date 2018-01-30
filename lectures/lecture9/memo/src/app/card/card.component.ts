import { Component, Input } from '@angular/core';

import { Card, State } from '../cardInterface';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.css']
})
export class CardComponent {

  @Input() card: Card;

  state = State;
}
