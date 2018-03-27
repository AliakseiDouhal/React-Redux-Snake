import { combineReducers } from 'redux';

import snakeDirection from './snakeDirection';
import snakeCoords from './snakeCoords';

const rootReducer = combineReducers({
    snakeDirection,
    snakeCoords

});

export default rootReducer;

