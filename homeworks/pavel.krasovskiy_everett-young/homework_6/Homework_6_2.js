function shopFactory(amountOfWorkers, averageSalary) {
    this.amountOfWorkers = amountOfWorkers;
    this.averageSalary = averageSalary;

    this.getSalarySum = function() {
        return this.amountOfWorkers * this.averageSalary;
    };

    this.showShop = function() {
        return `
AmountOfWorkers: ${this.amountOfWorkers},
AverageSalary: ${this.averageSalary},
SalarySum: ${this.getSalarySum()}
        `;
    };
}

let shop1 = new shopFactory(1,2);
let shop2 = new shopFactory(2,3288);
let shop3 = new shopFactory(3,4);

console.log(shop1.showShop());
console.log(shop2.showShop());
console.log(shop3.showShop());
