"use strict";
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