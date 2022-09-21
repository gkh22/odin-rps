"use strict";

game();

function getComputerChoice() {
    return numberToChoice(Math.floor(Math.random() * 3) + 1);
}

function numberToChoice(num) {
    switch (num) {
        case 1: 
            return 'rock';
            break;
        case 2: 
            return 'paper';
            break;
        case 3: 
            return 'scissors';
            break;
        default: 
            return 'Invalid input.';
    }
}

function playRound(playerSelection, computerSelection) {
    playerSelection = playerSelection.toLowerCase();
    if (playerSelection === 'rock' && computerSelection !== 'rock') {
        return computerSelection === 'paper' ? 'You lose! Paper beats rock.' :
        'You win! Rock beats scissors.';
    }
    else if (playerSelection === 'paper' && computerSelection !== 'paper') {
        return computerSelection === 'scissors' ? 'You lose! Scissors beats paper' :
        'You win! Paper beats rock';
    }
    else if (playerSelection === 'scissors' && computerSelection !== 'scissors') {
        return computerSelection === 'rock' ? 'You lose! Rock beats scissors' : 
        'You win! Scissors beats paper';
    }
    return 'It\'s a tie!';
}

function game() {
    for (let i = 0; i < 5; i++) {
        let playerChoice = getValidInput();
        if (playerChoice === null) {
            console.log('Cancelled game');
            return null;
        }
        console.log(playRound(playerChoice, getComputerChoice()));
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
