$(document).ready(function () {

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
    
    function startGame() {

        correctGuesses = phrases[Math.floor(Math.random() * phrases.length)];
        console.log(correctGuesses);

        // correctGuesses = phrases.text('');
        // console.log(correctGuesses + "app.js");

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
            
            // imageReplacement();
        } 

        imageReplacement();
        
        $('#phraseToGuess').html(phraseLetters);


    }
    startGame()

    function imageReplacement() { 

        if (phrases === "zach stop") {
            document.getElementById('images').src = "./assets/images/zachstop.jpg";
        } else if (phrases === "you got eczema") {
            document.getElementById('images').src = "./assets/images/ezcma.jpg";
        } else if (phrases === "if ur shorts aren't high waisted, what are they") {
            document.getElementById('images').src = "./assets/images/highwaisted.jpg";
        } else if (phrases === "uuuhhughhughfuckin ugh") {
            document.getElementById('images').src = "./assets/images/ugh.jpg";
        } else if (phrases === "hoe don't do it, oh my god") {
            document.getElementById('images').src = "./assets/images/dontdoit.jpg";
        } else if (phrases === "waawagha, lipstick in my valentino white bag") {
            document.getElementById('images').src = "./assets/images/valentino.jpg";
        } else if (phrases === "suh dude") {
            document.getElementById('images').src = "./assets/images/suhdude.jpg";
        } else if (phrases === "hey i'm a lesbian, i thought you wewe amewican") {
            document.getElementById('images').src = "./assets/images/lesbian.jpg";
        } else if (phrases === "has anyone ever told you you look like beyonce") {
            document.getElementById('images').src = "./assets/images/beyonce.jpg";
        } else if (phrases === "it is wednesday my dudes aaahhhhhhhhhh") {
            document.getElementById('images').src = "./assets/images/wednesday.jpg";
        } else if (phrases === "it's fricken bats, i love halloween") {
            document.getElementById('images').src = "./assets/images/halloween.jpg";
        } else if (phrases === "i'm washing me and my clothes") {
            document.getElementById('images').src = "./assets/images/menmyclothes.jpg";
        } else if (phrases === "he needs some milk") {
            document.getElementById('images').src = "./assets/images/milk.jpg";
        } else if (phrases === "dahhdee, do i look like ur daddy") {
            document.getElementById('images').src = "./assets/images/daddy.jpg" // this one needs a new image
        } else if (phrases === "whoever threw that paper ur mom's a hoe") {
            document.getElementById('images').src = "./assets/images/urmomahoe.jpg";
        } else if (phrases === "you're not my dad") {
            document.getElementById('images').src = "./assets/images/notmydad.jpg";
        } else if (phrases === "fr e sh a voca do") {
            document.getElementById('images').src = "./assets/images/freshavocado.jpg";
        } else if (phrases === "this bitch empty, yeeet") {
            document.getElementById('images').src = "./assets/images/yeeet.jpg";
        } else if (phrases === "ahhhh stop i coulda dropped my croissant") {
            document.getElementById('images').src = "./assets/images/croissant.jpg";
        }
    }

    function userkey(e) { 
    
        if (phrases.indexOf(e) > -1) {
           
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

    $(document).keypress(function (grabUserkey) {

        var guessedLetters = grabUserkey.key;
        // console.log(guessedLetters);
        for (var i = 0; i < characters.length; i++) {

            if (guessedLetters === characters[i]) {
                // console.log(guessedLetters); 
                
                userkey(guessedLetters);
                
            }
        
        }
        
    })































})