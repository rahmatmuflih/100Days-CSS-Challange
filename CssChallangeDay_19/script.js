const purple = document.querySelector(".purple");
const buttons = document.getElementsByClassName("button");
const clicked = document.querySelector(".clicked");

for (let i = 0; i < buttons.length; i++){
    buttons[i].addEventListener("click", function () {
        if (i === 1) {
            clicked.style.left = "76px";
            purple.style.marginLeft = "-400px";
        }
        else if (i === 2) {
            clicked.style.left = "145px";
            purple.style.marginLeft = "-800px";

        } else {
            clicked.style.left = "7px";
            purple.style.marginLeft = "0px";
        }
    })
}