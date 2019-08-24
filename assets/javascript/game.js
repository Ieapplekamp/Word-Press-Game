// What Do I need? what will be global?
// Based off the book - milk and vine by adam gasiewski & emily beck






// if statement for when a player types something -if they get it right or wrong
//something to add the character to the screen - maybe do something to change the visibilty when the correct character is pressed (on.keyup thing)
// if they get it wrong subtract a guess or add a body part
//when they run out of guess do something to let them know they lost

// variable - wins & losses 
var WinsTotal = 0;


// variable for the amount of guesses
var guessAmount = 10;
var youWin = 0;
// variable for the amount of blank spaces and good/bad guesses
var numberOfBlanks = "";
var correctGuesses = [];
var incorrectGuesses = [];
// variable for letters in the phrase
var phraseLetters = [];

// variable for characters pressed 
var characters = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z", "'", ","];

// variable for all the possible word/phrase choices 
var phrases = ["ahhhh stop i coulda dropped my croissant",
"happy christhuns, it's chrismah, merry chrisis, merry chrysler",
"this bitch empty, yeeet",
"fr e sh a voca do", "you're not my dad",
"whoever threw that paper ur mom's a hoe",
"dahhdee, do i look like ur daddy",
"he needs some milk",
"i'm washing me and my clothes",
"it's fricken bats, i love halloween",
"it is wednesday my dudes aaahhhhhhhhhh",
"has anyone ever told you you look like beyonce",
"hey i'm a lesbian, i thought you wewe amewican",
"suh dude",
"waawagha, lipstick in my valentino white bag",
"hoe don't do it, oh my god",
"uuuhhughhughfuckin ugh",
"if ur shorts aren't high waisted, what are they",
"you got eczema",
"zach stop"
];

// Math.floor(Math.random) - something like that will be necessary - looks like it will need to go in my function to start the game
var phrase = "";

// add something to create an underscore - split() Tip: If an empty string ("") is used as the separator, the string is split between each character. w3schools




// Function to start the game, this is actually the first function
function gameStart () {
    
    phrase = phrases[Math.floor(Math.random() * phrases.length)];
    console.log(phrase);

    correctGuesses = phrase.split('');
    //correctGuesses.join('');
    //console.log(phrase, "this is the phrase")
    //console.log(correctGuesses, "correctGuesses (array)");
    numberOfBlanks = correctGuesses.length;
    

    for (var i = 0; i < numberOfBlanks; i++) {
    //phraseLetters[i] = "_";
    //if statement " "
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
    }

    document.getElementById('phraseToGuess').innerHTML = 
    phraseLetters;
} 

    document.getElementById('phraseToGuess').innerHTML = phraseLetters.join(' ');
    document.getElementById('guesses-left').innerHTML = 'Guesses Left: ' + guessAmount;
    
    
}

// Function that will do something with the userkey, in terms of guessing the correct letters at a given index 
function userkey(e) { // e === event 
    
    if (phrase.indexOf(e) > -1) {
        // need more clarification on the -1 idea -I think I get it tho
        for (var i = 0; i < numberOfBlanks; i++) {
            
            if (correctGuesses[i] === e) {
                
                phraseLetters[i] = e;
                document.getElementById('phraseToGuess').innerHTML = phraseLetters.join(' ');
                //console.log('IT WORKS');
            } 
        } 
    } else {
        incorrectGuesses.push(e);
        guessAmount--;
        // I tried this 100 million ways and i'm 99.999% my issue with getting it had to do with a positioning (fucking annoying)
        document.getElementById('guesses-left').innerHTML = 'Guesses Left: ' + guessAmount;
        //document.getElementById('wrong-guess').innerHTML =  incorrectGuesses;
        document.getElementById('wrong-guess').innerHTML = 'That is not correct: ' + incorrectGuesses.join(' ');
        console.log(incorrectGuesses); // IT WORKS
    }

}


// This should be the last function - Do something with the user guesses if its a win or else a loss. It should probably be called at the end in the document.onkeyup 

//cannot get it to alert you win atm
function guesses() {

    console.log('guesses function');

    youWin = numberOfBlanks.toString().replace(/' '/gi, '').replace(/','/gi, '').replace(/"'"/gi, '');
    //winner = youWin.toString();

    console.log('Working');
    //phrases = numberOfBlanks.join('');
    if (youWin === 0) {
        console.log("it's working " + numberOfBlanks);
        alert("YOU WON");

    } else if (guessAmount === 0) {
        alert("YOU SUCK");
    }
    
    
}



gameStart();

// Function to grab the user key, should probably go towards the bottom
document.onkeyup = function(firstEvent) {
    var guessedLetters = firstEvent.key;
    for (var i = 0; i < characters.length; i++) {
        if (guessedLetters === characters[i]) {
            //console.log(i)
            console.log(guessedLetters); 
            // the console log above only works if the console.log(phraseletters) is also being used
            userkey(guessedLetters);
            guesses();
        }
    // inside the if statment above is where I will call another function with userkeys
    }
}

