var $fiel = document.querySelector(".field");
var $player = document.querySelector("#player");
var $button = document.querySelector("#button");

$button.addEventListener('click', restartMoving);

function changePosition(e) {

    var xPosition = e.clientX;
    var yPosition = e.clientY;

    $player.style.left = (xPosition - 50) + 'px';
    $player.style.top = (yPosition - 50) + 'px';

}

var changeStatus = false;

function restartMoving(e) {
    e.stopPropagation();

    if (changeStatus) {

        $fiel.removeEventListener('click', changePosition);
        $button.innerText = "Start Moving";
        changeStatus = false;

    } else {

        $fiel.addEventListener('click', changePosition);
        changeStatus = true;
        $button.innerText = "Stop Moving";
    }
}