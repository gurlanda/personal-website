var btnSubmit = document.getElementById("submit");
var pInfo = document.getElementById("information");
var inputPassword = document.getElementById("password");
var requiredLength = 3;

document.getElementById("sound").volume = 0.2;

btnSubmit.addEventListener("click",
    function() {
        event.preventDefault();
        var passwordText = inputPassword.value;
        
        if (passwordText.length >= requiredLength) {
            // document.getElementById("lastAudio").play();
            document.getElementById("sound").pause();
            open("/audio.html", "_blank");
            // open("/scene0.html", "_blank");
        }
        else {
            inputPassword.value = "";
            alert("Incorrect password. Watch the video to the end for the password!");
        }
    }
);