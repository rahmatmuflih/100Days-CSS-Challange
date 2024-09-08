const bulb = document.querySelector(".lightbulb path");
const glow = document.querySelector(".glow");

bulb.addEventListener("mouseover", function () {
  glow.style.boxShadow = "none";
});

bulb.addEventListener("mouseout", function () {
  glow.style.boxShadow = "0 0 75px #fff35c";
});
