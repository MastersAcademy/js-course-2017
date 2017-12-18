// TASK 1
function freezeFactory(freez) {
    let counter = 0;
    
    return function () {
        if (counter % freez === 0) {
            console.log('frozen(); //logs 4');
        } else console.log('frozen()');
        
        counter++;
    };
}

console.log('TASK_1');

let frozen = freezeFactory(4);

for (let i = 1; i <= 8; i++) {
    frozen();
}

// TASK 2
function shopFactory(amountWorkers, salary) {
    return {
        amountWorkers: amountWorkers,
        salary: salary,
        getSalarySum() {
            return this.amountWorkers * this.salary;
        },
        toSring() {
            return `${this.amountWorkers}, ${
                this.salary
            }, ${this.getSalarySum()}`;
        }
    };
}

let myShop = new shopFactory(10, 100);

console.log('\n TASK_2');
console.log(myShop.toSring());

// TASK3

let objects = {
    data: {
        a: 1,
        b: 2,
        c: {
            d: 3,
            e: 4
        }
    },
    data1: {
        a: 1,
        b: 2,
        c: {
            d: 3,
            e: {
                f: 5
            }
        }
    },
    data2: {
        a: 1,
        b: {
            n: 6
        },
        c: {
            d: 3
        }
    },
};




const setNestedInObj = (obj, path, val) => {
    const keys = path.split('.');
    const lastKey = keys.pop();
    const lastObj = keys.reduce((obj, key) => (obj[key] = obj[key] || {}), obj);
    lastObj[lastKey] = val;
};

let nestedLevel = 0;
let outputObject = {};


function objectLogger(object) {
    for (let key in object) {
        if (object.hasOwnProperty(key)) {
            if (typeof object[key] === 'object') {
                nestedLevel++;
                objectLogger(object[key]);
            } else {
                setNestedInObj(outputObject, `${nestedLevel}.${key}`, object[key]);
            }
        }
    }

    nestedLevel = 0;
}

console.log('\n TASK_3');

for (key in objects) {
    if (objects.hasOwnProperty(key)) {
        objectLogger(objects[key]);
        console.log(outputObject[Object.keys(outputObject).length - 1]);         
        outputObject = {};
    }
}
