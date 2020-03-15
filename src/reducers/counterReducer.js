import React from 'react';
import { 
    SELECT_COUNTER, 
    ADD_COUNTER, 
    REMOVE_COUNTER,
    INCREMENT_COUNTER,
    DECREMENT_COUNTER
} from '../actions/types';

const INITIAL_STATE = {
    step: 1,
    counterSelected: 1,
    counters: [
        {
            number: 0
        },
        {
            number: 3
        },
        {
            number: 9,
        }
    ],
}

export default function reducer(state = INITIAL_STATE, action) {
    switch (action.type) {
        case ADD_COUNTER:
            return {
                ...state,
                counters: [
                    ...state.counters, 
                    {
                        number: 0
                    }
                ]
            }
        case REMOVE_COUNTER:
            return {
                ...state,
                counters: [
                    ...state.counters.filter((item, index) => {
                        if(index == state.counterSelected)
                            return false;
                        return true;
                    })
                ]
            }
        case SELECT_COUNTER:
            return {
                ...state,
                counterSelected: action.counter
            }
        
        case INCREMENT_COUNTER: 
            return {
                ...state,
                counters: [
                    ...state.counters.filter((item, index) => {
                        if(index == state.counterSelected){
                            item.number++;
                        }
                        return true;
                    })
                ]
            }
        case DECREMENT_COUNTER: 
            return {
                ...state,
                counters: [
                    ...state.counters.filter((item, index) => {
                        if(index == state.counterSelected){
                            item.number--;
                            if(item.number < 0)
                                item.number = 0;
                        }
                        return true;
                    })
                ]
            }
        default:
            return state;
    
    }
}