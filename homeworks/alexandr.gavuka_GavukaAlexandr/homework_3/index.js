(() => {
    const SYMBOL = '#';
    const SPACE = '  ';
    const HEIGHT = 4;

    console.log('HEIGHT: ' + HEIGHT + '\n');

    if (HEIGHT >= 2) {
        for (let i = 1; i <= HEIGHT; i++) {
            let bricks = '';

            while (bricks.length < i) {
                bricks += SYMBOL;
            }

            let spaces = '';

            while (spaces.length < HEIGHT - bricks.length) {
                spaces += ' ';
            }

            console.log(spaces + bricks + SPACE + bricks);
        }
    } else {
        console.log('the height should be more than two characters');
    }
})();
