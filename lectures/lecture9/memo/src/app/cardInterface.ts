export interface Card {
  id: string;
  state: State;
}

export enum State {
  'CLOSED',
  'OPENED',
  'MATCHED',
  'HIDED'
}
