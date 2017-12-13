/*function shopFactory(worker,averageSalary) {

    this.worker = worker;
    this.averageSalary = averageSalary;
    this.getSalarySum = function () {
        return worker * averageSalary;
    };

}

let value = new shopFactory(4,500);

console.log(value.worker,value.averageSalary,value.getSalarySum());*/


function shopFactory1(worker,averageSalary) {
    this.worker = worker;
    this.averageSalary = averageSalary;
    return function () {
        console.log(`${worker} ${averageSalary} ${getSalarySum}`);
    };

}
let value =  shopFactory1(6,500);
value(6,500);




