import {createSelector} from 'reselect'

export const snakeCoords = (state) => state.snakeCoords;

export const snakeCoordsSelector = createSelector(snakeCoords, snakeCoords => {
        return snakeCoords
    }
);

export const snakeDirection = (state) => state.snakeDirection;

export const snakeDirectionSelector = createSelector(snakeDirection, snakeDirection => {
        return snakeDirection
    }
);
export const appleCoords = (state) => state.appleCoords;

export const appleCoordsSelector = createSelector(appleCoords, appleCoords => {
        return appleCoords
    }
);
export const gameStatus = (state) => state.gameStatus;

export const gameStatusSelector = createSelector(gameStatus, gameStatus => {
        return gameStatus
    }
);
