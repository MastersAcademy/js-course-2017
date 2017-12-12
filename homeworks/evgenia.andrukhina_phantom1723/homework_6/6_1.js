function freezeFactory(number) {
    let spy = 1;

    return function () {

        if (spy % number === 0) {
            console.log(number);

        } else console.log('---');

        spy++;
    };
}

let frozen = freezeFactory(2);
let frozen1 = freezeFactory(5);

function multiplyCall(func) {
    for (let i = 1; i <= 10; i++) {
        func();
    }
}

multiplyCall(frozen1);




