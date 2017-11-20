let numberCard = '344257987375665';
function checkCard(numberCard) {
    let sumElements;
    if (/[^0-9-\s]/.test(numberCard)) {
        console.log(null);
    } else {
        numberCard = numberCard.replace(/\D/g, '');
        let cardArray = numberCard.toString().split('');
        for (let i = 0; i < cardArray.length; i++) {
            if (cardArray.length % 2 === 0) {
                sumElements = 0;
                for (let i = 0; i < cardArray.length; i++) {
                    let element = 0;
                    if (i % 2 === 0) {
                        let evenElement = cardArray[i] * 2;
                        if (evenElement > 9) {
                            let arrElements = evenElement.toString().split('');
                            element = +arrElements[0] + +arrElements[1];
                        } else element = evenElement;
                    } else element = +cardArray[i];
                    sumElements = sumElements + element;
                }
            } else {
                sumElements = 0;
                for (let i = 0; i < cardArray.length; i++) {
                    let element = 0;
                    if (i % 2 === 1) {
                        let evenElement = cardArray[i] * 2;
                        if (evenElement > 9) {
                            let arrElements = evenElement.toString().split('');
                            element = +arrElements[0] + +arrElements[1];
                        } else element = evenElement;
                    } else element = +cardArray[i];
                    sumElements = sumElements + element;
                }
            }
        }
        if (sumElements % 10 === 0) {
            console.log(true)
        } else console.log(false);
    }
}
checkCard(numberCard);