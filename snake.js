export const snakeSpeed = 2;
const snakeBody = [{ x: 11, y: 11 }];

export function update() {
    console.log('update snake')
}

export function render(gameboard) {
    snakeBody.forEach(segment => {
        const snakeElememt = document.createElement('div')
        snakeElememt.style.gridRowStart = segment.x;
        snakeElememt.style.gridColumnStart = segment.y;
    })
}