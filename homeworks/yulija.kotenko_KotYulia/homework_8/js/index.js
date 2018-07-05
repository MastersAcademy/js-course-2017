const tunes = ['./sounds/boom.wav', './sounds/clap.wav', './sounds/hihat.wav', './sounds/kick.wav', './sounds/openhat.wav', './sounds/ride.wav', './sounds/snare.wav', './sounds/tink.wav', './sounds/tom.wav'],
    keys = ['q','w', 'e', 'a', 's', 'd', 'z', 'x', 'c'],
    musicElements = document.getElementsByClassName('button-play'),
    arrayMusicElements = Array.from(musicElements);
let music = new Audio();

function startOnKey(event) {
    let keyName = event.code.slice(3).toLowerCase(),
        index = keys.indexOf(keyName);

    if (index !== -1) {
        let hasClassActive = document.getElementsByClassName('active');
        if (hasClassActive.length > 0) {
            hasClassActive[0].classList.remove('active');
        }

        arrayMusicElements[index].classList.add('active');
        music.src = tunes[index];
        music.play();
    } else {
        return;
    }
}

function startOnMouseClick() {
    let index = arrayMusicElements.indexOf(this);

    if (index !== -1) {
        music.src = tunes[index];
        music.play();
    } else {
        return;
    }
}

(function(doc){
    doc.addEventListener('keypress', (event) => {
        startOnKey.call(event.target, event);
    });
    doc.addEventListener('click', (event) => {
        if ( event.target.classList.contains('button-play') ) {
            startOnMouseClick.call(event.target, event);
        }
    });
})(document);