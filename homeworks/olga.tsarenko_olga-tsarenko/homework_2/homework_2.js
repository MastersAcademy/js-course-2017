const height = 4;
if (height >=2 && height <= 24) {
    const block = '#';
    const space = ' ';

    for (let i = 1; i <= height; i++) {
        let rock = block.repeat(i),
            canyon = space.repeat(2),
            indentation = space.repeat(height - i),
            result = indentation + rock + canyon + rock;
        console.log(result);
    }
}
console.log('height is', height);
