function buildCarcase (height) {
    const brick = '$',
        space = ' ';

    if ( typeof height !== 'number') {
        console.log('Enter the number');
        return;
    }

    if ( height<2 || height>10 ) {
        console.log('Enter height>2 and height<10');
        return;
    }

    for (let i = 1; i <= height ; i++) {
        let str = brick.repeat(i),
            indents = space.repeat(height-i),
            build = indents + str + '  ' + str;
        console.log(build);
    }
}

buildCarcase (4);
