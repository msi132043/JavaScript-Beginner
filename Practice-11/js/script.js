var outPut = document.querySelector('.output');
var textbox = document.querySelector('#textbox');
var count = 0;

textbox.innerHTML = '';

textbox.addEventListener('keypress', function () {
    count++;
    outPut.innerHTML = count;
})