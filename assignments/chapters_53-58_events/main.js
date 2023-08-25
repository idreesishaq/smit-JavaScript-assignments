var img = document.querySelectorAll(".img");
for (let i = 0; i < img.length; i++) {
    img[i].setAttribute("onclick", "modal()");
}
function modal() {
    document.getElementById("modal-container").style.display = "block";
    let imgSrc = event.target.src;
    document.getElementById("modal-img").src = `${imgSrc}`;
    document.getElementById("body").style.backgroundColor = "gray";
}

function closeImg() {
    document.getElementById("modal-container").style.display = "none";
    document.getElementById("body").style.backgroundColor = "white";
}



/*------------- QUESTION NO 2---------------*/

function zoomOut() {
    var element = document.getElementById("zoom");
    var FontSizeString = window.getComputedStyle(element).fontSize;
    var numericFontSize = parseInt(FontSizeString);
    numericFontSize -= 10;
    element.style.fontSize = `${numericFontSize}px`;
}

function zoomIn() {
    let element = document.getElementById("zoom");
    let FontSizeString = window.getComputedStyle(element).fontSize;
    let numericFontSize = parseInt(FontSizeString);
    numericFontSize += 10;
    element.style.fontSize = `${numericFontSize}px`;
}
