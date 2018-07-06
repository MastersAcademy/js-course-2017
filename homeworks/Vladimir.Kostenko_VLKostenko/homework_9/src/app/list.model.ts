export class Task {
    constructor(
        public name: string,
        public description: string,
        public doneTask: boolean = false,
        public id?: number
    ) {}
}

export interface TaskItem {
    list:  Task[] 
}
