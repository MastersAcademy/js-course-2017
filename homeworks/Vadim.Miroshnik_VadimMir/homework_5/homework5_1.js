
let start = new Date ();

let timerId = setInterval(function() {
  
    let end = new Date ();
    msec = Math.floor((end - start) % 1000);
    sec = Math.floor((end - start)/1000) % 60;
    min = Math.floor(((end - start) / 1000 / 60) % 60);
    if (msec.toString().length === 1) msec = '00' + msec;
    if (msec.toString().length === 2) msec = '0' + msec;
    if (sec.toString().length === 1) sec = '0' + sec;
    if (min.toString().length === 1) min = '0' + min;
    console.log(min + ':' + sec + '.' + msec);
}, 1000);

