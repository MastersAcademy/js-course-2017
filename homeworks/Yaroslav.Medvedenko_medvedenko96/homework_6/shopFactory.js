function ShopFactory(worker,averageSalary) {
    this.worker = worker;
    this.averageSalary = averageSalary;
    this.getSalarySum = worker * averageSalary;
}

let value = new ShopFactory(4,500);

console.log(value);





function shopFactory(worker,averageSalary) {
    return{
        worker : worker,
        averageSalary : averageSalary,
        getSalarySum () {
            return worker * averageSalary;
        },

        toStringView(){
            return `${this.worker}, ${this.averageSalary}, ${this.getSalarySum()}`;
        }
    };
}

let value1 = shopFactory(4,500);
console.log(value1.toStringView());
