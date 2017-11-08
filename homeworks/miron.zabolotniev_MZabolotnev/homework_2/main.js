let height = 4;

for (let i = 0; i < height; i++) {
    let spaces = height - i - 1;
    let blocks = i + 1;
    let row = " ".repeat(spaces) + "#".repeat(blocks) + "  " + "#".repeat(blocks);
    console.log(row);
}
