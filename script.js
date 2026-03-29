function upDate(previewPic) {
    console.log("Event triggered - upDate");

    let imageDiv = document.getElementById("image");

    console.log("Alt:", previewPic.alt);
    console.log("Source:", previewPic.src);

    imageDiv.innerHTML = previewPic.alt;
    imageDiv.style.backgroundImage = "url('" + previewPic.src + "')";
}

function undo() {
    console.log("Event triggered - undo");

    let imageDiv = document.getElementById("image");

    imageDiv.style.backgroundImage = "url('')";
    imageDiv.innerHTML = "Hover over an image below to display here.";
}

function init() {
    console.log("Page loaded");

    let images = document.querySelectorAll("img");

    for (let i = 0; i < images.length; i++) {
        images[i].setAttribute("tabindex", "0");
    }
}
