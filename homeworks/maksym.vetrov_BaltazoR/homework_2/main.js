const HEIGHT = 4;
let space = HEIGHT;
let rightPart = '';
const SYMBOL = '#';
const SEPARATOR = '  ';

if (HEIGHT < 2) {
    console.log('Height : ' + HEIGHT);
    console.log('Height must be any positive integer >=2');
} else {
    console.log('Height : ' + HEIGHT);
    for (let i = 0; i < HEIGHT; i++) {
        rightPart += SYMBOL;
        let leftPart = '';
        for (let k = space; k > 0; k--) {
            leftPart += ' ';
        }
        space--;
        console.log(leftPart + rightPart + SEPARATOR + rightPart);
    }
}

