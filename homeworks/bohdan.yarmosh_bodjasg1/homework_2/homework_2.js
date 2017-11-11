marioProblem();

function marioProblem(height) {
    if(height < 2 || height == undefined ){
        marioProblem(4);
        } else {
        for (var row = 0; row < height; row++) {
            var numBricks = row + 1;
            var numSpaces = height - row;

            var rowStr = "";
            for (var i = 0; i < numSpaces; i++) {
                rowStr += " ";
            }

            for (i = 0; i < numBricks; i++) {
                rowStr += "#";
            }

            var rowStr2 = "";
            for (i = 0; i < numBricks; i++) {
                rowStr2 += "#";
            }

            console.log(rowStr + "  " + rowStr2);
        }    
    }
}
