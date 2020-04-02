var bodyColor = document.querySelector('body');

var root = document.documentElement;

var getStyle = getComputedStyle(root);

var backgroundDark = getStyle.getPropertyValue('--background-dark');
var background = getStyle.getPropertyValue('--background');

var cardBackgroundDark = getStyle.getPropertyValue('--card-background-dark');
var cardBackground = getStyle.getPropertyValue('--card-background');

var textColorDark = getStyle.getPropertyValue('--text-color-dark');
var textColor = getStyle.getPropertyValue('--text-color');

function darkMode(){
    root.style.setProperty('--background', backgroundDark);
    root.style.setProperty('--card-background', cardBackgroundDark);
    root.style.setProperty('--text-color', textColorDark);
}

function normalMode(){
    root.style.setProperty('--background', background);
    root.style.setProperty('--card-background', cardBackground);
    root.style.setProperty('--text-color', textColor);
}
