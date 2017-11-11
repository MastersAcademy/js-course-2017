function twoPyramids (height) {

    for (let i = 1; i <= height; i++) {
        let row = '';

        for (let s = 1; s <= (height - i); s++) {
            row += ' ';
        }
        for (let h = 1; h <= i; h++) {
            row += '#';
        }

        row += ' ';
        for (let hh = 1; hh <= i; hh++) {
            row += '#';
        }
        console.log(row);
    }
}(4);
