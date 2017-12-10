function funcFabricScore(amountOfWorkers, averageSalary){
    let allSalaryOfWorkers = 0;
    this.amountOfWorkers = amountOfWorkers;
    this.averageSalary = averageSalary;
    return  {
        amountOfWorkers,
        averageSalary,
        getSelerySum: function(){
            return `Sum all workers: ${allSalaryOfWorkers = amountOfWorkers * averageSalary}`;
        }
    }
}

let magazineObject = new funcFabricScore (5, 1500);

console.log (magazineObject);
console.log (magazineObject.getSelerySum());
