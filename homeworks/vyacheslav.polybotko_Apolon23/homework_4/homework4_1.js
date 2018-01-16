const myArray = ["first", "second", "third", "fourth", "masters academy", "mma", "ma"]
const questA = 'a'
const questM = 'm'
let searchSymbol = myArray.map((myArray) => {
    let considerA = 0;
    let considerM = 0;
    for (let i = 0; i < myArray.length; i++) {
        if (myArray[i] === questA) considerA++;
        if (myArray[i] === questM) considerM++;
    }
    return considerA !== considerM ? 0 : 1;
});

console.log(searchSymbol);





