let arrayWords = ["first", "second", "third", "fourth", "masters academy"],
    lowerArrayWords = [];
function comparison(arrayWords) {
    for (let i = 0; i < arrayWords.length; i++) {
        let lowerString = arrayWords[i].toLowerCase(),
            numberM = lowerString.indexOf('m'),
            numberA = lowerString.indexOf('a'),
            sumM = 0,
            sumA = 0;
        while ( numberM != -1 ) {
            sumM++;
            numberM = lowerString.indexOf('m', numberM+1);
        }
        while ( numberA != -1 ) {
            sumA++;
            numberA = lowerString.indexOf('a', numberA+1);
        }
        if (sumM != sumA) {
            lowerArrayWords.push(0);
        } else lowerArrayWords.push(1);
    }
    console.log(lowerArrayWords);
}
comparison(arrayWords);