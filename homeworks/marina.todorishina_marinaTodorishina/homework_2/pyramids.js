function generatePyramids(height = 4) {

    if (height < 2) {
        return;
    }

    let arrFirstPyramid = generateFirstPyramid(height),
        arrSecondPyramid = generateSecondPyramid(height);


    for (let i = 0; i < height; i++) {
        console.log(arrFirstPyramid[i] + "  " + arrSecondPyramid[i]);
    }
}

function generateFirstPyramid(height) {
    let arr = [];

    for (let i = 0; i < height; i++) {
        let block = '';

        for (let j = 0; j < (height - i); j++) {
            block += ' ';
        }

        for (let k = 0; k <= i; k++) {
            block += '*';
        }

        arr[i] = block;
    }

    return arr;
}

function generateSecondPyramid(height) {
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

generatePyramids(4);
