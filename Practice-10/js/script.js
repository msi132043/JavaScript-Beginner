var outPut = document.querySelector('.output');


document.addEventListener('keypress', function (event) {
    var text = event.key;
    outPut.innerHTML = text;
})
