import { difficultyMod } from './difficulty.js'

let SCORE_MODIFIER = difficultyMod * 5;
let score = parseInt(document.getElementById('scoreCount').innerHTML);
const personalBestScore = document.getElementById('personalBest');
const lastScore = document.getElementById('lastScore');
const resetButton = document.getElementById('reset');

export function updateScore() {
    score = score + SCORE_MODIFIER;
    document.getElementById('scoreCount').innerHTML = score;
}

export function updateBestScore() {
    if (personalBestScore.innerHTML < score) {
            personalBestScore.innerHTML = score;
            localStorage.setItem('bestScore', personalBestScore.firstChild.data);
        } else {
        return
        }
}

export function getBestScore() {
    if (localStorage.getItem('bestScore')) {
        personalBestScore.innerHTML = parseInt(localStorage.getItem('bestScore'));
    } else {
        personalBestScore.innerHTML = 0;
    }
}

export function updateLastScore() {
    localStorage.setItem('lastScore', score);
}

export function getLastScore() {
    if (localStorage.getItem('lastScore')) {
        lastScore.innerHTML = parseInt(localStorage.getItem('lastScore'));
    } else {
        lastScore.innerHTML = 0;
    }
}

resetButton.addEventListener('pointerup', function() {
    localStorage.clear();
    window.location.reload();
})