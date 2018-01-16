console.log('Task #1' );
function freezeFactory(num) {
    let count = 0;
    return function showValue() {
        if (count % num === 0 ) {
            console.log(num);
        }
        count++
    }
}

let frozen = freezeFactory(4);

for( let i = 0; i < 20; i++){
    frozen();
}

console.log('Task #2');
function factoryShop(amountWorkers, averageSalary) {
    return {

        amountWorkers,

        averageSalary,

        getSalarySum () {
            return amountWorkers * averageSalary;
        }
    }
}

let factory = factoryShop(12, 5550 );
let factory1 = factoryShop(12, 3200 );


console.log(factory);
console.log(factory.getSalarySum());
console.log(factory1);
console.log(factory1.getSalarySum());


console.log('Task #3');
let data = {
    a : 1,
    b : 2,
    c : {
        d : 3,
        e : 4
    }
}

let data1 = {
    a : 1,
    b : 2,
    c : {
        d : 3,
        e : {
            f : 5
        }
    }
}


function objectLogger (obj) {
    let deepField;
    for(let key in obj) {
        if(typeof obj[key] == 'object'){
            deepField = obj[key];
            write(deepField);
        }
    }
}

function write( el ) {
    let num = 0;
    let objectNum = 0;
    for(let i in el) {
        num++
        if(typeof el[i] !== 'object'){
            objectNum++
        }
    }
    if (num === objectNum ){
        console.log(el);
    }
    else{
        objectLogger (el);
    }
}

objectLogger(data);

objectLogger(data1);
