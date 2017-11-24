// Test number cards  here https://www.kobzarev.com/other/testoviye-nomera-kreditnyh-kart/
//const STR_NUMBER_CARD = '3714 4963539 8431'; //American Express 15
//const STR_NUMBER_CARD = '5105 1051 0510 5100'; //Master Card 16
const STR_NUMBER_CARD = '5105+1051+0510+5100'; //Master Card 16
const validCardNumb = (strCard) => {
    let cardNumber = [];
    let result;

    if (strCard.search(/[A-Za-zА-Яа-я]/) !=-1) return 'null';
    if (strCard.search(/\d/) ==-1) return 'null';

    for (let i = 0; i < strCard.length; i++) {
        if( isNaN( parseInt(strCard[i]) ) )  continue;
        cardNumber.push(parseInt(strCard[i]));
    }

    const EVEN_CARD = cardNumber.length % 2;

    let lastSum = cardNumber.reduce((sum, current,index) => {
        let timeIndex = index+1;
        let timeSum;

        if (EVEN_CARD) {
            timeIndex % 2 == 0 ? timeSum = current * 2 : timeSum = current;
        } else {
            timeIndex % 2 != 0 ? timeSum = current * 2 : timeSum = current;
        }

        (timeSum > 9) ? sum += timeSum - 9 : sum +=timeSum;

        return sum;
    },0);

    lastSum % 10 == 0 ? result = true : result = false;
    return result;
};

console.log(validCardNumb(STR_NUMBER_CARD));
