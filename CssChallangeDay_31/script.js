const center = document.querySelector(".center");
let pendulum = [];
let cssAnimation = document.createElement("style");
let frames = [];

for (let i = 0; i < 20; i++) {
  pendulum.push(document.createElement("div"));
  pendulum[i].classList.add("pendulum");
  center.appendChild(pendulum[i]);
  pendulum[i].style.top = `${-185 + i * 18.5}px`;
  pendulum[i].style.animation = `pendulum-${i + 1} ${
    (60 / (40 + (20 - (i + 1)))) * 1000
  }ms ease-in-out infinite`;
  frames.push(
    document.createTextNode(
      `
        @keyframes pendulum-${i + 1} {
            0%,
            100% {
                opacity: 0.9;
                transform: translate3d(50px,0,0);
            }
            75%{
                opacity: 1;
            }
            50% {
                opacity: 0.9;
                transform: translate3d(-50px,0,0)
            }
        }
          
    `
    )
  );
  cssAnimation.appendChild(frames[i]);
}

document.getElementsByTagName("head")[0].appendChild(cssAnimation);
