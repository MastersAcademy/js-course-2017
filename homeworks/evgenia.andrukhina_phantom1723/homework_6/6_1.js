let spy = 0;

function freezeFactory(number) {
    spy++;
    if (spy % number === 0) {
        console.log(number);
    }
}

function freeze(number) {
    for (let i = 1; i <= 10; i++) {
        freezeFactory(number);
    }
}

freeze(5);