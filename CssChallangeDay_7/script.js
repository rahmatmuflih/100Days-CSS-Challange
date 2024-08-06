const buttonMenu = document.querySelector(".burger-menu .wrapper");
const buttonSearch = document.querySelector(".search svg");
const menu = document.querySelector(".menu");
const notif = document.querySelector(".notif");
const input = document.getElementById("search");
const itemContent = document.getElementsByClassName("item-content");
var pressedMenu = false;
var pressedSearch = false;

window.addEventListener("load", function(){
    for(let i = 0;i<3;i++){
        itemContent[i].style.marginTop = "0";
        itemContent[i].style.opacity = "1";
    }
})

buttonMenu.addEventListener("click", function(){
    if(!pressedMenu){
        pressedMenu = true;
        notif.style.marginLeft = "250px";
        notif.style.boxShadow = "-5px 5px 10px rgba(0, 0, 0, 0.267)";
        menu.style.marginLeft = "-80px";
    }  else{
        pressedMenu = false;
        notif.style.marginLeft = "0px";
        menu.style.marginLeft = "0px";
        notif.style.boxShadow = "5px 5px 10px rgba(0, 0, 0, 0.267)";
    }
});

buttonSearch.addEventListener("click", function(){
    if(!pressedSearch){
        pressedSearch = true;
        input.style.visibility = "visible";
        input.style.marginLeft = "-50px";
        input.style.opacity = 1;
    } else{
        pressedSearch = false;
        input.style.visibility = "hidden";
        input.style.marginLeft = "0";
        input.style.opacity = 0;
    }
});