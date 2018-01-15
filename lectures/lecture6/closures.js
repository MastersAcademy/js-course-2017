
function makeGreeter (greet) {

    return function (name = 'Anonymous') {

        console.log(`${greet} ${name}`);

    };

}

let helloGreeter = makeGreeter('Hello');

let hiGreeter = makeGreeter('Hi');

helloGreeter('Dennis');

hiGreeter('Bob');

helloGreeter();



function makeTailMaker(char, length) {

    return function (stringToAddTails) {

        return `${char.repeat(length)} ${stringToAddTails} ${char.repeat(length)}`;

    };

}

let tailMaker = makeTailMaker('*', 15);

console.log(tailMaker('IMPORTANT LOG DATA'));
console.log(tailMaker('new'));
console.log(tailMaker('one more'));
