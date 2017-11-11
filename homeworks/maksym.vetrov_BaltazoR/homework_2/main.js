let height = 4;
let space = height;
let rightPart = '';
const SYMBOL = '#';
const SEPARATOR = '  ';

console.log('Height : ' + height);
for (let i = 0; i < height; i++) {
    rightPart += SYMBOL;
    let leftPart = '';
    for (let k = space; k > 1; k--) {
        leftPart += ' ';
    }
    space--;
    console.log(leftPart + rightPart + SEPARATOR + rightPart);
}

