const center = document.querySelector(".center");
let star = [];
for (let i = 0; i < 300; i++) {
  star.push(document.createElement("div"));
  star[i].classList.add("star");
  center.appendChild(star[i]);
  star[i].style.top = `${
    Math.floor(Math.random() * 10) + 300 * Math.random()
  }px`;
  star[i].style.left = `${Math.floor(
    Math.random() * (Math.floor(Math.random()) * (i + 1)) + 2 * i + 2
  )}px`;
  star[i].style.animation = `star-light ${
    Math.random() + 0.5
  }s ease-in-out ${Math.floor(Math.random())}s infinite alternate`;
}
let shootingStar = [];
let shootingStarGround = [];
let groundEffect = [];
let shoooosh = [];
for (let i = 0; i < 6; i++) {
  shootingStar.push(document.createElement("div"));
  shootingStarGround.push(document.createElement("div"));
  shoooosh.push(document.createElement("div"));
  groundEffect.push(document.createElement("div"));
  shootingStar[i].classList.add("shooting-star");
  shootingStarGround[i].classList.add("ground");
  shoooosh[i].classList.add("effect");
  groundEffect[i].classList.add("ground-effect");
  center.appendChild(shootingStar[i]);
  shootingStar[i].appendChild(shootingStarGround[i]);
  shootingStar[i].appendChild(shoooosh[i]);
  shootingStarGround[i].append(groundEffect[i]);

  shootingStar[i].style.top = `${Math.floor(
    Math.random() * 10 + ((100 * i + 100) * Math.random()) / 6
  )}px`;
  shootingStar[i].style.left = `${Math.floor(
    Math.random() * (Math.floor(Math.random()) * (i + 1)) + 50 * i + i * 10
  )}px`;
}

shootingStar[0].style.animation = `shooting-star ${
  Math.floor(Math.random()) + 5
}s ease-in-out`;

shootingStar[0].addEventListener("animationend", function () {
  shootingStar[0].style.animation = `none`;
  for (let i = 0; i < 6; i++) {
    shootingStar[i].style.animation = `shooting-star ${
      Math.floor(Math.random()) + i + 5
    }s ease-in-out ${Math.floor(Math.random(6)) + 6 * i}s infinite`;
  }
});
