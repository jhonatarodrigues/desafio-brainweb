import React from 'react';
import { SELECT_COUNTER } from '../actions/types';

const INITIAL_STATE = {
    step: 1,
    counterSelected: 0,
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
        case 'INCREMENT':
            return {
                ...state,
                counters: [...state.counters, action.counter]
            }
        case SELECT_COUNTER:
            return {
                ...state,
                counterSelected: action.counter
            }
        default:
            return state;
    
    }
}