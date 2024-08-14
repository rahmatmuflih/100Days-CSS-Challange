const drop = document.getElementById("drop");
const svg = document.querySelector("label svg");
const label = document.querySelector("label");
const buttonUpload = document.querySelector(".button-upload");
const loadingProcess = document.querySelector(".loading-process");
const loading = document.querySelector(".loading");
const done = document.querySelector(".done");
const uploadFile = document.querySelector(".upload-file");
const loadingFile = document.querySelector(".loading-file");
const doneUpload = document.querySelector(".done-upload");
let fileName = [];
let clicked = false;

drop.addEventListener('change', function () {
    svg.style.display = 'none';
    fileName = drop.value.split('\\')
    label.innerHTML = fileName[fileName.length-1];
})

buttonUpload.addEventListener("click", function () {
    if ((drop.files.length > 0) && !(clicked)) {
        clicked = true;
        loadingProcess.style.width = "250px";
        loadingProcess.style.visibility = "hidden";
        loadingProcess.style.opacity = "0";
        label.style.visibility = "hidden";
        label.style.opacity = "0";
        loading.style.visibility = "visible";
        loading.style.opacity = "1";
        done.style.visibility = "visible";
        done.style.opacity = "1";
        uploadFile.style.display = "none";
        loadingFile.style.display = "inline";
        setTimeout(function () {
            loading.style.visibility = "hidden";
            loading.style.opacity = "0";
            loadingFile.style.display = "none";
            doneUpload.style.display = "inline";
        }, 3000);
    }
})