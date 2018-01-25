const readline = require('readline');

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

let timerId;
let startTime = Date.now();

let currentTimeout;
const savedTimeouts = [];

(function timer() {

    const now = Date.now();
    const diff = now - startTime;

    let ms = diff % 1000;
    let s  = Math.floor(diff / 1000) % 60;
    let m  = Math.floor(diff / 60000) % 60;

    ms = ms.toString().padStart(3, '0');
    s  = s .toString().padStart(2, '0');
    m  = m .toString().padStart(2, '0');

    console.clear();

    currentTimeout = `${m}:${s}.${ms}`;
    console.log(currentTimeout);
    savedTimeouts.forEach((timeout, index) => console.log(`${index + 1}. ${timeout}`));

    timerId = setTimeout(timer, 15);
})();

rl.on('line', () => {
    if (savedTimeouts.length < 3) {
        savedTimeouts.unshift(currentTimeout);
        startTime = Date.now();
    } else {
        clearTimeout(timerId);
        rl.close();
    }
});