let directionMotion = function (event, currentDirection, head, gameStatus) {
    function actionDirection(direction) {
        return {
            type: 'SET_DIRECTION',
            payload: direction
        };
    }

    switch (event.keyCode) {
        case 65: // A key
        case 37: // left arrow
            if (currentDirection !== 'RIGHT' && head.x !== 0) {
                return actionDirection('LEFT');
            }
            break;
        case 68: // D key
        case 39: // right arrow
            if (currentDirection !== 'LEFT' && head.x !== 19) {
                return actionDirection('RIGHT');
            }
            break;
        case 83: // S key
        case 40: // down arrow
            if (currentDirection !== 'UP' && head.y !== 19) {
                return actionDirection('DOWN');

            }
            break;
        case 87: // W key
        case 38: // up arrow
            if (currentDirection !== 'DOWN' && head.y !== 0) {
                return actionDirection('UP');

            }
            break;
        case 32: // space
            if (!gameStatus.isGame && !gameStatus.game_over) {
                return {
                    type: 'START_GAME'
                }
            }
            break;
        default:
            break
    }
    return actionDirection(currentDirection);
};

let addSnakeCoords = function (x, y) {
    return {
        type: 'ADD_NEW_PART',
        payload: {x: x, y: y}
    }
};

let changeSnakeCoords = function (oldSnake, snakeDirection) {
    let snake = oldSnake.slice(0, oldSnake.length - 1);
    /*обрезаю последнее значение, тем самым по сути выполняя цикл фор, который был раньше*/
    let head;

    switch (snakeDirection) {
        case ('DOWN'):
            head = [{x: snake[0].x, y: snake[0].y + 1}];
            /*создаю абсолютно новый объект с координатами головы*/
            break;
        case ('UP'):
            head = [{x: snake[0].x, y: snake[0].y - 1}];
            break;
        case ('LEFT'):
            head = [{x: snake[0].x - 1, y: snake[0].y}];
            break;
        case ('RIGHT'):
            head = [{x: snake[0].x + 1, y: snake[0].y}];
            break;
        default:
            break
    }
    let newSnake = head.concat(snake);
    /*объеденяю новую голову, с координатами остальных частей*/
    return {
        type: 'CHANGE_COORDS',
        payload: newSnake
    }
};


let changeAppleCoords = function (oldAppleCoord) {
    function getRandomInt(min, max) {
        return Math.floor(Math.random() * (max - min)) + min;
    }

    let newX = getRandomInt(0, 20);
    let newY = getRandomInt(0, 20);
    if (newX !== oldAppleCoord.x && newY !== oldAppleCoord.y) {
        return {
            type: 'NEW_APPLE_COORDS',
            payload: {x: newX, y: newY}
        }
    }
    else {
        return changeAppleCoords(oldAppleCoord);
    }
};

let gameLose = function () {
    return {
        type: 'LOSE_GAME'
    }
};

let resetGame = function () {
    return {
        type: 'RESET_GAME'
    }
};

let incrementScore = function () {
    return {
        type: 'INCREMENT_SCORE'
    }
};

export default {
    directionMotion,
    addSnakeCoords,
    changeSnakeCoords,
    changeAppleCoords,
    gameLose,
    resetGame,
    incrementScore
};
