import { Component, OnInit } from '@angular/core';

import { Game } from './models/game';
import { Card, State } from './cardInterface';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  game: Game;
  cards: Array<Card>;

  constructor() {
    this.init();

    console.log(this.game);

    const a = new Clock();
    a.time = 'dfdf';

  }

  ngOnInit() {
    console.log('dfdf');
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

  handler(e) {
    console.log(e);
  }

  private init() {
    this.game = new Game(['a', 'b', 'c']);

    this.cards = this.game.cards;
  }
}
