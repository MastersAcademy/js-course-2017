let startTime = new Date();

let interval = setInterval(function(){
    console.clear();
    let currentTime = new Date();
    let timer = new Date(currentTime - startTime);
    let milliseconds = timer.getMilliseconds();
    let seconds = timer.getSeconds();
    let minutes = timer.getMinutes();

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
