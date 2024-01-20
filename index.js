function displayMainImage(imageSrc, text, link) {
    const mainDisplay = document.getElementById("main-display");
    const mainDisplayText = document.getElementById("main-display-text");
    mainDisplay.src = imageSrc;
    mainDisplayText.innerText = text + link;
}

/*function displayWords(paragraph) {
    const mainDisplayText = document.getElementById("main-display-text");
    mainDisplayText.innerText = paragraph;
}*/