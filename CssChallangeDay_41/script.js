const alerts = document.querySelector(".caution");
const button = document.querySelector(".button");

alerts.addEventListener("animationend", function () {
  button.addEventListener("click", function () {
    alerts.style.animation = "pop-out 0.8s ease-in-out forwards";
  });
});
