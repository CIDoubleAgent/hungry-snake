const modal = document.getElementById('modal');
const playAgainButton = document.getElementById('playAgain');
const score = document.getElementById('scoreCount');

export function showModal() {
    modal.style.display = 'flex';
    finalScore.innerHTML = score.innerHTML;
}

playAgainButton.addEventListener('pointerup', function() {
    window.location.reload();
})

window.onclick = function(event) {
    if (event.target == modal) {
        modal.style.display = "none";
    }
}