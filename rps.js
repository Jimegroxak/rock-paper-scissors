let humanScore = 0;
let computerScore = 0;

function getComputerChoice() {
    let num = Math.random() * 3;

    if (num >= 2) return 'rock';
    else if (num >= 1) return 'paper';
    else return 'scissors';
}

function getHumanChoice() {
    let playerChoice = prompt("Choose your weapons (rock, paper, or scissors)");
    return playerChoice;
}

function playRound(computerChoice, humanChoice) {
    let cleanedHumanChoice = humanChoice.toLowerCase()
    let winnerMessage = ''

    // handle ties
    if (cleanedHumanChoice === computerChoice) {
        console.log(`Tie! You both picked ${cleanedHumanChoice}`);
        console.log(`Your score: ${humanScore}\nComputer score: ${computerScore}`);
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
        console.log(`${winnerMessage} ${cleanedHumanChoice} beats ${computerChoice}`);
    else
        console.log(`${winnerMessage} ${computerChoice} beats ${cleanedHumanChoice}`);
    console.log(`Your score: ${humanScore}\nComputer score: ${computerScore}`);
}

function playMultipleRounds(rounds) {
    for (let i = 0; i < rounds; i++) {
        const computerChoice = getComputerChoice();
        const humanChoice = getHumanChoice();

        playRound(computerChoice, humanChoice);
    }

    console.log("Game over!");
    console.log(`Final score: You: ${humanScore}, Computer: ${computerScore}`);
}

playMultipleRounds(5);