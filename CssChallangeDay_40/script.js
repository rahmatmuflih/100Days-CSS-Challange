const toIndex = [
  "left top",
  "center top",
  "right top",
  "left center",
  "center center",
  "right center",
  "left bottom",
  "center bottom",
  "right bottom",
];
const album = document.querySelector(".album");
let photo = [];
for (let i = 0; i < 9; i++) {
  photo.push(document.createElement("div"));
  photo[i].classList.add("photo");
  album.appendChild(photo[i]);
  photo[i].style.transformOrigin = toIndex[i];
  setTimeout(function () {
    photo[i].style.animation = "none";
  }, 1000);
}
let images = [];
for (let i = 0; i < photo.length; i++) {
  images.push(document.createElement("img"));
  images[i].src = `https://100dayscss.com/codepen/40-${i + 1}.jpg`;
  images[i].alt = "";
  images[i].classList.add("imto");
  photo[i].appendChild(images[i]);
}
let clicked = false;

for (let i = 0; i < photo.length; i++) {
  photo[i].addEventListener("click", function () {
    if (!clicked) {
      photo[i].style.transition =
        "transform 0.5s ease-in-out, z-index 0.1s ease-in-out";
      for (let j = 0; j < photo.length; j++) {
        images[j].style.transition = "opacity 0.5s ease-in-out";
        if (j !== i) {
          images[j].style.opacity = 0;
        }
      }
      photo[i].style.zIndex = 1;
      photo[i].style.transform = "scale(3.05)";
      clicked = true;
    } else {
      photo[i].style.transition =
        "transform 0.5s ease-in-out, z-index 0.1s ease-in-out 0.5s";
      images[i].style.transition = "opacity 0.5s ease-in-out";
      for (let j = 0; j < photo.length; j++) {
        images[j].style.opacity = 1;
      }
      photo[i].style.zIndex = 0;
      photo[i].style.transform = "scale(1)";
      clicked = false;
    }
  });
}
