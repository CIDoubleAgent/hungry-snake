let SCORE_MODIFIER = 5;
    let score = parseInt(document.getElementById('scoreCount').innerHTML);

export function updateScore() {
    score = score + SCORE_MODIFIER;
    document.getElementById('scoreCount').innerHTML = score;
}