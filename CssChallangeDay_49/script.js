const frame = document.querySelector(".frame");
const circle = document.querySelector(".circle");

frame.addEventListener("mousemove", function (e) {
  const rect = e.target.getBoundingClientRect();
  const x = e.clientX - rect.left;
  const y = e.clientY - rect.top;
  circle.style.transform = `translate(${x - 10}px, ${y - 10}px)`;
});

frame.addEventListener("mouseleave", function () {
  circle.style.transform = `translate(190px, 190px)`;
});
