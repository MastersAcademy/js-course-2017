const readline = require('readline');
let values = [],
    timerId,
    timerValue,
    timerPaused;

readline.emitKeypressEvents(process.stdin);
process.stdin.setRawMode(true);
process.stdin.on('keypress', (str, key) => {

    // console.log(key);

    if (key.ctrl && key.name === 'c') {
        process.exit();
        console.log(values);
    }
    if (key.name === 'b') {
        const startTime = Date.now(),
            minute = 1000 * 60;
        timerId = setInterval(
            ()=>{
                const currentTime = Date.now();
                const diff = Number(currentTime - startTime);
                let minutes = Math.floor((diff % (1000 * 60 * 60)) / minute),
                    seconds = Math.floor(diff % minute / 1000),
                    milSeconds = Math.floor(diff % 1000);
                timerValue = `${minutes} : ${seconds} : ${milSeconds}`;
                console.clear();
                console.log (timerValue);
                timerPaused = currentTime;
            }, 50);
    }
    if (key.name === 's') {
        clearInterval(timerId);
        values.push(timerValue);
        for (let i = 0; i < values.length; i++) {
            let val = values[i];
            console.log(`${i+1}. ${val}`);
        }
    }
    if (key.name === 'c') {
        clearInterval(timerId);
        console.clear();
        values = [];
    }
    if (key.name === 'p') {
        clearInterval(timerId);
    }
    if (key.name === 'r') {
        const startPause = new Date(timerPaused),
            minute = 1000 * 60;
        timerId = setInterval(
            ()=>{
                const currentTime = Date.now();
                let diffPaused = Number(currentTime - startPause);
                let minutes = Math.floor((diffPaused % (1000 * 60 * 60)) / minute),
                    seconds = Math.floor(diffPaused % minute / 1000),
                    milSeconds = Math.floor(diffPaused % 1000);
                timerValue = `${minutes} : ${seconds} : ${milSeconds}`;
                console.clear();
                console.log (timerValue);
                timerPaused = currentTime;
            }, 50);
    }
});
console.log(`Press 'b' to begin timer
Press 'ctrl + c' to exit
Press 's' to stop
Press 'c' to clear
Press 'p' to pause
Press 'r' to restore`);
