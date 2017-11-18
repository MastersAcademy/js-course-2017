const ch1 = 'm',
    ch2 = 'a';
let arr = ['first', 'second', 'third', 'masters academy'],
    newArr = arr.map(function (str) {
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
            if (str[i] === ch1) {
                sum1 += 1;
            }
        }

        for (let j = 0; j<str.length; j++) {
            if(str[j] === ch2) {
                sum2 += 1;
            }
        }
        let isSumsEquals = sum1 === sum2;
        if (!isSumsEquals){
            return 0;
        } else return 1;
    });
console.log(newArr);
