function playKeySound(e) {
  let audio = document.querySelector(`audio[data-key="${e.keyCode}"]`);
  let key = document.querySelector(`.btn[data-key="${e.keyCode}"]`);
  if (!audio) return;
  audio.currentTime = 0;
  audio.play();
  key.classList.add('active');
}

function remoreTransition(e) {
  if (e.propertyName !== 'transform') return;
  this.classList.remove('active');
}

let keys = document.querySelectorAll('.btn');
keys.forEach(key => key.addEventListener('transitionend', remoreTransition));


let clickAudio = document.querySelectorAll(`audio`);
let clickkey = document.querySelectorAll(`.btn`);

function playClickSound(num) {
  for (let i = 0; i < clickAudio.length; i++) {
    if (num == clickAudio[i].dataset.key) {
      clickAudio[i].play();
      clickkey[i].classList.add('active');
    }
  }
}

(function onMouseClick() {
  for (let i = 0; i < clickkey.length; i++) {
    clickkey[i].addEventListener('mousedown', function() {
      playClickSound(this.dataset.key);
      this.classList.add('active');
    });
  }
})();

document.addEventListener('keydown', playKeySound);
