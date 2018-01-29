import { Component } from '@angular/core';

import { Game } from './models/game';
import { Card, State } from './cardInterface';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  game: Game;
  cards: Array<Card>;

  constructor() {
    this.init();

    console.log(this.game);
  }

  flipCard(card: Card) {
    this.game.checkMatches();

    this.game.closeAll();

    if (card.state === State.CLOSED) {
      card.state = State.OPENED;
      return;
    }

    if (card.state === State.OPENED) {
      card.state = State.CLOSED;
      return;
    }
  }

  private init() {
    this.game = new Game(['a', 'b', 'c']);

    this.cards = this.game.cards;
  }
}
