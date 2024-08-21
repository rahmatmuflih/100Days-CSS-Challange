const buttonSend = document.querySelector(".send");
const envelope = document.querySelectorAll(".envelope path");
const container = document.querySelector(".container");
const wrapper = document.querySelector(".wrapper");
const plane = document.querySelectorAll(".plane path");
let clicked = false;

buttonSend.addEventListener("click", function () {
  if (!clicked) {
    for (let i = 0; i < 2; i++) {
      envelope[i].style.animation = "envelope 1.3s ease-in-out 1 forwards";
      plane[i].style.animation = "plane 2.6s ease-in-out 1.3s 1 forwards";
    }
    container.style.animation = "container 1.3s ease-in-out 1 forwards";
    wrapper.style.animation = "wrapper 1.3s ease-in-out 1 forwards";
    buttonSend.style.animation = "send 3.9s ease-in-out 3.9s 1 forwards";
    buttonSend.classList.add("animate");
    setTimeout(function () {
      clicked = true;
    }, 7400);
  } else {
    for (let i = 0; i < 2; i++) {
      envelope[i].style.animation = "none";
      plane[i].style.animation = "none";
    }
    container.style.animation = "none";
    wrapper.style.animation = "none";
    buttonSend.style.animation = "none";
    buttonSend.classList.remove("animate");
    clicked = false;
  }
});
