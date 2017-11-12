const hash   = "#",
    space  = " ",
    height = prompt("Set pyramid height");

(function buildPyramid(){
    if (between(height, 2, 24))
        drawStructure(height);
    else
        console.log('Please enter smaller height!')
})();

function drawStructure(length){
    if ( length == 0 ) return;
    drawStructure(length - 1);

    console.log(drawRow(length));
}

function between(x, min, max) { return x >= min && x <= max }

function drawRow(length){
    return space.repeat(height-length) + hash.repeat(length) + space.repeat(2) + hash.repeat(length)
}