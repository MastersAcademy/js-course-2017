function shopFactory(number, salary) {
    return {
        number: number,
        salary: salary,
        getSalarySum () {
            return number * salary;
        }
    }
}

let shop = shopFactory(100, 5000);

console.log('Number of workers - ' + shop.number);
console.log('Average salary - ' + shop.salary);
console.log('Total average - ' + shop.getSalarySum () );

