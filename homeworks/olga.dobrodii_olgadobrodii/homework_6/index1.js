function market (personal, averageSalary) {
    return {
       personal : personal,
       averageSalary : averageSalary,
       getSalarySum () {
           return personal*averageSalary;
       },
       toString () {
           return `${this.personal}, ${this.averageSalary}, ${this.getSalarySum()}`
       }
    }
}
let people = market(20, 105);
console.log(people.toString());