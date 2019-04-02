import { combineReducers } from 'redux';
import counterReducer from './counterReducer';

const initialState = {
    counter: 0
}

const rootReducer = (state = initialState, action) => {
    switch(action.type) {
        case 'INCREMENT':
        return { counter: state.counter + 1}
        case 'DECREMENT':
        return { counter: state.counter - 1}
    }

    return state
}

// const rootReducer = combineReducers({
//     counterReducer
// })

export default rootReducer