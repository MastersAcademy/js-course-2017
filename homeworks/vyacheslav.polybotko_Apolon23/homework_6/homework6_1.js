function freezeFactory(number) {
    let count = 0;
    return function () {
        if(count % number === 0){
            console.log(number);
        }
        count++;
    };
}

let frozen = freezeFactory(4);

for(let i = 0 ; i <= 10 ; i++){
    frozen();
}	