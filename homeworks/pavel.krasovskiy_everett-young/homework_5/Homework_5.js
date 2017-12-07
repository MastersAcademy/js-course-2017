let saveResult = [];
let timeResult;
let inter;
let currentDate = 0;
let pauseDate =  0;
let pauseStart = 0;
let pauseClick = false;

function resetTimer() {
    currentDate = new Date();
    saveResult = [];
    timeResult ='';
    pauseDate =  0;
    pauseStart = 0;
    clearInterval(inter);

    console.log('\033c');
    console.log('Timer Reset, press h for start; q - exit; s - save; ' +
                'f - Show save result; r - Reset timer;p - Pause timer');
}
function  showTime() {
    const DATE_CURRENT_MOMENT = new Date();
    let timeInterval = new Date(DATE_CURRENT_MOMENT - currentDate - pauseDate);
    let msecond = timeInterval.getMilliseconds();
    let second = timeInterval.getSeconds();
    let minute = timeInterval.getMinutes();

    if (msecond < 100 ) {
        msecond = '0' + msecond;
    }
    if (msecond < 10) {
        msecond = '0' + msecond;
    }
    if (second < 10) {
        second = '0' + second;
    }
    if (minute < 10) {
        minute = '0' + minute;
    }

    timeResult = minute + ':' + second + ':' + msecond;
    console.log(timeResult);
}

function pauseTimer() {
    if (!pauseClick){
        pauseStart = new Date();
        clearInterval(inter);
        console.log('Timer Pause, press p for continue');
    } else {
        pauseDate += new Date() - pauseStart;
        pauseStart = 0;

        clearInterval(inter);
        inter = setInterval(showTime, 10);
    }
    pauseClick = !pauseClick;
}

process.stdin.setRawMode(true);
process.stdin.on('readable', () => {
    const key = process.stdin.read();

    if (!key) return;

    let str = String(key);
    str = str.toLocaleLowerCase();

    switch (str) {
        case 'null':
            break;
        case 'h':
            currentDate = new Date();
            clearInterval(inter);
            inter = setInterval(showTime, 10);
            break;
        case 's':
            (timeResult) ? saveResult.push(timeResult):
                console.log('Timer not started!');
            break;
        case 'f':{
            saveResult.map(function(item,i) {
                return console.log(i + '. ' + item + '\n');
            });
        }
            break;
        case 'r':
            resetTimer();
            break;
        case 'p':
            pauseTimer();
            break;
        case 'q':
            process.exit();
            break;
        default:
            console.log(str);
    }
});
console.log('Welcome here, press h for start; q - exit; s - save; ' +
            'f - Show save result; r - Reset timer;p - Pause timer');
