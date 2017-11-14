let h = 6;
let l = "#";
let s = "  ";

for (let i = 0; i < h; i++) {
    const space = h - i - 1;
    const bloks = i + 1;

    console.log(build = " ".repeat(space) + l.repeat(bloks) + s + l.repeat(bloks));
}