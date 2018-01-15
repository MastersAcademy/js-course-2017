const readline = require('readline');

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

const PHRASES = {
    numberQuery: "\x1b[32mPlease, enter card number: ",
    error: "\x1b[31mInvalid characters found! ",
    positiveResult: "\x1b[32mThis card is valid!",
    negativeResult: "\x1b[31mThis card not valid!"
}

rl.question(PHRASES.numberQuery, (str) => {
    if ( checkString(str) ) {
        const NUMBER = transformString(str);
        if ( multiplicityCheck( sum(NUMBER) ) ) {
            console.log(PHRASES.positiveResult);
        } else {
            console.log(PHRASES.negativeResult);
        }
        rl.close();
    } else {
        console.log(PHRASES.error);
        rl.close();
    }
});

function checkString(str) {
    return /^([.,/'":;=+]|\d|\-| )+$/.test(str);
}

function transformString(str) {
    return str.replace(/[.,/'":;=+]|\-| /g, "");
}

function sum(number) {
    let result = 0;
    if (number.length % 2 === 0){
        for (let i=0; i<number.length; i++) {
            if (i % 2 === 0) {
                result = result + checkOneNumber(+number[i]);
            } else {
                result = result + +number[i];
            }
        }
    } else {
        for (let i=0; i<number.length; i++) {
            if (i % 2 !== 0) {
                result = result + checkOneNumber(+number[i]);
            } else {
                result = result + +number[i];
            }
        }
    }
    return result;
}

function checkOneNumber(value) {
    if (value*2 > 9) {
        return value*2 - 9;
    } else {
        return value*2;
    }
}

function multiplicityCheck(value) {
    return value % 10 === 0;
}
