export interface ToDo {
    id: number;
    state: State;
    description: string;
    favorite: boolean;
    dueDate: number;
}

export enum State {
    'DECLINED',
    'WAITING',
    'IN_THE_PROCESS',
    'COMPLETED'
}