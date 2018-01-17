function cartoon() {
    document.getElementById('drumOne').play();
}

let drum1 = document.getElementById('drum1');

drum1.onmousedown = function(event) {
    this.style.background = '#DC143C';
    this.style.border = '3px solid #FF0000';
    cartoon();
}

drum1.onmouseup = function () {
    this.style.background = '#8A2BE2';
    this.style.border = '3px solid #4B0082';
}


function clap() {
    document.getElementById('drumTwo').play();
}

let drum2 = document.getElementById('drum2');

drum2.onmousedown = function(event) {
    this.style.background = '#DC143C';
    this.style.border = '3px solid #FF0000';
    clap();
}

drum2.onmouseup = function () {
    this.style.background = '#8A2BE2';
    this.style.border = '3px solid #4B0082';
}


function hihat() {
    document.getElementById('drumThree').play();
}

let drum3 = document.getElementById('drum3');

drum3.onmousedown = function(event) {
    this.style.background = '#DC143C';
    this.style.border = '3px solid #FF0000';
    hihat();
}

drum3.onmouseup = function () {
    this.style.background = '#8A2BE2';
    this.style.border = '3px solid #4B0082';
}


function kick() {
    document.getElementById('drumFour').play();
}

let drum4 = document.getElementById('drum4');

drum4.onmousedown = function(event) {
    this.style.background = '#DC143C';
    this.style.border = '3px solid #FF0000';
    kick();
}

drum4.onmouseup = function () {
    this.style.background = '#8A2BE2';
    this.style.border = '3px solid #4B0082';
}


function openhat() {
    document.getElementById('drumFive').play();
}

let drum5 = document.getElementById('drum5');

drum5.onmousedown = function(event) {
    this.style.background = '#DC143C';
    this.style.border = '3px solid #FF0000';
    openhat();
}

drum5.onmouseup = function () {
    this.style.background = '#8A2BE2';
    this.style.border = '3px solid #4B0082';
}


function ride() {
    document.getElementById('drumSix').play();
}

let drum6 = document.getElementById('drum6');

drum6.onmousedown = function(event) {
    this.style.background = '#DC143C';
    this.style.border = '3px solid #FF0000';
    ride();
}

drum6.onmouseup = function () {
    this.style.background = '#8A2BE2';
    this.style.border = '3px solid #4B0082';
}


function snare() {
    document.getElementById('drumSeven').play();
}

let drum7 = document.getElementById('drum7');

drum7.onmousedown = function(event) {
    this.style.background = '#DC143C';
    this.style.border = '3px solid #FF0000';
    snare();
}

drum7.onmouseup = function () {
    this.style.background = '#8A2BE2';
    this.style.border = '3px solid #4B0082';
}


function tink() {
    document.getElementById('drumEight').play();
}

let drum8 = document.getElementById('drum8');

drum8.onmousedown = function(event) {
    this.style.background = '#DC143C';
    this.style.border = '3px solid #FF0000';
    tink();
}

drum8.onmouseup = function () {
    this.style.background = '#8A2BE2';
    this.style.border = '3px solid #4B0082';
}


function tom() {
    document.getElementById('drumNine').play();
}

let drum9 = document.getElementById('drum9');

drum9.onmousedown = function(event) {
    this.style.background = '#DC143C';
    this.style.border = '3px solid #FF0000';
    tom();
}

drum9.onmouseup = function () {
    this.style.background = '#8A2BE2';
    this.style.border = '3px solid #4B0082';
}


document.onkeypress = function(event) {
    if (event.key == 'q' || event.key == 'й') {
        cartoon();
        drum1.onmousedown();
    }
    else if (event.key == 'w' || event.key == 'ц') {
        clap();
        drum2.onmousedown();
    }
    else if (event.key == 'e' || event.key == 'у') {
        hihat();
        drum3.onmousedown();
    }
    else if (event.key == 'a' || event.key == 'ф') {
        kick();
        drum4.onmousedown();
    }
    else if (event.key == 's' || event.key == 'і' || event.key == 'ы') {
        openhat();
        drum5.onmousedown();
    }
    else if (event.key == 'd' || event.key == 'в') {
        ride();
        drum6.onmousedown();
    }
    else if (event.key == 'z' || event.key == 'я') {
        snare();
        drum7.onmousedown();
    }
    else if (event.key == 'x' || event.key == 'ч') {
        tink();
        drum8.onmousedown();
    }
    else if (event.key == 'c' || event.key == 'с') {
        tom();
        drum9.onmousedown();
    }
}

document.onkeyup = function(event) {
    if (event.key == 'q' || event.key == 'й') {
        drum1.onmouseup();
    }
    if (event.key == 'w' || event.key == 'ц') {
        drum2.onmouseup();
    }
    if (event.key == 'e' || event.key == 'у') {
        drum3.onmouseup();
    }
    if (event.key == 'a' || event.key == 'ф') {
        drum4.onmouseup();
    }
    if (event.key == 's' || event.key == 'і' || event.key == 'ы') {
        drum5.onmouseup();
    }
    if (event.key == 'd' || event.key == 'в') {
        drum6.onmouseup();
    }
    if (event.key == 'z' || event.key == 'я') {
        drum7.onmouseup();
    }
    if (event.key == 'x' || event.key == 'ч') {
        drum8.onmouseup();
    }
    if (event.key == 'c' || event.key == 'с') {
        drum9.onmouseup();
    }
}


    
