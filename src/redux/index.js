import {combineReducers} from 'redux';

import snakeDirection from './snakeDirection';
import snakeCoords from './snakeCoords';
import appleCoords from './appleCoords';
import gameStatus, { RESET_GAME }  from './gameStatus';
/*const rootReducer = combineReducers({
    snakeDirection,
    snakeCoords,
    appleCoords,
    gameStatus

});*/

const appReducers = combineReducers({
    snakeCoords,
    appleCoords,
    gameStatus,
    snakeDirection

});

const rootReducer = (state, action) => {
    if (action.type === RESET_GAME) {
        state = {};
    }
    return appReducers(state, action)
};

export default rootReducer;
