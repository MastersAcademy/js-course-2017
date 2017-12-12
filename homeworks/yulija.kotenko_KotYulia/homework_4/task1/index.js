let arrayWords = ["first", "second", "third", "fourth", "masters academy"],
    lowerArrayWords = arrayWords.map(function (word) {

        word = word.toLowerCase();

        let sumM = word.match(/a/gi),
            sumA = word.match(/m/gi);

        if (sumA===null||sumM===null) {
            return 1;
        } else {
            sumA = sumA.length;
            sumA = sumA.length;
            if (sumM != sumA) {
                return 0;
            } return 1;
        }

    });
console.log(lowerArrayWords);
