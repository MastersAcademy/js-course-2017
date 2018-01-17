const playList = ['sounds/boom.wav', 'sounds/clap.wav', 'sounds/hihat.wav', 'sounds/kick.wav', 'sounds/openhat.wav', 'sounds/ride.wav', 'sounds/snare.wav', 'sounds/tink.wav', 'sounds/tom.wav'],
    btnNames = ['q', 'w', 'e', 'r', 't', 'y', 'u', 'i', 'o'];
let itemLabel = document.getElementsByClassName('item'),
    indexLabel = document.getElementsByClassName('item-index');

function setSoundOnclick(){
    let id = this.id,
        sound = playList[id],
        player = document.getElementById('audio');
    player.setAttribute('src', sound);
    player.play();
}

function playOnKey(event) {
    let keyCode = event.code.slice(3).toLowerCase(),
        player = document.getElementById('audio'),
        id,
        sound;
    btnNames.map( (elem) => {
        return elem.toLowerCase();
    });
    let pressedBtnIndex = btnNames.indexOf(keyCode);
    if (pressedBtnIndex !== -1) {
        id = pressedBtnIndex;
        sound = playList[id];
        player.setAttribute('src', sound);
        player.play();
    } else { return; }
}

function setContent(itemLabelList) {
    for (let i = 0; i < itemLabel.length; i++) {
        itemLabel[i].innerHTML = itemLabelList[i];
        indexLabel[i].innerHTML = `b${i}`;
    }
}
(function(doc){
    setContent(btnNames);
    let hasClass = function(el,className) {
        return (' ' + el.className + ' ').indexOf(' ' + className + ' ') > -1;
    };

    doc.addEventListener('click', (e) => {
        if (hasClass(e.target, 'item-wrap')){
            setSoundOnclick.call(e.target, e);
        }
    });
    doc.addEventListener('keydown', (e) => {
        playOnKey.call(e.target, e);
    });

})(document);
