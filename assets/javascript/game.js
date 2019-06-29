var wordList = ["michael", "jim", "pam", "dwight", "toby", "ryan", "kevin", "andy"]

var wordGenerated = wordList[Math.floor(Math.random() * wordList.length)];

var rightLetter = [];

var wrongLetter = [];

var emptyLetter = [];



console.log(wordGenerated);

for (var i = 0; i < wordGenerated.length; i++) {
        emptyLetter.push("_");      
    }
var underScores = function () {    
    return emptyLetter.join(' ');
}



console.log(underScores());

var remainingLetters = wordGenerated.length;

var wordGeneratedElement = document.querySelector("#wordGenerated");

var guessesElement = document.querySelector("#guessesRemain")

wordGeneratedElement.innerHTML = underScores();

var win = 1;

var guesses = 4;

var lettersGuessedElement = document.querySelector("#lettersGuessed");

var winElement = document.querySelector("#win");

function winReset() {
    wordGeneratedElement.innerHTML = underScores();
    lettersGuessedElement.innerHTML = "";
    guessesElement.innerHTML = 4;
}

document.onkeyup = function (event) {
    // ------------------------------------------------------------------------------------------------------------------
    var userGuess = event.key;
    console.log(userGuess);
        if (wordGenerated.indexOf(userGuess) > -1) {
        rightLetter.push(userGuess);
        emptyLetter[wordGenerated.indexOf(userGuess)] = userGuess;
        wordGeneratedElement.innerHTML = underScores(userGuess);
        console.log(rightLetter);

            if (emptyLetter.join('') == wordGenerated) {
            winElement.innerHTML = win;
            winReset();
            }   
        } else {
        wrongLetter.push(userGuess);
        lettersGuessedElement.innerHTML = wrongLetter.join(' ');
        guesses--;
        }
        if (guesses < 1) {
        alert("Sorry! You lose! Try again!");
        location.reload();
    }   

    guessesElement.innerHTML = guesses;

}


