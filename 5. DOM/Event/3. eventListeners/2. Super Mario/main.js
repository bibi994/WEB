var $marioImg = document.querySelector(".mario");
var $body = document.querySelector("body");

var bgPosition = 0;
var Interval;
var audio = new Audio("./mario-sound.mp3");

document.addEventListener("keydown", marioGo);
document.addEventListener("keyup", marioStop);


function movebackground() {
    bgPosition += 50;
    $body.style.backgroundPosition = bgPosition + "px";
}

function marioGo(event) {
    if (event.keyCode == 39 && !Interval) {
        $marioImg.src = "./img/mario_running.gif";
        $marioImg.height = 250;
        Interval = setInterval(movebackground, 100);
        audio.muted = false;
        audio.play();
    }
}
function marioStop() {
    if (event.keyCode == 39 && Interval) {
        clearInterval(Interval);
        $marioImg.src = "./img/mario.png";
        Interval = null;
        audio.muted = true;
    }
}




