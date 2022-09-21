"use strict";

let playerChoice = null;
while (typeof(playerChoice) !== 'string') {
    playerChoice = prompt('Choice: ', '');
}
alert(playRound(playerChoice, getComputerChoice()));

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
    if (playerSelection === 'rock' || playerSelection === 'paper' || playerSelection === 'scissors') {
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
    return 'Invalid input';
}
