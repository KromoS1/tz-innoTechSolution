import {configureStore} from "@reduxjs/toolkit";
import thunk from "redux-thunk"
import {citiesReducer} from "./reducers/citiesReducer";

export const store =configureStore({
    reducer:{
        cities:citiesReducer,
    },
    middleware:getDefaultMiddleware => getDefaultMiddleware().prepend(thunk),
})
