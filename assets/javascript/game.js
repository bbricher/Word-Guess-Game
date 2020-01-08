var wordList = ["michael", "jim", "pam", "dwight", "toby", "ryan", "kevin", "andy"];

var rightLetter = [];

var wrongLetter = [];

var emptyLetter = [];

var wordGenerated = wordList[Math.floor(Math.random() * wordList.length)];

var remainingLetters = wordGenerated.length;

var wordGeneratedElement = document.querySelector("#wordGenerated");

var guessesElement = document.querySelector("#guessesRemain")

var win = 1;

var lose = 1;

var guesses = 4;

var lettersGuessedElement = document.querySelector("#lettersGuessed");

var winElement = document.querySelector("#win");

var loseElement = document.querySelector("#lose");

var underScores = function () {    
    return emptyLetter.join(' ');
}

function startGame() {
    wordGenerated = wordList[Math.floor(Math.random() * wordList.length)];
        for (var i = 0; i < wordGenerated.length; i++) {
            console.log(wordGenerated.length)
            emptyLetter.push("_");      
        }
    console.log(wordGenerated);
    wordGeneratedElement.innerHTML = underScores();
    console.log(underScores());
}




startGame();



function resetGame() {
    rightLetter = [];
    wrongLetter = [];
    emptyLetter = [];
    lettersGuessedElement.innerHTML = "";
    wordGeneratedElement.innerHTML = "";
    guesses = 4;
    startGame();
}
//  MY ATTEMPT TO RESET THE GAME------------------------------------------------------------------------------------------------------------------
document.onkeyup = function (event) {
    
    var userGuess = event.key;
    console.log(userGuess);
        if (wordGenerated.indexOf(userGuess) > -1) {
            rightLetter.push(userGuess);
            emptyLetter[wordGenerated.indexOf(userGuess)] = userGuess;
            wordGeneratedElement.innerHTML = underScores(userGuess);
            console.log(rightLetter); 
        } else {
            wrongLetter.push(userGuess);
            lettersGuessedElement.innerHTML = wrongLetter.join(' ');
            guesses--;
        }
        if (emptyLetter.join('') === wordGenerated) {
            alert("Correct! It was: " + wordGenerated)
            winElement.innerHTML = win++;
            resetGame();
            }  
        if (guesses < 1) {
            alert("Sorry! You lose! It was: " + wordGenerated + " Try again!");
            loseElement.innerHTML = lose++;
            resetGame();
        }   

    guessesElement.innerHTML = guesses;

}



