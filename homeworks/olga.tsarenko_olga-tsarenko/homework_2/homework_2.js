let height = 4;
if (2 <= height <= 24) {

    let block = "#";

    let space = " ";

    for (let i = 1; i <= height; i++) {

        let rock = block.repeat(i);

        let canyon = space.repeat(2);

        let indentation = space.repeat(height - i);

        let result = indentation + rock + canyon + rock;

        console.log(result);

    }
}

