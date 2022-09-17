import { sliderValue } from './difficulty.js'

let SCORE_MODIFIER = sliderValue * 5;
let score = parseInt(document.getElementById('scoreCount').innerHTML);
let personalBestScore = document.getElementById('personalBest').innerHTML;
let storedBestScore = localStorage.getItem('bestScore');

export function updateScore() {
    score = score + SCORE_MODIFIER;
    document.getElementById('scoreCount').innerHTML = score;
}

export function updateBestScore() {
    if (personalBestScore < score) {
        personalBestScore = score;


        localStorage.setItem('bestScore', personalBestScore);
    } else {
        return
    }
}

export function getBestScore() {
    console.log('storedBestScore is a ' + typeof storedBestScore, storedBestScore);
    console.log('personalBestScore is a ' + typeof personalBestScore, personalBestScore);


    personalBestScore = storedBestScore;
}