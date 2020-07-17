var scene2Text = document.getElementById("block");
var character = document.getElementById("character");

setTimeout(
    function() {
        scene2Text.style.opacity = 1;
        character.style.opacity = 1; 
    }, 1000
);

setTimeout(
    function() {
        scene2Text.style.opacity = 0;
    }, 4500
);

setTimeout(
    function() {
        scene2Text.innerHTML = "\"I hope you enjoyed the scavenger hunt I set up for you!  It was really fun to put together.  I'm sure everyone who helped me had fun too.\""; 
        scene2Text.style.opacity = 1;
    }, 6500
);

setTimeout(
    function() {
        scene2Text.style.opacity = 0;
        character.style.opacity = 0; 
    }, 12000
);

setTimeout(
    function() {
        open("/scene1.html", "_self");
    }, 14500
);