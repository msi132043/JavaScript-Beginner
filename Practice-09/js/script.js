var header = document.querySelector('h1');
var listItems = document.querySelectorAll('.nav a');
for (i = 0; i < listItems.length; i++) {
    listItems[i].addEventListener('click', function () {
        var text = this.innerHTML;
        header.innerHTML = text + ' is clicked';
    })
}



//Manual Code:
//
//listItems[0].addEventListener('click', function () {
//    var text = this.innerHTML;
//    header.innerHTML = text + ' is clicked';
//});
//
//listItems[1].addEventListener('click', function () {
//    var text = this.innerHTML;
//    header.innerHTML = text + ' is clicked';
//});
//
//listItems[2].addEventListener('click', function () {
//    var text = this.innerHTML;
//    header.innerHTML = text + ' is clicked';
//});
//
//listItems[3].addEventListener('click', function () {
//    var text = this.innerHTML;
//    header.innerHTML = text + ' is clicked';
//});
//
//listItems[4].addEventListener('click', function () {
//    var text = this.innerHTML;
//    header.innerHTML = text + ' is clicked';
//});
