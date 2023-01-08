const ROCK = "ROCK";
const PAPER = "PAPER";
const SCISSORS = "SCISSORS";
const MAX_SCORE = 5;

const rockBtn = document.getElementById("rock-btn");
const paperBtn = document.getElementById("paper-btn");
const scissorsBtn = document.getElementById("scissors-btn");
const resetBtn = document.getElementById("reset-btn");
const endModal = document.getElementById("end-modal");
const backdrop = document.getElementById("backdrop");
const roundOutcomeTxt = document.getElementById("round-outcome-txt");
const playerScoreTxt = document.getElementById("player-score");
const computerScoreTxt = document.getElementById("computer-score");
const playerSelectionTxt = document.getElementById("player-selection");
const computerSelectionTxt = document.getElementById("computer-selection");
const gameOutcomeTxt = document.getElementById("game-outcome-txt");

let playerScore = 0;
let computerScore = 0;

function toggleBackdrop() {
    backdrop.classList.toggle("visible");
}

function showEndModal(gameOutcome) {
    endModal.classList.toggle("visible");
    switch (gameOutcome) {
        case 1:
            gameOutcomeTxt.textContent = "Congratulations, you win the game";
            break;
        case -1:
            gameOutcomeTxt.textContent = "Sorry, you lose the game";
            break;    
    }
    toggleBackdrop();
}

function updateUI(
    playerSelection = "",
    computerSelection = "",
    roundOutcome = ""
    ) {
        switch (roundOutcome) {
            case 0:
                roundOutcomeTxt.textContent = "It's a tie";
                break;
            case 1:
                roundOutcomeTxt.textContent = "You win this round";
                break;
            case -1:
                roundOutcomeTxt.textContent = "Computer wins this round";
                break;
            case "":
                roundOutcomeTxt.textContent = "";
                break;
        }
    playerScoreTxt.textContent = playerScore;
    computerScoreTxt.textContent = computerScore;
    playerSelectionTxt.textContent = playerSelection;
    computerSelectionTxt.textContent = computerSelection;
}


function endRound() {
    let gameOutcome;
    if (playerScore === MAX_SCORE) {
        gameOutcome = 1;
        showEndModal(gameOutcome);
    } else if (computerScore === MAX_SCORE) {
        gameOutcome = -1;
        showEndModal(gameOutcome);
    }
}

function resetGameHandler() {
    playerScore = 0;
    computerScore = 0;
    updateUI();
    endModal.classList.toggle("visible");
    toggleBackdrop();
}

function getComputerChoice() {
    const randomChoice = Math.random();
    if (randomChoice < 0.33) {
        return ROCK;
    } else if (randomChoice < 0.67) {
        return PAPER;
    } else {
        return SCISSORS;
    }
}

function playRoundHandler(playerSelection) {
    const computerSelection = getComputerChoice();
    let roundOutcome;
    if (playerSelection === computerSelection) {
        roundOutcome = 0;
    } else if (
        (playerSelection === ROCK && computerSelection === SCISSORS) || 
        (playerSelection === PAPER && computerSelection === ROCK) || 
        (playerSelection === SCISSORS && computerSelection === PAPER)
        ) {
        playerScore++;
        roundOutcome = 1;
    } else {
        computerScore++;
        roundOutcome = -1; 
    }
    updateUI(
        playerSelection, 
        computerSelection, 
        roundOutcome
        );
    endRound();
}


rockBtn.addEventListener("click", playRoundHandler.bind(this, playerSelection=ROCK));
paperBtn.addEventListener("click", playRoundHandler.bind(this, playerSelection=PAPER));
scissorsBtn.addEventListener("click", playRoundHandler.bind(this, playerSelection=SCISSORS));
resetBtn.addEventListener("click", resetGameHandler);