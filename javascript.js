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

  return Math.floor(Math.random() * choices);
  
}

function getComputerChoice() {
    switch(getRandomInt()) {
        case 0:
            console.log('Rock');
            return "Rock";
        case 1:
            console.log('Paper');
            return "Paper";
        case 2:
            console.log('Scissors');
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
        gameState.round++
        return "Tie"
    }

    if (WINNING_HANDS[computerChoice] = humanChoice) {
        gameState.playerScore++
        return "You win!"
    }

    gameState.computerScore++
    return "You lose"
}

getHumanChoice();

