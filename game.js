const SNAKE_SPEED = 5;

const gameBoard = document.getElementById("game-board");
let gameOver = false;
let winner = "no";
let msg;

const main = () => {
    update();
    draw();
    if (gameOver) {
        clearInterval(gameLoop);

        isWinner();
        if (winner === "no") msg = "Both winner! Play again?";
        else msg = winner + " winner!\n \tPlay again?";

        if (confirm(msg)) {
            window.location.assign(window.location.pathname)
        } else {
            window.close();
        }

    }
}

let gameLoop = setInterval(main, 1000 / SNAKE_SPEED);

const update = () => {
    console.log("Updating")
    updateSnake();
    updateFood();
    gameOver = isGameOver();
}

const draw = () => {
    gameBoard.innerHTML = "";
    drawSnake(gameBoard);
    drawFood(gameBoard);
}

const isGameOver = () => {
    return snakeOutOfBounds() || snakeKillothersnake();
}

const isWinner = () => {

    if (equalPositions(snakeBody1[0], snakeBody2[0])) {
        if (snakeBody1.length > snakeBody2.length) winner = "Player_1";
        else if (snakeBody1.length < snakeBody2.length) winner = "Player_2";
    }
    else {
        if (onSnake1(snakeBody2[0]) || outOfBounds(snakeBody2[0]))
            winner = "Player_1";
        else
            winner = "Player_2";
    }
    return false;
}
