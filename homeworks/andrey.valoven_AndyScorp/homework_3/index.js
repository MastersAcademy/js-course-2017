function repeat(item, symbol = ' ') {
    let res = '';
    for(let i = 1; i <= item; i++) {
        res += symbol;
    }
    return res;
}

function first(height = 4, interval = 2, sumbol = '#') {
    for(let i = 1; i <= height; i++) {
        console.log(repeat(height - i) + repeat(i, sumbol) + repeat(interval) + repeat(i, sumbol));
    }
}

first(10);
