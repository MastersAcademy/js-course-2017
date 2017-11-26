const ARRAY = ["first", "second", "third", "fourth", "masters academy", "mmaa", "Maam", 1];
let finalArr = [];

function checkNumberOfSymbols(counterA = 0, counterM = 0, finalArr = []) {
    if (counterA === counterM) {
        finalArr.push(1);
    } else finalArr.push(0);

    return finalArr;
}
(function checkArray() {
    if (ARRAY.length === 0) {
        console.log('Please, type the array');
    } else {
        ARRAY.map(string => {
            if (typeof string !== 'string') {
                finalArr.push('Not a string');
            } else {
                let counterA = 0;
                let counterM = 0;
                let lowString = string.toLowerCase();

                for (let i = 0; i < string.length; i++) {
                    if (lowString[i] === 'a') {
                        counterA++;
                    } else if (lowString[i] === 'm') {
                        counterM++;
                    }
                }
                checkNumberOfSymbols(counterA, counterM, finalArr);
            }
        });
        console.log(finalArr);
    }
})();