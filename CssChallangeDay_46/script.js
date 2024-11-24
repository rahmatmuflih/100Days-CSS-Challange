const center = document.querySelector(".center");
const head = document.querySelector("head");
let circle = [];
let dot = [];
const style = document.createElement("style");
let styles = [];

for (let i = 0; i < 6; i++) {
  circle.push(document.createElement("div"));
  circle[i].classList.add("circle");
  circle[i].style.width = `${(i + 1) * 35}px`;
  circle[i].style.height = `${(i + 1) * 35}px`;
  center.appendChild(circle[i]);
  styles.push(
    document.createTextNode(
      `
        .dot-${i + 1}{
          width: ${(i + 1) * 30}px;
          height: ${(i + 1) * 30}px;
        }

        .dot-${i + 1}::before {
          width: ${(i + 2) * 1.9}px;
          height: ${(i + 2) * 1.9}px;
          transform: translateY(${(i - 5) * i}px);
          top: ${(i + 1) * 0.15 * 55}%;
          opacity: ${1 - (6 - (i + 1)) / 10};
          animation: inOut-${i + 1} 6s ease-in-out alternate infinite;
        }
        
        @keyframes inOut-${i + 1}{
          0% {
            transform: translate(${i + 5}px, ${i - 5}px) scale(${0.8});
          }

          100% {
            transform: translate(${i + 15}px, ${i - 40}px) scale(${0.9});
          }
        }
      `
    )
  );

  style.appendChild(styles[i]);
}

head.appendChild(style);

for (let i = 0; i < circle.length; i++) {
  for (let j = 0; j < 12; j++) {
    dot.push(document.createElement("div"));
    dot[j].classList.add("dot");
    dot[j].classList.add(`dot-${i + 1}`);
    dot[j].style.transform = `rotate(${j * 30}deg) scale(1.15)`;
    circle[i].appendChild(dot[j].cloneNode(true));
    if (dot[j].classList.length > 2) {
      for (let k = 0; k < dot[j].classList.length; k++) {
        dot[j].classList.remove(`dot-${i + 1}`);
      }
    }
  }
}
