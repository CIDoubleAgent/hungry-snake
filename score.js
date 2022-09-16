import { sliderValue } from './difficulty.js'

let SCORE_MODIFIER = sliderValue * 5;
let score = parseInt(document.getElementById('scoreCount').innerHTML);
let personalBestScore = document.getElementById('personalBest').innerHTML;
let storedBestScore = parseInt(localStorage.getItem('BestScore'));

export function updateScore() {
    score = score + SCORE_MODIFIER;
    document.getElementById('scoreCount').innerHTML = score;
}

export function updateBestScore() {
    if (personalBestScore < score) {
        personalBestScore = score;

        console.log(typeof personalBestScore);

        localStorage.setItem('BestScore', personalBestScore);

        return personalBestScore;
    }
}

export function getBestScore(personalBestScore) {
    console.log(typeof storedBestScore);
    personalBestScore = storedBestScore;
}