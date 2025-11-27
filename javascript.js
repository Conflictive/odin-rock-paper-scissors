// Representing rock, paper and scissors
const choices = 3;

// Returns 0, 1 or 2
function getRandomInt() {

  return Math.floor(Math.random() * choices);
  
}

function getComputerChoice() {
    switch(getRandomInt()) {
        case 0:
            console.log('Rock')
            break;
        case 1:
            console.log('Paper')
            break;
        case 2:
            console.log('Scissors')
            break;
    }
}

getComputerChoice()

