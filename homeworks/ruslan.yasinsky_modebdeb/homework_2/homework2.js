const SYMBOL = '#';
let height = 4;
let heightCount = '';
if (height < 2) {
    height = false;
    // eslint-disable-next-line no-console
    console.log('Height must be more than 1!');
} else if (height > 20) {
    height = false;
    // eslint-disable-next-line no-console
    console.log('Height must be less than 20!');
} else {
    heightCount = height;
}
let separator = '  ';
let oneSpace = ' ';
let spaceBufer;
let hashTower;
for (let i = 1; i <= height; i++) {
    spacebufer = oneSpace.repeat(height - i);
    hashTower = SYMBOL.repeat(i);
    // eslint-disable-next-line no-console
    console.log(spacebufer + hashTower + separator + hashTower);
}
