(function() {
    const HEIGHT = 15,
        BLOCK = '#',
        SPACE = ' ';

    if (HEIGHT<2 || HEIGHT>12) {
        console.log('Error! Height must be >= 2 and <= 12');
        return;
    }

    for (let i = 0; i < HEIGHT; i++) {
        console.log(SPACE.repeat(HEIGHT-i) + BLOCK.repeat(i+1) + SPACE.repeat(2) + BLOCK.repeat(1+i));
    }
})();
