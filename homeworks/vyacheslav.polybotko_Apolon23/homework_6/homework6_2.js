function shopFactory(workPeople, salary) {
    return {
        workPeople: workPeople,
        salary: salary,
        getSalarySum() {
            return workPeople * salary;
        },
        toString() {
            return `${this.workPeople}, ${this.salary}, ${this.getSalarySum()}`;
        }
    }
}

let workers = shopFactory(15, 100);

console.log(workers.toString());