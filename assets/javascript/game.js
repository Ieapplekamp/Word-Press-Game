// What Do I need? what will be global?
// Based off the book - milk and vine by adam gasiewski & emily beck






// if statement for when a player types something -if they get it right or wrong
//something to add the character to the screen - maybe do something to change the visibilty when the correct character is pressed (on.keyup thing)
// if they get it wrong subtract a guess or add a body part
//when they run out of guess do something to let them know they lost

// variable - wins & losses 
var WinsTotal = 0;
var LossesTotal = 0; 

// variable for characters pressed 
var characters = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z", "'"];

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
"Zach stop"
];

// Math.floor(Math.random) - something like that will be necessary 
var phrase = phrases[Math.floor(Math.random() * phrases.length)];
    console.log(phrase);

// variable for the amount of guesses
var guessAmount = 8;

// variable for how many letters are in the word/phrase
// add something to create an underscore - split() Tip: If an empty string ("") is used as the separator, the string is split between each character. w3schools
var phraseLetters = [];
for (var i = 0; i < phrase.length; i++) {
    phraseLetters[i] = "_";
    //phrase.split("");
   // phraseLetters.push('_'); 
    console.log(phraseLetters);
}
// ^ not the best, throws out a lot of "statments" in the console

// variable for the amount of blank spaces and good/bad guesses
var numberOfBlanks = 0;
var correctGuesses = [];
var incorrectGuesses = [];
