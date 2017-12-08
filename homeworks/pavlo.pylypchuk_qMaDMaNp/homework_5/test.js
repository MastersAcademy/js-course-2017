function startTimer() {

  let milliseconds = 0,
    seconds = 0,
    minutes = 0,
    zeroS = 0,
    zeroM = 0;

  function msHandler() {

    if (milliseconds === 1001) {
      milliseconds = 1;
      seconds++;
    }

  }

  function sHandler() {

    if (seconds === 10) {
      zeroS = '';
    }
    if (seconds === 60) {
      minutes++;
      seconds = 0;
      zeroS = 0;
    }

  }

  function mHandler() {

    if (minutes === 10) {
      zeroM = '';
    }

  }

  function init() {

    console.log('\033c');
    milliseconds++;

    msHandler();
    sHandler();
    mHandler();

    console.log(zeroM + '' + minutes + ':' + zeroS + '' + seconds + '.' + milliseconds);
  }

  setInterval(init, 1);
}

startTimer();
