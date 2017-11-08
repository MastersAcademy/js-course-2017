function start(){
    let leftSide = "";
    let rightSide = "";
    let height = parseInt(prompt("Write a height, please = "),10);
        if (!height) {
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
}
