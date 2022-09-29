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
    const action = document.querySelector('.action');
    pokeFight.classList.toggle('hidden');
    topBox.classList.toggle('transparent');
    bottomBox.classList.toggle('transparent');
    setScreen();
}, 3000);

setTimeout(() => {
    const action = document.querySelector('.action');
    action.classList.toggle('transparent');
}, 4500);

setTimeout(() => {
    lightningFlash();
}, 5500);

setTimeout(godSpeed, 5800);

setTimeout(electricity, 6500);
setTimeout(clearLogo, 10000);

function setScreen() {
    const topBox = document.querySelector('.topbox_cover');
    const bottomBox = document.querySelector('.bottombox_cover');
    let pos = 0;
    let moveIn = null;
    moveIn = setInterval(frame, 9);
    function frame() {
        if (pos === 20) {
            clearInterval(moveIn);
            topBox.classList.toggle('hidden');
            bottomBox.classList.toggle('hidden');
        }
        else {
            pos += .25;
            topBox.style.top = pos + "%";
            bottomBox.style.bottom = pos + "%";
            console.log('hello');
        }
    }
}

function lightningFlash() {
    const lightning = document.querySelector('.lightning');
    let once = null;
    let hit = 0;
    once = setInterval(flash, 300);
    function flash() {
        lightning.classList.toggle('transparent');
        if (hit === 1) {
            clearInterval(once);
            lightning.classList.toggle('hidden');
        }
        hit++;
    }
}

function godSpeed() {
    const hiatus = document.querySelector('.hiatus');
    const hxh = document.querySelector('.hxh');
    hxh.src = './images/hxh.jpg';
    hiatus.classList.toggle('godSpeed');
}

function electricity() {
    const container = document.querySelector('.container');
    container.classList.toggle('hidden');
    const electricity1 = document.querySelector('.electricity1');
    const electricity2 = document.querySelector('.electricity2');
    const electricity3 = document.querySelector('.electricity3');
    let time = 0;
    let sequence = null;
    sequence = setInterval(flash, 800);
    function flash() {
        if (time === 0) {
            electricity1.classList.toggle('transparent');
            time += 300;
        }
        else if (time === 300) {
            electricity1.classList.toggle('transparent');
            electricity3.classList.toggle('transparent');
            time += 300;
        }
        else if (time === 600) {
            electricity3.classList.toggle('transparent');
            electricity2.classList.toggle('transparent');
            electricity3.style.position = 'relative';
            electricity3.style.top = '10%';
            time += 300;
        }
        else {
            electricity3.classList.toggle('transparent');
            container.classList.toggle('hidden');
            clearInterval(sequence);
        }
    }
}

function clearLogo() {
    const hxh = document.querySelector('.hxh');
    const hiatus = document.querySelector('.hiatus');
    hxh.classList.toggle('hidden');
    hiatus.classList.toggle('hidden');
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

