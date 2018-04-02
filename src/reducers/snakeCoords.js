const init = [
    {x: 2, y: 2},
    {x: 2, y: 1},
    {x: 2, y: 0}
];

export default function snakeCoords(state = init, action) {
    switch (action.type) {
        case('ADD_NEW_PART'):
            return [...state, action.payload];

        case('CHANGE_COORDS'):
            return [...action.payload];

        default:
            return state;
    }

}
