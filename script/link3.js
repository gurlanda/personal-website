var btnSubmit = document.getElementById("submit");
var pInfo = document.getElementById("information");
var inputPassword = document.getElementById("password");
var clue = "CLUE:<br>Under the dining room table.";
var requiredLength = 18;

document.getElementById("sound").volume = 0.2;

btnSubmit.addEventListener("click",
    function() {
        event.preventDefault();
        var passwordText = inputPassword.value;
        
        if (passwordText.length >= requiredLength) {
            pInfo.innerHTML = clue;
            inputPassword.style.display = "none";
            btnSubmit.style.display = "none";
        }
        else {
            inputPassword.value = "";
            alert("Incorrect password. Watch the video to the end for the password!");
        }
    }
);