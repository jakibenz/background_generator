var css = document.querySelector("h3");
var color1 = document.querySelector(".color1");
var	color2 =  document.querySelector(".color2");
var bodyBackground = document.getElementById("gradient")
var randomBtn = document.getElementById("random")

function bodyGradient () {
    bodyBackground.style.background = 
        "linear-gradient(to right, " 
        + color1.value 
        + ", " 
        + color2.value 
        + ")";

    css.innerHTML = bodyBackground.style.background + ";"
}
function getRandomColor() {
    var letters = '0123456789ABCDEF';
    var color = '#';
    for (var i = 0; i < 6; i++) {
      color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
}
function setColor() {
    color1.value = getRandomColor();
    color2.value = getRandomColor();
    bodyGradient();
}

bodyGradient ();
color1.addEventListener("input", bodyGradient);
color2.addEventListener("input", bodyGradient);
randomBtn.addEventListener("click", setColor);
