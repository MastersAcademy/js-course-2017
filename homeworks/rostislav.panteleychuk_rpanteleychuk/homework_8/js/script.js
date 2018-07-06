//key press
function playSound(url){
    let s = new Audio();
    s.src = url;
    s.play();
}

$(document).keypress(function (e) {
    if (e.which == 81 || e.which == 113)
        playSound('sounds/boom.wav');
    if (e.which == 87 || e.which == 119)
        playSound('sounds/clap.wav');
    if (e.which == 69 || e.which == 101)
        playSound('sounds/hihat.wav');
    if (e.which == 82 || e.which == 114)
        playSound('sounds/kick.wav');
    if (e.which == 84 || e.which == 116)
        playSound('sounds/openhat.wav');
    if (e.which == 89 || e.which == 121)
        playSound('sounds/ride.wav');
    if (e.which == 85 || e.which == 117)
        playSound('sounds/snare.wav');
    if (e.which == 73 || e.which == 105)
        playSound('sounds/tink.wav');
    if (e.which == 79 || e.which == 111)
        playSound('sounds/tom.wav');
})




//mouse click
function soundClickQ() {
    let audio = new Audio();
    audio.src = 'sounds/boom.wav';
    audio.autoplay = true;
}
function soundClickW() {
    let audio = new Audio();
    audio.src = 'sounds/clap.wav';
    audio.autoplay = true;
}
function soundClickE() {
    let audio = new Audio();
    audio.src = 'sounds/hihat.wav';
    audio.autoplay = true;
}
function soundClickR() {
    let audio = new Audio();
    audio.src = 'sounds/kick.wav';
    audio.autoplay = true;
}
function soundClickT() {
    let audio = new Audio();
    audio.src = 'sounds/openhat.wav';
    audio.autoplay = true;
}
function soundClickY() {
    let audio = new Audio();
    audio.src = 'sounds/ride.wav';
    audio.autoplay = true;
}
function soundClickU() {
    let audio = new Audio();
    audio.src = 'sounds/snare.wav';
    audio.autoplay = true;
}
function soundClickI() {
    let audio = new Audio();
    audio.src = 'sounds/tink.wav';
    audio.autoplay = true;
}
function soundClickO() {
    let audio = new Audio();
    audio.src = 'sounds/tom.wav';
    audio.autoplay = true;
}



