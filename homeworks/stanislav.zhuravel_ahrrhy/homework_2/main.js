function printPyramid (height) {
    const char = '#',
        spc = ' ';

    if ( height<2 || height>15 ) {
        console.log('need at least 2 and less then 15');
        return;
    }

    if ( typeof height !== 'number') {
        console.log('need a number');
        return;
    }

    for (let i = 1; i <= height ; i++) {
        let str = char.repeat(i),
            indents = spc.repeat(height-i),
            pyramidLvl = indents + str + '  ' + str;
        console.log(pyramidLvl);
    }
}

printPyramid(10);

