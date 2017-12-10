const readline = require('readline');
const milisecond = 1,
    timeCircle = 60,
    second = 1000 * milisecond,
    minute = timeCircle * second;
let values = [],
    timerId,
    timerValue,
    timerPaused,
    timerRun = false;
function timer() {
    const startTime = Date.now();
    timerRun = true;
    timerId = setInterval(
        ()=>{
            const currentTime = Date.now();
            const diff = Number(currentTime - startTime);
            let minutes = Math.floor((diff % (minute * timeCircle)) / minute),
                seconds = Math.floor(diff % minute / second),
                milSeconds = Math.floor(diff % second);
            timerValue = `${minutes} : ${seconds} : ${milSeconds}`;
            console.clear();
            console.log (timerValue);
            timerPaused = currentTime;
        }, second/timeCircle*2);
}
function clearTimer() {
    timerRun = false;
    clearInterval(timerId);
    console.clear();
    return values = [];
}
function stopTimer() {
    timerRun = false;
    clearInterval(timerId);
    if (!timerValue) {
        console.log('There is no value');
    }
    if (timerValue) {
        values.push(timerValue);
    }
    if (values.length !== 0) {
        for (let i = 0; i < values.length; i++) {
            let val = values[i];
            console.log(`${i+1}. ${val}`);
        }
    } else {
        console.log('There is no value');
    }
}
function restorePause() {
    const startPause = new Date(timerPaused);
    timerRun = true;
    timerId = setInterval(
        ()=>{
            const currentTime = Date.now();
            let diffPaused = Number(currentTime - startPause);
            let minutes = Math.floor((diffPaused % (minute * timeCircle)) / minute),
                seconds = Math.floor(diffPaused % minute / second),
                milSeconds = Math.floor(diffPaused % second);
            timerValue = `${minutes} : ${seconds} : ${milSeconds}`;
            console.clear();
            console.log (timerValue);
            timerPaused = startPause;
        }, second/timeCircle*2);
}
function pauseTimer() {
    timerRun = false;
    clearInterval(timerId);
}
readline.emitKeypressEvents(process.stdin);
process.stdin.setRawMode(true);
process.stdin.on('keypress', (str, key) => {
    if (key.ctrl && key.name === 'c') {
        process.exit();
    }
    if (key.name === 'b' && timerRun === false) {
        timer();
    }
    if (key.name === 's' && timerRun === true) {
        stopTimer();
    }
    if (key.name === 'c') {
        clearTimer();
    }
    if (key.name === 'p' && timerRun === true) {
        pauseTimer();
    }
    if (key.name === 'r' && timerRun === false) {
        restorePause();
    }
});
console.log(`Press 'b' to begin timer
Press 'ctrl + c' to exit
Press 's' to stop
Press 'c' to clear
Press 'p' to pause
Press 'r' to restore`);

