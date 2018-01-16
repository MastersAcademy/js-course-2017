/*
Создать функцию-фабрику объекта "магазин". Конструктор должен принимать количество работников и число, которое означает
среднюю зарплату одного работника. У возвращаемого объекта должы быть поле с количеством работников, поле со средней
зарплатой работника и метод getSalarySum, который возвращает общую зарплату всех работников магазина
 */

function shop(amtWorkers, avSalary) {
    return {
        amtWorkers: amtWorkers,
        avSalary: avSalary,
        getSalarySum() {
            return `total salary = ${this.amtWorkers * this.avSalary}`;
        },
    };
}

let depot = shop(10, 20);
console.log(depot.getSalarySum());
console.log(depot.amtWorkers);

let atb = shop(100, 25);
console.log(atb.getSalarySum());
console.log(atb.avSalary);
