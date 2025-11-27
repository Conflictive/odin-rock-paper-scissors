// Representing rock, paper and scissors
const CHOICES = 3;

const WINNING_HANDS = {
    rock: "Paper",
    paper: "Scissors",
    scissors: "Rock"
}

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

function playGame() {   
    
    let computerScore = 0;
    let humanScore = 0;

    function playRound(computerChoice, humanChoice) {
        if (computerChoice == humanChoice) {
            return "Tie";
        }

        if (WINNING_HANDS[computerChoice] = humanChoice) {
            gameState.playerScore++;
            return `You win! ${humanChoice} beats ${computerChoice}`;
        }

        gameState.computerScore++
        return `You lose! ${computerChoice} beats ${humanChoice}`;
    }

    for (i = 0; i <= 5; i++) {
        playRound(getComputerChoice(), getHumanChoice());
    }

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

playGame()
