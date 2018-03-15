let count = 0;

function freezeFactory(number) {
    if (count % number === 0) {
        console.log(number);    
    }
    count++;
}
 
function freeze(number) {
    for (let i = 1; i <= 12; i++) {
        freezeFactory(number);
    }
}
 
freeze(4);