const listItem = document.querySelectorAll(".list-item");
const circle = document.querySelectorAll(".circle");
const check = document.querySelectorAll(".check");
let clicked = [];

for (let i = 0; i < listItem.length; i++) {
  clicked[i] = false;
}

for (let i = 0; i < listItem.length; i++) {
  listItem[i].addEventListener("click", function () {
    if (!clicked[i]) {
      circle[i].style.transition =
        "transform 0.3s ease-in-out, opacity 0.3s ease-in-out, visibility 0.3s ease-in-out";
      check[i].style.transition =
        "stroke-dashoffset 0.3s ease-in-out 0.3s, stroke 0.3s ease-in-out 0.3s";
      listItem[i].style.color = "#c8d4d9";
      circle[i].style.transform = "scale(1.2)";
      circle[i].style.opacity = 0;
      circle[i].style.visibility = "hidden";
      check[i].style.strokeDashoffset = "0px";
      check[i].style.stroke = "#c8d4d9";
      setTimeout(function () {
        clicked[i] = true;
      }, 600);
    } else {
      circle[i].style.transition =
        "transform 0.3s ease-in-out 0.3s, opacity 0.3s ease-in-out 0.3s, visibility 0.3s ease-in-out 0.3s";
      check[i].style.transition =
        "stroke-dashoffset 0.3s ease-in-out, stroke 0.3s ease-in-out";
      listItem[i].style.color = "#497081";
      circle[i].style.transform = "scale(1)";
      circle[i].style.opacity = 1;
      circle[i].style.visibility = "visible";
      check[i].style.strokeDashoffset = "25px";
      setTimeout(function () {
        clicked[i] = false;
      }, 600);
    }
  });
}
