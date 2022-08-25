export const snakeSpeed = 1;
const snakeBody = [
    { x: 10, y: 11 },
    { x: 11, y: 11 }, 
    { x: 12, y: 11 }, 
    { x: 13, y: 11 }, 
    { x: 14, y: 11 }
]

export function update() {
    for (let i = snakeBody.length -2; i >= 0; i--) {
        snakeBody[i + 1] = { ...snakeBody[i] }
    }

    // snakeBody[0].x += 0
    // snakeBody[0].y += 1
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