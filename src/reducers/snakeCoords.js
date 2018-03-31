/*
import {List} from 'immutable'
const init = List([
    {x: 2, y: 2},
    {x: 2, y: 1},
    {x: 2, y: 0}
]);

// const initFn = function () {
//     return [{x: 2,y: 2},{x: 2,y: 1},{x: 2,y: 0}]
// }();

/!*
Object.assign({}, init);
*!/
export default function snakeCoords(state = init, action) {
    console.log(init);
    switch (action.type) {
        case('ADD_NEW_PART'):
            debugger;
            return state.concat(action.payload);

        case('CHANGE_COORDS'):
            debugger;
            return List([...action.payload]);

        default:
            return state;
    }

}*/

const init = [
    {x: 2, y: 2},
    {x: 2, y: 1},
    {x: 2, y: 0}
];

// const initFn = function () {
//     return [{x: 2,y: 2},{x: 2,y: 1},{x: 2,y: 0}]
// }();


export default function snakeCoords(state = init, action) {
    console.log(init);
    switch (action.type) {
        case('ADD_NEW_PART'):
            return [...state, action.payload];

        case('CHANGE_COORDS'):
            return [...action.payload];

        default:
            return state;
    }

}
