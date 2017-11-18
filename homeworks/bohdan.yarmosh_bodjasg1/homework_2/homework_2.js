marioProblem();

function marioProblem(height = 4) {
    for (let row = 0; row < height; row++) {
        let numBricks = row + 1;
        let numSpaces = height - row;
    
        let rowStr = "";
        for (let i = 0; i < numSpaces; i++) {
            rowStr += " ";
        }
    
        for (i = 0; i < numBricks; i++) {
            rowStr += "#";
        }
        function reverseString(str) {
            return str.split('').reverse().join('');
        }
        let str2 = reverseString(rowStr);
    
        console.log(rowStr + "  " + str2);
    }  
};
