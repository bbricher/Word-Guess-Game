

var wordList = {
    "Michael": [
        "M", "i", "c", "h", "a", "e", "l"
    ], 
    "Jim": [
        "J", "i", "m"
    ], 
    "Pam": [
        "P", "a", "m"
    ], 
    "Dwight": [
        "D", "w", "i", "g", "h", "t"
    ], 
    "Toby": [
        "T", "o", "b", "y"
    ], 
    "Ryan": [
        "R", "y", "a", "n"
    ],
    "Kelly": [
        "K", "e", "l", "y"
    ],
    "Kevin": [
        "K", "e", "v", "i", "n"
    ],
    "Angela": [
        "A", "n", "g", "e", "l", "a"
    ],
    "Oscar": [
        "O", "s", "c", "a", "r"
    ],
    "Stanley": [
        "S", "t", "a", "n", "l", "e", "y"
    ],
    "Phillis": [
        "P", "h", "i", "l", "i", "s"
    ],
    "BobVanceofVanceRefridgeration": [
        "B", "o", "b", "V", "a", "n", "c", "e", "R", "f", "r", "i", "d", "g", "t"
    ],
    "Plop": [
        "P", "l", "o", "p"
    ],
    "Erin": [
        "E", "r", "i", "n"
    ],
    "Andy": [
        "A", "n", "d", "y"
    ],
    "Holly": [
        "H", "o", "l", "y"
    ],
    "Jan": [
        "J", "a", "n"
    ],
}
var win = 0;

var guesses = 8;


document.onkeyup = function (event) {

    var userGuess = event.key;

    var wordGenerated = Math.floor((Math.random() * wordList.length));

    // drinkList.forEach(function (element) {
    //     var listElement = $("<li>");
    //     listElement.text(element);
    //     optionsElement.append(listElement);
    // });


    // $("#factButton").on("click", function () {
    //     var number = 
    //     $("#factText").text(booFacts[number])
    // })




    var winElement = document.querySelector("#win")

    winElement.innerHTML = win;

    var guessesElement = document.querySelector("#guessesRemain")

    guessesElement.innerHTML = (guesses - userGuess);

}
