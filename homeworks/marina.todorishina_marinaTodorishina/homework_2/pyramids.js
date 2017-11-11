function generatePyramids (height = 4) {
    let arrFirstPyramid = [],
        arrSecondPyramid=generatePyramid(height);

    if (height < 2){
        height = 2;
    }

    for (let i = 0; i < height; i++) {
        let block = '';

        for (let j = 0; j < (height - i); j++) {
            block += ' ';
        }

        for (let k = 0; k <= i; k++) {
            block += '*';
        }

        arrFirstPyramid[i] = block;
    }

    for (let i = 0; i<height; i++) {
        console.log(arrFirstPyramid[i] + "  " + arrSecondPyramid[i]);
    }
}

function generatePyramid (height) {
    let arr = [];

    for (let i = 0; i < height; i++) {
        let block = '';

        for (let j = 0; j <= i; j++) {
            block += '*';
        }

        arr[i] = block;
    }
    return arr;
}

generatePyramids(5);