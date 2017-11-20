let a = "#";
let s = " ";
let h = 4;

for (let i = 1; i < h + 1; i++){
    console.log(s.repeat(h - i) + a.repeat(i) + "  " + a.repeat(i));
}