function checkLuhn(cardNumber) {

    cardNumber = String(cardNumber);
    if ((/[^\d\.\,\\\'\"\:\;\-\=\+]/).test(cardNumber)) return null
    else {
        let sum = 0;
        for (let i = 0; i < cardNumber.length; i++) {
            let digit = parseInt(cardNumber[i]);
            if (i % 2 === 0) {
                digit *= 2;
                if (digit > 9) {
                    digit = digit - 9;
                }
            }
            sum += digit;
        }
        return Boolean(!(sum % 10))
    }
}

console.log(checkLuhn('4410856595625312'));
