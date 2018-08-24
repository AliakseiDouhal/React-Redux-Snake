import { START_GAME } from '../gameStatus';

const init = 'DOWN';

// consts
const SET_DIRECTION = 'SET_DIRECTION';

// reducer
export default function snakeDirection(state = init, action) {
    switch (action.type) {
        case(SET_DIRECTION):
            return action.payload;

        default:
            return state;
    }
}

// actions
export const directionMotion = (event, currentDirection, head, gameStatus) => {
    const actionDirection = (direction) => {
        return {
            type: SET_DIRECTION,
            payload: direction
        };
    };

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
                    type: START_GAME
                }
            }
            break;
        default:
            break
    }
    return actionDirection(currentDirection);
};
