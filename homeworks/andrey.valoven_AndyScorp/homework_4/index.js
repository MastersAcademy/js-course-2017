function countLetters(item, letter) {
    if (typeof item === 'string') {
        let count = 0;
        item.replace(new RegExp(letter, 'gi'), () => {
            count++;
        });
        return count;
    } else {
        return 'not string';
    }
}
function homework4(arr) {
    return arr.map((item) => {
        let countLettersA = countLetters(item, 'a');
        let countLettersM = countLetters(item, 'm');
        switch (true) {
            case countLettersM === 'not string' && countLettersA === 'not string':
                return countLettersM;
            case countLettersM === countLettersA:
                return 1;
            case countLettersM === 0 && countLettersA === 0:
                return 1;
            default:
                return 0;
        }
    });
}


let str = ['first', 'second', 'third', 'fourth', 'masters academy', 'Masters Academy', 'MA', 'ma'];

console.log(homework4(str));
