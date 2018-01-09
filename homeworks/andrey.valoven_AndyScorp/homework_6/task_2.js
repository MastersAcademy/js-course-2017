function shopFactory(numberWorkers, salary) {
    this.numberWorkers = numberWorkers;
    this.getSalary = function() {
        return salary;
    };
    this.getSalarySum = function() {
        return this.getSalary * this.numberWorkers;
    };
}


let shop = new shopFactory(2, 2000);

