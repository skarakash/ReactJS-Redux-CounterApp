import { INC, DEC } from '../constants/index';

const INITIAL_STATE = {
    start: 0
}

const counter =  function(state = INITIAL_STATE, action){
    switch (action.type) {
        case INC:
            return state = Object.assign({}, state, state.start = state.start + 1);
        case DEC:
            return state = Object.assign({}, state, state.start = state.start - 1);   
        default:
            return state
    }
}

export default counter;

