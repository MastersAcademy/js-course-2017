let time = new Date();
let s = 1000;

let ms = s / 1000;
let m = s * 60;
let res = "0 0 0";
let start = false;
let startTimer;
let list = [];
let interval = 0;

function showTimer() {
    interval = new Date() - time;
    let milSeconds = Math.floor(interval % s / ms);
    let minutes =  Math.floor((interval % (1000 * 60 * 60)) / m);
    let seconds = Math.floor(interval % m / s );

    console.log(res);
    res = minutes+" "+seconds+" "+milSeconds;
}

function showInformation(array){
    console.log("You save :");
    for(var i = 0 ; i < array.length ; i++){
        console.log(i,array[i]);
    }
}
    if(process.stdin.isTTY) {
        process.stdin.setRawMode(true);
    }

    process.stdin.on('readable', () => {
        let key = String(process.stdin.read());
        if (!key) return;
        let str = String(key).toLocaleLowerCase();
        start = true;
        switch (str) {
            case 'q':
                if(start){
                    startTimer = setInterval(showTimer,5);
                    start = false;
                }
                break;
            case 's':
                list.push(res);+
                console.log(res);
                break;
            case 'w':
                clearInterval(startTimer);
                showInformation(list);
                process.exit(0);
                break;
            case 'e':
                console.log("exit");
                process.exit(0);
                break;
            default:
                console.log(" Please enter a key : \n q - start \n s - save \n w - show \n e - exit")
        }
    });

