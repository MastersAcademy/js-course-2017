// TASK 1
let count = 0;
let limit = 4;

function freezeFactory() {
    if (count < limit-1) {
        count++;
        return console.log('frozen()');
    } else {
        count = 0;
        return console.log('frozen() //logs 4');
    }
}

console.log('TASK_1 \n');

for(let i = 0; i < 8; i++) {

    freezeFactory();
}

// TASK 2
function shopFactory(amountWorkers, salary) {
    return {
        amountWorkers: amountWorkers,
        salary: salary,
        getSalarySum () {
            return this.amountWorkers * this.salary;
        },
        toSring() {
            return `${this.amountWorkers}, ${this.salary}, ${this.getSalarySum()}`;
        }
    };
}

let myShop = new shopFactory(10, 100);

console.log('\n TASK_2');
console.log(myShop.toSring());


// TASK3
let data = {
    a : 1,
    b : 2,
    c : {
        d : 3,
        e : 4
    }  
};

let data1 = {
    a : 1,
    b : 2,
    c : {
        d : 3,
        e : {
            f : 5
        }
    }  
};

let nestedLevel = 0;
let outputObject = {};

const setNestedInObj = (obj, path, val) => { 
    const keys = path.split('.');
    const lastKey = keys.pop();
    const lastObj = keys.reduce((obj, key) => obj[key] = obj[key] || {}, obj); 
    lastObj[lastKey] = val;
};

function objectLogger(object) {
    for (let key in object) {
        if (object.hasOwnProperty(key)) {
            if (typeof (object[key]) === 'object') {
                nestedLevel++;
                outputObject = {};
                return objectLogger(object[key]);
            } else {
                setNestedInObj(outputObject, key, object[key]);
            }
        }
    }

    for (let key in  outputObject) {
        if (outputObject.hasOwnProperty(key)) {
            console.log(`${key}: ${outputObject[key]}`);            
        }
    }
}
console.log('\n TASK_3');
console.log('\n DATA');
objectLogger(data);
console.log('\n DATA1');
objectLogger(data1);
