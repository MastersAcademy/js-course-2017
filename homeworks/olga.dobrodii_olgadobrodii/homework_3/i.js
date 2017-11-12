let height = 4;

for (let line = 1; line <= height; line++) {
    let str = ' ';
    str = writeLeftPyramid(line);
    str += '  ';
    str += writeRightPyramid(line);
    console.log(str);
}


function writeRightPyramid(count) {
    let str = '';
    for (let i = 0; i < count; i++) {
        str += '#';
    }
    return str;
}

function writeLeftPyramid(count) { 
    let str = ''; 
 
    for (let i = 0; i < count; i++) {
        str += '#';
    }
    let spaceCount = height - count;
    
    for (let j = 0; j < spaceCount; j++) {
        str = ' ' + str;    
    }
    return str;
}


