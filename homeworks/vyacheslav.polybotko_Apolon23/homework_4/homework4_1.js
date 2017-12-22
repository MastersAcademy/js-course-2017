let myArray = ["first", "second", "third", "fourth", "masters academy", "mma", "ma"]
let questA = 'a'
let questM = 'm'
let searchSymbol = myArray.map(function(myArray) {
    let resultArray = 0;
    let considerA = 0;
    let considerM = 0;
    for (let i = 0; i < myArray.length; i++) {
        if (myArray[i] === questA) considerA++;
        if (myArray[i] === questM) considerM++;
    }
    considerA !== considerM ? resultArray = 0 : resultArray = 1;
    return resultArray
});
console.log(searchSymbol);







