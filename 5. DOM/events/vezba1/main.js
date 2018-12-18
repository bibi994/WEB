function changeBg() {
    var body = document.querySelector("body");
    body.classList.toggle("bgcolor");
}

var hasRunningInterval;
var buttonSelect = document.querySelector("#buttonBgAuto");
function changeBgAuto() {
    if (!hasRunningInterval) {
        hasRunningInterval = setInterval(changeBg, 500);
        buttonSelect.innerText = "Turn Off";
    } else {
        clearInterval(hasRunningInterval);
        hasRunningInterval = null;
        buttonSelect.innerText = "Turn On";
    }
}


