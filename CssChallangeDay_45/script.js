const button = document.querySelector(".button");
const path = document.querySelector("path");

button.addEventListener("mouseover", function () {
  path.style.animation = `bling 1s ease-in-out forwards`;
  path.addEventListener("animationend", function () {
    path.style.animation = "none";
  });
});

button.addEventListener("mouseout", function () {
  path.style.animation = `bling 1s ease-in-out reverse forwards`;
  path.addEventListener("animationend", function () {
    path.style.animation = "none";
  });
});
