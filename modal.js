const modal = document.getElementById('modal');
const playAgainButton = document.getElementById('playAgain');
const score = document.getElementById('scoreCount');

export function showModal() {
    modal.style.display = 'flex';
    finalScore.innerHTML = score.innerHTML;
    playAgainButton.focus();
}

playAgainButton.addEventListener('pointerup', function() {
    window.location.reload();
})

playAgainButton.addEventListener('keydown', keyPressed);

function keyPressed(e) {
  if(e.key == "Enter" && (document.getElementById('modal').style.display = 'flex')) {
    window.location.reload();
  }
}