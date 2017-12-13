function GetObjectShop(amountOfWorkers, averageSalary){
    let allSalaryOfWorkers = 0;
    this.amountOfWorkers = amountOfWorkers;
    this.averageSalary = averageSalary;
    return  {
        amountOfWorkers,
        averageSalary,
        getAmountSalary: function(){
            return `Sum all workers: ${allSalaryOfWorkers = amountOfWorkers * averageSalary}`;
        }
    }
}

let shopObject = new GetObjectShop (5, 1500);

console.log (shopObject);
console.log (shopObject.getAmountSalary());
