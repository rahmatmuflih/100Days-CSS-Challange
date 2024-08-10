const clock = document.querySelector(".clock");
let point = [];
let rotateValue = 0;

for (let i = 0; i < 15; i++) {
  point.push(document.createElement("div"));
  clock.appendChild(point[i]);
  point[i].classList.add("point");
  for (let j = 0; j < 4; j++) {
    point[i].appendChild(document.createElement("div"));
    point[i].getElementsByTagName("div")[j].classList.add("pointer");
  }
}

for (let i = 0; i < point.length; i++) {
  i === 0
    ? (point[i].style.transform = `rotate(0deg)`)
    : (point[i].style.transform = `rotate(${(rotateValue += 6)}deg)`);
}
