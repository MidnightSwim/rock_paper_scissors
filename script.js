let humanScore = 0;
let computerScore = 0;

const body = document.querySelector('body');
const buttons = document.querySelectorAll('button');
const rock = document.querySelector('#rock');
const paper = document.querySelector('#paper');
const scissors = document.querySelector('#scissors');
const divPlay = document.createElement("div");
const divResult = document.createElement("div");
const divWinner = document.createElement("div");
const pPlayer = document.createElement("p");
const pComputer = document.createElement("p");
const pPlayerScore = document.createElement("p");
const pComputerScore = document.createElement("p");
const pWinner = document.createElement("p");

body.appendChild(divPlay);
divPlay.className = "play";
divPlay.appendChild(pPlayer);
divPlay.appendChild(pComputer);

body.appendChild(divResult);
divResult.className = "results";
divResult.appendChild(pPlayerScore);
divResult.appendChild(pComputerScore);  
divResult.appendChild(pWinner); 
  
body.append(divWinner);
divWinner.className = "winner";
divWinner.appendChild(pWinner);   


function getHumanChoice(e) {
    return e.id;
}

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
    
};

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
};

// function playGame() {
//         const humanChoice = getHumanChoice();
//         const computerChoice = getComputerChoice();
//         playRound(humanChoice, computerChoice);
// };

buttons.forEach(button => {
            button.addEventListener("click", function () {
                const humanChoice = getHumanChoice(button);
                const computerChoice = getComputerChoice();
                console.log(computerChoice);

                playRound(humanChoice, computerChoice);
                pPlayer.textContent = "The player chose " + humanChoice;
                pComputer.textContent = "The computer chose " + computerChoice;
                pPlayerScore.textContent = "Player Score: " + humanScore;
                pComputerScore.textContent = "Computer Score: " + computerScore;

                if (humanScore >= 5) {
                    pWinner.textContent = "The Winner is the player!!!";
                    pPlayer.remove();
                    pComputer.remove();
                    buttons.forEach(button => {
                        button.disabled = true;
                    })
                } else if (computerScore >= 5) {
                    pWinner.textContent = "The Winner is the computer!!!";
                    pPlayer.remove();
                    pComputer.remove();
                    buttons.forEach(button => {
                        button.disabled = true;
                    })
                }

                

            });
});


