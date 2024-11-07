// TODO: fill me in!
const snakeBody1 = [
    { x: 5, y: 6 },
    { x: 5, y: 5 },
    { x: 5, y: 4 }
];
const snakeBody2 = [
    { x: 35, y: 36 },
    { x: 35, y: 35 },
    { x: 35, y: 34 }
];

const updateSnake = () => {
    snakeBody1.pop();
    snakeBody2.pop();

    const newHead1 = { ...snakeBody1[0] };
    const newHead2 = { ...snakeBody2[0] };
    const snakeDirection1 = getInputDirection1();

    newHead1.x += snakeDirection1.x;
    newHead1.y += snakeDirection1.y;
    const snakeDirection2 = getInputDirection2();

    newHead2.x += snakeDirection2.x;
    newHead2.y += snakeDirection2.y;

    snakeBody1.unshift(newHead1);
    snakeBody2.unshift(newHead2);
}


// Don't change this function!
const drawSnake = (gameBoard) => {
    for (let i = 0; i < snakeBody1.length; i++) {
        const segment = snakeBody1[i];
        const snakeElement = document.createElement("div");
        snakeElement.style.gridRowStart = segment.y;
        snakeElement.style.gridColumnStart = segment.x;
        if (i == 0) snakeElement.classList.add("snake-head1");
        else snakeElement.classList.add("snake1");
        gameBoard.appendChild(snakeElement);
    }
    for (let i = 0; i < snakeBody2.length; i++) {
        const segment = snakeBody2[i];
        const snakeElement = document.createElement("div");
        snakeElement.style.gridRowStart = segment.y;
        snakeElement.style.gridColumnStart = segment.x;
        if (i == 0) snakeElement.classList.add("snake-head2");
        else snakeElement.classList.add("snake2");
        gameBoard.appendChild(snakeElement);
    }

}