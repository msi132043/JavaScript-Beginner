//Guess Number Game: 

var userWin = 0;

var userLoss = 0;

for (i = 0; i < 5; i++) {
    var guessNumber = parseInt(prompt('Guess any number from 1 to 5 : '));
    var randomNumber = Math.floor(Math.random() * 5 + 1);
    if (randomNumber == guessNumber) {
        console.log('You are win');
        userWin++;
    } else {
        console.log('Sorry! Number was '+randomNumber);
        userLoss++;
    }
}

document.write('You are win :' + userWin + '<br>' + 'You are loss : ' + userLoss);
