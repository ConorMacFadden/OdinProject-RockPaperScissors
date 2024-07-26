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

let humanScore = 0;
let computerScore = 0;

let round = 1;

function playRound(humanChoice, computerChoice) {

        round++;
        if (round > 5) { resetGame();}

        if (humanChoice == undefined) {return;}
        let winner = 'computer'; // default to computer, but change if the player has won or it's a draw.
        if (humanChoice == computerChoice) { winner = 'draw'} // Same choice so draw.
        if (humanChoice == 'rock' && computerChoice == 'scissor') { winner = 'human'; }
        if (humanChoice == 'paper' && computerChoice == 'rock') { winner = 'human'; }
        if (humanChoice == 'scissor' && computerChoice == 'paper') { winner = 'human'; }

        if (winner == 'human') { 
            humanScore++; 
            // console.log(`You win! ${humanChoice} beats ${computerChoice}.`)
            addResult(`Round: ${round} | You win! ${humanChoice} beats ${computerChoice}.`);
        }
        else if (winner == 'computer') { 
            computerScore++;
            // console.log(`You lose! ${computerChoice} beats ${humanChoice}.`)
            addResult(`Round: ${round} | You lose! ${computerChoice} beats ${humanChoice}.`);
        }
        else { 
            // console.log(`Draw, you both picked ${humanChoice}.`)
            addResult(`Round: ${round} | Draw, you both picked ${humanChoice}.`);
        }
    
        updateScore();
        roundDiv.textContent = `Round: ${round}`

}
    
const resultDiv = document.querySelector(".result");
const scoreDiv = document.querySelector(".score");
updateScore();

const roundDiv = document.querySelector(".round");
roundDiv.textContent = `Round: ${round}`

function playGame() {

    while (round <=5) {
        playRound(getHumanChoice(), getComputerChoice())
        console.log(`Round ${round}: Human ${humanScore}, Computer ${computerScore}.`)
        round++;
    }
    
}



const buttonContainer = document.querySelector(".button-row");
buttonContainer.addEventListener("click", (e) => {
    switch(e.target.id) {
        case 'btn-rock':
            playRound('rock', getComputerChoice());
            break;
        case 'btn-paper':
            playRound('paper', getComputerChoice());
            break;
        case 'btn-scissors':
            playRound('scissor', getComputerChoice());
            break;
    }
})

function clearResults() {
    while (resultDiv.firstChild) { resultDiv.removeChild(resultDiv.lastChild);}
}

function addResult(resultText) {
    let newResult = document.createElement("p");
    newResult.textContent = resultText;
    resultDiv.appendChild(newResult);
}

function resetGame() {
    clearResults();
    round = 1;
    humanScore = 0;
    computerScore = 0;
    updateScore();
}

function updateScore() {
    scoreDiv.textContent=`Human: ${humanScore} | Computer: ${computerScore}`
}