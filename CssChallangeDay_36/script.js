const contentContainer = document.querySelector(".content-container");
const contentWrapper = document.querySelector(".content-item-wrapper");
const itemMenu = document.querySelectorAll(".item-menu");
const itemMenuLogo = document.querySelectorAll(".item-menu svg");
let clone = "";

for (let i = 0; i < itemMenu.length - 1; i++) {
  clone = contentWrapper.cloneNode(true);
  contentContainer.appendChild(clone);
}

const contentItemWrapper = document.querySelectorAll(".content-item-wrapper");
const contentTitle = document.querySelectorAll(".content-item-wrapper>.title");

contentItemWrapper[0].classList.add("active");

for (let i = 0; i < itemMenu.length; i++) {
  contentTitle[i].innerHTML =
    i === 0
      ? "Dashboard"
      : i === 1
      ? "Comments"
      : i === 2
      ? "Notifications"
      : "Settings";
  contentItemWrapper[i].addEventListener("animationend", function () {
    contentItemWrapper[i].style.animation = "none";
  });
}

for (let i = 0; i < itemMenu.length; i++) {
  itemMenu[i].addEventListener("click", function () {
    for (let j = 0; j < itemMenu.length; j++) {
      itemMenu[j].style.backgroundColor = "transparent";
      itemMenuLogo[j].style.fill = "#8398ad";
      if (
        contentItemWrapper[j].classList.value === "content-item-wrapper active"
      ) {
        contentItemWrapper[j].style.animation = "fade-out 0.3s ease-in-out";
      }
      setTimeout(function () {
        contentItemWrapper[j].classList.remove("active");
      }, 200);
    }
    itemMenu[i].style.backgroundColor = "#5da3ff";
    itemMenuLogo[i].style.fill = "white";
    setTimeout(function () {
      contentItemWrapper[i].classList.add("active");
    }, 200);
    contentItemWrapper[i].style.animation = "fade-in 1s ease-in-out 0.1s";
  });
}
