let init = [{y: 0,x: 40}];

export default function snakeCoords(state = init, action) {
    switch (action.type) {
        case('ADD_NEW_PART'):
            return [...state,action.payload];

        case('CHANGE_COORDS'):
            return [...action.payload];

        default:
            return state;
    }

}