import { getInputDirection } from "./input.js";

export const snakeSpeed = 5;
const snakeBody = [{ x: 11, y: 11 }]

export function update() {
    const inputDirection = getInputDirection();
    for (let i = snakeBody.length -2; i >= 0; i--) {
        snakeBody[i + 1] = { ...snakeBody[i] }
    }

    snakeBody[0].x += inputDirection.x;
    snakeBody[0].y += inputDirection.y;
}

export function render(gameBoard) {
    snakeBody.forEach(segment => {
        const snakeElememt = document.createElement('div')
        snakeElememt.style.gridRowStart = segment.y;
        snakeElememt.style.gridColumnStart = segment.x;
        snakeElememt.classList.add('snake')
        gameBoard.appendChild(snakeElememt)
    })
}