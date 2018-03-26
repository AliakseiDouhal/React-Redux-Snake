let init = ['DOWN'];

export default function snakeDirection(state = init, action) {
    switch (action.type) {
        case('SET_DIRECTION'):
            return state = action.payload;

        default:
            return state;
    }
}