let humanScore = 0;
let computerScore = 0;

function getComputerChoice() {
    let num = Math.random() * 3;

    if (num >= 2) return 'rock';
    else if (num >= 1) return 'paper';
    else return 'scissors';
}

function playRound(computerChoice, humanChoice) {
    let cleanedHumanChoice = humanChoice.toLowerCase()
    let winnerMessage = ''

    // handle ties
    if (cleanedHumanChoice === computerChoice) {
        results.textContent = `Tie! You both picked ${cleanedHumanChoice}`;
        score.textContent = `Your score: ${humanScore}\nComputer score: ${computerScore}`;
        return;
    }

    switch (computerChoice) {
        case 'rock':
            if (cleanedHumanChoice === 'paper') {
                winnerMessage = "You win!";
                humanScore += 1;
            } else if (cleanedHumanChoice === 'scissors') {
                winnerMessage = "Computer wins!";
                computerScore += 1;
            }
            break;
        case 'paper':
            if (cleanedHumanChoice === 'scissors') {
                winnerMessage = "You win!";
                humanScore += 1;
            } else if (cleanedHumanChoice === 'rock') {
                winnerMessage = "Computer wins!";
                computerScore += 1;
            }
            break;
        case 'scissors':
            if (cleanedHumanChoice === 'rock') {
                winnerMessage = "You win!";
                humanScore += 1;
            } else if (cleanedHumanChoice === 'paper') {
                winnerMessage = "Computer wins!";
                computerScore += 1;
            }
            break;
    }

    if (winnerMessage === "You win!")
        results.textContent = `${winnerMessage} ${cleanedHumanChoice} beats ${computerChoice}`;
    else
        results.textContent = `${winnerMessage} ${computerChoice} beats ${cleanedHumanChoice}`;
    score.textContent = `Your score: ${humanScore}\nComputer score: ${computerScore}`;
    
    if (humanScore === 5) gameOver("you");
    else if (computerScore === 5) gameOver("computer");
}

function gameOver(winner) {
    alert(`${winner} wins!`);
    humanScore = 0;
    computerScore = 0;
}

const buttons = document.createElement("div");
buttons.addEventListener("click", (event) => {
    let target = event.target;

    switch (target.id) {
        case 'rockButton':
            playRound(getComputerChoice(), 'rock');
            break;
        case 'paperButton':
            playRound(getComputerChoice(), 'paper');
            break;
        case 'scissorsButton':
            playRound(getComputerChoice(), 'scissors');
            break;

    }
})

// create choice buttons
const rockButton = document.createElement("button");
rockButton.id = "rockButton";
rockButton.textContent = "ROCK";
buttons.appendChild(rockButton);

const paperButton = document.createElement("button");
paperButton.id = "paperButton";
paperButton.textContent = "PAPER";
buttons.appendChild(paperButton);

const scissorsButton = document.createElement("button");
scissorsButton.id = "scissorsButton";
scissorsButton.textContent = "SCISSORS";
buttons.appendChild(scissorsButton);

// setup page
const body = document.querySelector("body");
body.appendChild(buttons);

const results = document.createElement("div");
const score = document.createElement("div");
body.appendChild(results);
body.appendChild(score);