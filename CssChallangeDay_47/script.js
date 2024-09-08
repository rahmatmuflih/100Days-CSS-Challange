const frame = document.querySelector(".frame");
let square = [];

for (let i = 0; i < 400; i++) {
  square.push(document.createElement("div"));
  square[i].classList.add("square");
  frame.appendChild(square[i]);
}
