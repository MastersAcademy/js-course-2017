const START = Date.now();
const readline = require('readline');
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

let second = 1000;
let minute = second * 60;
let milSec = second / 1000;
let isON = false;
let store;
let timestampsArr = [];

readline.emitKeypressEvents(process.stdin);

process.stdin.setRawMode(true);

function myTimer() {
    setInterval(
        () => {
            const currentTime = Date.now();
            const diff = Number(currentTime - START);
            let minutes = Math.floor((diff % (1000 * 60 * 60)) / minute);
            let seconds = Math.floor(diff % minute / second);
            let milSeconds = Math.floor(diff % second / milSec);
            let result = minutes + ':' + seconds + ':' + milSeconds;
            store = result;
            rl.output.write('\033[2J\033[0f');
            rl.write('To start timer press \'s\'. \n');
            rl.write('To remember current value press \'Space\'. \n');
            rl.write('To quit timer press \'f\'. \n');
            rl.write(result + '\r');
            if (timestampsArr.length) {
                timestampsArr.forEach((item, index) => rl.write(index + 1 + '.' + ' ' + item + '\r'));
            }
        }, 100);
}

rl.input.on('keypress', (str, key) => {
    if (key.name === 's' && isON === false) {
        isON = true;

        myTimer();

    } else if (key.name === 'space' && isON === true) {
        timestampsArr.push(store);
    } else if (key.name === 'f' && isON === true) {
        isON = false;
        rl.output.write('\033[2K\n');
        process.exit();
    }
});

rl.write('To start timer press \'s\'. \n');
rl.write('To remember current value press \'Space\'. \n');
rl.write('To quit timer press \'f\'. \n');
