import {changeAppleCoords} from '../redux/appleCoords/index';
import {gameLose, incrementScore, resetGame} from '../redux/gameStatus';
import {directionMotion} from '../redux/snakeDirection';
import {addSnakeCoords, changeSnakeCoords} from '../redux/snakeCoords';


export default {
    directionMotion,
    addSnakeCoords,
    changeSnakeCoords,
    changeAppleCoords,
    gameLose,
    resetGame,
    incrementScore,
};
