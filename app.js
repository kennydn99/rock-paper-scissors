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
    for (let i = 0; i < 5; i++) {
        let userInput = prompt("Pick one: Rock, Paper, or Scissors?: ");
        if (playRound(userInput, getComputerChoice()) === 0) {
            console.log(`Round ${i + 1}: Tie!`);
        } else if (playRound(userInput, getComputerChoice()) < 0) {
            console.log(`Round ${i + 1}: You Lose! ${getComputerChoice()} beats ${userInput}`);
            computerScore++;
        } else {
            console.log(`Round ${i + 1}: You Win! ${userInput} beats ${getComputerChoice()}`);
            currentScore++;
        }
    }

    if (currentScore > computerScore) {
        console.log(`You are the winner of the game! You won ${currentScore} times.`)
    } else if (currentScore < computerScore) {
        console.log(`The computer is the winner of the game! You lost ${computerScore} times.`)
    } else {
        console.log(`Tie game!`)
    }
}

//game();

let display = document.querySelector('.display');
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
        display.textContent = `${userChoice} vs ${computerChoice} : It's a Tie!`;
    } else if (outcome < 0) {
        display.textContent = `${userChoice} vs ${computerChoice} : Computer wins this round`;
        computerScore++;
        computerScorePanel.textContent = `Computer Score: ${computerScore}`;
    } else {
        display.textContent = `${userChoice} vs ${computerChoice} : You win this round`;
        userScore++;
        userScorePanel.textContent = `Your Score: ${userScore}`;
    }
    
});
