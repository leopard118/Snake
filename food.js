let food = { x: 20, y: 20 };

const updateFood = () => {
  if (onSnake1(food)) {
    growSnake1();
    food = getNewFoodPosition();
  }
  if (onSnake2(food)) {
    growSnake2();
    food = getNewFoodPosition();
  }
}

const drawFood = (gameBoard) => {
  const foodElement = document.createElement('div');
  foodElement.style.gridRowStart = food.y;
  foodElement.style.gridColumnStart = food.x;
  foodElement.classList.add('food');
  gameBoard.appendChild(foodElement);
}