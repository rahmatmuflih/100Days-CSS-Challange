const flip = document.querySelectorAll(".flip");

flip[0].addEventListener("click", function () {
  flip[0].style.transition = `transform 0.5s ease-in-out, opacity 0.5s ease-in-out,
    visibility 0.5s ease-in-out 0.5s`;
  flip[1].style.transition = `transform 0.5s ease-in-out 0.5s, opacity 0.5s ease-in-out 0.5s,
    visibility 0.5s ease-in-out 0.5s`;
  flip[0].style.transform = "rotate3d(0,1,0, 90deg)";
  flip[0].style.opacity = 0;
  flip[0].style.visibility = "hidden";
  flip[1].style.transform = "rotate3d(0,1,0, 0deg)";
  flip[1].style.opacity = 1;
  flip[1].style.visibility = "visible";
});

flip[1].addEventListener("click", function () {
  flip[1].style.transition = `transform 0.5s ease-in-out, opacity 0.5s ease-in-out,
    visibility 0.5s ease-in-out 0.5s`;
  flip[0].style.transition = `transform 0.5s ease-in-out 0.5s, opacity 0.5s ease-in-out 0.5s,
    visibility 0.5s ease-in-out 0.5s`;
  flip[1].style.transform = "rotate3d(0,1,0, 90deg)";
  flip[1].style.opacity = 0;
  flip[1].style.visibility = "hidden";
  flip[0].style.transform = "rotate3d(0,1,0, 0deg)";
  flip[0].style.opacity = 1;
  flip[0].style.visibility = "visible";
});
