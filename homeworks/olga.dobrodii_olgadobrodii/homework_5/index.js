let m = 0;
let s = 0;
let ms = 0;

let format = number => number < 10 ? "0" + number : number;
let formatMs = ms => ms < 10 ? "00" + ms : ms < 100 ? "0" + ms : ms;
let getTimer = () => `${format(m)}:${format(s)}.${formatMs(ms)}`; 

let timerId = setInterval(() => {
    
    if (ms === 1000){
        ms = 0;
    if (s === 60){
        s =0; ++m;
    }
    else {
        ++s;
    }
    }
    
    else {
        ++ms;
    }
console.log(m + ':' + s + '.' + ms);
}, 1);

	