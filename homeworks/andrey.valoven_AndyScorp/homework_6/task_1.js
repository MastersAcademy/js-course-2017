function freezeFactory(i) {
    let counter = 1;
    return function() {
        if(counter === i) {
            counter = 1;
            console.log('logs 4');
        } else {
            counter++;
        }
    };
}

let frozen = freezeFactory(4);

for(let i = 0; i < 20; i++) {
    frozen();
}
