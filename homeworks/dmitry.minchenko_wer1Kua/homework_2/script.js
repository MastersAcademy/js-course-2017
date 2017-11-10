let height = 4,
    block = '#',
    space = ' ';

if (height>=2) {
    for (let i = 0; i < height; i++) {
        console.log(space.repeat(height-i) + block.repeat(i+1) + space.repeat(2) + block.repeat(1+i));
    }
} else {
    console.log('Error! Height must be >= 2')
}