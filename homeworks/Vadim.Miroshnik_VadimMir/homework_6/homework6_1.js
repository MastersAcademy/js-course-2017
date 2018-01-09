

function freezeFactory (numeral) {
    let i = 0;
    return function (name = numeral) {
        i++;
        if((i % name) == 0) console.log(name);  
    };
}
  
let frozen = freezeFactory(4); 
for (let i = 0; i < 12; i++) {
    frozen();
}
