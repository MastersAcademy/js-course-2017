let ms = 0;
let s = 0;
let m = 0;
let h = 0;

const timerId = setInterval(timeout, 1);

function timeout() {
    ms+=1;
    if (ms === 1000) {
        ms=0;
        s++;
    }

    if (s === 60) {
        s=0;
        m++;
    }

    if (m === 60) {
        m=0;
        h++;
    }

    if (h === 24) {
        clearInterval(timerId);
    }

    console.clear();
    console.log(
      `  ${(h < 10) ? `0${h}` : h}:` +
        `${(m < 10) ? `0${m}` : m}:` + 
        `${(s < 10) ? `0${s}` : s}.` +
        ms)
}

