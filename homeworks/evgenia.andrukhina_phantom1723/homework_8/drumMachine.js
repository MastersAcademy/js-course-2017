let key = document.querySelectorAll('.key');
let audio = document.querySelectorAll('.audio');

function removeClass() {
    addEventListener('keyup', function () {
        for (let i = 0; i < key.length; i++) {
            key[i].classList.remove('active');
        }
    });
}
function playAudio(num) {
    for (let i = 0; i < audio.length; i++) {
        if (num == audio[i].dataset.key) {
            audio[i].play();
            key[i].classList.add('active');
        }
    }
    removeClass();
}

(function onMouseClick() {
    for (let i = 0; i < key.length; i++) {
        key[i].addEventListener('mousedown', function () {
            playAudio(this.dataset.key);
            this.classList.add('active');
        });

        addEventListener('mouseup', function () {
            key[i].classList.remove('active');
        });
    }
})();

function onKeydown(e) {
    switch (e.keyCode) {
        case 81:
            playAudio(81);
            break;
        case 87:
            playAudio(87);
            break;
        case 69:
            playAudio(69);
            break;
        case 65:
            playAudio(65);
            break;
        case 83:
            playAudio(83);
            break;
        case 68:
            playAudio(68);
            break;
        case 90:
            playAudio(90);
            break;
        case 88:
            playAudio(88);
            break;
        case 67:
            playAudio(67);
            break;
    }
}

addEventListener('keydown', function (e) {
    onKeydown(e);
});
