function factoryShop(quantity,averageSalary) {
    return {
        quantity : quantity,
        averageSalary : averageSalary,
        getSumSalary(){
            return quantity*averageSalary;
        },
        getInformation(){
            return `${this.quantity} ${this.averageSalary} ${this.getSumSalary()}`;
        }
    };
}

let person = factoryShop(5,10);
console.log(person.getInformation());
