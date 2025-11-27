// Representing rock, paper and scissors
const CHOICES = 3;

const WINNING_HANDS = {
    rock: "Paper",
    paper: "Scissors",
    scissors: "Rock"
}

let computerScore = 0
let humanScore = 0


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
        return "Tie"
    }

    if (WINNING_HANDS[computerChoice] = humanChoice) {
        return "You win!"
    }

    return "You lose"
}

getHumanChoice();

