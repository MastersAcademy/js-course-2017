const readline = require('readline');

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

rl.question("Enter amount: ", (am) => {
    let amount = am;
    rl.question("Enter number: ", (num) => {
        let number = num;

        function writer (num) {
            let counter = 1;
            return function () {
                counter % num === 0 ? console.log (num) : console.log("*");
                counter ++;
            };
        }

        let writeNum = writer(number);

        for (let i = 0; i < amount; i++) {
            writeNum();
        }
        rl.close();
    });
});
