const readline = require('readline');
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

let numbers = 0;
let pauseTime;
let arr = [];
let startTime,
    minutes,
    second,
    millisecond;

function stopWatch() {
    const dateMinus = Date.now();
    startTime = new Date (dateMinus - thisDate);
    minutes = startTime.getMinutes();
    second = startTime.getSeconds();
    millisecond = startTime.getMilliseconds();
    if( millisecond < 100){
        millisecond = '0' + millisecond;
    }
    if( second < 10){
        second = '0' +second;
    }
    if(minutes < 10){
        minutes = '0' + minutes;
    }
    console.log(minutes + ':' + second + ':' + millisecond);
    return minutes + ':' + second + ':' + millisecond;
}

function start(){
    if( numbers === 0){
    numbers = 1;
    thisDate = new Date();
    interval = setInterval(stopWatch, 10);
    arr = [];
    }
};

function saveTime(){
    if(numbers === 1){
    let num = stopWatch();
    arr.push(num)
    }
};

function stop(){
    if(numbers === 1){
    clearInterval(interval);
    numbers = 0;
    }
};

function showSave(){
    arr.forEach(function(element, i){
        console.log(i + ". " + element);
    });
};

process.stdin.on('keypress', key => {
    if (key === "1") {
        start();
    } else if (key === "2") {
        saveTime();
    } else if (key === "3") {
        stop();
    } else if (key === "4") {
        console.log()
        showSave()
    } else if (key === "e") {
        process.exit();
    }
});

 console.log("Press \n\'1' to start \n\'2' to save time \n\'3' to stop \n\'4' to look save time \n\'e' to Exit")
