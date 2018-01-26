export interface Task {
  id: number;
  state: State;
  description: string;
  favorite: boolean;
  dueDate: number;
}

export enum State {
  'COMPLETED',
  'IN_THE_PROCESS',
  'WAITING',
  'DECLINED'
}
