let init = {
    isGame: true,
    game_over: false,
    score: 0
};
export default function gameStatus(state = init, action) {
    switch (action.type) {
        case ('LOSE_GAME'):
            return {
                ...state,
                isGame: false,
                game_over: true
            };
        case ('INCREMENT_SCORE'):
            return {
                ...state,
                score: state.score + 1
            };
        default:
            return state
    }
}