let globalTime = new Date();

setInterval(function() {
    let presentTime = new Date();
    let timer = new Date(presentTime - globalTime);
    let msec = timer.getMilliseconds();
    let sec = timer.getSeconds();
    let min = timer.getMinutes();
 
    if (msec < 100) {
        msec = '0' + msec;
    }
    
    if (sec < 10) {
        sec = '0' + sec;
    }
    
    if (min < 10) {
        min = '0' + min;
    }
    
    console.log('\033c');
    console.log('timer ' + min + ':' + sec + '.' + msec);
    
}, 100);

