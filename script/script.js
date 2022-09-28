"use strict";

let playerWins = 0;
let computerWins = 0;
let gameStatus = 'N/A';

window.addEventListener('load', () => {
    const page = document.querySelector('body');
    page.classList.toggle('white');
    page.classList.toggle('transition');
});
//gameStart();

setTimeout(() => {
    const copyrights = document.querySelector('.copyrights');
    copyrights.classList.toggle('hidden');
}, 3000);

setTimeout(() => {
    const pokeFight = document.querySelector('.pokefight');
    const topBox = document.querySelector('.topbox');
    const bottomBox = document.querySelector('.bottombox');
    pokeFight.classList.toggle('hidden');
    setScreen();
}, 3100);

function setScreen() {
    const topBox = document.querySelector('.topbox');
    const bottomBox = document.querySelector('.bottombox');
    topBox.classList.toggle('transparent');
    bottomBox.classList.toggle('transparent');
    let pos = -300;
    let moveIn = null;
    moveIn = setInterval(frame, 3);
    function frame() {
        if (pos === 0) {
            clearInterval(moveIn);
        }
        else {
            pos++;
            topBox.style.top = pos + "px";
            bottomBox.style.bottom = pos + "px";
        }
    }
}

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
    const roundResult = document.querySelector('.round-result');
    if (playerSelection === 'rock' && computerSelection !== 'rock') {
        if (computerSelection === 'paper') {
            computerWins++;
            roundResult.textContent = 'Beep boop, paper beats rock';
        }
        else {
            playerWins++;
            roundResult.textContent = 'SMASH.';
        }
    }
    else if (playerSelection === 'paper' && computerSelection !== 'paper') {
        if (computerSelection === 'scissors') {
            computerWins++;
            roundResult.textContent = 'sudo apt snip-snip';
        }
        else {
            playerWins++;
            roundResult.textContent = 'Wrap, not rap.';
        }
    }
    else if (playerSelection === 'scissors' && computerSelection !== 'scissors') {
        if (computerSelection === 'rock') {
            computerWins++;
            roundResult.textContent = 'Computer, rock beats scissors.';
        }
        else {
            playerWins++;
            roundResult.textContent = 'You\'re sharp, scissors cuts through paper.';
        }
    }
    else {
        roundResult.textContent = 'Even exchange gentle-machmen';
    }
}

function gameStart() {
    const replay = document.querySelector('.replay');
    const result = document.querySelector('.result');
    replay.textContent = '';
    playerWins = 0;
    computerWins = 0;
    gameStatus = 'N/A';
    const buttonClick = document.querySelectorAll('button');
    buttonClick.forEach(button => {
        button.addEventListener('click', () => {
            const choice = button.className;
            playRound(choice, getComputerChoice());
            keepScore(playerWins, computerWins);
            if (playerWins === 5 || computerWins === 5) {
                gameEnd();
            }
            console.log(gameStatus, playerWins, computerWins);
        })
    });
}

function gameEnd() {
    const buttonClick = document.querySelectorAll('button');
    buttonClick.forEach(button => {
        button.replaceWith(button.cloneNode(true));
    })
    if (playerWins > computerWins) {
        gameStatus = 'W';
    }
    else if (playerWins < computerWins) {
        gameStatus = 'L';
    }
    else {
        gameStatus = 'T';
    }
    printWinner();
}

function keepScore(playerWins, computerWins) {
    const content = document.querySelector('.game');
    const player_score = document.querySelector('.player_score');
    const computer_score = document.querySelector('.computer_score');
    player_score.textContent = playerWins;
    computer_score.textContent = computerWins;
    if (playerWins === 5 || computerWins === 5) {
        gameEnd();
    }
}

function re() {
    const result = document.querySelector('.result');   
    const replay = document.querySelector('.replay');
    if (gameStatus === 'W') {
        result.textContent = 'You WON!';
        replay.textContent = 'Go for the back-to-back?';
    }
    else if (gameStatus === 'L') {
        result.textContent = 'You LOSE!';
        replay.textContent = 'Reclaim your honour?';
    }
    else {
        result.textContent = 'TIE!';
        replay.textContent = 'B-O-R-I-N-G, Go again?';
    }
}

function restartGame() {
    playerWins = 0;
    computerWins = 0;
    gameStatus = 'N/A';
    const replay = document.querySelector('.replay');
    replay.addEventListener('click', gameStart());
}

