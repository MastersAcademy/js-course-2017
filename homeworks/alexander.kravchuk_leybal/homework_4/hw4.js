const array = ["first", "second", "third", "fourth", "masters academy", "MmAa"],
    wrongCardNumber = "4561 2612 1234 5464",
    cardNumber = "4561 2612 1234 5467";

function getArray(arr) {
    let countOfM = 0,
        countOfA = 0,
        res = [];

    if (!(arr instanceof Array)) {
        console.warn('The argument should be array.');
    }

    array.forEach(function (str) {
        countOfM = (str.match(/[m]/ig) || []).length;
        countOfA = (str.match(/[a]/ig) || []).length;

        if (countOfM !== countOfA) {
            res.push(0);
        } else if (countOfM === countOfA) {
            res.push(1);
        }
    });

    return res
}

function getArray2(arr) {
let res = [];
arr.filter((item) => typeof(item) === 'string')
    .map(function (item) {
        let countOfM = 0,
            countOfA = 0;

        for (let i = 0; i < item.length; i++) {
            if (item[i] === "m" || item[i] === "M") countOfM++;
            if (item[i] === "a" || item[i] === "A") countOfA++;
        }

        if (countOfM !== countOfA) {
            res.push(0);
        } else if (countOfM === countOfA) {
            res.push(1);
        }

        return res;
    });

return res;
}

function luhn(card) {
    let cardArray = [],
        i = 0,
        result = 0;

    if (card.search(/[^\d\s]/i) !== -1) {
        console.log("Wrong card number.");
        return null;
    }

    cardArray = card.match(/\d/g);

    if (!(cardArray.length % 2 === 0)) i = 1;

    cardArray.forEach(function (elem, i) {
        cardArray[i] = +elem;
    });
    for (i; i < cardArray.length; i += 2) {
        cardArray[i] *= 2;
        if (cardArray[i] > 9) cardArray[i] -= 9;
    }
    result  = cardArray.reduce(function(sum, current) {
        return sum + current;
    }, 0);

    return (result % 10 === 0);
}

console.log(getArray(array));
console.log(getArray2(array));
console.log("wrongCardNumber:", luhn(wrongCardNumber));
console.log("cardNumber:", luhn(cardNumber)); 