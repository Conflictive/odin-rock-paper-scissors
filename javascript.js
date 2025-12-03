// Representing rock, paper and scissors
const CHOICES = 3;

const WINNING_HANDS = {
    Rock: "Paper",
    Paper: "Scissors",
    Scissors: "Rock"
}

let computerScore = 0;
let humanScore = 0;

// Returns 0, 1 or 2
function getRandomInt() {

  return Math.floor(Math.random() * CHOICES);
}

function getComputerChoice() {
    switch(getRandomInt()) {
        case 0:
            return "Rock";
        case 1:
            return "Paper";
        case 2:
            return "Scissors";
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
    results.textContent = "Game over";
    const winner = document.createTextNode(" -");
    const winInfo = document.createTextNode(" - ");

    if (humanScore > computerScore) {
        winner.textContent = " - You won!";
    } else {
        winner.textContent = " - The computer won.";
    }

    results.appendChild(winner);

    winInfo.textContent = ` Final score - You: ${humanScore}, Computer: ${computerScore}`;
    results.appendChild(winInfo);

    resetBtn.style.visibility = "visible";
   
    resetBtn.addEventListener("click", () => {
        gameControls.style.visibility = "visible";
        resetBtn.style.visibility = "hidden";

        computerScore = 0;
        humanScore = 0;

        hScore.textContent = humanScore;
        cScore.textContent = computerScore;
    });

    gameControls.style.visibility = "hidden";
    
}

const rockBtn = document.querySelector("#rock");
const paperBtn = document.querySelector("#paper");
const scissorsBtn = document.querySelector("#scissors");

const results = document.querySelector("#results");
const humanResult = document.querySelector("#human-score");
const computerResult = document.querySelector("#computer-score");
const hScore = document.createTextNode("0");
const cScore = document.createTextNode("0");

humanResult.appendChild(hScore);
computerResult.appendChild(cScore);


rockBtn.addEventListener("click", () => {
    playRound(getComputerChoice(), "Rock");
});

paperBtn.addEventListener("click", () => {
    playRound(getComputerChoice(), "Paper");
});

scissorsBtn.addEventListener("click", () => {
    playRound(getComputerChoice(), "Scissors");
});

const gameControls = document.querySelector("#game-controls");
const endContainer = document.querySelector("#game-end");
const resetBtn = document.createElement("button");
resetBtn.textContent = "Play again"
resetBtn.style.visibility = "hidden";
endContainer.appendChild(resetBtn);


