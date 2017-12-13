function shopFactory(worker,averageSalary) {

    this.worker = worker;
    this.averageSalary = averageSalary;
    this.getSalarySum = function () {
        return worker * averageSalary;
    };

}

let value = new shopFactory(4,500);

console.log(value.worker,value.averageSalary,value.getSalarySum());





