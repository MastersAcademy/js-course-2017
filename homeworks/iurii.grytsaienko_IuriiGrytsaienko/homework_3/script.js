const HEIGHT = 4;

console.log("Height: " + HEIGHT);

if (HEIGHT < 2 )
    throw "pyramide is to small"

for (let i = 0; i < HEIGHT; i++) {
    let space = "";
    let hash = "";
    for (let j = 0; j < HEIGHT - i; j++) space += " ";
    for (let j = 0; j < i+1; j++) hash += "#";
        console.log(space + hash + "  " + hash);
};