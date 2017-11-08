var height = 4;
var line = '  ';
var alignmentCounter = height - 1;
var brick = '#';
// eslint-disable-next-line no-console
console.log('Height : ' + height);

for (let i = 0; i < height; i++) {
    line = brick + line + brick;
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
