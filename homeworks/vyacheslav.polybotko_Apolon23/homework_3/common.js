let height = 4;
let gapBreak = "  ";
let star, space;
let gapSymbol, spaces;
if (height >= 2) {
    for (let i = 1; i <= height; i++) {
        space = height - i;
        spaces = "";
        for (let i = 0; i <= space; i++) {
            spaces += " ";
        }
        star = i - 1; {
            gapSymbol = "";
        }
        for (let i = 0; i <= star; i++) {
            gapSymbol += "#";
        }
        console.log(spaces + gapSymbol + gapBreak + gapSymbol + spaces);
    }
} else {
    console.log("need less than 1");
}

