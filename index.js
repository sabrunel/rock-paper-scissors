const ROCK = "ROCK";
const PAPER = "PAPER";
const SCISSORS = "SCISSORS";

function getComputerChoice() {
    const randomChoice = Math.random()

    if (randomChoice < 0.33) {
        return ROCK;
    } else if (randomChoice < 0.67) {
        return PAPER;
    } else {
        return SCISSORS;
    }
}

function getPlayerChoice() {
    playerInput = prompt(`Choose between ${ROCK}, ${PAPER} or ${SCISSORS}`, '').toUpperCase();
    return playerInput;
}

function playRound(playerSelection, computerSelection) {
    let roundOutcome;
    if (playerSelection === computerSelection) {
        roundOutcome = 0;
    } else if (
        (playerSelection === ROCK && computerSelection === SCISSORS) || 
        (playerSelection === PAPER && computerSelection === ROCK) || 
        (playerSelection === SCISSORS && computerSelection === PAPER)
        ) {
        roundOutcome = 1;
    } else {
        roundOutcome = -1;
    }
    return roundOutcome
}

function game() {
    let playerWins = 0;
    let computerWins = 0;
    for (let i = 0; i < 5; i++) {
        const playerChoice = getPlayerChoice();
        console.log("You picked " + playerChoice);
        const computerChoice = getComputerChoice();
        console.log("Computer picked " + computerChoice);
        roundOutcome = playRound(playerChoice,computerChoice);

        if (roundOutcome > 0) {
            playerWins++;
            console.log("You win this round");
        } else if (roundOutcome < 0) {
            computerWins++;
            console.log("Computer wins this round");
        } else {
            console.log("It's a tie");
        }
    }
    if (playerWins > computerWins) {
        console.log("You win the game");
    } else if (playerWins < computerWins) {
        console.log("The computer wins the game");
    } else {
        console.log("It's a draw")
    }
}

game();