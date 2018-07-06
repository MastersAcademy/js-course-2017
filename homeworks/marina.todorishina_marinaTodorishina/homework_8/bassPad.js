let patterns = {
    area: `
        
        <article id="main-area" class="container">
            
        </article>`
}

function dataRenderer() {

    this.render = function () {
        document.getElementById('main-content').innerHTML = patterns.area;

        let btns = generateBtns(),
            mainArea = document.getElementById('main-area');

        btns.forEach(function (item) {
            mainArea.appendChild(item);
        });

        renderAudios();
    }
}

function renderAudios() {
    for (let i = 1; i <= 9; i++) {
        let audio = document.createElement(`audio`);
        audio.id = `audio-${i}`;
        let source = document.createElement('source');
        source.src = `sounds/${i}.mp3`;
        source.type = 'audio/mpeg';
        audio.appendChild(source);
        document.body.appendChild(audio);
    }
}

function generateBtns() {
    let btnsArr = [],
        btn = '',
        keys = ['q', 'w', 'e', 'a', 's', 'd', 'z', 'x', 'c'];

    for (let i = 0; i < 9; i++) {
        btn = document.createElement('button');
        btn.name = 'b' + (i + 1);
        btn.innerText = keys[i] + '\n' + btn.name;
        setEvetListeners(btn);
        btnsArr[i] = btn;
    }

    return btnsArr;
}

function setEvetListeners(btn) {
    btn.onclick = function (event) {
        handleMouseClicks(event);
        handleBtnClicks(event);
    }
}

function handleBtnClicks(e) {

    let keysCodes = [81, 87, 69, 65, 83, 68, 90, 88, 67],
        index = keysCodes.indexOf(e.keyCode),
        btns = document.getElementsByTagName('button');

    if (index !== -1) {
        document.getElementById(`audio-${index + 1}`).play();
    }

    for (let i = 0; i < 9; i++) {
        if (e.key.toLowerCase() + '\n' + btns[i].name === btns[i].innerText) {
            btns[i].classList.add('border-light');
            setTimeout(function () {
                btns[i].classList.remove('border-light');
            }, 500);
        }
    }
}

function handleMouseClicks(e) {
    let btns = document.querySelectorAll('button'),
        sounds = document.querySelectorAll('audio');

    btns.forEach(function (val, key) {
        // val.addEventListener('onclick', function () {
            sounds[key].play();
        // })
    })

    e.currentTarget.classList.add('border-light');

    setTimeout(function () {
        btns.forEach(function (val) {
            val.classList.remove('border-light');
        })
    }, 500);
}

function init() {
    let renderer = new dataRenderer();
    renderer.render();

    window.onkeydown = function (event) {
        handleBtnClicks(event);
    }
}

init();

