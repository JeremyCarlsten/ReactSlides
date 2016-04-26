import { createStore } from 'redux';
import { NEXT_SLIDE, PREVIOUS_SLIDE } from './actions/actionCreator';

let mainReducer = function (state = {}, action) {
    let currentSlide = state.currentSlide;
    switch (action.type) {
        case NEXT_SLIDE:
            return {...state, currentSlide: currentSlide++};
        case PREVIOUS_SLIDE:
            return {...state, currentSlide: currentSlide--};
        default:
            return state
    }
};

export let Store = createStore(mainReducer);


