const buttonFinish = document.querySelector(".button-finish");
const buttonText = document.querySelector(".button-finish span");
const check = document.querySelector(".check");
const spinner = document.querySelector(".spinner");
let clicked = false;

buttonFinish.addEventListener("click", function () {
  if (!clicked) {
    buttonFinish.style.animation = "button 2.4s ease-in-out 1 forwards";
    buttonText.style.animation = "finish 0.8s ease-in-out 1 forwards";
    check.style.animation = "check 0.4s ease-in-out 2s 1 forwards";
    spinner.style.animation = "spinner 1.6s ease-in-out 0.8s 1 forwards";
    setTimeout(function () {
      clicked = true;
      buttonFinish.classList.remove("before");
    });
  } else {
    buttonFinish.style.animation = "none";
    buttonText.style.animation = "none";
    check.style.animation = "none";
    spinner.style.animation = "none";
    buttonFinish.classList.add("before");
    clicked = false;
  }
});
