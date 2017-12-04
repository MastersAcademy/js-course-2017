const initialDate = new Date;
let finalTime;
let minutes;
let milliseconds;
let seconds;
function getTime() {
    setInterval(function(){
        console.log('\33c');
        let currentDate = new Date;
        finalTime = new Date (currentDate - initialDate);
        minutes = finalTime.getMinutes();
        seconds = finalTime.getSeconds();
        milliseconds = finalTime.getMilliseconds();
        if(milliseconds < 100){
            milliseconds = '0' + milliseconds;
        }
        if(seconds < 10){
            seconds = '0' + seconds;
        }
        if (minutes < 10){
            minutes = '0' + minutes;
        }
        console.log('time: ' + minutes + ':' +seconds+':'+ milliseconds);
    },10)
}

getTime();
