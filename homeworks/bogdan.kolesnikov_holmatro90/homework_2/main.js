function buildPyramid(floors) {
    const block = '#';
    hole = ' ';

    if (floors < 2) {
        console.log('This is not a pyramid');
    }

    for (f = 1; f <= floors; f++) {
        var corner = hole.repeat(floors - f),
            floor = block.repeat(f),
            build = corner + floor + hole + floor;
        console.log(build);

    }

}

buildPyramid(4);