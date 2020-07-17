var i = 0;
var delay = 15;

var typewriter = document.getElementById("textbox");
var icon = document.getElementById("icon");
var sceneContainer = document.getElementById("scene5-container");

var dialog = new Audio("/audio/dialogue.wav");
var dialogClose = new Audio("/audio/dialogueClose.wav")

var txt = typewriter.innerHTML;
typewriter.innerHTML = ""; 

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
            function() { open("/scene6.html", "_self"); } 
        );
    } 
}

document.addEventListener("DOMContentLoaded", writer);