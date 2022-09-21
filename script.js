"use strict";

game();

function getComputerChoice() {
    return numberToChoice(Math.floor(Math.random() * 3) + 1);
}

function numberToChoice(num) {
    switch (num) {
        case 1: 
            return 'Rock';
            break;
        case 2: 
            return 'Paper';
            break;
        case 3: 
            return 'Scissors';
            break;
        default: 
            return 'Invalid input.';
    }
}

function playRound(playerSelection, computerSelection) {
    playerSelection = playerSelection.toLowerCase();
    computerSelection = computerSelection.toLowerCase();
    if (playerSelection === 'rock' && computerSelection !== 'rock') {
        return computerSelection === 'paper' ? 'L' :
        'W';
    }
    else if (playerSelection === 'paper' && computerSelection !== 'paper') {
        return computerSelection === 'scissors' ? 'L' :
        'W';
    }
    else if (playerSelection === 'scissors' && computerSelection !== 'scissors') {
        return computerSelection === 'rock' ? 'L' : 
        'W';
    }
    return 'T';
}

function game() {
    let computerWins = 0;
    let playerWins = 0;
    for (let i = 0; i < 5; i++) {
        let playerChoice = getValidInput();
        if (playerChoice === null) {
            console.log('Cancelled game');
            return null;
        }
        playerChoice = firstLetterUpper(playerChoice);
        let computerChoice = getComputerChoice();
        if (playRound(playerChoice, computerChoice) === 'W') {
            playerWins++;
            console.log(`You won! ${playerChoice} beats ${computerChoice}`);
        }
        else if (playRound(playerChoice, computerChoice) === 'L') {
            computerWins++;
            console.log(`You lost! ${playerChoice} loses to ${computerChoice}`);
        }
        else {
            console.log('It\'s a tie!');
        }
    }
    if (playerWins > computerWins) {
        console.log("Winner winner chicken dinner!");
    }
    else if (computerWins > playerWins) {
        console.log(":-(");
    }
    else {
        console.log("Tie");
    }
}

function getValidInput() {
    let playerChoice = null;
    do {
        playerChoice = prompt('Choice:', '');
        if (playerChoice === null) {
            return playerChoice;
        }
        if (typeof(playerChoice) === 'string') {
            playerChoice = playerChoice.toLowerCase();
        }
    } while(playerChoice !== 'rock' && playerChoice !== 'paper' && playerChoice !== 'scissors');
    return playerChoice;
}

function firstLetterUpper(str) {
    return str.substring(0,1).toUpperCase() + str.substring(1);
}
