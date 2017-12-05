const DATE = new Date;

let minutes;
let seconds;
let milliseconds;
let resultTime;

function stopwatch() {
    setInterval(function(){
        let dateNow = new Date;
        resultTime = new Date (dateNow - DATE);
        minutes = resultTime.getMinutes();
        seconds = resultTime.getSeconds();
        milliseconds = resultTime.getMilliseconds();
        console.log(`${minutes}:${seconds}:${milliseconds}`);
    },30);
}

stopwatch();