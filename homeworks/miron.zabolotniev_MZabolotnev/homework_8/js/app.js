(function () {
    document.onkeydown = function key(event) {
        if ( check(event.key) ){
            buttonPress(event.key);
        }
    };
    document.onclick = function button(event) {
        if ( check(event.toElement.id) ){
            buttonPress(event.toElement.id);
        }
    };

    function buttonPress(id) {
        let button = document.getElementById(id);
        let sound = document.getElementById(`audio${id}`);
        button.style.cssText = "background-color: #db36a4";
        sound.currentTime = 0;
        sound.play();
        setTimeout(() => button.style.cssText = "background-color: lightskyblue", 150);
    }

    function check(val) {
        return /^[1-9]$/.test(val);
    }
})();