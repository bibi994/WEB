function changeBg() {
  body = document.querySelector("body");
  body.classList.toggle("bg-color");
}

var hasRunningInterval;
var buttonSelect = document.querySelector("#autoToggle");

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
