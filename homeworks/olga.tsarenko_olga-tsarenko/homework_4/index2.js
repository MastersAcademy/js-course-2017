const card = '5277 0794-6715-2699';
let cardCount=[];

let pattern = /[^\d\s"£$%^&_+-=]/;
let validation = pattern.test(card);

function getSumNumber(number) {
    let sum = 0;
    while (number) {
        let temp = number % 10;
        number = (number - temp) / 10;
        sum += temp;
    }
    return sum;
}

function arraySum(array){
    let summ = 0;
    for(let i = 0; i < array.length; i++){
        summ += array[i];
    }
    return summ;
}

let validateCard = function (value) {
    if (validation) {
        console.log('Invalid card number');
        return null;
    } else {
        let noSpace = value.replace(/[^0-9]/g, '');
        let cardArray = noSpace.split('');
        let reverseArray = cardArray.reverse();
        let myWorkingArray =  reverseArray.slice(0);

        for (let i = 0; i < myWorkingArray.length; i++) {
            if ((i-1) % 2 !== 0) {
                cardCount.push(parseInt(myWorkingArray[i]));
            }
            else {
                let doubledElement = myWorkingArray[i]*2;
                if (doubledElement > 9){
                    let mySumNumber= getSumNumber(doubledElement);
                    cardCount.push(mySumNumber);
                } else{
                    cardCount.push(doubledElement);
                }
            }
        }

        let check= arraySum(cardCount);
        console.log(check);

        if( check % 10 ===0 ){
            console.log('Congratulations! Yours card is valid!');
            return true;

        } else {
            console.log('Your card is not valid!');
            return false;
        }
    }

};

validateCard(card);






