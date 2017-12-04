let height = 4;
console.log('Height: ' + height);
if (height < 2) {
    return console.log('Enter any positive integer >=2'); 
}
let i = 0; 
while (i < height) {
    let bigSpace = '  ';
    let block = '';
    let space = ' ';
    for (j = 0; j < height - i; j++) space += ' ';
    for (j = 0; j < i + 1; j++) block += '#';
    console.log(space + block + bigSpace + block);
    i++;
}





