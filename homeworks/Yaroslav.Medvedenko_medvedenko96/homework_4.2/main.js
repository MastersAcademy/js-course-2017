let card = '4561261212345464';

function checkCard(card) {

    let arr = card.split('');
    let arrNew = [];
    for(let i = 0; i < arr.length; i++){
        if (i % 2 === 0){
            let value = parseInt(arr[i]) * 2;
            if (value > 9){
                value = value.toString();
                arrNew.push(+value.charAt(0) + +value.charAt(1));
            } else {
                arrNew.push(arr[i]);
            }

        } else {
            arrNew.push(arr[i]);
        }
    }
    let result = 0;
    arrNew.forEach(function (item) {
        result += +item;
    });
    return result;
}
console.log(checkCard(card));





function Moon(card) {
    let arr = [];
    let cardNumber = card.toString();

    for(let i = 0; i < cardNumber.length; i++) {
        if(i % 2 === 0) {
            let m = parseInt(cardNumber[i]) * 2;
            if(m > 9) {
                arr.push(m - 9);
            } else {
                arr.push(m);
            }
        } else {
            let n = parseInt(cardNumber[i]);
            arr.push(n);
        }
    }
    let result = arr.reduce(function(a, b) { return a + b; });
    return result;
}

console.log(Moon(card));
