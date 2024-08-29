const wrapper = document.querySelector(".wrapper");
const tops = document.querySelector(".top");
const bottoms = document.querySelector(".bottom");
const menus = document.querySelector(".menus");
const menuItem = document.querySelectorAll("li");

wrapper.addEventListener("click", function () {
  wrapper.style.cursor = "auto";
  tops.style.animation = "top 0.8s ease-in-out forwards";
  bottoms.style.animation = "bottom 0.8s ease-in-out forwards";
  menus.style.animation = "menus 0.5s ease-in-out 0.8s forwards";
  menus.style.zIndex = 1;
  wrapper.style.zIndex = 0;

  setTimeout(() => {
    tops.style.animation = "none";
    bottoms.style.animation = "none";
    menus.style.animation = "none";
    tops.style.transform = "translateY(-30px)";
    tops.style.width = "300px";
    bottoms.style.transform = "translateY(30px)";
    bottoms.style.width = "300px";
    menus.style.visibility = "visible";
    menus.style.opacity = 1;
  }, 1000);
});

for (let i = 0; i < menuItem.length; i++) {
  menuItem[i].addEventListener("click", function () {
    tops.style.animation = "top 0.8s ease-in-out 0.2s reverse forwards";
    bottoms.style.animation = "bottom 0.8s ease-in-out 0.2s reverse forwards";
    menus.style.animation = "menus 0.2s ease-in-out reverse forwards";
    menus.style.zIndex = 0;
    wrapper.style.zIndex = 1;

    setTimeout(() => {
      wrapper.style.cursor = "pointer";
      tops.style.animation = "none";
      bottoms.style.animation = "none";
      menus.style.animation = "none";
      tops.style.transform = "translateY(0px)";
      tops.style.width = "50px";
      bottoms.style.transform = "translateY(0px)";
      bottoms.style.width = "50px";
      menus.style.visibility = "hidden";
      menus.style.opacity = 0;
    }, 1000);
  });
}
