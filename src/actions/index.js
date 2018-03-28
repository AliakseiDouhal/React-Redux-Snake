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

let changeSnakeCoords = function (newCoords) {
    return {
        type: 'CHANGE_COORDS',
        payload: newCoords
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
        changeAppleCoords(oldAppleCoord)
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

export default {directionMotion, addSnakeCoords, changeSnakeCoords, changeAppleCoords, gameLose, resetGame};
