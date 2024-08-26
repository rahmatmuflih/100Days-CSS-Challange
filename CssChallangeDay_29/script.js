const search = document.getElementById("search");
const suggestionBox = document.querySelector(".suggestion-box");
const suggestionItem = document.querySelectorAll(".suggestion-item");

search.addEventListener("keyup", function () {
  if (search.value !== "") {
    suggestionBox.style.display = "flex";
    suggestionItem[0].innerHTML = `<span>${search.value}</span>`;
    suggestionItem[1].innerHTML = `Veritatis et <span>${search.value}</span>`;
    suggestionItem[2].innerHTML = `ut aliquid ex <span>${search.value}</span>`;
  } else {
    search.value = "";
    suggestionBox.style.display = "none";
  }
});
