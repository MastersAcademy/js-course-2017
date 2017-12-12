let timer = 0,
    startDate = 0,
    pauseStart = 0,
    pause = 0;

function showTimer() {
    timer = setInterval(function () {
        interval = new Date() - startDate;
        interval -= pause;

        mSec = Math.abs(interval);
        sec = Math.abs(Math.floor(interval / 1000) % 60);
        min = Math.abs(Math.floor(interval / 1000 / 60) % 60);
        if (mSec >= 1000) {
            mSec = mSec - (Math.floor(interval / 1000) * 1000);
        }
        if (mSec.toString().length === 1) {
            mSec = '00' + mSec
        } else if (mSec.toString().length === 2) {
            mSec = '0' + mSec
        }
        if (sec.toString().length === 1) {
            sec = '0' + sec;
        }
        if (min.toString().length === 1) {
            min = '0' + min;
        }
        console.clear();
        console.log(min + ':' + sec + ':' + mSec);
    }, 4);

    return true;
}


function startTimer() {
    let interval = 0,
        mSec = 0,
        sec = 0,
        min = 0;

    startDate = new Date();
    pauseStart = 0;
    pause = 0;
    console.log('00:00:0000');
    clearInterval(timer);

    showTimer();

    return true;
}

function stopTimer() {
    if (!startDate) return;

    clearInterval(timer);
    startDate = 0;
    pauseStart = 0;
    pause = 0;
    console.log('You stopped the timer.\nPress 1 for start a new timer or h for help');

    return true;
}

function pauseTimer() {
    if (!startDate) return;

    if (!pauseStart) {
        pauseStart = new Date();
        clearInterval(timer);
        console.log('pause...\nPress 3 for continue or 1 for start new timer');
    } else {
        let diff = new Date() - pauseStart;
        pause += diff;
        pauseStart = 0;
        showTimer();
    }

    return true;
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
            startTimer();
            break;
        case '2':
            stopTimer();
            break;
        case '3':
            pauseTimer();
            break;
        case 'H':
        case 'h':
            console.log('This is help.\nPress\n\t1 for start timer\n\t2 for stop timer\n\t3 for pause/continue timer' +
            '\n\tq for interrupt, and\n\th for this help\n\tc for clear terminal');
            break;
        case 'C':
        case 'c':
            console.log('\x1Bc');
            break;
        case 'Q':
        case 'q':
            process.exit(0);
        default:
            console.log(str);
    }
});

console.log('Welcome here, press h for help'); 