const ARGV = process.argv;
const ERROR = "You must enter only one command-line argument, it must be a positive integer less than 50!";

if ( validateInput(ARGV) ) {
    bildPyramid(ARGV[2]);
} else {
    console.log(ERROR);
}

function bildPyramid (height) {
    for (let i = 0; i < height; i++) {
        let spaces = height - i - 1;
        let blocks = i + 1;
        let row = " ".repeat(spaces) + "#".repeat(blocks) + "  " + "#".repeat(blocks);
        console.log(row);
    }
}

function validateInput (argv) {
    return argv.length === 3 && (+argv[2] ^ 0) === +argv[2] && argv[2] > 0 && argv[2] < 50;
}
