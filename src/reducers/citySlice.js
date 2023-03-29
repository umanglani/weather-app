import { createSlice } from "@reduxjs/toolkit";

const citiesSlice = createSlice({
    name: 'cities',
    initialState: {
        cities:[
        {   cityName: 'Paris',
            currentTempreature: 12,
            minTempreature : 8,
            maxTempreature: 19,
            windSpeed: 11.9,
            windDirection: 95.0,
            sunrise: '06:23',
            sunset: '18:12',
            timezone: 'Europe/Paris (CEST)'
        },
        {   cityName: 'London',
            currentTempreature: 12,
            minTempreature : 8,
            maxTempreature: 19,
            windSpeed: 11.9,
            windDirection: 215.0,
            sunrise: '06:23',
            sunset: '18:12',
            timezone: 'Europe/Paris (CEST)'
        },
        {   cityName: 'New Delhi',
            currentTempreature: 12,
            minTempreature : 8,
            maxTempreature: 19,
            windSpeed: 11.9,
            windDirection: 156.0,
            sunrise: '06:23',
            sunset: '18:12',
            timezone: 'Europe/Paris (CEST)'
        },
    ]},
    reducers: {
        addCity(state, action) {
            
        },
        removeCity(state, action) {

        },
        updateWeatherStats(state, action) {

        }
    }
});

export const { addCity, removeCity, updateWeatherStats } = citiesSlice.actions;
export default citiesSlice.reducer;