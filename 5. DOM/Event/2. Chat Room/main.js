
 var buttonClick = document.querySelector("#button");
 buttonClick.onclick = function () {
    var inputText = document.querySelector("#textinput").value;
    if (inputText == "") {
        return;
    }
    var chatBody = document.querySelector("#chat-body");
    chatBody.innerHTML += "<p>" + inputText + "</p>";
    document.querySelector("#textinput").value = "";
}