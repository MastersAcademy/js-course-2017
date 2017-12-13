let Shop = {

    getSalarySum: function (property) {

        let result = 0;

        for (let i = 1; i <= property.employees; i++) {
            result += property.salary;
        }

        console.log(result);
    }
}

function ShopFactory(employees, salary) {

    this.employees = employees;
    this.salary = salary;

}

ShopFactory.prototype = {
    constructor: ShopFactory,

    getSalarySum: function () {

        return new Shop.getSalarySum({
            employees: this.employees,
            salary: this.salary
        });

    }
}

let factory = new ShopFactory(5, 200);

factory.getSalarySum();
