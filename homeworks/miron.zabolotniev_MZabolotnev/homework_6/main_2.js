const readline = require('readline');

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

rl.question("Enter amount: ", (am) => {
    let amount = am;
    rl.question("Enter salary: ", (sal) => {
        let salary = sal;

        function shopFactory(amount, salary) {
            return {
                amount : amount,
                salary : salary,
                salarySumm () {
                    return salary * amount;
                },
            };
        }

        let shop = shopFactory(amount, salary);
        console.log("Object: ", shop);
        console.log("Salary summ: ", shop.salarySumm());
        rl.close();
    });
});
