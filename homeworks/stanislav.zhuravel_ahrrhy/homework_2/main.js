function printPyramid (height) {
    const char = '#',
        spc = ' ';
    if (height < 2 && height > 15) {
        console.log('need at least 2 and less then 15');
    } else if ( typeof height !== 'number') {
        console.log('need a number');
    } else {
        for (let i = 1; i <= height ; i++) {
            str = char.repeat(i);
            let spcs = spc.repeat(height-i),
                pyramidLvl = spcs + str + '  ' + str;
            console.log(pyramidLvl);
        }
    }
}
printPyramid(4);
