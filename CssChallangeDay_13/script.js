const button = document.getElementsByClassName("button");
const backgroundImage = document.querySelector(".background-image");
const photo = document.querySelector(".photo");
const profilePhoto = document.querySelector(".photo img");
const profileName = document.querySelector(".profile-name");
const actionButtons = document.querySelector(".action-buttons");
const closeButton = document.querySelector(".close");
let photos = [
  "https://100dayscss.com/codepen/13-1.jpg",
  "https://100dayscss.com/codepen/13-2.jpg",
  "https://100dayscss.com/codepen/13-3.jpg",
  "https://100dayscss.com/codepen/13-4.jpg",
];
let names = ["Julia Toth", "Cowok", "Cewek 2", "Cewek 3"];

for (let i = 0; i < button.length; i++) {
  button[i].addEventListener("click", function () {
    backgroundImage.style.marginTop = "180px";
    photo.style.marginTop = "235px";
    profilePhoto.src = photos[i];
    profileName.innerHTML = `${names[i]}`;
    actionButtons.style.marginBottom = "220px";
    closeButton.style.marginTop = "60px";
    for (let j = 0; j < button.length; j++) {
      button[j].style.zIndex = "0";
    }
  });
}

closeButton.addEventListener("click", function () {
  backgroundImage.style.marginTop = "0px";
  photo.style.marginTop = "0px";
  actionButtons.style.marginBottom = "0px";
  closeButton.style.marginTop = "0px";
  for (let i = 0; i < button.length; i++) {
    button[i].style.zIndex = "1";
  }
});
