let init = {x: 2,y: 7};

export default function appleCoords(state = init, action) {
    switch (action.type) {
        case ('NEW_APPLE_COORDS'):
            console.log(action.payload);
            return {...action.payload};
        default:
            return state;
    }
}