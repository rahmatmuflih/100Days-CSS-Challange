const track = document.getElementsByClassName("track");
const card = document.querySelector(".card");
const bicycle = document.querySelector(".bicycle");
const helicopter = document.querySelector(".helicopter");

window.addEventListener("load", function () {
  for (let i = 0; i < track.length; i++) {
    track[i].style.animation = `track ${Math.random() + 0.8}s ${
      Math.random() + 0.5
    }s linear infinite`;
  }
});

card.addEventListener("mouseover", function () {
  bicycle.style.visibility = "hidden";
  helicopter.style.visibility = "visible";
});
card.addEventListener("mouseout", function () {
  bicycle.style.visibility = "visible";
  helicopter.style.visibility = "hidden";
});
