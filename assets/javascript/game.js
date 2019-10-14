// variable for the amount of guesses
var guessAmount = 10;

var wins = 0;
var losses = 0;

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
"fr e sh a voca do",
"you're not my dad",
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

var phrase = "";

// Function to start the game, this is actually the first function
function gameStart () {
    
    phrase = phrases[Math.floor(Math.random() * phrases.length)];
    guessAmount = 10;

    wins = 0;
    losses = 0;

    numberOfBlanks = "";
    correctGuesses = [];
    incorrectGuesses = [];
    phraseLetters = [];


    characters = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
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
        $('#phraseToGuess').html(phraseLetters);
        
    } 
    
    document.getElementById('phraseToGuess').innerHTML = phraseLetters.join(' ');
    document.getElementById('guesses-left').innerHTML = 'Guesses Left: ' + guessAmount;
    
}

// this is the ugliest thing... make it a switch
function imageReplacement() { 

    if (phrase === "zach stop") {
        document.getElementById('images').src = "./assets/images/zachstop.jpg";
    } else if (phrase === "you got eczema") {
        document.getElementById('images').src = "./assets/images/ezcma.jpg";
    } else if (phrase === "if ur shorts aren't high waisted, what are they") {
        document.getElementById('images').src = "./assets/images/highwaisted.jpg";
    } else if (phrase === "uuuhhughhughfuckin ugh") {
        document.getElementById('images').src = "./assets/images/ugh.jpg";
    } else if (phrase === "hoe don't do it, oh my god") {
        document.getElementById('images').src = "./assets/images/dontdoit.jpg";
    } else if (phrase === "waawagha, lipstick in my valentino white bag") {
        document.getElementById('images').src = "./assets/images/valentino.jpg";
    } else if (phrase === "suh dude") {
        document.getElementById('images').src = "./assets/images/suhdude.jpg";
    } else if (phrase === "hey i'm a lesbian, i thought you wewe amewican") {
        document.getElementById('images').src = "./assets/images/lesbian.jpg";
    } else if (phrase === "has anyone ever told you you look like beyonce") {
        document.getElementById('images').src = "./assets/images/beyonce.jpg";
    } else if (phrase === "it is wednesday my dudes aaahhhhhhhhhh") {
        document.getElementById('images').src = "./assets/images/wednesday.jpg";
    } else if (phrase === "it's fricken bats, i love halloween") {
        document.getElementById('images').src = "./assets/images/halloween.jpg";
    } else if (phrase === "i'm washing me and my clothes") {
        document.getElementById('images').src = "./assets/images/menmyclothes.jpg";
    } else if (phrase === "he needs some milk") {
        document.getElementById('images').src = "./assets/images/milk.jpg";
    } else if (phrase === "dahhdee, do i look like ur daddy") {
        document.getElementById('images').src = "./assets/images/daddy.jpg" // this one needs a new image
    } else if (phrase === "whoever threw that paper ur mom's a hoe") {
        document.getElementById('images').src = "./assets/images/urmomahoe.jpg";
    } else if (phrase === "you're not my dad") {
        document.getElementById('images').src = "./assets/images/notmydad.jpg";
    } else if (phrase === "fr e sh a voca do") {
        document.getElementById('images').src = "./assets/images/freshavocado.jpg";
    } else if (phrase === "this bitch empty, yeeet") {
        document.getElementById('images').src = "./assets/images/yeeet.jpg";
    } else if (phrase === "ahhhh stop i coulda dropped my croissant") {
        document.getElementById('images').src = "./assets/images/croissant.jpg";
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
        document.getElementById('guesses-left').innerHTML = 'Guesses Left: ' + guessAmount;
        document.getElementById('wrong-guess').innerHTML = 'That is not correct: ' + incorrectGuesses.join(' ');
        console.log(incorrectGuesses); 
    }

}



function guesses() {
    
    if (numberOfBlanks == 0) {
        
        alert("YOU WON");
        gameStart();

    } else if (guessAmount === 0) {

        alert("YOU SUCK, TRY AGAIN");
        gameStart();
        
    }
    
}


gameStart();

document.onkeyup = function(firstEvent) {
    var guessedLetters = firstEvent.key;
    for (var i = 0; i < characters.length; i++) {
        if (guessedLetters === characters[i]) {
            
            console.log(guessedLetters); 
            
            userkey(guessedLetters);
            guesses();
        }
    
    }
}
