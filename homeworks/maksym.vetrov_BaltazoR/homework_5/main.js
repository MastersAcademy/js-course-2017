let startDate;
let interval;
let laps = '';
let timeNow;
let countLaps = 1;
let sPause = '';
let dateNow;
const help = '1 - start\n\t\t2 - stop\n\t\t3 - next lap\n\t\t4 - reset\n\t\t5 - pause\n\t\tq - quit';

function reset() {
    startDate = new Date();
    laps = '';
    countLaps = 1;
}

function startTimer() {
    if (startDate === undefined) reset();
    let ms;
    let sec;
    let min;

    dateNow = new Date() - startDate;
    if (sPause !== '') {
        dateNow = sPause;
        startDate = new Date() - sPause;
    }
    sPause = '';
    ms = Math.abs(Math.floor(dateNow) % 999);
    sec = Math.abs(Math.floor(dateNow / 1000) % 60);
    min = Math.abs(Math.floor(dateNow / 1000 / 60) % 60);
    if (ms.toString().length === 1) ms = '00' + ms;
    if (ms.toString().length === 2) ms = '0' + ms;
    if (sec.toString().length === 1) sec = '0' + sec;
    if (min.toString().length === 1) min = '0' + min;
    console.log('\033c');
    console.log(help.replace(/\n\t\t/g, ' ') + '\n');
    timeNow = min + ':' + sec + '.' + ms;
    console.log(timeNow);
    if (laps !== '') console.log(laps.trim());

}

function showTimer() {
    interval = setInterval(startTimer, 100);
}

function nextLap() {
    laps += countLaps + '. ' + timeNow + '\n';
    countLaps++;
}

function stopTimer() {
    clearInterval(interval);
    reset();
    startDate = undefined;
}

function pause() {
    clearInterval(interval);
    sPause = dateNow;
}

process.stdin.setRawMode(true);
process.stdin.on('readable', () => {
    const key = process.stdin.read();
    if (!key) return;
    const str = String(key);
    switch (str) {
        case 'null':
            break;
        case '1':
            showTimer();
            break;
        case '2':
            stopTimer();
            break;
        case '3':
            nextLap();
            break;
        case '4':
            reset();
            break;
        case '5':
            pause();
            break;
        case 'Q':
        case 'q':
            process.exit(0);
            break;
        default:
            console.log(str);
    }
});

console.log('\033c');
console.log('Welcome, press  ' + help);