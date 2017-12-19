"use strict";

function Shop(workersCount, averageSalary) {
    return {
        workersCount: workersCount,
        averageSalary: averageSalary,
        getSalarySum: function () {
            return this.workersCount * this.averageSalary;
        }
    }
}

let myShop = new Shop(3, 1000);

console.log(myShop.getSalarySum());