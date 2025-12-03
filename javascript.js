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

    const results = document.querySelector("#results");

        if (computerChoice == humanChoice) {
            results.textContent = "Tie!"
        } else if (WINNING_HANDS[computerChoice] == humanChoice) {
            results.textContent = `You win! ${humanChoice} beats ${computerChoice}`;
        } else {
            results.textContent = `You lose! ${computerChoice} beats ${humanChoice}`;
        }
}

function endGame() {
    console.log("Game over");

    if (humanScore == computerScore) {
        console.log("It was a tie");
    } else if (humanScore > computerScore) {
        console.log("You won!");
    } else {
        console.log("The computer won.");
    }

    console.log(`Final score - You ${humanScore}, Computer - ${computerScore}`);
}

const rock = document.querySelector("#rock");
const paper = document.querySelector("#paper");
const scissors = document.querySelector("#scissors");

rock.addEventListener("click", () => {
    playRound(getComputerChoice(), "Rock");
});

paper.addEventListener("click", () => {
    playRound(getComputerChoice(), "Paper");
});

scissors.addEventListener("click", () => {
    playRound(getComputerChoice(), "Scissors");
});






// playGame()
