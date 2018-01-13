$(document).ready(function(){
    $('body').keydown(function(eventObject){
        if ( check(eventObject.key) ){
            buttonPress(eventObject.key);
        }
    });
    $( "button" ).click(function(eventObject) {
        if ( check(eventObject.target.id) ){
            buttonPress(eventObject.target.id);
        }
    });
});

function buttonPress(id) {
    let sound = document.getElementById(`audio${id}`);
    $(`#${id}`).css("background-color", "#db36a4");
    sound.play();
    setTimeout(() => $(`#${id}`).css("background-color", "lightskyblue"), 150);
}

function check(val) {
    return /^[1-9]$/.test(val);
}