import {createSlice} from "@reduxjs/toolkit";

const initialState = []

const slice = createSlice({
    name: 'weather',
    initialState,
    reducers: {
        setCities: (state, action) => [...state,...action.payload],
        updateCity: (state,action) => {
            return state.filter(city => city.idCity === action.payload.idCity ? action.payload : city);
        },
        removeCity: (state,action) => {
            return state.filter(city => city.idCity !== action.payload.id);
        }
    }
})

export const citiesReducer = slice.reducer;
export const citiesActions = slice.actions;
