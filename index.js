/*function displayMainImage(imageSrc, text) {
    const mainDisplay = document.getElementById("main-display");
    const mainDisplayText = document.getElementById("main-display-text");
    mainDisplay.src = imageSrc;
    mainDisplayText.innerText = text;
}*/

let clickedImageSrc = "";  
let clickedText = "";
let clickedLinkSrc = "";

function displayMainImage(imageSrc, text, link) {
    const mainDisplay = document.getElementById("main-display");
    const justText = document.getElementById("just-text");
    const mainDisplayLink = document.getElementById("main-display-link");
    mainDisplay.src = imageSrc;
    justText.innerText = text;
    clickedImageSrc = imageSrc;  
    clickedLinkSrc = link;
    clickedText = text;
    if (link != undefined) {
        mainDisplayLink.src = link;
        document.getElementById('iframe').src=link;
    }
}

function hoverMainImage(imageSrc, text, link) {
    
        const mainDisplay = document.getElementById("main-display");
        const justText = document.getElementById("just-text");
        const mainDisplayLink = document.getElementById("main-display-link");
        mainDisplay.src = imageSrc;
        justText.innerText = text;
        if (link != undefined) {
            
           mainDisplayLink.src = link;
           document.getElementById('iframe').src=link;

           /*document.getElementById('iframe').contentWindow.location.reload();*/
           /*changeVideo(link);*/
        
        }
}

function resetToClickedImage() {
    
    if (clickedImageSrc) {
        const mainDisplay = document.getElementById("main-display");
        const justText = document.getElementById("just-text");
        const mainDisplayLink = document.getElementById("main-display-link");
        mainDisplay.src = clickedImageSrc;
        justText.innerText = clickedText;
        mainDisplayLink.src = clickedLinkSrc;
        document.getElementById('iframe').src=clickedLinkSrc;
    }
}

/*function changeVideo(link) {
    const iframe = document.getElementById("main-display-link");
    iframe.innerText = '<iframe width="420" height="320" src="' + link +'" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen> </iframe>';
    /*var uniqueString = "?t=" + new Date().getTime();
    iframe.src = link + uniqueString;
}*/




/*function displayWords(paragraph) {
    const mainDisplayText = document.getElementById("main-display-text");
    mainDisplayText.innerText = paragraph;
}*/