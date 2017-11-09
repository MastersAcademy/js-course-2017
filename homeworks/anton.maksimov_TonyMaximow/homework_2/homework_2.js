const PYRAMID_HEIGHT = 4;
const BLOCK_CHAR = "#";
const DOUBLE_SPACE = "  ";

console.log("Height: " + PYRAMID_HEIGHT);

for (let i = 0; i < PYRAMID_HEIGHT; i++) {
    let omissions = PYRAMID_HEIGHT - i - 1;
    let renderBlocks = i + 1;
    let pyramidBuild = " ".repeat(omissions) + BLOCK_CHAR.repeat(renderBlocks) + DOUBLE_SPACE + BLOCK_CHAR.repeat(renderBlocks);
    
    console.log(pyramidBuild);
}
