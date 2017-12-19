let date1 = new Date();

let timer = setInterval(function(){
    console.clear();
    let date2 = new Date();
    let valueTimer = new Date(date2 - date1);
    let milliseconds = valueTimer.getMilliseconds();
    let seconds = valueTimer.getSeconds();
    let minutes = valueTimer.getMinutes();

    if(milliseconds < 100){
        milliseconds = '0' + milliseconds;
    }
    if(seconds < 10){
        seconds = '0' + seconds;
    }
    if (minutes < 10){
        minutes = '0' + minutes;
    }

    console.log(minutes+':'+seconds+'.'+milliseconds);
}, 100);


