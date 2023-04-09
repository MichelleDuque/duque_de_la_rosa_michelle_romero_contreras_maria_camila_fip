console.log("JS is working")

let bioLinks = document.querySelectorAll(".characters div a"),
    theLightBox = document.querySelector("#lightbox"),
    theLightBox2 = document.querySelector("#lightbox"),
    imageProcess = document.querySelector("#imageprocess"),
    closeLightbox = document.querySelector(".lightbox_close"),
    savepos;

function getHeroData(){
    //change the lightbox content to match the hero data
    // this is coming from the custom data attribute we added to each anchor tag in the html
    theLightBox.querySelector(".lb_heading").textContent = process[this.dataset.member].name;
    theLightBox.querySelector(".lb_text").textContent = process[this.dataset.member].bio;
    imageProcess.src = process[this.dataset.member].imageprocess;
    theLightBox2.style.display = "block";

    
    //change any other elemen's content using the same method - select it, add the object's data to it
    // as textContent, src attributes... whatever you need to change
}

function backtoImage(){
    theLightBox2.style.display = "none";
}

bioLinks.forEach(link => link.addEventListener("click", getHeroData));
closeLightbox.addEventListener("click", backtoImage);


// function checkingImage (){
//     if (screen.width >= 768 ) {
//         document.querySelector('#beer_img').src = "images/beerprocess-03.svg";
//         document.querySelector('#mashing_img').src = "images/beerprocess_Artboard1-01.svg";
//     } else {
//         document.querySelector('#beer_img').src = "images/Artboard1-mobile.svg";
//         document.querySelector('#mashing_img').src = "images/Artboard4-mobile.svg";
//     }
// }

// checkingImage()






