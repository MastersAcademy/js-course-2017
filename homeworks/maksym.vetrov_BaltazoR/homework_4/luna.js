let cardEven = '4485601891059447';
let cardUneven = '346400538897401';
let cardNotValid = 'MasterOfCode';

function checkCard(cardNumber) {
    let card, value, checkEven;
    let sum = 0;
    card = cardNumber.replace(/\D/g, '');
    if (isNaN(parseInt(card))) {
        console.log('error, not a number');
        return null;
    }
    (card.length % 2 === 0) ? checkEven = 0 : checkEven = 1;
    for (let i = 0; i < card.length; i++) {
        if (i % 2 !== checkEven) {
            sum += parseInt(card.charAt(i));
            continue;
        }
        value = card.charAt(i) * 2;
        if (value > 9) value -= 9;
        sum += value;
    }
    return (sum % 10 === 0);
}

console.log(checkCard(cardEven));
console.log(checkCard(cardUneven));
console.log(checkCard(cardNotValid));
