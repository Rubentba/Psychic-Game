var computerChoices = ["a", "b", "c", "d", "e", "f", "g", "k", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t","u", "v", "w", "x", "y", "z"];
// im sure i didnt need to use var again until document.onkeyup but i did it this way for clairty. Kept the variables that
// had something in common outside of being variables grouped together.

var wins = 0,
    losses = 0,
    guesses = 10;

var directionsText = document.getElementById("directionsText"),
    userChoiceText = document.getElementById("userchoiceText"),
    winsText = document.getElementById("winsText"),
    lossesText = document.getElementById("lossesText"),
    tiesText = document.getElementById("guessesText");

document.onkeyup = function(event) {

    // Determines which key was pressed.
    var userGuess = event.key;

    // Computer randomly chooses a choice from the options array.
    var computerGuess = computerChoices[Math.floor(Math.random() * computerChoices.length)];

    // This determines who wins/loss and guesses left.
    if (userGuess) {

        if (userGuess === computerGuess) { 
            wins++;
            guesses = 10;
        }else { guesses--; }
        if (guesses === 0) { 
            losses++;
            guesses = 10; 
        }

        // Hide the directions
        directionsText.textContent = "";

        // Displays game "UI" after directions are hidden.
        blurbText.textContent = "Guess what number I am thinking of...";
        guessesText.textContent = "Your Guesses so far: " + userGuess;
        winsText.textContent = "wins: " + wins;
        lossesText.textContent = "losses: " + losses;
        guessesLeftText.textContent = "Guesses Left: " + guesses;
    }
}