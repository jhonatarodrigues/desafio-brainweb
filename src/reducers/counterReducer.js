import React from 'react';

const INITIAL_STATE = {
    step: 1,
    counters: [
        {
            number: 0
        },
        {
            number: 3
        },
        {
            number: 9
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
        default:
            return state;
    
    }
}