import {createReducer} from '@reduxjs/toolkit';

const initialState = {
    planet: 'mercury',
    theme: '#419EBB'
}

const planetReducer = createReducer(initialState, (builder) => {
    builder
        .addCase('UPDATE_PLANET', (state, action) => {
            state.planet = action.payload.planet;
            state.theme = action.payload.theme
        })
})

export default planetReducer;