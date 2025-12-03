// Representing rock, paper and scissors
const CHOICES = 3;

const WINNING_HANDS = {
    Rock: "Paper",
    Paper: "Scissors",
    Scissors: "Rock"
}

const rock = document.querySelector(".rock");
const paper = document.querySelector(".paper");
const scissors = document.querySelector(".scissors");

rock.addEventListener("click", playRound("Rock", getComputerChoice()));
paper.addEventListener("click", playRound("Paper", getComputerChoice()));
scissors.addEventListener("click", playRound("Scissors", getComputerChoice()));

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
    
    return playerHand.toLowerCase();
    
}

function playGame() {   
    
    let computerScore = 0;
    let humanScore = 0;

    function playRound(computerChoice, humanChoice) {
        if (computerChoice == humanChoice) {
            console.log("Tie");
        } else if (WINNING_HANDS[computerChoice] == humanChoice) {
            humanScore++
            console.log(`You win! ${humanChoice} beats ${computerChoice}`);
        } else {
            computerScore++
            console.log(`You lose! ${computerChoice} beats ${humanChoice}`);
        }
    }

    for (let i = 0; i < 5; i++) {
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
