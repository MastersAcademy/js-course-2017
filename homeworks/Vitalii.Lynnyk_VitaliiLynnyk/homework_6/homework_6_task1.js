function factory(number) {
    let i = 1;
    return function showInformation() {
        if(i % number === 0){
            console.log(number);
        }
        i++;
    };
}

let frozen = factory(4);
for(let j = 0 ; j < 12 ; j++){
    frozen();
}
