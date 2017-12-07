/*
    ----INSTRUCTION----

start/resume: r;
stop: z;
pause: p;
save time: s;
reset: c;
exit: q.

* */


function startTimer() {

    let milliseconds = 0,
        seconds = 0,
        minutes = 0,
        zeroS = 0,
        zeroM = 0,
        savedData = [],
        pausedTime = [],
        runInit;

    const readline = require('readline');

    function msHandler() {

        if (milliseconds === 1001) {
            milliseconds = 1;
            seconds++;
        }

    }

    function sHandler() {

        if (seconds === 10) {
            zeroS = '';
        }
        if (seconds === 60) {
            minutes++;
            seconds = 0;
            zeroS = 0;
        }

    }

    function mHandler() {

        if (minutes === 10) {
            zeroM = '';
        }
    }

    function displayAllSavedData() {

        for (let i = 0; i < savedData.length; i++) {
            console.log('\n' + (i + 1) + '. ' + savedData[i]);
        }
    }

    function saveTimerData() {

        savedData.push(zeroM + '' + minutes + ':' + zeroS + '' + seconds + '.' + milliseconds);
    }

    function init() {

        console.clear();
        console.log('\033c');
        milliseconds++;

        msHandler();
        sHandler();
        mHandler();

        console.log(zeroM + '' + minutes + ':' + zeroS + '' + seconds + '.' + milliseconds);
        if (savedData) {
            displayAllSavedData();
        }

    }

    readline.emitKeypressEvents(process.stdin);
    process.stdin.setRawMode(true);

    process.stdin.on('keypress', function (ch, key) {
        switch (key.name) {
            case 's':
                saveTimerData();
                break;
            case 'q':
                process.exit();
                break;
            case 'r':
                resumeTimer();
                break;
            case 'p':
                pauseTimer();
                break;
            case 'z':
                stopTimer();
                break;
            case 'c':
                resetTimer();
                break;
        }
    });

    function pauseTimer() {
        clearInterval(runInit);
        runInit = undefined;

        console.clear();
        console.log('\033c');

        pausedTime[0] = milliseconds;
        pausedTime[1] = seconds;
        pausedTime[2] = minutes;

        console.log(zeroM + '' + minutes + ':' + zeroS + '' + seconds + '.' + milliseconds);

        if (savedData.length > 0) {
            displayAllSavedData();
        }
    }

    function resumeTimer() {
        if (pausedTime.length > 0 && !runInit) {
            milliseconds = pausedTime[0];
            seconds = pausedTime[1];
            minutes = pausedTime[2];
        }
        if (!runInit) {
            runInit = setInterval(init, 1);
        }
    }

    function resetTimer() {
        milliseconds = 0;
        seconds = 0;
        minutes = 0;
    }

    function stopTimer() {
        milliseconds = 0;
        seconds = 0;
        minutes = 0;
        pauseTimer();
    }

    let instruction = '    ----INSTRUCTION----\n' +
        '    \n' +
        'start/resume: r\n' +
        'stop: z\n' +
        'pause: p\n' +
        'save time: s\n' +
        'reset: c\n' +
        'exit: q';

    console.log('00:00.000' + '\n' + instruction);
}

startTimer();

