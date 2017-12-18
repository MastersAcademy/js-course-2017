// 1st task
function freezeFactory(param) {
    let counter = 0,
        message = 'it\'s not a number';

    if (isNaN(param)){
        console.log(message);
        return;
    }

    return function() {
        counter++;
        if (counter % param === 0) {
            console.log(`${param}`);
        }
        return counter;
    };
}

let freeze = freezeFactory(12);
for (let i = 0; i < 40; i++) {
    freeze();
}

// 2nd task
function Shop(workersAmount, averageSalary) {
    this.workersAmount = workersAmount;
    this.averageSalary = averageSalary;

    this.getSalarySum = function () {
        console.log(this.workersAmount * this.averageSalary);
    };
}

let littleShop = new Shop(200, 11000);
littleShop.getSalarySum();
console.log(littleShop);
