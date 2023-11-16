// getComputerChoice function
//     - randomly return either 'Rock', 'Paper', or 'Scissors'
//
//  CREATE array/list of choices (rock, paper, scissors)
//  SET randomNum from 1-3 (3 choices)
//  RETURN choice from array/list at randomNum index
function getComputerChoice() {
    let choices = ["Rock", "Paper", "Scissors"];
    let randomNum = Math.floor(Math.random() * 3);
    return choices[randomNum];
}

// Play single round of game function
//      - 2 parameters (playerSelection, computerSelection)
//      - return string declaring winner of round ("You Lose! Paper beats Rock")
//      - make playerSelection case-insensitive
//
//  DECLARE function with parameters
//      CONVERT playerSelection to lower case
//      CASE if playerSelection is the same as computerSelection
//          THEN RETURN tie
//      CASE if (playerSelection === rock AND computerSelection === paper) OR
//              (playerSelection === paper AND computerSelection === scissors) OR
//              (playerSelection === scissors AND computerSelection === rock)
//          THEN RETURN You Lose computerSelection beats playerSelection
//      ENDCASE means player wins
//          RETURN You Win! playerSelection beats computerSelection

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
//      -user playRound function to play 5 round game keeping score and report winner or loser at end
//      -console.log() -> display results of each round & winner at the end
//         -prompt for user input

function game() {
    let currentScore = 0;
    let computerScore = 0;

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

