const frame = document.querySelector(".frame");
const impact = document.querySelector(".impact");
const circle = document.querySelector(".circle");
let square = [];

for (let i = 0; i < 400; i++) {
  square.push(document.createElement("div"));
  square[i].classList.add("square");
  frame.appendChild(square[i]);
  square[i].addEventListener("mouseover", function () {
    circle;
  });
}
