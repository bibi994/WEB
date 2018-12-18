var $images = document.querySelectorAll("img");

(function () {
    for (var i = 0; i < $images.length; i++) {
        var image = $images[i];

        image.addEventListener('click', addBorder);
    }
})();

function addBorder(e) {
    e.target.style.border = '1px solid red'
    if (e.target.width != 300) {
        e.stopPropagation();
    }
}

document.addEventListener('click', printElement);
function printElement(e) {
    console.log(e.target);
}