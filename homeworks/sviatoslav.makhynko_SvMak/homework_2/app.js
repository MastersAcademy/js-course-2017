// Default state
let state = {
    height: 4,
    spacesAmount: 2,
    symbol: '#',
}

// Getting arguments from the console
process.argv.forEach(arg => {
    arg = arg.split('=');

    switch (arg[0]) {
        case 'height':
            return state.height = parseInt(arg[1], 10);
        case 'spaces':
            return state.spacesAmount = parseInt(arg[1], 10);
        case 'symbol':
            return state.symbol = arg[1];
    }
});

// Prints pyramids
const piramidPrints = state => {
    const { height } = state;

    let str = `Height: ${height}\n`;

    for (let i = 1; i <= height; i++) {
        str += lineCreate(i, state)+'\n';
    }

    console.log(str);
}

// Creates spaces between pyramids
function spacesCreate(amount) {
    let space = '';

    for (let i = 0; i < amount; i++) {
        space += ' ';
    }

    return space;
}

// Creates a line of characters
function lineCreate(i, state) {
    const { height, spacesAmount, symbol } = state;
    let str = '';

    for (let j = 1; j <= height*2; j++) {
        if (j <= (height-i) || j > height+i) {
            str += ' ';
        } else {
            str += symbol;
        }
    }

    // Receiving the slice of the left half lines
    let leftString = str.slice(0,height),
    // Receiving the slice of the right half lines
        rightString = str.slice(height),
    // Receiving the number of spaces
        numberOfSpaces = spacesCreate(spacesAmount);
    // Combining in a single line
    return str = `${leftString}${numberOfSpaces}${rightString}`;
}

// Call piramidPrints function
piramidPrints(state);
