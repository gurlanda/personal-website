var i = 0;
var delay = 12;
var typewriter = document.getElementById("textbox");
var button = document.getElementById("button");
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
        button.setAttribute("style", "display:block"); 
    } 
}

document.addEventListener("DOMContentLoaded", writer);