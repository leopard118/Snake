const GRID_SIZE = 40;

const onSnake1 = (position) => {
  for (let i = 0; i < snakeBody1.length; i++) {
    if (equalPositions(position, snakeBody1[i])) {
      return true;
    }
  }
  return false;
}

const onSnake2 = (position) => {
  for (let i = 0; i < snakeBody2.length; i++) {
    if (equalPositions(position, snakeBody2[i])) {
      return true;
    }
  }
  return false;
}

const equalPositions = (pos1, pos2) => {
  return pos1.x === pos2.x && pos1.y === pos2.y;
}

const growSnake1 = () => {
  snakeBody1.push({ ...snakeBody1[snakeBody1.length - 1] });
}

const growSnake2 = () => {
  snakeBody2.push({ ...snakeBody2[snakeBody2.length - 1] });
}

const getNewFoodPosition = () => {
  let randomFoodPosition = randomGridPosition();
  while (onSnake1(randomFoodPosition) || onSnake2(randomFoodPosition)) {
    randomFoodPosition = randomGridPosition();
  }
  return randomFoodPosition;
}

const randomGridPosition = () => {
  return {
    x: Math.floor(Math.random() * (GRID_SIZE - 2)) + 2,
    y: Math.floor(Math.random() * (GRID_SIZE - 2)) + 2
  };
}

const outOfBounds = (position) => {
  return position.x < 1 || position.x > GRID_SIZE || position.y < 1 || position.y > GRID_SIZE;
}

const snakeOutOfBounds = () => {
  return outOfBounds(snakeBody1[0]) || outOfBounds(snakeBody2[0]);
}

const snakeKillothersnake = () => {
  return onSnake1(snakeBody2[0]) || onSnake2(snakeBody1[0]);
}
