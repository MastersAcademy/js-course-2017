function shopFactory(amount, salary) {
    return {
        amount: amount,
        salary: salary,
        getSalarySum() {
            return amount * salary;
        }
    };
}

let shop = shopFactory(5, 2000);

console.log(shop);
console.log(shop.getSalarySum());