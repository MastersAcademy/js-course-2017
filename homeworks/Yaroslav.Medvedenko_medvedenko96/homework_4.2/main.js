let card = '4561 2612 1234 5467';

function Moon(card) {
    let arr = [];
    if (/[A-Za-z]/g.test(card)) {
        console.log('Error');
        return null;
    } else {
        let numberFilter = card.match(/\d/g);
        for (let i = 0; i < numberFilter.length; i++) {
            if (i % 2 === 0) {
                let m = parseInt(numberFilter[i]) * 2;
                if (m > 9) {
                    arr.push(m - 9);
                } else {
                    arr.push(m);
                }
            } else {
                let n = parseInt(numberFilter[i]);
                arr.push(n);
            }
        }
        let result = arr.reduce(function (a, b) {
            return a + b;
        });
        return result % 10 === 0;
    }
}
console.log(Moon(card));

