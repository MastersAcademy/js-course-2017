let time = new Date();

setInterval(() => {
    let realTimerTime = new Date();
    let timer = new Date(realTimerTime - time);
    let minutes = timer.getMinutes();
    let seconds = timer.getSeconds();
    let milliSeconds = timer.getMilliseconds();

    minutes < 10 ? (minutes = '0' + minutes) : minutes;
    seconds < 10 ? (seconds = '0' + seconds) : seconds;
    milliSeconds < 100 ? (milliSeconds = '0' + milliSeconds) : milliSeconds;

    console.clear();
    console.log(minutes + ':' + seconds + '.' + milliSeconds);
}, 100);
