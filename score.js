import { sliderValue } from './difficulty.js'

let SCORE_MODIFIER = sliderValue * 5;
let score = parseInt(document.getElementById('scoreCount').innerHTML);
const personalBestScore = document.getElementById('personalBest');

// console.log(personalBestScore.firstChild.data)

export function updateScore() {
    score = score + SCORE_MODIFIER;
    document.getElementById('scoreCount').innerHTML = score;
}

export function updateBestScore() {
    if (personalBestScore.innerHTML < score) {
            personalBestScore.innerHTML = score;

            localStorage.setItem('bestScore', personalBestScore.firstChild.data);
            
            // console.log('#1 personalBestScore is a ' + typeof personalBestScore, personalBestScore);
        } else {
        return
        }
}

export function getBestScore() {
    if (localStorage.getItem('bestScore')) {
        personalBestScore.innerHTML = parseInt(localStorage.getItem('bestScore'));
        // console.log('#2 personalBestScore is a ' + typeof personalBestScore, personalBestScore);
    } else {
        personalBestScore.innerHTML = 0;
    }
}