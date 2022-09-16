import { onSnake, expandSnake } from './snake.js'
import { randomGridPosition } from './grid.js'
import { sliderValue } from './difficulty.js'

let food = getRandomFoodPosition();
const EXPANSION_RATE = sliderValue + 2;

export function update() {
    if (onSnake(food)) {
        expandSnake(EXPANSION_RATE);
        food = getRandomFoodPosition();
    }
}

export function render(gameBoard) {
    const foodElememt = document.createElement('div')
    foodElememt.style.gridRowStart =  food.y;
    foodElememt.style.gridColumnStart = food.x;
    foodElememt.classList.add('food')
    gameBoard.appendChild(foodElememt)
}

function getRandomFoodPosition() {
    let newFoodPosition;
    while (newFoodPosition == null || onSnake(newFoodPosition)) {
        newFoodPosition = randomGridPosition()
    }
    return newFoodPosition
}