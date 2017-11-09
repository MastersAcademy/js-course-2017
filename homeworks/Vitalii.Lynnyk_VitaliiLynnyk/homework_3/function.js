let rl = require("readline");
let prompts = rl.createInterface(process.stdin, process.stdout);
let leftSide = "";
let rightSide = "";

prompts.question("Write a height,please = ", function (height) {
    if (!parseInt(height)){
        height = 4 ;
    }
    let counter = height;
    console.log("Height :",height);
    for (let i = 0; i < counter; i++) {
        leftSide = " ".repeat(height-1)+"#".repeat(i+1);
        rightSide += "#";
        console.log(leftSide,"",rightSide);
        height--;
    }
    process.exit();
});
