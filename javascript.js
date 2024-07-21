function getComputerChoice() {
    let rand = Math.floor(Math.random()*3);
    switch(rand) {
        case 0:
            return 'rock';
        case 1:
            return 'paper';
        case 2:
            return 'scissor'
        default:
            return "Oops, that shoudn't happen";
    }
}

function getHumanChoice() {
    let userInput = prompt("Make your choice: Rock, Paper or Scissor?")
    if (userInput.toUpperCase().includes('ROCK')) { return 'rock'; }
    if (userInput.toUpperCase().includes('PAPER')) { return 'paper'; }
    if (userInput.toUpperCase().includes('SCISSOR')) { return 'scissor'; }
    alert(`You entered ${userInput}. That's not rock, paper or scissors.`)
}



function playGame() {

    function playRound(humanChoice, computerChoice) {
        if (humanChoice == undefined) {return;}
        let winner = 'computer'; // default to computer, but change if the player has won or it's a draw.
        if (humanChoice == computerChoice) { return 'draw'} // Same choice so draw.
        if (humanChoice == 'rock' && computerChoice == 'scissor') { winner = 'human'; }
        if (humanChoice == 'paper' && computerChoice == 'rock') { winner = 'human'; }
        if (humanChoice == 'scissor' && computerChoice == 'paper') { winner = 'human'; }
    
        if (winner == 'human') { 
            humanScore++; 
            console.log(`You win! ${humanChoice} beats ${computerChoice}.`) 
        }
        else if (winner == 'computer') { 
            computerScore++;
            console.log(`You lose! ${computerChoice} beats ${humanChoice}.`) 
        }
        else { console.log(`Draw, you both picked ${humanChoice}.`)}
    }
    
    let humanScore = 0;
    let computerScore = 0;

    let round = 1;

    while (round <=5) {
        playRound(getHumanChoice(), getComputerChoice())
        console.log(`Round ${round}: Human ${humanScore}, Computer ${computerScore}.`)
        round++;
    }

    

}