const drop = document.getElementById("drop");
const dropzone = document.querySelector(".file")
const svg = document.querySelector("label svg");
const label = document.querySelector("label");
const buttonUpload = document.querySelector(".button-upload");
const loadingProcess = document.querySelector(".loading-process");
const loading = document.querySelector(".loading");
const done = document.querySelector(".done");
const uploadFile = document.querySelector(".upload-file");
const loadingFile = document.querySelector(".loading-file");
const doneUpload = document.querySelector(".done-upload");
const command = ['drag', 'dragstart', 'dragend', 'dragover', 'dragenter', 'dragleave', 'drop']
let fileName = [];
let clicked = false;
let uploaded = false;

drop.addEventListener('change', function () {
    svg.style.display = 'none';
    fileName = drop.value.split('\\')
    label.innerHTML = fileName[fileName.length - 1];
    uploaded = true
});

dropzone.addEventListener("dragenter", function (e) {
    e.preventDefault();
    label.style.backgroundColor = "#a1a6ad";
});

dropzone.addEventListener("dragover", function (e) {
    e.preventDefault();
    label.style.backgroundColor = "#a1a6ad";
})

dropzone.addEventListener("dragleave", function () {
    label.style.backgroundColor = "white";
})

dropzone.addEventListener('drop', function (e) {
    e.preventDefault();
    svg.style.display = 'none';
    label.style.backgroundColor = "white"
    fileName = e.dataTransfer.files;
    label.innerHTML = fileName[0].name;
    uploaded = true
})


buttonUpload.addEventListener("click", function () {
    if ((uploaded) && !(clicked)) {
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
});