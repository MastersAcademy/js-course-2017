function itemActivation(e){
    let allItems = document.querySelectorAll("button.items");

    function playAudio(srcSound){
        var audio = new Audio();
        audio.src = srcSound;
        audio.autoplay = true;
    }

    function clickActivation(element){
            element.classList.toggle('items-active');
            setTimeout(function(){
                element.classList.toggle('items-active');
            },100);
    }

    switch(e.keyCode || e){
        case 113:
        case "element1":
            clickActivation(allItems[0]);
            playAudio("sounds/boom.wav");
            break;
        case 119:
        case "element2":
            clickActivation(allItems[1]);
            playAudio("sounds/clap.wav");
            break;
        case 101:
        case "element3":
            clickActivation(allItems[2]);
            playAudio("sounds/snare.wav");
            break;
        case 97:
        case "element4":
            clickActivation(allItems[3]);
            playAudio("sounds/tink.wav");
            break;
        case 115:
        case "element5":
            clickActivation(allItems[4]);
            playAudio("sounds/tom.wav");
            break;
        case 100:
        case "element6":
            clickActivation(allItems[5]);
            playAudio("sounds/kick.wav");
            break;
        case 122:
        case "element7":
            clickActivation(allItems[6]);
            playAudio("sounds/openhat.wav");
            break;
        case 120:
        case "element8":
            clickActivation(allItems[7]);
            playAudio("sounds/ride.wav");
            break;
        case 99:
        case "element9":
            clickActivation(allItems[8]);
            playAudio("sounds/hihat.wav");
            break;
    }
}

function itemActivationOnClick(e){
    itemActivation(e.target.id);
}

addEventListener("keypress", itemActivation);
addEventListener("mousedown", itemActivationOnClick);
