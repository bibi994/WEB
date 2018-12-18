function changeUlBgColor() {
    var list = document.querySelector('ul:nth-of-type(2)');
    list.className = 'ul-bg-color';
    return list;
}
function changeLiBgColor() {
    var list = document.querySelectorAll('li');
    for (var i = 0; i < list.length; i++) {
        list[i].className = 'li-bg-color';
    }
    return list;
}

function liToUpperCase() {
    var list = document.querySelectorAll('ul:nth-of-type(3) li');
    for (var i = 0; i < list.length; i++) {
        list[i].className = 'thirth-li';
    }
}

changeUlBgColor();
changeLiBgColor();
liToUpperCase();