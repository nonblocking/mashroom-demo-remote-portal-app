
import {SET_JOKE, SET_ERROR} from './actions';
import type {Reducer} from 'redux';
import type {ClientState} from '../../type-definitions';

const reducer: Reducer<ClientState> = (state, action) => {
    if (typeof (state) === 'undefined') {
        return {
            joke: null,
            error: false,
        };
    }

    switch (action.type) {
        case SET_JOKE:
            return {
                ...state,
                joke: action.joke,
            }
        case SET_ERROR:
            return {
                ...state,
                error: action.error,
            }
        default:
            return state;
    }
};

export default reducer;
