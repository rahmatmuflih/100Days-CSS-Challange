const frame = document.querySelector(".frame");
let square = [];
for (let i = 0; i < 20; i++) {
  square.push(document.createElement("div"));
  square[i].classList.add(`square`);
  square[i].style.width = `${(i + 1) * 12}px`;
  square[i].style.height = `${(i + 1) * 12}px`;
  square[i].style.border = `rgb(${70 + (20 - i) * 8},${70 + (20 - i) * 8},${
    70 + (20 - i) * 8
  }) 1px solid`;
  square[i].style.backgroundColor = "#222222";
  square[i].style.zIndex = `${20 - i}`;
  square[i].style.animation = `puyeng 2s ease-in-out ${
    (20 - i) * 0.03
  }s infinite alternate`;
  frame.appendChild(square[i]);
}

frame.addEventListener("mouseover", function () {
  for (let i = 0; i < square.length; i++) {
    square[i].style.animationPlayState = "paused";
  }
});

frame.addEventListener("mouseout", function () {
  for (let i = 0; i < square.length; i++) {
    square[i].style.animationPlayState = "running";
  }
});
