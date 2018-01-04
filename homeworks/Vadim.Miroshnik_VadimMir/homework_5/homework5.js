
let start = new Date ();
let timerId;
let i = 0;
let y = 0;;
let end = 0;
let pauseTime = 0;
let saveTime = 0;

function timer() {
    console.clear();
    end = new Date ();
    console.log(pauseTime);
    msec = Math.floor(((end - start ) +  pauseTime) % 1000);
    sec = Math.floor(((end - start) +  pauseTime )/1000) % 60;
    min = Math.floor((((end  - start) +  pauseTime) / 1000 / 60) % 60);
    if (msec.toString().length === 1) msec = '00' + msec;
    if (msec.toString().length === 2) msec = '0' + msec;
    if (sec.toString().length === 1) sec = '0' + sec;
    if (min.toString().length === 1) min = '0' + min;
    console.log('This is help.Press p for pause, Press 2 for stop, Press 3 for reset, Press q for exit');
    console.log (min + ':' + sec + '.' + msec);
}

function startTimer(){
    timerId = setInterval(timer, 100);
}

function stop() {
    clearInterval(timerId);
}

function reset (timer){
    start =  new Date ();
}

function pause(){
    if (i % 2 === 0) stop();
    if( y % 2 === 1){
     saveTime = new Date ();  
     pauseTime = pauseTime + (end - saveTime);
    }
    if (i % 2 === 1) startTimer ();
}    

process.stdin.setRawMode ( true );
process.stdin.on('readable', () => {
    const key = process.stdin.read();

    if (!key) return;

    const str = String(key);

    switch (str) {
        case 'null':
            break;
        case '1':
            startTimer ();
            break;
        case '2':
            stop ();
            break;
        case '3':
            reset ();
            break;
        case 'p':
            pause ();
            i ++;
            y ++; 
            break;
        case 'q':
            process.exit(0);
            break;
        default:
            console.log(str);
    }

});

console.log('\033c');
console.log('Welcome here, press 1 for start');