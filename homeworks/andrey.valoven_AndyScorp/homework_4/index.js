function findLeter(item, leter) {
    if(typeof(item) === 'string') {
        let count = 0;
        regexp = new RegExp(leter, 'gi');
        item.replace(regexp, () => {
            count++;
        });
        return count;
    } else {
        console.log('It\'s not string');
        return 'not string';
    }
}
let str = ['first', 'second', 'third', 'fourth', 'masters academy', 'Masters Academy', 'MA', 'ma'];
let result = str.map((item) => {
    let countA = findLeter(item, 'a');
    let countM = findLeter(item, 'm');
    switch(true) {
        case countM === 'not string' && countA === 'not string':
            return countM;
        case countM === countA:
            return 1;
        case countM === 0 && countA === 0:
            return 1;
        default:
            return 0;

    }
});
console.log(result);
