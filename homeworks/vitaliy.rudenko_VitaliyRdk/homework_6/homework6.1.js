let numberCallFunction = 9;

function freezeFactory(number){
    let counter = 1;
    return function getNumber(){
        if (counter % number == 0){
            console.log(number);
        }
        counter++;
    }
}

let frozen = freezeFactory(3);

for (let i = 0; i < numberCallFunction; i++){
    frozen();
}
