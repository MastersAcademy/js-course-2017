function buildPyramid(floors) {
    const block = '#';
    const edge = ' ';

    if (floors < 2) {
        console.log('This is not a pyramid');
    }

    for (f = 1; f <= floors; f++) {
        let edgePyramid = edge.repeat(floors - f);
        let floorPyramid = block.repeat(f);
        let buildPyramidFloor = edgePyramid + floorPyramid + '  ' + floorPyramid;
        console.log(buildPyramidFloor);

    }

}

buildPyramid(40);