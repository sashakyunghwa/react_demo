import types from '../actions/types';

const DEFAULT_STATE = {
    currentTime: new Date().toLocaleTimeString()
};

//the only thing that changes in a reducer is what is inside the switch statement
export default function(state = DEFAULT_STATE, action){
    switch(action.type){
        case types.TICK:
            return {...state, currentTime: action.payload};
        default: 
            return state;
    }
}



