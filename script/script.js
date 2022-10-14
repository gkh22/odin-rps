"use strict";

let playerWins = 0;
let computerWins = 0;
let gameStatus = 'N/A';


const lake = new Audio('./audio/Lake.mp3');
const lightning_effect = new Audio('./audio/lightning.mp3');
const electricity_effect = new Audio('./audio/electricity.mp3');

const begin = document.querySelector('.start-screen');
const start = document.querySelector('.start');

window.addEventListener('load', () => {
    begin.classList.toggle('hidden');
});

start.addEventListener('click', loadingscreen);

function loadingscreen() {  
    begin.classList.toggle('hidden');
    const page = document.querySelector('body');
    page.classList.toggle('white');
    page.classList.toggle('transition');
    const copyrights = document.querySelector('.copyrights');
    copyrights.classList.toggle('hidden');
    setTimeout(() => {
        copyrights.classList.toggle('hidden');
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

    setTimeout(lightningFlash, 5500);
    setTimeout(godSpeed, 5800);
    setTimeout(electricity, 6500);

    setTimeout(clearLogo, 10000);

    setTimeout(playJiggly, 12000);
    setTimeout(clearScreen, 29000);
    setTimeout(setScreen2, 31000);
}

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
    lightning_effect.play();
    electricity_effect.play();
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
    electricity_effect.pause();
    const logo = document.querySelector('.hxhlogo');
    const hxh = document.querySelector('.hxh');
    const hiatus = document.querySelector('.hiatus');
    hxh.classList.toggle('hidden');
    hiatus.classList.toggle('hidden');
    logo.classList.toggle('hidden');
}   

function jiggly() {
    const jiggly = document.querySelector('.jiggly');
    const walking = document.querySelector('.walking');
    jiggly.classList.toggle('hidden');
    let pos = 0;
    let finalWalk = null;
    let walk2 = null;
    let walk = null;
    walk = setInterval(move, 1500);
    function move() {
        if (pos === 40) {
            clearInterval(walk);
            console.log(pos);
            finalWalk = setInterval(() => {
                pos++;
                walking.style.left = pos + '%';
                if (pos === 43) {
                    clearInterval(finalWalk);
                    walking.style.position = 'static';
                    jiggly.style.justifyContent = 'center';
                    jiggly.style.alignItems = 'center';
                }
            }, 200);
        }
        else {
            walk2 = setInterval(move2, 20);
            function move2() {
                pos++;
                walking.style.left = pos + '%';
                if (pos % 10 === 0) {
                    clearInterval(walk2);
                }
            }
        }
    }
}

function playJiggly() {
    jiggly();
    lake.play();
}

function clearScreen() {
    const jiggly = document.querySelector('.jiggly');
    const topbox = document.querySelector('.topbox');
    const bottombox = document.querySelector('.bottombox');
    const pokefight = document.querySelector('.pokefight');
    jiggly.classList.toggle('quick-transition');
    topbox.classList.toggle('quick-transition');
    bottombox.classList.toggle('quick-transition');
    jiggly.classList.toggle('transparent');
    topbox.classList.toggle('transparent');
    bottombox.classList.toggle('transparent');
    setTimeout(() => {
        pokefight.classList.toggle('hidden');
        jiggly.classList.toggle('hidden');
        topbox.classList.toggle('hidden');
        bottombox.classList.toggle('hidden');
    }, 2000);
}

function setScreen2() {
    const loadingscreen = document.querySelector('.loading-screen');
    const logo = document.querySelector('.moveDown');
    const footer = document.querySelector('.footer');
    loadingscreen.classList.toggle('hidden');
    footer.classList.toggle('hidden');
    let pos = -50;
    let func = null;
    func = setInterval(() => {
        pos += 0.25;
        if (pos === 0) {
            clearInterval(func);
            logo.style.position = 'static';
        }
        else {
            logo.style.top = pos + "%";
        }
        console.log('hi');
    }, 3);
    setTimeout(versionSlide, 1500);
}

function versionSlide() {
    const version = document.querySelector('.version');
    version.classList.toggle('hidden');
    let func = null;
    let pos = -50;
    func = setInterval(() => {
        pos += 0.25;
        if (pos === 0) {
            clearInterval(func);
            version.style.position = 'static';
            version.style.right = 'inherit';
        }
        else {
            version.style.right = pos + '%';
        }
        console.log('hello');
    }, 3);
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

