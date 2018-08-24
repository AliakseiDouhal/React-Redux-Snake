const init = {x: 2,y: 7};

// consts
const NEW_APPLE_COORDS = 'NEW_APPLE_COORDS';

// reducer
export default function appleCoords(state = init, action) {
    switch (action.type) {
        case (NEW_APPLE_COORDS):
            return {...action.payload};
        default:
            return state;
    }
}

// actions
export const changeAppleCoords =  oldAppleCoord => {
    const getRandomInt = (min, max) => {
        return Math.floor(Math.random() * (max - min)) + min;
    };

    const newX = getRandomInt(0, 20);
    const newY = getRandomInt(0, 20);
    if (newX !== oldAppleCoord.x && newY !== oldAppleCoord.y) {
        return {
            type: NEW_APPLE_COORDS,
            payload: {x: newX, y: newY}
        }
    }
    else {
        return changeAppleCoords(oldAppleCoord);
    }
};
