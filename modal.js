const gameOverModal = document.getElementById('gameOverModal');
// const newBestModal = document.getElementById('newBestModal');
const playAgainButton = document.getElementById('playAgain');
const score = document.getElementById('scoreCount');

export function showModal() {
    gameOverModal.style.display = 'flex';
    finalScore.innerHTML = score.innerHTML;
    playAgainButton.focus();
}

playAgainButton.addEventListener('pointerup', function() {
    window.location.reload();
})

playAgainButton.addEventListener('keydown', keyPressed);

function keyPressed(e) {
    if(e.key === "Enter" && (document.getElementById('gameOverModal').style.display = 'flex')) {
        window.location.reload();
    } else if(e.key === 'Escape' && (document.getElementById('gameOverModal').style.display = 'flex')) {
        playAgainButton.blur();
    }
}