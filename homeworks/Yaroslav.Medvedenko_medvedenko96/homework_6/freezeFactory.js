function freezeFactory(value) {
    let counter = 1;
    return function () {
        if(counter % value === 0){
            console.log(value);
        }
        counter++;
    };
}

let frozen = freezeFactory(4);

for(let j = 0 ; j < 9 ; j++){
    frozen();
}


