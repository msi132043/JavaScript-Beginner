//image slider with pre and next button

var image = document.querySelector('#image');

var allImage = ['images/image-1.jpg', 'images/image-2.jpg', 'images/image-3.jpg', 'images/image-4.jpg'];

var counter = 0;

function nextImage() {
    counter++;
    if (counter >= allImage.length) {
        counter = 0;
    }
    image.src = allImage[counter];
}

function previousImage() {
    counter--;
    if (counter < 0) {
        counter = allImage.length - 1;
    }
    image.src = allImage[counter];
}
