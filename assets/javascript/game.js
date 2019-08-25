// Based off the book - milk and vine by adam gasiewski & emily beck

// variable for the amount of guesses
var guessAmount = 10;

// variable for the amount of blank spaces and good/bad guesses
var numberOfBlanks = "";
var correctGuesses = [];
var incorrectGuesses = [];
// variable for letters in the phrase
var phraseLetters = [];

// variable for characters pressed 
var characters = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];

// variable for all the possible word/phrase choices 
var phrases = ["ahhhh stop i coulda dropped my croissant",
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

// Math.floor(Math.random) - go in my function to start the game
var phrase = "";


// Function to start the game, this is actually the first function
function gameStart () {
    
    
    phrase = phrases[Math.floor(Math.random() * phrases.length)];
    console.log(phrase);

    correctGuesses = phrase.split('');
    //correctGuesses.join('');
    //numberOfBlanks = correctGuesses.length;
    

    for (var i = 0; i < correctGuesses.length; i++) {
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
        numberOfBlanks++;
    }

    document.getElementById('phraseToGuess').innerHTML = 
    phraseLetters;
} 

    document.getElementById('phraseToGuess').innerHTML = phraseLetters.join(' ');
    document.getElementById('guesses-left').innerHTML = 'Guesses Left: ' + guessAmount;
    
}


//function imageReplacement() {

    // Not exactly what I thought it was [tried to refer to the in class assignment for this function, but it was written in jquery and I wanted to do this assigment with just JavaScript]
    // originally I had put all the images in the html and set the visibilty to hidden, but that didn't work. Then my next idea was to try to just change the image itself using JS, however I keep running into a console.log issue of null.
    // My last idea is to set an array = to all the image possibilites (Everything I looked up mentioned the idea of doing it as an object), and then do some conditional statements for when the random phrase is chosen, it'll select the correct image to match it (I've just run out of time to try to put that theory to code (I added a fun video to watch that'll give you some answer)

   // phrase = phrases[Math.floor(Math.random() * phrases.length)];
   // console.log(phrase);

   // if (phrase === "zach stop") {
   //     document.getElementById('#images').src = "zachstop.jpg";
   // }
//}

// Function that will do something with the userkey, in terms of guessing the correct letters at a given index 
function userkey(e) { // e === event 
    
    if (phrase.indexOf(e) > -1) {
        // need a little more clarification on the -1 idea -I think I get it tho, it has to do with the possibly of something being added to the array, or possibly not declared but still able to pull, like if the array were reassigned somewhere else (if that make sense)
        for (var i = 0; i < correctGuesses.length; i++) {
            
            if (correctGuesses[i] === e && phraseLetters[i] === "_") {
                
                phraseLetters[i] = e;
                //numberOfBlanks--; sometimes it does stuff most times it wont let me finish building the word
                numberOfBlanks--; //this doesnt work yet (I figured out my issue)
                //youWin--; that does nothin 
                document.getElementById('phraseToGuess').innerHTML = phraseLetters.join(' ');
                
            } 
        } 
    } else {
        incorrectGuesses.push(e);
        guessAmount--;
        // I tried this 100 million ways and i'm 99.999% my issue with getting it had to do with a positioning (it works)
        document.getElementById('guesses-left').innerHTML = 'Guesses Left: ' + guessAmount;
        document.getElementById('wrong-guess').innerHTML = 'That is not correct: ' + incorrectGuesses.join(' ');
        console.log(incorrectGuesses); // IT WORKS
    }

}


// This should be the last function - Do something with the user guesses if its a win or else a loss. It should probably be called at the end in the document.onkeyup 


function guesses() {

    console.log('guesses function');
    //numberOfBlanks = phraseLetters.length;
    //youWin = numberOfBlanks.toString().replace(/' '/gi, '').replace(/','/gi, '').replace(/"'"/gi, ''); <-- yeah i couldn't figure this out
    

    console.log(numberOfBlanks);
    //phrases = numberOfBlanks.join(''); <- test
    if (numberOfBlanks == 0) {
        console.log("it's working " + numberOfBlanks);
        alert("YOU WON");

    } else if (guessAmount === 0) {
        alert("YOU SUCK, TRY AGAIN");
    }
    
    
}

gameStart();
//imageReplacement();

// Function to grab the user key, should probably go towards the bottom
document.onkeyup = function(firstEvent) {
    var guessedLetters = firstEvent.key;
    for (var i = 0; i < characters.length; i++) {
        if (guessedLetters === characters[i]) {
            
            console.log(guessedLetters); 
            // the console log above only works if the console.log(phraseletters) is also being used
            userkey(guessedLetters);
            guesses();
        }
    // inside the if statment above is where I will call another function with userkeys
    }
}

