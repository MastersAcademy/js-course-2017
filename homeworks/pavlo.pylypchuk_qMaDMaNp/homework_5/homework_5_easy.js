let msecond = 0,
    second = 0,
    minute = 0;

function add() {
    msecond++
    if (msecond >= 1000) {
        msecond = 0;
        second++;
        if (second >= 60) {
            second = 0;
            minute++;
        }
    }

    process.stdout.write("\r" + minute + ":" + second + "." + msecond);

};

function timer() {
    setInterval(add, 1);
}

timer();