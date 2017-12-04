/**
 * Created by User on 03.12.2017.
 */
let startTime = new Date().getTime(),
    interval,
    contPauseWatcher = false,
    pausedTime = 0,
    startPause = 0;

function showTimer(msec, sec, min) {

    if (min < 10 && sec < 10) {
        console.log('0' + min + ':0' + sec + ':' + msec);
    } else if (min >= 10 && sec < 10) {
        console.log(min + ':0' + sec + ':' + msec);
    } else if (min < 10 && sec >= 10) {
        console.log('0' + min + ':' + sec + ':' + msec);
    } else if (min >= 10 && sec >= 10 && msec < 10) {
        console.log('0' + min + ':' + sec + ':00' + msec);
    } else if (min >= 10 && sec >= 10 && msec < 100 && msec >= 10) {
        console.log('0' + min + ':' + sec + ':0' + msec);
    } else console.log(min + ':' + sec + ':' + msec);

}

function startTimer(start) {
    interval = setInterval(() => {
        console.clear();

        timePassed = Math.abs(new Date().getTime() - start - pausedTime);

        let msec = timePassed % 1000;
        let sec = Math.floor(timePassed / 1000) % 60;
        let min = Math.floor(timePassed / 1000 / 60) % 60;

        showTimer(msec, sec, min);
        console.log('Press 2 to stop the timer. Press 3 to pause the timer. Press "e" to exit.');
    }, 10);
}

function pauseTimer() {

    if (!contPauseWatcher) {
        clearInterval(interval);
        startPause = new Date().getTime();
        console.log('Press 3 to continue the timer. Press "e" to exit.');

    } else {
        pausedTime += new Date().getTime() - startPause;
        startPause = 0;
        startTimer(startTime);
    }

    contPauseWatcher = !contPauseWatcher;
}

function stopTimer() {
    clearInterval(interval);
    pausedTime = 0;
    console.clear();

    console.log('Press 1 to start a new timer. Press "e" to exit.');
}

function control() {
    process.stdin.setRawMode(true);

    process.stdin.on('readable', () => {
        const key = process.stdin.read();

        if (!key) return;
        const strKey = String(key).toLowerCase();

        switch (strKey) {
            case '1':
                startTimer(new Date().getTime());
                break;
            case '2':
                stopTimer();
                break;
            case '3':
                pauseTimer();
                break;
            case 'e':
                process.exit(0);

        }
    });
}

startTimer(startTime);
control();