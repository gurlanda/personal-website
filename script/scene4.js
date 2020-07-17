var i = 0;
var delay = 15;

var typewriter = document.getElementById("textbox");
var icon = document.getElementById("icon");
var sceneContainer = document.getElementById("scene4-container");

var dialog = new Audio("/audio/dialogue.wav");
var dialogClose = new Audio("/audio/dialogueClose.wav")

var txt = typewriter.innerHTML;
typewriter.innerHTML = "";
document.getElementById("sound").volume = 0.2;

setTimeout(
    function() {
        document.getElementById("gull-call").play();
    }, 1000
);

setTimeout(
    function() {
        document.getElementById("gull-call").play();
    }, 6000
);

function writer() {
    if (i < txt.length) {
        typewriter.innerHTML += txt.charAt(i);
        i++;
        dialog.play();
        setTimeout(writer, delay);
    }
    else {
        dialogClose.play();
        icon.setAttribute("style", "display:block");
        sceneContainer.addEventListener("click",
            function() { open("/scene5.html", "_self"); } 
        );
    } 
}

document.addEventListener("DOMContentLoaded", writer);