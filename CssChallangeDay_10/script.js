const clock = document.querySelector(".clock");
const date = document.querySelector(".date");
const time = document.querySelector(".time");
const day = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];
const month = [
  "Jan",
  "Feb",
  "Mar",
  "Apr",
  "May",
  "Jun",
  "Jul",
  "Aug",
  "Sep",
  "Oct",
  "Nov",
  "Dec",
];
let point = [];
let rotateValue = 0;

function startClock() {
  var currDate = new Date();
  date.innerHTML = `${day[currDate.getDay()]} ${currDate.getDate()} ${
    month[currDate.getMonth()]
  } ${currDate.getFullYear()}`;
  time.innerHTML = `${
    currDate.getHours() < 10 ? "0" : ""
  }${currDate.getHours()}<span>:</span>${
    currDate.getMinutes() < 10 ? "0" : ""
  }${currDate.getMinutes()}`;
  setTimeout(startClock, 60000);
}

startClock();

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
