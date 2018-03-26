let directionMotion = function (event, currentDirection) {

    switch(event.keyCode) {
        case 65: // A key
        case 37: // left arrow
            // make sure we're not trying to move into the snake's body
            // or move outside the boundaries
            if(currentDirection !== 'RIGHT') {
                return {
                    type:'SET_DIRECTION',
                    payload: 'LEFT'
                };
            }
            break;
        case 68: // D key
        case 39: // right arrow
            if(currentDirection !== 'LEFT' ) {
                return {
                    type:'SET_DIRECTION',
                    payload: 'RIGHT'
                };
            }
            break;
        case 83: // S key
        case 40: // down arrow
            if(currentDirection !== 'UP') {
                return {
                    type:'SET_DIRECTION',
                    payload: 'DOWN'
                };
            }
            break;
        case 87: // W key
        case 38: // up arrow
            if(currentDirection !== 'DOWN') {
                return {
                    type:'SET_DIRECTION',
                    payload: 'UP'
                };
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
};

export default {directionMotion};
