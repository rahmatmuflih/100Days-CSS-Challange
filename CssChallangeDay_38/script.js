const gateWhite = document.querySelector(".white");
const gatePurple = document.querySelector(".purple");
const frame = document.querySelector(".frame");
let clicked = false;

frame.addEventListener("click", function () {
  if (!clicked) {
    gateWhite.style.transition = "transform 0.8s ease-in-out";
    gatePurple.style.transition = "transform 0.8s ease-in-out 0.3s";
    gateWhite.style.transform = "translate(-50%, -50%) scale(6)";
    gatePurple.style.transform = "translate(-50%, -50%) scale(1)";
    clicked = true;
  } else {
    gateWhite.style.transition = "transform 0.8s ease-in-out 0.3s";
    gatePurple.style.transition = "transform 0.8s ease-in-out";
    gateWhite.style.transform = "translate(-50%, -50%) scale(1)";
    gatePurple.style.transform = "translate(-50%, -50%) scale(0)";
    clicked = false;
  }
});
