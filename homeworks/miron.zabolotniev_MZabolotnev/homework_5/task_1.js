const readline = require('readline');

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

const PHRASES = {
    enter: "\x1b[37mPress button \x1b[35mR\x1b[37m to run timer," +
    " \x1b[35mP\x1b[37m to pause, \x1b[35mF\x1b[37m to screen," +
    " \x1b[35mG\x1b[37m to reset, \x1b[35mE\x1b[37m to exit:"
}
let startTimer = Date.now();
let state = "pause";
let sec = 1000;
let milSec = sec / 1000;
let min = sec * 60;
let actualTime = "";
let screen = "";
let scorer ="";
let pauseTime = 0;

process.stdin.on('keypress', key => {
    if (key === "f") {
        screen = actualTime;
    } else if (key === "p") {
        pauseTime = scorer;
        state = "pause";
    } else if (key === "r") {
        startTimer = Date.now() - pauseTime;
        state = "resume";
    } else if (key === "g") {
        startTimer = Date.now();
        state = "on";
    } else if (key === "e") {
        console.log('\x1Bc');
        process.exit();
    }
});

setInterval( () => {
    writeTimer(scorer, state);
}, 10);

function Timer(val) {
    let minutes = Math.floor( val % 3600000 / min);
    let seconds = Math.floor( val % min / sec );
    let milSeconds = Math.floor(val % sec / milSec);
    actualTime = minutes + ":" + seconds + ":" + milSeconds;
    return actualTime;

}function writeTimer(start, state) {
    scorer = Number( Date.now()- startTimer );
    console.log('\x1Bc');
    console.log(PHRASES.enter);
    if ( state === "pause") {
        console.log("\x1b[32m" + Timer(pauseTime) + "\x1b[33m PAUSE");
    } else  {
        console.log("\x1b[32m" + Timer(start) );
    }
    console.log("\x1b[37mScreen:\x1b[36m" + screen);
}
