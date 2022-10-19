const buttons = document.querySelectorAll('.rps');
const resetBtn = document.querySelector('.reset');
const player = document.querySelector('.player');
const computer = document.querySelector('.computer');
const roundResult = document.querySelector('.roundResult');
const score = document.querySelector('.score');
const finalResult = document.querySelector('.finalResult');
let playerScore = 0;
let computerScore = 0;

buttons.forEach((button) => {
    button.addEventListener('click', () => {
        const playerSelection = button.textContent;
        const computerSelection = getComputerChoice();
        player.textContent = "Player Selection: " + playerSelection;
        computer.textContent = "Computer Selection: " + computerSelection;
        roundResult.textContent = playRound(playerSelection, computerSelection);
        scoreboard(roundResult.textContent)
    })
})

resetBtn.addEventListener('click', () => {
    playerScore = 0;
    computerScore = 0;
    player.textContent = "";
    computer.textContent = "";
    roundResult.textContent = "";
    score.textContent = "";
    finalResult.textContent = "";
})

function getComputerChoice() {
    let choice = Math.floor(Math.random() * 3);
    switch (choice) {
        case 0:
            return "Rock";
        case 1:
            return "Paper";
        case 2:
            return "Scissors";
    }
}
function playRound(playerSelection, computerSelection) {
    switch (computerSelection) {
        case "Rock":
            switch (playerSelection.toLowerCase()) {
                case "rock":
                    return "It's a Draw";
                case "paper":
                    return "You Win! Paper beats Rock";
                case "scissors":
                    return "You Lose! Rock beats Scissors";
                default:
                    return "Invalid input";
            }
        case "Paper":
            switch (playerSelection.toLowerCase()) {
                case "paper":
                    return "It's a Draw";
                case "scissors":
                    return "You Win! Scissors beats Paper";
                case "rock":
                    return "You Lose! Paper beats Rock";
                default:
                    return "Invalid input";
            }
        case "Scissors":
            switch (playerSelection.toLowerCase()) {
                case "scissors":
                    return "It's a Draw";
                case "rock":
                    return "You Win! Rock beats Scissors";
                case "paper":
                    return "You Lose! Scissors beats Paper";
                default:
                    return "Invalid input";
            }
    }
}

function scoreboard(roundResult) {
    if (roundResult.includes("Win")) {
        playerScore += 1;
    } else if (roundResult.includes("Lose")) {
        computerScore += 1;
    }
    score.textContent = "Player: " + playerScore + " v.s. Computer: " + computerScore;
    if (playerScore < 5 && computerScore <5){
        finalResult.textContent = "";
    } else if (playerScore == 5){
        finalResult.textContent = "Player Wins!";
        playerScore = 0;
        computerScore = 0;
    } else if (computerScore == 5){
        finalResult.textContent = "Computer Wins!";
        playerScore = 0;
        computerScore = 0;
    }
}