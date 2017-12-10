function freezeFactory(maxCount) {
    let currentCount = 0;

    if (!maxCount || typeof(maxCount) !== 'number') return;

    return function() {
        currentCount++;
        if (currentCount % maxCount === 0) {
            console.log(maxCount);
        }
    }
}

let frozen = freezeFactory(4);

for (let i = 0; i < 8; i++) {
    frozen()
}

function Shop(workersCount, salary) {
    if (!workersCount || !salary) return;

    this.workersCount = workersCount;
    this.salary = salary;
    this.getSalarySum = function () {
        return workersCount * salary;
    }
}

shop = new Shop(4, 3000);
console.log(shop, shop.getSalarySum());


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
    },
    g : {
        h : 6,
        i : 7
    }
};

let depth = 0,
    maxDepth = 0,
    inicialObj = 0,
    result = {};

function objectLogger(obj) {
    if (!inicialObj) {
        inicialObj = obj;
        result = obj;
    }
    for (let key in obj) {
        if (inicialObj.hasOwnProperty(key)) {
            depth = 0;
        }
        if (typeof obj[key] === 'object') {
            depth++;
            if (depth > maxDepth) {
                maxDepth = depth;
                result = obj[key];
            }
            objectLogger(obj[key])
        }
    }

    return result;
}

console.log(objectLogger(data1));

inicialObj = 0;
maxDepth = 0;
console.log(objectLogger(data)); 