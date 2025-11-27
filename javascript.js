// Representing rock, paper and scissors
const CHOICES = 3;

const WINNING_HANDS = {
    rock: "Paper",
    paper: "Scissors",
    scissors: "Rock"
}

const gameState = {
  playerScore: 0,
  computerScore: 0,
  round: 1
};


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

function getHumanChoice() {
    let playerHand = prompt("Rock, Paper, Scissors");

    switch (playerHand.toLowerCase()) {
        case "rock":
            return "Rock";
        case "paper":
            return "Paper";
        case "scissors":
            return "Scissors";
    }
}

function playRound(computerChoice, humanChoice) {
    if (computerChoice == humanChoice) {
        gameState.round++;
        return "Tie";
    }

    if (WINNING_HANDS[computerChoice] = humanChoice) {
        gameState.playerScore++;
        return `You win! ${humanChoice} beats ${computerChoice}`;
    }

    gameState.computerScore++
    return `You lose! ${computerChoice} beats ${humanChoice}`;
}

console.log(playRound(getComputerChoice(), getHumanChoice()));

