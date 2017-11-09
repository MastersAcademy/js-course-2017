((height = 4) => {
    const SYMBOL = '#';
    const SPACE = '  ';

    if (height >= 2) {
        for (let i = 1; i <= height; i++) {
            let bricks = '';

            while (bricks.length < i) {
                bricks += SYMBOL;
            }

            let spaces = '';

            while (spaces.length <= height - bricks.length) {
                spaces += ' ';
            }

            console.log(spaces + bricks + SPACE + bricks);
        }
    } else {
        console.log('the height should be more than two characters');
    }
})();
