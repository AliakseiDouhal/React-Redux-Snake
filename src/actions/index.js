let directionMotion = function (event, currentDirection) {
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
            if(currentDirection !== 'RIGHT') {
                return actionDirection('LEFT');
            }
            break;
        case 68: // D key
        case 39: // right arrow
            if(currentDirection !== 'LEFT' ) {
                return actionDirection('RIGHT');

            }
            break;
        case 83: // S key
        case 40: // down arrow
            if(currentDirection !== 'UP') {
                return actionDirection('DOWN');

            }
            break;
        case 87: // W key
        case 38: // up arrow
            if(currentDirection !== 'DOWN') {
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

let addSnakeCoords = function (coords) {


};

let changeSnakeCoords = function (newCoords) {
    return {
        type: 'CHANGE_COORDS',
        payload: newCoords
    }


};

export default {directionMotion, addSnakeCoords, changeSnakeCoords};
