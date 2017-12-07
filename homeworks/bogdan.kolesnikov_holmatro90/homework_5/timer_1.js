let beginingTime = Date.now();
let minutes = 1000 * 60;
let consoleReset = function () {
    return process.stdout.write('\x1Bc');
};

setInterval(() => {
    let startTime = Date.now();
    let different = Number(startTime - beginingTime);
    let minut = Math.floor((different % (1000*60*60)) / minutes);
    let second = Math.floor(different % minutes / 1000);
    let mSec = Math.floor(different % 1000 );
    consoleReset();
    console.log(minut +':'+ second +':'+ mSec);


}, 128);


