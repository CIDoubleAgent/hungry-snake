export let difficultyMod;

let difficultyVal = parseInt(localStorage.getItem('difficultyVal'));
const difficultyButton = document.getElementById('difficulty');

export function getDifficulty() {
    switch (difficultyVal) {
        case 1:
            difficultyMod = 1;
            difficultyButton.innerHTML = 'Easy';
            difficultyButton.style.color = 'yellowgreen';
            break;
        case 2:
            difficultyMod = 2;
            difficultyButton.innerHTML = 'Medium';
            difficultyButton.style.color = 'yellow';
            break;
        case 3:
            difficultyMod = 3;
            difficultyButton.innerHTML = 'Hard';
            difficultyButton.style.color = 'darkorange';
            break;
        default:
            difficultyMod = 2;
            difficultyButton.innerHTML = 'Medium';
            localStorage.setItem('difficultyVal', 2);
            difficultyButton.style.color = 'yellow';
    }
}

getDifficulty()

function setDifficulty() {
    switch (localStorage.getItem('difficultyVal')) {
        case '1':
            localStorage.setItem('difficultyVal', 2);
            break;
        case '2':
            localStorage.setItem('difficultyVal', 3);
            break;
        case '3':
            localStorage.setItem('difficultyVal', 1);
            break;
    }
    window.location.reload();
}

difficultyButton.addEventListener('pointerup', setDifficulty);

difficultyButton.addEventListener('keydown', function(e) {
    if(e.key == "Enter") {
        setDifficulty();
    }
});