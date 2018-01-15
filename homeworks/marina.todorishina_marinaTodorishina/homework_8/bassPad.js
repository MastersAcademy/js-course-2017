function padAreaPattern() {
    let html = `
        <main id="main-content">
        <article id="main-area" class="container">
            
</article>
</main>
    `;

    return ['padArea', html];
}

function dataRenderer(pattern) {


    this.render = function () {
        if (pattern[0] === 'padArea') {
            document.body.innerHTML = pattern[1];

        }

        if (pattern[0] === 'btns') {
            let btnName = generateBtns(),
                btns = [],
                mainArea = document.getElementById('main-area');

            for (let i = 0; i < 6; i++) {
                btns[i] = btnsPattern(btnName[i], i);
            }
            btns.forEach(function (item) {
                mainArea.appendChild(item);
            })
        }
    }

}

function btnsPattern(btnName, i) {
    let btnKey = btnName.name,
        html = `
      <button name="${btnName[i]}">${btnKey[i]} ${btnName[i]}</button>`;

    return html;
}

function generateBtns() {
    let btnsArr = [],
        btn = document.createElement(button);

    for (let i = 0; i < 6; i++) {
        btn.name = 'b' + (i + 1);
        btnsArr[i] = btn;
    }

    return btnsArr;
}

function setEvetListeners(btns) {

}

function handleBtnClicks(btns) {

}

function handleMouseClicks(btns) {

}
