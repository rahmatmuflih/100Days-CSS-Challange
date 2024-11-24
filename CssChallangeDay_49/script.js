const frame = document.querySelector(".frame");
const circle = document.querySelector(".circle");
const square = [];

for (let i = 0; i < 400; i++) {
  square.push(document.createElement("div"));
  square[i].classList.add("square");
  frame.appendChild(square[i]);
  square[i].addEventListener("mouseover", function () {
    circle.style.transform = `translate(${
      (i - (i < 20 ? 0 : 20 * Math.floor(i / 20))) * 20
    }px, ${Math.floor(i / 20) * 20}px)`;
  });
}

frame.addEventListener("mouseleave", function () {
  circle.style.transform = "translate(190px, 190px)";
});
