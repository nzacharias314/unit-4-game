

let wins = 0;
let losses = 0;
let computerChoice = 0;
let currentScore = 0;
let crystal1 = 0;
let crystal2 = 0;
let crystal3 = 0;
let crystal4 = 0;

randomNumber = function() {
    let computerGuess = Math.floor(Math.random() * 120 + 19);

    computerChoice += computerGuess;
    return computerGuess;
}

crystalNumber = function() {
    let randomCrystal = Math.floor(Math.random() * 12 + 1);
    return randomCrystal;
}

setCrystal = function() {
    crystal1 += crystalNumber();
    crystal2 += crystalNumber();
    crystal3 += crystalNumber();
    crystal4 += crystalNumber();
}

setCrystal();

$("#number-to-guess").text(randomNumber);

$("button").on("click", function() {
    if (this.id === "crystalOne") {
    currentScore += crystal1;
        }
    else if (this.id === "crystalTwo") {
    currentScore += crystal2;
        }
    else if (this.id === "crystalThree") {
    currentScore += crystal3;
        }
    else if (this.id === "crystalFour") {
    currentScore += crystal4;
        }

    $("#current-number").text(currentScore);

    winLossTally();

});



winLossTally = function() {
    if (currentScore === computerChoice) {
        wins += 1;
        $("#wins").text(wins);      
        reset();
        }
    else if (currentScore > computerChoice) {
        losses += 1;
        $("#losses").text(losses);
        reset();
        }
    }


    reset = function() {
        currentScore = 0;
        $("#current-number").text(currentScore);
        crystal1 = 0;
        crystal2 = 0;
        crystal3 = 0;
        crystal4 = 0;
        computerChoice = 0;
        setCrystal();
        $("#number-to-guess").text(computerChoice += randomNumber());
    }

