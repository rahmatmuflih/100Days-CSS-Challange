const moon = document.querySelector(".moon");
const rainDrop = document.getElementsByClassName("drop");

window.addEventListener("load", function () {
  moon.style.marginTop = "30px";
  moon.style.marginLeft = "50px";
  for (let i = 0; i < rainDrop.length; i++) {
    rainDrop[i].style.animation = `rain-drop ${Math.random() + 1}s ${
      (Math.random() + 0.5) * 2
    }s linear infinite`;
  }
});
