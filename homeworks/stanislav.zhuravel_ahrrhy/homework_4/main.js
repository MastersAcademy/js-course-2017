const ch1 = /[m]/g,
    ch2 = /[a]/g;
let arr = ['first', 'second', 'third', 'masters academy'],
    newArr = arr.map(function (str) {
        let type = typeof str;
        if (type !== 'string') {
            console.log('need string');
            return;
        }
        str = str.toLowerCase();
        let ch1Arr = str.match(ch1);
        let ch2Arr = str.match(ch2);
        if (ch1Arr === null) {
            ch1Arr = 0;
        }
        if (ch2Arr === null) {
            ch2Arr = 0;
        }

        let isCharArrEquals = ch2Arr === ch1Arr;
        if (!isCharArrEquals){
            return 0;
        } else return 1;
    });
console.log(newArr);
const newCh1 = 'm',
    newCh2 = 'a';
let newArr2 = arr.map(function (str) {
    let type = typeof str;
    if (type !== 'string') {
        console.log('need string');
        return;
    }
    str = str.toLowerCase();
    str = str.split('');
    let sum1 = 0,
        sum2 = 0;
    for (let i = 0; i<str.length; i++) {
        if (str[i] === newCh1) {
            sum1 += 1;
        }
    }

    for (let j = 0; j<str.length; j++) {
        if(str[j] === newCh2) {
            sum2 += 1;
        }
    }
    let isSumEquals = sum1 === sum2;
    if (!isSumEquals){
        return 0;
    } else return 1;
});
console.log(newArr2);
