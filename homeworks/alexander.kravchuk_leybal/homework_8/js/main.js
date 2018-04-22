(function() {
    const spinner = document.querySelector(".spinner")
    let items = document.querySelectorAll(".item");
    let audios = [];


    function playAudio(el) {
        let audio = new Audio(),
            title = el.getAttribute("data-audio")
            src = "audio/" + title + ".mp3";

        audio.src = src;
        audio.currentTime = 0;
        audio.loop = false;
        audio.play();

        items.forEach(function(item) {
            return item.classList.remove("active");
        });
        el.classList.add("active");
        if (!spinner.classList.contains("visible")) {
            spinner.classList.add("visible")
        }

        audios.push(audio);
    }

    function mouseEvent(e) {
         return playAudio(this);
    }

    items.forEach(function (el) {
        el.addEventListener("mousedown", mouseEvent, false);
    });

    function stopAudio() {
        audios.forEach(audio =>audio.pause());
        spinner.classList.remove("visible");
        items.forEach(item => item.classList.remove("active"));
    }

    function keyEvent(e) {
        switch(e.keyCode) {
            case 81: playAudio(items[0]); break;
            case 87: playAudio(items[1]); break;
            case 69: playAudio(items[2]); break;

            case 65: playAudio(items[3]); break;
            case 83: playAudio(items[4]); break;
            case 68: playAudio(items[5]); break;

            case 90: playAudio(items[6]); break;
            case 88: playAudio(items[7]); break;
            case 67: playAudio(items[8]); break;

            case 32: stopAudio(); break;
        }
    }

    window.addEventListener("keydown", keyEvent, false);
    document.querySelector(".stop").addEventListener("click", stopAudio, false);
})(); 