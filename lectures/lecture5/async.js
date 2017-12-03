// synchronous code example
function add(a, b) {
    return a + b;
}

const subtract = function(a, b) {
    a - b;
};

const mult = (a, b) => {
    return a * b;
};

function calculator(a, b, operation) {
    return operation(a, b);
}

const addingResult = calculator(2, 2, add);

const subtractionResult = calculator(2, 2, subtract);

const multiplicationResult = calculator(2, 2, mult);

const divideResult = calculator(2, 2, (firstParam, secondParam) => firstParam / secondParam );


// node notation
const callback = (err, data) => {
    if (err) {
        console.error(err);

        return;
    }

    console.log(data);
};


// timers
const timeoutId = setTimeout( () => {}, 2000);
const intervalId = setInterval( () => {}, 2000);

clearTimeout(timeoutId);
clearInterval(intervalId);

// special cases
const immediateId = setImmediate( () => {} ); // window.setImmediate in browser
process.nextTick( () => {} ); // node only

clearImmediate(immediateId);


// what's the order?
console.log(1);

setTimeout( () => {
    console.log(2);
}, 0);

console.log(3);


// Promises
const oneSecondTimeoutPromise = function() {
    return new Promise( (resolve, reject) => {
        const timeoutId = setTimeout( () => {
            resolve('one second delay');
        }, 1000);

        // next if statement is pseudo-code
        const somethingWrong = false;
        if (somethingWrong) {
            clearTimeout(timeoutId);

            reject(new Error('something wrong!'));
        }
    });
};

oneSecondTimeoutPromise()
    .then( (res) => console.log(res) )
    .then( () => console.log('next action') )
    .catch( (err) => console.error(err) );


// immediately
const resolved = Promise.resolve('immediately success');
// const rejected = Promise.reject( new Error('immediately error') );


// all and race
Promise.all([oneSecondTimeoutPromise(), resolved])
    .then( (results) => {
        console.log(results[0]); // 'one second delay'
        console.log(results[1]); // 'immediately success'

        return Promise.resolve('next');
    })
    .then( (res) => console.log(res) ) // 'next'
    // .then( console.log ) // 'next'
    // .then( function(res) { console.log(res, this.test); }.bind( {test: 'test context'} ) ) // 'next'
    .catch( (err) => console.error(err) );

Promise.race([oneSecondTimeoutPromise(), resolved])
    .then( (res) => console.log(res) ) // 'immediately success'
    .catch( (err) => console.error(err) );


async function someAsyncExample() {
    try {
        const message = await oneSecondTimeoutPromise();
        console.log(message);
    } catch(e) {
        console.error(e);
    }

    const message2 = await resolved;
    console.log(message2);

    return 'async function done';
}

someAsyncExample().then( console.log );

const err = new Error('my super Error');
err.ctx = {
   lecture: 5
};

try {
    throw err;
    JSON.parse('NOT JSON');
} catch(e) {
    console.log(e);
} finally {
    console.log('I\'m done');
}
