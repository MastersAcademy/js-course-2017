function multiplyingArrayElements(num) {
    for(let i = num; i < card.length; i+=2) {
        card[i] *=  2;
        if(card[i] > 9)
            card[i] -= 9;
    }
}

function sumAllArrayElements() {
    let res = 0;
    card.forEach(element => {
        res += +element;
    });
    return res;
}
function luhn(card) {

    card = typeof(card) === 'string' ? card.replace(/(\s|-)/g, '') : card + '';
    if(/[^\d]/.test(card)) {
        console.log('Not a number');
        return null;
    }

    card = card.split('');
    if(card.length % 2 === 0) {
        multiplyingArrayElements(0);
    } else {
        multiplyingArrayElements(1);
    }

    return sumAllArrayElements() % 10 === 0;
}

console.log(luhn(4532505827704369));

