function getUserChoice(){
    while (true){
    let userInput = prompt("Type something:","");
    userInput = userInput.charAt(0).toUpperCase() + userInput.slice(1).toLowerCase();
    if (userInput === "Rock" || userInput === "Scissors" || userInput === "Paper"){
        return userInput;
    }else 
    {console.log("You can only input rock, scissors or paper.");
}
}
};
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

function playRound(playerSelection, computerSelection) {
    console.log(`Your choice:${playerSelection}`);
    console.log(`Computer choice:${computerSelection}`);
    if (playerSelection === computerSelection){
        console.log(`It is a tie. You both are ${playerSelection}.`);
    } else if (playerSelection === 'Rock' && computerSelection === 'Scissors') {
        console.log(`You won! ${playerSelection} beat ${computerSelection}.`);
    } else if (playerSelection === 'Scissors' && computerSelection === 'Paper') {
        console.log(`You won! ${playerSelection} beat ${computerSelection}.`);
    } else if (playerSelection === 'Paper' && computerSelection === 'Rock') {
        console.log(`You won! ${playerSelection} beat ${computerSelection}.`);
    } else {
        console.log(`You lose! ${computerSelection} beat ${playerSelection}.`);
    }
  }


function game() {

    for (let i=0; i < 5; i++){
        let playerSelection = getUserChoice();
        let computerSelection = getComputerChoice();
        console.log(playRound(playerSelection, computerSelection));
}
}

console.log(game());
