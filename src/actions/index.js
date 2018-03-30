let directionMotion = function (event, currentDirection, head) {
    function actionDirection(direction) {
        return {
            type:'SET_DIRECTION',
            payload: direction
        };
    }

    switch(event.keyCode) {
        case 65: // A key
        case 37: // left arrow
            // make sure we're not trying to move into the snake's body
            // or move outside the boundaries
            if(currentDirection !== 'RIGHT' && head.x !== 0) {
                return actionDirection('LEFT');
            }
            break;
        case 68: // D key
        case 39: // right arrow
            if(currentDirection !== 'LEFT' && head.x !== 19) {
                return actionDirection('RIGHT');
            }
            break;
        case 83: // S key
        case 40: // down arrow
            if(currentDirection !== 'UP' && head.y !== 19) {
                return actionDirection('DOWN');

            }
            break;
        case 87: // W key
        case 38: // up arrow
            if(currentDirection !== 'DOWN' && head.y !== 0) {
                return actionDirection('UP');

            }
            break;
        /*case 32: // space
            if(this.props.game.lost) return false;
            clearInterval(this.snakeInterval);
            this.snakeInterval = setInterval(() => {
                this.props.setDirection(this.directionOnNextTick);
                this.props.moveSnake(this.props.snake);
            }, GAME_SPEED);
            break;*/
    }
    return actionDirection(currentDirection);
};

let addSnakeCoords = function (x, y) {
    return {
        type: 'ADD_NEW_PART',
        payload: {x: x, y: y}
    }


};

// Object.prototype.clone = function() {
//     const newObj = (this instanceof Array) ? [] : {};
//     for (let i in this) {
//         if (i === 'clone')
//             continue;
//         if (this[i] && typeof this[i] === "object") {
//             newObj[i] = this[i].clone();
//         }
//         else
//             newObj[i] = this[i]
//     } return newObj;
// };


let changeSnakeCoords = function (oldSnake, snakeDirection) {
/*
    let newSnake = snake.slice(0, snake.length-1);
*/
    const snake = oldSnake.slice();
    const head = snake[0];
    for (let i = snake.length - 1; i > 0; i--) {
        snake[i].x = snake[i - 1].x;
        snake[i].y = snake[i - 1].y;
    }

    switch (snakeDirection) {
        case ('DOWN'):
            head.y += 1;
            break;
        case ('UP'):
            head.y -= 1;
            break;
        case ('LEFT'):
            head.x -= 1;
            break;
        case ('RIGHT'):
            head.x += 1;
            break;
    }
/*

    let finishSnake = head.concat(newSnake);
    console.log(finishSnake);

*/



    return {
        type: 'CHANGE_COORDS',
        payload: snake
    }
};


let changeAppleCoords = function (oldAppleCoord) {
    function getRandomInt(min, max) {
        return Math.floor(Math.random() * (max - min)) + min;
    }
    let newX;
    let newY;
    // if (newX !== oldAppleCoord.x && newY !== oldAppleCoord.y) {
    //     return {
    //         type: 'NEW_APPLE_COORDS',
    //         payload: {x: newX, y: newY}
    //     }
    // }
    // else {
    //     return changeAppleCoords(oldAppleCoord)
    // }
    do {
        newX = getRandomInt(0, 20);
        newY = getRandomInt(0, 20);
    } while (newX === oldAppleCoord.x && newY === oldAppleCoord.y);
    return {
        type: 'NEW_APPLE_COORDS',
        payload: {x: newX, y: newY}
    }
};

let gameLose = function () {
    return{
        type:'LOSE_GAME'
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

export default {directionMotion, addSnakeCoords, changeSnakeCoords, changeAppleCoords, gameLose, resetGame, incrementScore};
