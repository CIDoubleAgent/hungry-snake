let food = { x: 1, y: 1 };

export function update() {

}

export function render(gameBoard) {
    const foodElememt = document.createElement('div')
    foodElememt.style.gridRowStart =  food.y;
    foodElememt.style.gridColumnStart = food.x;
    foodElememt.classList.add('food')
    gameBoard.appendChild(foodElememt)
    
}