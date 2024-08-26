const quotes1 = document.querySelector(".q-1");
const quotes2 = document.querySelector(".q-2");
const quotes3 = document.querySelector(".q-3");
const button = document.querySelectorAll(".button");

for (let i = 0; i < button.length; i++) {
  button[i].addEventListener("click", function () {
    if (i === 0) {
      quotes1.style.transition =
        "transform 0.7s ease-in-out, opacity 0.7s ease-in-out, visibility 0.3s ease-in-out 0.7s";
      quotes2.style.transition =
        "transform 0.7s ease-in-out 0.7s, opacity 0.7s ease-in-out 0.5s, visibility 0.7s ease-in-out 0.7s";
      quotes1.style.transform = "translate(-50%, -50%) scale(1.2)";
      quotes1.style.opacity = 0;
      quotes1.style.visibility = "hidden";
      quotes1.style.zIndex = 0;
      quotes2.style.visibility = "visible";
      quotes2.style.opacity = 1;
      quotes2.style.transform = "translate(-50%, -50%) scale(1)";
      quotes2.style.zIndex = 1;
      quotes3.style.transform = "translate(-50%, -50%) scale(0.8)";
    } else if (i === 1) {
      quotes2.style.transition =
        "transform 0.7s ease-in-out, opacity 0.7s ease-in-out, visibility 0.3s ease-in-out 0.7s";
      quotes3.style.transition =
        "transform 0.7s ease-in-out 0.7s, opacity 0.7s ease-in-out 0.5s, visibility 0.7s ease-in-out 0.7s";
      quotes2.style.transform = "translate(-50%, -50%) scale(1.2)";
      quotes2.style.opacity = 0;
      quotes2.style.visibility = "hidden";
      quotes2.style.zIndex = 0;
      quotes3.style.visibility = "visible";
      quotes3.style.opacity = 1;
      quotes3.style.transform = "translate(-50%, -50%) scale(1)";
      quotes3.style.zIndex = 1;
      quotes1.style.transform = "translate(-50%, -50%) scale(0.8)";
    } else {
      quotes3.style.transition =
        "transform 0.7s ease-in-out, opacity 0.7s ease-in-out, visibility 0.3s ease-in-out 0.7s";
      quotes1.style.transition =
        "transform 0.7s ease-in-out 0.7s, opacity 0.7s ease-in-out 0.5s, visibility 0.7s ease-in-out 0.7s";
      quotes3.style.transform = "translate(-50%, -50%) scale(1.2)";
      quotes3.style.opacity = 0;
      quotes3.style.visibility = "hidden";
      quotes3.style.zIndex = 0;
      quotes1.style.visibility = "visible";
      quotes1.style.opacity = 1;
      quotes1.style.transform = "translate(-50%, -50%) scale(1)";
      quotes1.style.zIndex = 1;
      quotes2.style.transform = "translate(-50%, -50%) scale(0.8)";
    }
  });
}
