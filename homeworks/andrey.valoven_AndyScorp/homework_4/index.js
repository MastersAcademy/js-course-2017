function findLeter(item, letter) {
    if(typeof(item) === 'string') {
        let count = 0;
        reg = new RegExp(letter, 'gi');
        item.replace(reg, () => {
            count++;
        });
        return count;
    } else {
        return 'not string';
    }
}
let str = ['first', 'second', 'third', 'fourth', 'masters academy', 'Masters Academy', 'MA', 'ma', 1];
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
