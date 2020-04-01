var mainImage = document.querySelector("#mainImage");

var allImage = document.querySelectorAll('.small_image img');

var allImageSrc = [];

for (i = 0; i < allImage.length; i++) {
    allImageSrc[i] = allImage[i].getAttribute("src");
}

var counter = 0;

function nextImage() {
    counter++;
    if (counter == allImageSrc.length) {
        counter = 0;
    }
    mainImage.setAttribute('src', allImageSrc[counter]);
}

function preImage() {
    counter--;
    if(counter < 0){
        counter = allImageSrc.length-1;
    }
    mainImage.setAttribute('src', allImageSrc[counter]);
}


function imageOne() {
    counter = 0;
    var imageSrc = document.querySelector('#image1').getAttribute("src");
    mainImage.setAttribute("src", imageSrc);
}

function imageTwo() {
    counter = 1;
    var imageSrc = document.querySelector('#image2').getAttribute("src");
    mainImage.setAttribute("src", imageSrc);
}

function imageThree() {
    counter = 2;
    var imageSrc = document.querySelector('#image3').getAttribute("src");
    mainImage.setAttribute("src", imageSrc);
}

function imageFour() {
    counter = 3;
    var imageSrc = document.querySelector('#image4').getAttribute("src");
    mainImage.setAttribute("src", imageSrc);
}
