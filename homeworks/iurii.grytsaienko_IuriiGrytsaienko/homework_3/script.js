const HEIGHT = 4;
const SEPARATOR = "  ";

console.log("Height: " + HEIGHT);

for (let i = 0; i < HEIGHT; i++) {
    let space = "";
    let hash = "";
    for (let j = 0; j < HEIGHT - i; j++) space += " ";
    for (let j = 0; j < i+1; j++) hash += "#";
        console.log(space + hash + "  " + hash);
};