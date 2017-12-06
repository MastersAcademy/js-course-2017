const readline = require('readline');

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

rl.question("Enter amount: ", (am) => {
    let amount = am;
    rl.question("Enter salary: ", (sal) => {
        let salary = sal;

        function magazineFactory (amount, salary) {
            return {
                amount : amount,
                salary : salary,
                salarySumm () {
                    return salary * amount;
                },
            };
        }

        let magazine = magazineFactory(amount, salary);
        console.log("Object: ", magazine);
        console.log("Salary summ: ", magazine.salarySumm());
        rl.close();
    });
});


