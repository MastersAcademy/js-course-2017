// ------------------1-------------------------

let value = 3;

function numFactory(number) {
    let store = [];

    return function () {
        store.push(number);
        if ((store.length) % number === 0 ) console.log('number is ', number);
    };
}

let testFunc = numFactory(value);

for (let i = 0; i < 10; i++) {
    testFunc();
}

// ----------------------2--------------------------

function storeFactory(workersAmount, salary) {
    return {
        workersAmount: workersAmount,
        salary: salary,
        getSalarySum () {
            return 'total salary is ' + workersAmount * salary;
        }
    };
}

let store = storeFactory(2, 4);
console.log(store.workersAmount);
console.log(store.salary);
console.log(store.getSalarySum());

// -----------------------3----------------------------

let data = {
    a: 1,
    b: 2,
    c: {
        d: 3,
        e: 4
    }
};

let data1 = {
    a: 1,
    b: 2,
    c: {
        d: 3,
        e: {
            f: 5
        }
    }
};

function objectLogger(obj) {
    let store;
    let maxDeep = 0;
    let currentDeep = 0;

    function scanner(obj) {
        for (let key in obj) {
            if (obj.hasOwnProperty(key)) {
                let el = obj[key];
                currentDeep++;
                if (typeof el === 'object') {
                    scanner(el);
                } else if (currentDeep > maxDeep) {
                    maxDeep = currentDeep;
                    store = obj;
                }
            }
        }
    }

    scanner(obj);

    console.log(store);
}

objectLogger(data);

objectLogger(data1);