let key = document.querySelectorAll('.key');
let audio = document.querySelectorAll('.audio');

function removeClass(key) {
    setTimeout(() => { key.classList.remove('active'); }, 500);
}

function playAudio(num) {
    for (let i = 0; i < audio.length; i++) {
        if (num == audio[i].dataset.key) {
            audio[i].play();
            key[i].classList.add('active');
            removeClass(key[i]);
        }
    }
}

(function onMouseClick() {
    for (let i = 0; i < key.length; i++) {
        key[i].addEventListener('mousedown', function () {
            playAudio(this.dataset.key);
            this.classList.add('active');
            removeClass(key[i]);
        });
    }
})();

function onKeydown(e) {
    let keyCodes = [81, 87, 69, 65, 83, 68, 90, 88, 67];

    for(let i = 0; i < keyCodes.length; i++) {
        if (e.keyCode === keyCodes[i]) {
            playAudio(e.keyCode);
        }
    }
}

addEventListener('keydown', function (e) {
    onKeydown(e);
});