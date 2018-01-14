let initialDate = new Date;
let timerId;
function getTime() {
    var currentDate = new Date;
    let timer = new Date(currentDate - initialDate);
    let milliseconds = timer.getMilliseconds();
    let seconds = timer.getSeconds();
    let minutes = timer.getMinutes();
    let hours = timer.getUTCHours();

    if (milliseconds < 100) {
        milliseconds = '0' + milliseconds;
    }
    if (seconds < 10) {
        seconds = '0' + seconds;
    }
    if (minutes < 10) {
        minutes = '0' + minutes;
    }
    if (hours < 10) {
        hours = '0' + hours;
    }
    let timeResult = minutes + ':' + seconds + ':' + milliseconds;
    console.log(timeResult);
}

function displayTimer() {
    timerId = setInterval(getTime, 100);
};
displayTimer();
 