/**
 * Created by User on 08.11.2017.
 */
let amount = 5;

function generateDifferentTypesOfSymbols(amount = 4, type = "space") {
    let symbols = "";
    if (type === "space") {
        for (let i = 1; i <= amount; i++) {
            symbols += " ";
        }
    } else if (type === "square") {
        for (let i = 1; i <= amount; i++) {
            symbols += "■";
        }
    }
    return symbols;
}

function generateARow(amountOfSpaces = 3, amountOfSquares = 1) {
    let spaces = generateDifferentTypesOfSymbols(amountOfSpaces, "space");
    let squares = generateDifferentTypesOfSymbols(amountOfSquares, "square")

    console.log((spaces + squares) + "  " + (squares + spaces));
}

function generateAPyramid(amount = 4) {

    if (amount >= 2) {
        let x = amount - 1;
        let y = 1;

        while (x >= 0 && y <= amount) {
            generateARow(x, y);
            x--;
            y++;
        }

        console.log("The value of height: " + amount);

    } else {
        console.log("Error. Have to be at least two rows.")
    }

}

generateAPyramid(amount);

