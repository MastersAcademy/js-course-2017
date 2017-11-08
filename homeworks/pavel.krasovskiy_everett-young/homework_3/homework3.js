const HEIGHT = 4;
var line = '  ';
var alignmentCounter = HEIGHT - 1;
const BRICK = '#';
// eslint-disable-next-line no-console
console.log('Height : ' + HEIGHT);

for (let i = 0; i < HEIGHT; i++) {
    line = BRICK + line + BRICK;
    let lineLining = line;
    let items = alignmentCounter;

    while (items > 0) {
        lineLining = ' ' + lineLining;
        items--;
    }
    // eslint-disable-next-line no-console
    console.log(lineLining);
    alignmentCounter -= 1;
}
