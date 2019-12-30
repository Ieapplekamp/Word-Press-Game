var guessAmount = 8;
var wins = 0;
var losses = 0;
var numberOfBlanks = "";
var correctGuesses = [];
var incorrectGuesses = [];
// variable for letters in the phrase
var phraseLetters = [];
// characters possible to pressed 
var characters = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];

var phrases = [
    "hippopotamus",
    "bloat",
    "tower",
    "giraffes",
    "chicago",
    'windy city',
    "shanghai",
    "oriental paris",
    "new york city",
    "city of dreams",
    "cherry blossom",
    "spring",
    "mountain peaks",
    "tulip",
    "latte art"
];

var phrase = "";

// Function to start the game, this is actually the first function
function gameStart() {
    
    phrase = phrases[Math.floor(Math.random() * phrases.length)];
    guessAmount = 8;
    numberOfBlanks = "";
    correctGuesses = [];
    incorrectGuesses = [];
    phraseLetters = [];
    correctGuesses = phrase.split('');

    for (var i = 0; i < correctGuesses.length; i++) {
    
        if (correctGuesses[i] === " ") {
            phraseLetters.push("&nbsp;"); 
        }
        else if (correctGuesses[i] === "'") {
            phraseLetters.push("&#39;"); 
        }
        else if (correctGuesses[i] === ",") {
            phraseLetters.push("&#44;"); 
        }
        else {
            phraseLetters.push('_');
            numberOfBlanks++;
        }

        imageReplacement();
        document.getElementById('phraseToGuess').innerText = phraseLetters;
        
    } 
    
    document.getElementById('phraseToGuess').innerHTML = phraseLetters.join(' ');
    document.getElementById('guesses-left').innerHTML = guessAmount;
    
}

// this is the ugliest thing... it should be a switch, but why fix what aint broke
function imageReplacement() { 

    if (phrase === "mountain peaks") {
        document.getElementById('images').src = "./assets/images/mountainpeaks.jpeg";
    } else if (phrase === "cherry blossom" || phrase === "spring") {
        document.getElementById('images').src = "./assets/images/cherryblossom.jpeg";
    } else if (phrase === "new york city" || phrase === "city of dreams") {
        document.getElementById('images').src = "./assets/images/newyorkcity.jpeg";
    } else if (phrase === "shanghai" || phrase === "oriental paris") {
        document.getElementById('images').src = "./assets/images/shanghai.jpeg";
    } else if (phrase === "chicago" || phrase === "windy city") {
        document.getElementById('images').src = "./assets/images/chicago.jpeg";
    } else if (phrase === "tower" || phrase === "giraffes") {
        document.getElementById('images').src = "./assets/images/tower.jpeg";
    } else if (phrase === "hippopotamus" || phrase === "bloat") {
        document.getElementById('images').src = "./assets/images/hippopotamus.jpeg";
    } else if (phrase === "tulip" || phrase === "latte art") {
        document.getElementById('images').src = "./assets/images/tulip.jpeg";
    }
}

// Function that will do something with the userkey, in terms of guessing the correct letters at a given index 
function userkey(e) { 
    
    if (phrase.indexOf(e) > -1) {
       
        for (var i = 0; i < correctGuesses.length; i++) {
            
            if (correctGuesses[i] === e && phraseLetters[i] === "_") {
                
                phraseLetters[i] = e;
                numberOfBlanks--; 
                document.getElementById('phraseToGuess').innerHTML = phraseLetters.join(' ');
                
            } 
        } 
        
    } else {

        incorrectGuesses.push(e);
        guessAmount--;
        document.getElementById('guesses-left').innerHTML = guessAmount;
        document.getElementById('wrong-guess').innerHTML = incorrectGuesses.join(' ');
    
    }
}

function guesses() {
    
    if (numberOfBlanks == 0) {
        
        swal("Correct!!", "Congratulations!", "success",{
            timer: 1500,
        });
        wins++;
        document.getElementById('wins').innerHTML = wins;
        setTimeout(gameStart, 1500)
        

    } else if(guessAmount === 0) {

        swal("You Lost!!", "Try again", "error",{
            timer: 1500,
        });
        losses++;
        document.getElementById('losses').innerHTML = losses;
        
        setTimeout(gameStart, 1500)
        
    }
}

gameStart();

document.onkeyup = function (firstEvent) {
    
    var guessedLetters = firstEvent.key;

    for (var i = 0; i < characters.length; i++) {

        if (guessedLetters === characters[i]) {
            userkey(guessedLetters);
            guesses();
        }
    
    }

}