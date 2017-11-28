 const CARD_NUMBER = '5569-7558-2567-2968';

function createCardNumberArray(cardNumber) {
    let cardNumberArr = [];

    for (let i = 0; i < cardNumber.length; i++) {
        if (!isNaN(+cardNumber[i])) {
            cardNumberArr.push(+cardNumber[i]);
        }
    }
    return cardNumberArr;

}

function countByAlgorithm(cardNumber, i, countedNumbers) {
    cardNumber[i] *= 2;

    if (cardNumber[i] > 9) {
        cardNumber[i] -= 9;
        countedNumbers.push(cardNumber[i]);
    } else {
        countedNumbers.push(cardNumber[i]);
    }

    return countedNumbers;
}

 function sumNumbers(countedNumbers) {
     let sum = countedNumbers.reduce(function (sum, current) {
         return sum + current;
     }, 0);

     if (sum % 10 === 0) {
         console.log(true);
     } else console.log(false);
 }

function checkCardNumber(cardNumber) {
    let countedNumbers = [];

    if (cardNumber.length === 0) {
        console.log("Error. Please, type your card number");
    } else if (cardNumber.length !== 16 && cardNumber.length !== 15) {
        console.log(null)
    } else {
        for (let i = 0; i < cardNumber.length; i++) {
            if (cardNumber.length === 16) {
                if (i % 2 === 0) {
                    countByAlgorithm(cardNumber, i, countedNumbers);
                } else {
                    countedNumbers.push(cardNumber[i]);
                }
            } else if (cardNumber.length === 15) {
                if (i % 2 !== 0) {
                    countByAlgorithm(cardNumber, i, countedNumbers);
                } else {
                    countedNumbers.push(cardNumber[i]);
                }
            }
        }
        sumNumbers(countedNumbers);
    }
}
checkCardNumber(createCardNumberArray(CARD_NUMBER));