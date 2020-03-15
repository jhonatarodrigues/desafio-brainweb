import React from 'react';


export function increment() {
    return { 
        type: 'INCREMENT'
    }
}

export function stepChanged(e) {
    return { 
        type: 'STEP_CHANGED',
        payload: e.target.value
    }
}