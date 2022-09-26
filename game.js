import { update as updateSnake, render as renderSnake, SNAKE_SPEED, getSnakeHead, snakeIntersection } from './snake.js'
import { update as updateFood, render as renderFood } from './food.js'
import { outsideGrid } from './grid.js'
import { getBestScore, updateBestScore, getLastScore, updateLastScore } from './score.js'
import { getDifficulty } from './difficulty.js'

let lastRenderTime = 0;
let gameOver = false;
const gameBoard = document.getElementById('gameBoard');

window.onload = function() {
    getBestScore();
    getLastScore();
    getDifficulty();
}

function main(currentTime) {
    if (gameOver) {
        updateBestScore();
        updateLastScore();
        if (confirm('Game Over, your final score is ' + document.getElementById('scoreCount').innerHTML + '. Press OK to restart.')) {
            window.location.reload();
        }
        return;
    }

    window.requestAnimationFrame(main);
    const secondsSinceLastRender = (currentTime - lastRenderTime) / 1000;
    if(secondsSinceLastRender < 1 / SNAKE_SPEED) return;
    
    lastRenderTime = currentTime;

    update()
    render()
}

window.requestAnimationFrame(main);

function update() {
    updateSnake();
    updateFood();
    checkDeath();
}

function render() {
    gameBoard.innerHTML = ''
    renderSnake(gameBoard);
    renderFood(gameBoard);
}

function checkDeath() {
    gameOver = outsideGrid(getSnakeHead()) || snakeIntersection()
}