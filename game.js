let playerScore = 0;
let computerScore = 0;

function getComputerChoice(){
    let randomChoice = Math.floor(Math.random() * 3);
    switch(randomChoice){
        case 0:
            return "Rock";
        case 1:
            return "Paper";
        case 2:
            return "Scissors";
    }
};

const paper = document.querySelector('#paper');
const scissors = document.querySelector("#scissors");
const rock = document.querySelector('#rock');
const restart = document.querySelector('#restart')

function game(){
    playRound(event.target.textContent,getComputerChoice())}

restart.addEventListener('click', reStart)
    
function reStart(){
    restart.textContent = 'Start';
    playerScore = 0;
    computerScore = 0;
    finalResult.textContent = "The game start!";
    resultStatus.textContent = "";
    playerTotalScore.textContent = "";
    computerTotalScore.textContent = "";
    yourChoice.textContent = "";
    computerChoice.textContent = "";
    paper.addEventListener('click', game);
    rock.addEventListener('click', game);
    scissors.addEventListener('click', game)}


function playRound(playerSelection, computerSelection) {
    
    const resultStatus = document.querySelector('#resultStatus');
    const playerTotalScore = document.querySelector('#playerTotalScore');
    const computerTotalScore = document.querySelector('#computerTotalScore');
    const finalResult = document.querySelector("#finalResult")
    const yourChoice = document.querySelector('#yourChoice');
    const computerChoice = document.querySelector('#computerChoice');

    //battle
    yourChoice.textContent = `Your choice:${playerSelection}`;
    computerChoice.textContent = `Computer choice:${computerSelection}`;
    finalResult.textContent = "";
    if (playerSelection === computerSelection){
        resultStatus.textContent = `It is a tie. You both are ${playerSelection}.`;
    } else if (playerSelection === 'Rock' && computerSelection === 'Scissors') {
        resultStatus.textContent = `You won! ${playerSelection} beat ${computerSelection}.`;
        playerScore++;
    } else if (playerSelection === 'Scissors' && computerSelection === 'Paper') {
        resultStatus.textContent = `You won! ${playerSelection} beat ${computerSelection}.`;
        playerScore++;
    } else if (playerSelection === 'Paper' && computerSelection === 'Rock') {
        resultStatus.textContent = `You won! ${playerSelection} beat ${computerSelection}.`;
        playerScore++;
    } else {
        resultStatus.textContent = `You lose! ${computerSelection} beat ${playerSelection}.`;
        computerScore++;
    }

    //Count Scores
    playerTotalScore.textContent = `Player Scores: ${playerScore}`;
    computerTotalScore.textContent = `Computer Scores: ${computerScore}`;

    //Final Result
    if (playerScore === 5 || computerScore ===5){
        restart.textContent = 'Restart';
        paper.removeEventListener('click', game);
        rock.removeEventListener('click', game);
        scissors.removeEventListener('click', game);
        if (playerScore===5){
            finalResult.textContent = "Congrats! You beat the computer.";
            }
        else {
            finalResult.textContent = "Sorry! You can't beat the computer.";
            }   
        }
    }
    





//const choices = document.querySelectorAll('.playerChoice');

//choices.forEach((choice) => {
    //choice.addEventListener('click', function game() {playRound(choice.textContent,getComputerChoice())})});
