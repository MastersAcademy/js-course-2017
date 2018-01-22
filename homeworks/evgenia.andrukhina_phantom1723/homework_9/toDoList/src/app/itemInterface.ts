export interface ListItem {
    id: string,
    task: string,
    state: State
}
export enum State {
    'WAITING',
    'IN_THE_PROCESS',
    'COMPLETED',
    'DECLINED'
}