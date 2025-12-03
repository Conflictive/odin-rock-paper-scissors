// CONSTANTS & VARIABLES
const CHOICES = 3;

const WINNING_HANDS = {
    Rock: "Paper",
    Paper: "Scissors",
    Scissors: "Rock"
}

let computerScore = 0;
let humanScore = 0;

// DOM ELEMENTS
const gameControls = document.querySelector("#game-controls");
const endContainer = document.querySelector("#game-end");
const rockBtn = document.querySelector("#rock");
const paperBtn = document.querySelector("#paper");
const scissorsBtn = document.querySelector("#scissors");
const results = document.querySelector("#results");
const humanResult = document.querySelector("#human-score");
const computerResult = document.querySelector("#computer-score");

// Create Text Nodes for Scores
const hScore = document.createTextNode("0");
const cScore = document.createTextNode("0");
humanResult.appendChild(hScore);
computerResult.appendChild(cScore);

// Create Reset Button (Hidden by default)
const resetBtn = document.createElement("button");
resetBtn.textContent = "Play again";
resetBtn.style.visibility = "hidden";
endContainer.appendChild(resetBtn);

// GAME LOGIC
function getRandomInt() {
  return Math.floor(Math.random() * CHOICES);
}

function getComputerChoice() {
    switch(getRandomInt()) {
        case 0: return "Rock";
        case 1: return "Paper";
        case 2: return "Scissors";
    }
}

function playRound(computerChoice, humanChoice) {

    if (computerChoice == humanChoice) {
         results.textContent = "Tie!"
    } else if (WINNING_HANDS[computerChoice] == humanChoice) {
        humanScore++;
        hScore.textContent = humanScore
        results.textContent = `You win! ${humanChoice} beats ${computerChoice}`;
    } else {
        computerScore++;
        cScore.textContent = computerScore;
        results.textContent = `You lose! ${computerChoice} beats ${humanChoice}`;
    }

    if (computerScore == 5 || humanScore == 5){
        endGame();
    }
}

function endGame() {
    gameControls.style.visibility = "hidden";
    
    resetBtn.style.visibility = "visible";

    if (humanScore > computerScore) {
        results.textContent = "Game Over - You Won!";
    } else {
        results.textContent = "Game Over - The Computer Won.";
    }
}

function resetGame() {
    computerScore = 0;
    humanScore = 0;
    
    hScore.textContent = 0;
    cScore.textContent = 0;
    results.textContent = "Choose your weapon!"; 
    
    gameControls.style.visibility = "visible";
    resetBtn.style.visibility = "hidden";
}

// EVENT LISTENERS  
rockBtn.addEventListener("click", () => {
    playRound(getComputerChoice(), "Rock");
});

paperBtn.addEventListener("click", () => {
    playRound(getComputerChoice(), "Paper");
});

scissorsBtn.addEventListener("click", () => {
    playRound(getComputerChoice(), "Scissors");
});

resetBtn.addEventListener("click", resetGame);






