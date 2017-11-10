var a = "#";
var s = " ";
var h = 4;

for (var i = 1; i < h + 1; i++){
    console.log(s.repeat(h - i) + a.repeat(i) + "  " + a.repeat(i));
}