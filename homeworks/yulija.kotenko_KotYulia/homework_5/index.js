const RL = require('readline'),
    GO = Date.now(),
    INTERFACE = RL.createInterface({
        input: process.stdin,
        output: process.stdout
    });
let sec = 1000,
    min = sec * 60,
    ms = sec / 1000,
    including = false,
    remember,
    timeValues = [];

RL.emitKeypressEvents(process.stdin);
process.stdin.setRawMode(true);

function timer() {
    setInterval(
        () => {

            let timeNow = Date.now(),
                timeInterval = Number(timeNow - GO),
                minValue = Math.floor((timeInterval % (sec * 60 * 60)) / min),
                secValue = Math.floor(timeInterval % min / sec),
                msValue = Math.floor(timeInterval % sec / ms),
                time = minValue + ':' + secValue + ':' + msValue;

            remember = time;
            INTERFACE.output.write('\033[2J\033[0f');
            INTERFACE.write('Press \'g\' for start timer \n');
            INTERFACE.write('Press \'v\' for remember current time \n');
            INTERFACE.write('Press \'s\' for stop timer and exit \n');
            INTERFACE.write(time + '\r');

            if (timeValues.length) {
                timeValues.forEach((item, index) => INTERFACE.write(index + 1 + '.' + ' ' + item + '\r'));
            }

        }, 500);
}

INTERFACE.input.on('keypress', (str, key) => {

    if (key.name === 'g' && including === false) {
        including = true;
        timer();

    } else if (key.name === 'v' && including === true) {
        timeValues.push(remember);

    } else if (key.name === 's' && including === true) {
        including = false;
        INTERFACE.output.write('\033[2K\n');
        process.exit();
    }
});

INTERFACE.write('Press \'g\' for start timer \n');
INTERFACE.write('Press \'v\' for remember current time \n');
INTERFACE.write('Press \'s\' for stop timer and exit \n');