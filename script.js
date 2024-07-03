function getComputerChoice() {
    let value = Math.random();
    if (value <= 0.33) {
        return "rock";
    }
    if (value > 0.33 && value <= 0.66) {
        return "paper";
    }
    else {
        return "scissors";
    }
}

function getHumainChoice() {
    let choice = prompt("Rock, paper or scissors ?");

    if (choice.toLowerCase() === "rock") {
        return "rock";
    }
    if (choice.toLowerCase() === "paper") {
        return "paper";
    }
    if (choice.toLowerCase() === "scissors") {
        return "scissors";
    }
    else {
        alert("Sorry, you must have mispelled the word");
        getHumainChoice()

    }
}

function playRound(humanChoice, computerChoice) {

    if (humanChoice === computerChoice) {
        console.log("Draw!"); //no point for the player nor the computer

    } else {
        if (humanChoice === "rock") {
            if (computerChoice === "scissors") {
                humanScore++;
            } else {
                computerScore++;
            }
        }
        if (humanChoice === "paper") {
            if (computerChoice === "rock") {
                humanScore++;
            } else {
                computerScore++;
            }
        }
        if (humanChoice === "scissors") {
            if (computerChoice === "paper") {
                humanScore++;
            } else {
                computerScore++;
            }
        }
    }
}

let humanScore = 0;
let computerScore = 0;

function playGame() {

    let i = 0;
    while (i < 5) {
        const humanChoice = getHumainChoice();
        const computerChoice = getComputerChoice();
        playRound(humanChoice, computerChoice);
        i++;
        console.log("The score of the player is " + humanScore);
        console.log("The score of the computer is " + computerScore);
    }

}

playGame();
console.log("Total score for the player:" + humanScore);
console.log("Total score for the computer:" + computerScore);