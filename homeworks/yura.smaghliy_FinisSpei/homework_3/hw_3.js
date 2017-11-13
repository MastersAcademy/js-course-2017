var height = 8, counter = height - 1, emptySpace = '  ', symbol = '#';
for (let i = 0; i < height; i++) {
    emptySpace = symbol + emptySpace + symbol;
    let l = emptySpace;
    let items = counter;

    while (items > 0) {
        l = ' ' + l;
        items--;
    }
    console.log(l);
    counter -= 1;
}
console.log('height = ' + height);
