function getComputerChoice(){
    let choice = Math.floor(Math.random() * 3);
    switch (choice){
        case 0:
            return "Rock";
        case 1:
            return "Paper";
        case 2:
            return "Scissors";
    }
}
function playRound(playerSelection, computerSelection) {
    switch (computerSelection){
        case "Rock":
            switch (playerSelection.toLowerCase()){
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
            switch (playerSelection.toLowerCase()){
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
            switch (playerSelection.toLowerCase()){
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

function game(){
    let playerScore = 0;
    let computerScore = 0;
    for (let i = 0; i < 5; i++) {
        console.log("Round " + (i+1));
        const playerSelection = prompt("Make a choice");
        const computerSelection = getComputerChoice();
        console.log("Player Selection: " + playerSelection);
        console.log("Computer Selection: " + computerSelection);
        let roundResult = playRound(playerSelection, computerSelection);
        if (roundResult.includes("Win")){
            playerScore += 1;
        } else if (roundResult.includes("Lose")){
            computerScore += 1;
        }
        console.log(roundResult);
        console.log("Player Score: " + playerScore);
        console.log("Computer Score: " + computerScore);
     }
     console.log("Final Result:")
     if (playerScore>computerScore){
         console.log("Player Wins!")
     } else if (computerScore>playerScore){
         console.log("Computer Wins!")
     } else {
         console.log("It's a Draw");
     }
}

game();
   

