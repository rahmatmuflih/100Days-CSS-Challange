const frame = document.querySelector(".frame");
let square = [];
let clicked = [];

for (let i = 0; i < 400; i++) {
  square.push(document.createElement("div"));
  square[i].classList.add("square");
  frame.appendChild(square[i]);
  clicked.push(false);
  if (
    i === 129 ||
    i === 130 ||
    i === 148 ||
    i === 149 ||
    i === 150 ||
    i === 151 ||
    i === 167 ||
    i === 168 ||
    i === 169 ||
    i === 170 ||
    i === 171 ||
    i === 172 ||
    i === 186 ||
    i === 187 ||
    i === 189 ||
    i === 190 ||
    i === 192 ||
    i === 193 ||
    i === 206 ||
    i === 207 ||
    i === 208 ||
    i === 209 ||
    i === 210 ||
    i === 211 ||
    i === 212 ||
    i === 213 ||
    i === 228 ||
    i === 231 ||
    i === 247 ||
    i === 249 ||
    i === 250 ||
    i === 252 ||
    i === 266 ||
    i === 268 ||
    i === 271 ||
    i === 273
  ) {
    square[i].style.backgroundColor = "#FFFFFF";
    square[i].style.border = "1px solid #FFFFFF";
    clicked[i] = true;
  }

  square[i].addEventListener("click", function () {
    if (!clicked[i]) {
      square[i].style.width = "20px";
      square[i].style.height = "20px";
      square[i].style.backgroundColor = "#FFFFFF";
      square[i].style.borderColor = "#FFFFFF";
      clicked[i] = true;
    } else {
      square[i].style.width = "20px";
      square[i].style.height = "20px";
      square[i].style.backgroundColor = "#de4738";
      square[i].style.borderColor = "#e24e3f";
      clicked[i] = false;
    }
  });
}
