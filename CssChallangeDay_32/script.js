const minus = document.querySelector(".minus");
const plus = document.querySelector(".plus");
const number = document.querySelector(".number");
let counter = 0;

plus.addEventListener("click", function () {
  number.style.animation = "plus 0.5s ease-in-out alternate";
  number.innerHTML = ++counter;
  setTimeout(function () {
    number.style.animation = "none";
  }, 400);
});

minus.addEventListener("click", function () {
  number.style.animation = "minus 0.5s ease-in-out alternate";
  number.innerHTML = --counter;
  setTimeout(function () {
    number.style.animation = "none";
  }, 400);
});
