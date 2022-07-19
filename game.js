import { update as updateSnake, render as renderSnake, snakeSpeed } from './snake.js'

let lastRenderTime = 0;

function main(currentTime) {
    window.requestAnimationFrame(main);
    const secondsSinceLastRender = (currentTime - lastRenderTime) / 1000;
    if(secondsSinceLastRender < 1 / snakeSpeed) return;
    
    lastRenderTime = currentTime;

    update()
    render()
}

window.requestAnimationFrame(main);

function update() {
    updateSnake();
}

function render() {
    renderSnake();
}