var wordList = ["michael", "jim", "pam", "dwight", "toby", "ryan", "kevin", "andy"]

var wordGenerated = wordList[Math.floor(Math.random() * wordList.length)];

var rightLetter = [];

var wrongLetter = [];

var emptyLetter = [];

console.log(wordGenerated);


var underScores = function() {    
    for (var i = 0; i < wordGenerated.length; i++) {
    emptyLetter[i] = "_";
    }
    return emptyLetter;
}


console.log(underScores());

var remainingLetters = wordGenerated.length;

var wordGeneratedElement = document.querySelector("#wordGenerated");
 
wordGeneratedElement.innerHTML = underScores();

var win = 0;

var guesses = 8;

document.onkeyup = function (event) {
// ------------------------------------------------------------------------------------------------------------------
    var userGuess = event.key;
    console.log(userGuess);
    if (wordGenerated.indexOf(userGuess) > -1) {
        rightLetter.push(userGuess);
        
        // emptyLetter[wordGenerated.indexOf(userGuess)] = userGuess;
        console.log(rightLetter);
        
    } else {
        wrongLetter.push(userGuess);
    }




    




    // var wordGeneratedElement = document.querySelector("#wordGenerated");

    // var wordGeneratedElement = Math.floor((Math.random() * wordList.length));



    // else {
    //     guesses-1;
    // }

    // drinkList.forEach(function (element) {
    //     var listElement = $("<li>");
    //     listElement.text(element);
    //     optionsElement.append(listElement);
    // });



    var winElement = document.querySelector("#win")

    winElement.innerHTML = win;

    var guessesElement = document.querySelector("#guessesRemain")

    guessesElement.innerHTML = (guesses - userGuess);

}


