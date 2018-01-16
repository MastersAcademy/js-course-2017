import { Card, State } from '../cardInterface';

export class Game {
  cards: Array<Card>;

  constructor(list) {
    this.cards = this.shuffle(this.generateCard(list));
  }

  get openedCards() {
    return this.cards.filter(card => card.state === State.OPENED);
  }

  get matchedCards() {
    return this.cards.filter(card => card.state === State.MATCHED);
  }

  checkMatches() {
    const openCards = this.openedCards;

    if (openCards.length > 1 && openCards[0].id === openCards[1].id) {
      openCards.forEach( card => card.state = State.MATCHED);
    }
  }

  closeAll() {
    const openCards = this.openedCards;
    const matchedCards = this.matchedCards;

    if (openCards.length === 2) {
      openCards.forEach(card => card.state = State.CLOSED);
    }

    if (matchedCards.length > 0) {
      matchedCards.forEach(card => card.state = State.HIDED);
    }
  }

  generateCard(list) {
    const cards = [];

    for (const item of list) {
      cards.push({
        id: item,
        state: State.CLOSED
      });

      cards.push({
        id: item,
        state: State.CLOSED
      });
    }

    return cards;
  }

  private shuffle(a) {
    for (let i = a.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [a[i], a[j]] = [a[j], a[i]];
    }

    return a;
  }
}
