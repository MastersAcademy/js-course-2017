let arr = ['first', 'second', 'third', 'fourth', 'masters academy', 'mmaa', 'mma', 'gg']; // 1, 1, 1, 1, 0 | 1, 0 ,1

(function (arr) {
    const arrNew = [];
    arr.forEach(function (item) {
        let resultA = 0;
        let resultM = 0;
        for (let i = 0; i < item.length; i++ ) {
            if (item.charAt(i) === 'a') {
                resultA = resultA + 1;
            } else if (item.charAt(i) === 'm') {
                resultM = resultM + 1;
            } else {
                continue;
            }
        }
        if (resultA !== resultM) {
            arrNew.push('0');
        } else {
            arrNew.push('1');
        }
    });
    console.log(arrNew);
})(arr);

