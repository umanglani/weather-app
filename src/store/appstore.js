import { configureStore } from "@reduxjs/toolkit";
import citiesReducer from '../reducers/citySlice';
import appthemeReducer from '../reducers/appthemeSlice';

export const store = configureStore({
    reducer: {
        cities: citiesReducer,
        appTheme: appthemeReducer,
    }
});
