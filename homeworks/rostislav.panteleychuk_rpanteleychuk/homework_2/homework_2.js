let h = 10; //change rows
const p = "#";
const s = "  ";
console.log("Height: " + h);
for (let i = 0; i < h; i++) {
    let space = h - i - 1;
    let bloks = i + 1;
    let build = " ".repeat(space) + p.repeat(bloks) + s + p.repeat(bloks);
    console.log(build);
}
