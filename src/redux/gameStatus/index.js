const init = {
    isGame: false,
    game_over: false,
    score: 0
};

// consts
const LOSE_GAME = 'LOSE_GAME';
const INCREMENT_SCORE = 'INCREMENT_SCORE';
export const START_GAME = 'START_GAME';
export const RESET_GAME = 'RESET_GAME';

// reducers
export default function gameStatus(state = init, action) {
    switch (action.type) {
        case (LOSE_GAME):
            return {
                ...state,
                isGame: false,
                game_over: true
            };
        case (INCREMENT_SCORE):
            return {
                ...state,
                score: state.score + 1
            };
        case (START_GAME):
            return {
                ...state,
                isGame: true,
            };
        default:
            return state
    }
}

// actions
export const gameLose = () => {
    return {
        type: LOSE_GAME
    }
};
export const resetGame = () => {
    return {
        type: RESET_GAME
    }
};
export const incrementScore = () => {
    return {
        type: INCREMENT_SCORE
    }
};
