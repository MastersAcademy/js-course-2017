(function() {

    let dramSound = new Audio;
    let dramKey = document.getElementsByClassName('box-sound')[0].children;

    function playAudio(id){
        let sound = document.getElementById(id);
        let soundName = sound.getAttribute('data-sound');

        dramSound.src = 'sounds/' + soundName + '.wav';
        sound.classList.add('presKey');
        dramSound.currentTime = 0;
        dramSound.play();
    }

    function playAudioMause(){
        let soundName = this.getAttribute('data-sound');

        dramSound.src = 'sounds/' + soundName + '.wav';
        dramSound.currentTime = 0;
        dramSound.play();
    }

    document.onkeydown = function(eventObject){

        switch(eventObject.keyCode) {
            case 81: playAudio('b1'); break;
            case 87: playAudio('b2'); break;
            case 69: playAudio('b3'); break;
            case 65: playAudio('b4'); break;
            case 83: playAudio('b5'); break;
            case 68: playAudio('b6'); break;
            case 90: playAudio('b7'); break;
            case 88: playAudio('b8'); break;
            case 67: playAudio('b9'); break;
        }
    };

    for (var i = 0; i < dramKey.length; i++) {
        dramKey[i].addEventListener('click', playAudioMause);
    }

    function removeClass(id){
        return document.getElementById(id).classList.remove('presKey');
    }

    document.onkeyup = function(eventObject){

        switch(eventObject.keyCode) {
            case 81: removeClass('b1'); break;
            case 87: removeClass('b2'); break;
            case 69: removeClass('b3'); break;
            case 65: removeClass('b4'); break;
            case 83: removeClass('b5'); break;
            case 68: removeClass('b6'); break;
            case 90: removeClass('b7'); break;
            case 88: removeClass('b8'); break;
            case 67: removeClass('b9'); break;
        }

    };

})();
