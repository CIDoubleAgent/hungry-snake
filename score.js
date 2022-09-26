import { difficultyMod } from './difficulty.js'

let SCORE_MODIFIER = difficultyMod * 5;
let score = parseInt(document.getElementById('scoreCount').innerHTML);
const personalBestScore = document.getElementById('personalBestCount');
const lastScore = document.getElementById('lastScoreCount');
const resetButton = document.getElementById('reset');

export function updateScore() {
    score = score + SCORE_MODIFIER;
    document.getElementById('scoreCount').innerHTML = score;
}

export function updateBestScore() {
    if (personalBestScore.innerHTML < score) {
            personalBestScore.innerHTML = score;
            localStorage.setItem('bestScoreCount', personalBestScore.firstChild.data);
        } else {
        return
        }
}

export function getBestScore() {
    if (localStorage.getItem('bestScoreCount')) {
        personalBestScore.innerHTML = parseInt(localStorage.getItem('bestScoreCount'));
    } else {
        personalBestScore.innerHTML = 0;
    }
}

export function updateLastScore() {
    localStorage.setItem('lastScoreCount', score);
}

export function getLastScore() {
    if (localStorage.getItem('lastScoreCount')) {
        lastScore.innerHTML = parseInt(localStorage.getItem('lastScoreCount'));
    } else {
        lastScore.innerHTML = 0;
    }
}

resetButton.addEventListener('pointerup', function() {
    localStorage.removeItem('bestScoreCount');
    localStorage.removeItem('lastScoreCount');
    window.location.reload();
})