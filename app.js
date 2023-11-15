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
        return "Tie!";
    } else if (
        (playerChoice === "rock" && computerSelection === "Paper") ||
        (playerChoice === "paper" && computerSelection === "Scissors") ||
        (playerChoice === "scissors" && computerSelection === "Rock")) {
            return `You Lose! ${computerSelection} beats ${playerSelection}.`;
    } else {
        return `You Win! ${playerSelection} beats ${computerSelection}.`;
    }
}

const playerSelection = "sCissORS";
const computerSelection = getComputerChoice();
console.log("comp: " + computerSelection);
console.log(playRound(playerSelection, computerSelection));

