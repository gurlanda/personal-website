var btnSubmit = document.getElementById("submit");
var pInfo = document.getElementById("information");
var inputPassword = document.getElementById("password");
var clue = "CLUE:<br>Look under one of the couches. Also, you should probably keep with you a hoodie and your earbuds. ";
var requiredLength = 3;

btnSubmit.addEventListener("click",
    function() {
        event.preventDefault();
        var passwordText = inputPassword.value;
        
        if (passwordText.length >= requiredLength) {
            pInfo.innerHTML = clue;
            inputPassword.style.display = "none";
            btnSubmit.style.display = "none"
        }
        else {
            inputPassword.value = "";
            alert("Incorrect password. Watch the video to the end for the password!");
        }
    }
);