// getComputerChoice function - randomly return either 'Rock', 'Paper', or 'Scissors'
function getComputerChoice() {
    let choices = ["Rock", "Paper", "Scissors"];
    let randomNum = Math.floor(Math.random() * 3);
    return choices[randomNum];
}

// Play single round of game function
function playRound(playerSelection, computerSelection) {
    let playerChoice = playerSelection.toLowerCase();

    if (playerChoice === computerSelection.toLowerCase()) {
        return 0;
    } else if (
        (playerChoice === "rock" && computerSelection === "Paper") ||
        (playerChoice === "paper" && computerSelection === "Scissors") ||
        (playerChoice === "scissors" && computerSelection === "Rock")) {
            return -1;
    } else {
        return 1;
    }
}

//  GAME Function
function game() {

    if (userScore == 5) {
        display.textContent = `You are the winner of the game! You won ${userScore} times!`;
    } 
    if (computerScore == 5) {
        display.textContent = `The computer is the winner of the game! You lost ${computerScore} times!`;
    }

    if(userScore == 5 || computerScore == 5) {
        btns.style.visibility = 'hidden';
        
        let playAgainBtn = document.createElement('button');
        playAgainBtn.textContent = 'Play Again';
        display.appendChild(playAgainBtn);
        
        playAgainBtn.addEventListener('click', (event) => {
            btns.style.visibility = 'visible';
            playAgainBtn.style.visibility = 'hidden';
            userScore = 0;
            userScorePanel.textContent = `Your Score: ${userScore}`;
            computerScore = 0;
            computerScorePanel.textContent = `Computer Score: ${computerScore}`;
            display.textContent = "Let's play Rock, Paper, Scissors. First to 5 gets the W!";
        });
    }
}



let display = document.querySelector('.display');
display.textContent = "Let's play Rock, Paper, Scissors. First to 5 gets the W!";
let btns = document.querySelector('.btn-container');
let scoreboard = document.querySelector('.scoreboard');

let userChoice;
let userScore = 0;
let computerScore = 0;

let userScorePanel = document.createElement('div');
userScorePanel.textContent = `Your Score: ${userScore}`;
scoreboard.appendChild(userScorePanel);
let computerScorePanel = document.createElement('div');
computerScorePanel.textContent = `Computer Score: ${computerScore}`;
scoreboard.appendChild(computerScorePanel);
computerScorePanel.textContent = `Computer Score: ${computerScore}`;

btns.addEventListener('click', (event) => {
    let target = event.target;
    let computerChoice = getComputerChoice();

    switch(target.id) {
        case "rock-btn":
            userChoice = 'Rock';
            break;
        case "paper-btn":
            userChoice = 'Paper';
            break;
        case "scissors-btn":
            userChoice = 'Scissors';
            break;
    }

    let outcome = playRound(userChoice, computerChoice);
    if (outcome == 0) {
        display.textContent = `${userChoice} vs ${computerChoice}: It's a Tie!`;
    } else if (outcome < 0) {
        display.textContent = `${userChoice} vs ${computerChoice}: Computer wins this round :(`;
        computerScore++;
        computerScorePanel.textContent = `Computer Score: ${computerScore}`;
    } else {
        display.textContent = `${userChoice} vs ${computerChoice}: You win this round :)`;
        userScore++;
        userScorePanel.textContent = `Your Score: ${userScore}`;
    }
    game();
});

