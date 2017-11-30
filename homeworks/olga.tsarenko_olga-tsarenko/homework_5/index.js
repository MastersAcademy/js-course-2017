const startTime = Date.now();
let second = 1000;
let minute = second * 60;
let milSec = second / 1000;

setInterval(
    ()=>{
        const currentTime = Date.now();
        const diff = Number(currentTime - startTime);
        let minutes = Math.floor((diff % (1000 * 60 * 60)) / minute);
        let seconds = Math.floor(diff % minute / second);
        let milSeconds = Math.floor(diff % second / milSec);
        console.log('\033c');
        console.log ( 'timer ' + minutes + ':' + seconds + ':'  + milSeconds);
    }, 10);