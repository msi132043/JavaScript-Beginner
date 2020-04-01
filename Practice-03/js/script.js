var mainImage = document.querySelector("#mainImage");

function imageOne(){
    
    var imageSrc = document.querySelector('#image1').getAttribute("src");
    mainImage.setAttribute("src", imageSrc);
}

function imageTwo(){
    var imageSrc = document.querySelector('#image2').getAttribute("src");
    mainImage.setAttribute("src", imageSrc);
}

function imageThree(){
    var imageSrc = document.querySelector('#image3').getAttribute("src");
    mainImage.setAttribute("src", imageSrc);
}

function imageFour(){
    var imageSrc = document.querySelector('#image4').getAttribute("src");
    mainImage.setAttribute("src", imageSrc);
}