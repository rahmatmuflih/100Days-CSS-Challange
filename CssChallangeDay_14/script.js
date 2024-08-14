const track = document.getElementsByClassName("track");
const cloud = document.getElementsByClassName("cloud");

window.addEventListener("load", function () {
  for (let i = 0; i < track.length; i++) {
    track[i].style.animation = `move ${Math.random() + 0.8}s ${
      Math.random() + 0.5
    }s linear infinite`;
  }
  for (let i = 0; i < cloud.length; i++){
    cloud[i].style.animation = `move ${Math.random() + 0.8}s ${
      Math.random() + 0.5
    }s linear infinite`;
  }
});
