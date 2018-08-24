const init = [
    {x: 2, y: 2},
    {x: 2, y: 1},
    {x: 2, y: 0}
];

// consts
const ADD_NEW_PART = 'ADD_NEW_PART';
const CHANGE_COORDS = 'CHANGE_COORDS';

// reducer
export default function snakeCoords(state = init, action) {
    switch (action.type) {
        case(ADD_NEW_PART):
            return [...state, action.payload];

        case(CHANGE_COORDS):
            return [...action.payload];

        default:
            return state;
    }
}

// actions
export const addSnakeCoords =  (x, y) => {
    return {
        type: ADD_NEW_PART,
        payload: {x: x, y: y}
    }
};

export const changeSnakeCoords = (oldSnake, snakeDirection) => {
    const snake = oldSnake.slice(0, oldSnake.length - 1);
    let head;

    switch (snakeDirection) {
        case ('DOWN'):
            head = [{x: snake[0].x, y: snake[0].y + 1}];
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
    const newSnake = head.concat(snake);
    /*merge new head coords with other snake body*/
    return {
        type: CHANGE_COORDS,
        payload: newSnake,
    }
};
