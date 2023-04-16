import { createSlice } from "@reduxjs/toolkit";
import { GetTimeOfDay, SerializeDateToTimezone } from "../common/common";

const citiesSlice = createSlice({
    name: 'cities',
    initialState: {
        cities:[
        {   
            id: 1880252,
            cityName: 'Singapore',
            lat: 1.28967,
            long: 103.85007,
            country: 'Singapore',
            timezone: 'Asia/Singapore',
            daily: [],
            hourly: []
        },
        // {   
        //     id: 1259229,
        //     cityName: 'Pune',
        //     lat: 18.51957,
        //     long: 73.85535,
        //     country: 'India',
        //     timezone: 'Asia/Kolkata',
        //     daily: [],
        //     hourly: []
        // },
        // {   
        //     id: 2988507,
        //     cityName: 'Paris',
        //     lat: 48.85341,
        //     long: 2.3488,
        //     country: 'France',
        //     timezone: 'Europe/Paris',
        //     daily: [],
        //     hourly: []
        // },
        {   
            id: 5368361,
            cityName: 'Los Angeles',
            lat: 34.05223,
            long: -118.24368,
            country: 'United States',
            timezone: 'America/Los_Angeles',
            timeOfDay: 'day',
            daily: [],
            hourly: [],
        },
        ],
            // cities: [
            //   {
            //     id: 1880252,
            //     cityName: 'Singapore',
            //     lat: 1.28967,
            //     'long': 103.85007,
            //     country: 'Singapore',
            //     timezone: 'Asia/Singapore',
            //     daily: [
            //       {
            //         time: 1680624000,
            //         mintemperature: 26,
            //         maxtemperature: 29.7,
            //         weatherCode: 95
            //       },
            //       {
            //         time: 1680710400,
            //         mintemperature: 26,
            //         maxtemperature: 30.3,
            //         weatherCode: 80
            //       },
            //       {
            //         time: 1680796800,
            //         mintemperature: 25.7,
            //         maxtemperature: 31.3,
            //         weatherCode: 3
            //       },
            //       {
            //         time: 1680883200,
            //         mintemperature: 25.6,
            //         maxtemperature: 31,
            //         weatherCode: 96
            //       },
            //       {
            //         time: 1680969600,
            //         mintemperature: 25.4,
            //         maxtemperature: 33.6,
            //         weatherCode: 3
            //       },
            //       {
            //         time: 1681056000,
            //         mintemperature: 25.5,
            //         maxtemperature: 31.9,
            //         weatherCode: 80
            //       },
            //       {
            //         time: 1681142400,
            //         mintemperature: 25.3,
            //         maxtemperature: 33.4,
            //         weatherCode: 3
            //       }
            //     ],
            //     hourly: [
            //       {
            //         time: 1680670800,
            //         temperature: 29.1,
            //         weatherCode: 80
            //       },
            //       {
            //         time: 1680674400,
            //         temperature: 29.4,
            //         weatherCode: 80
            //       },
            //       {
            //         time: 1680678000,
            //         temperature: 29.6,
            //         weatherCode: 3
            //       },
            //       {
            //         time: 1680681600,
            //         temperature: 29.7,
            //         weatherCode: 80
            //       },
            //       {
            //         time: 1680685200,
            //         temperature: 29.6,
            //         weatherCode: 3
            //       },
            //       {
            //         time: 1680688800,
            //         temperature: 29.4,
            //         weatherCode: 3
            //       },
            //       {
            //         time: 1680692400,
            //         temperature: 28.9,
            //         weatherCode: 3
            //       },
            //       {
            //         time: 1680696000,
            //         temperature: 28.3,
            //         weatherCode: 3
            //       },
            //       {
            //         time: 1680699600,
            //         temperature: 27.8,
            //         weatherCode: 3
            //       },
            //       {
            //         time: 1680703200,
            //         temperature: 27.4,
            //         weatherCode: 3
            //       },
            //       {
            //         time: 1680706800,
            //         temperature: 27.1,
            //         weatherCode: 3
            //       },
            //       {
            //         time: 1680710400,
            //         temperature: 26.9,
            //         weatherCode: 3
            //       },
            //       {
            //         time: 1680714000,
            //         temperature: 26.8,
            //         weatherCode: 3
            //       },
            //       {
            //         time: 1680717600,
            //         temperature: 26.6,
            //         weatherCode: 3
            //       },
            //       {
            //         time: 1680721200,
            //         temperature: 26.5,
            //         weatherCode: 3
            //       },
            //       {
            //         time: 1680724800,
            //         temperature: 26.4,
            //         weatherCode: 3
            //       },
            //       {
            //         time: 1680728400,
            //         temperature: 26.3,
            //         weatherCode: 3
            //       },
            //       {
            //         time: 1680732000,
            //         temperature: 26.1,
            //         weatherCode: 3
            //       },
            //       {
            //         time: 1680735600,
            //         temperature: 26,
            //         weatherCode: 80
            //       },
            //       {
            //         time: 1680739200,
            //         temperature: 26.2,
            //         weatherCode: 80
            //       },
            //       {
            //         time: 1680742800,
            //         temperature: 26.9,
            //         weatherCode: 3
            //       },
            //       {
            //         time: 1680746400,
            //         temperature: 27.7,
            //         weatherCode: 3
            //       },
            //       {
            //         time: 1680750000,
            //         temperature: 28.5,
            //         weatherCode: 3
            //       },
            //       {
            //         time: 1680753600,
            //         temperature: 29.4,
            //         weatherCode: 3
            //       }
            //     ],
            //     currentWeather: {
            //       temperature: 29.1,
            //       windspeed: 2.8,
            //       winddirection: 270,
            //       weathercode: 80,
            //       time: 1680670800,
            //       percipitation: 28
            //     }
            //   },
            //   {
            //     id: 1259229,
            //     cityName: 'Pune',
            //     lat: 18.51957,
            //     'long': 73.85535,
            //     country: 'India',
            //     timezone: 'Asia/Kolkata',
            //     daily: [
            //       {
            //         time: 1680633000,
            //         mintemperature: 21.4,
            //         maxtemperature: 37.4,
            //         weatherCode: 3
            //       },
            //       {
            //         time: 1680719400,
            //         mintemperature: 23.3,
            //         maxtemperature: 37,
            //         weatherCode: 3
            //       },
            //       {
            //         time: 1680805800,
            //         mintemperature: 25,
            //         maxtemperature: 32.5,
            //         weatherCode: 80
            //       },
            //       {
            //         time: 1680892200,
            //         mintemperature: 23.7,
            //         maxtemperature: 33.5,
            //         weatherCode: 80
            //       },
            //       {
            //         time: 1680978600,
            //         mintemperature: 22.6,
            //         maxtemperature: 34.6,
            //         weatherCode: 95
            //       },
            //       {
            //         time: 1681065000,
            //         mintemperature: 22.8,
            //         maxtemperature: 35.4,
            //         weatherCode: 80
            //       },
            //       {
            //         time: 1681151400,
            //         mintemperature: 23.7,
            //         maxtemperature: 35.1,
            //         weatherCode: 96
            //       }
            //     ],
            //     hourly: [
            //       {
            //         time: 1680672600,
            //         temperature: 34.1,
            //         weatherCode: 0
            //       },
            //       {
            //         time: 1680676200,
            //         temperature: 35.8,
            //         weatherCode: 0
            //       },
            //       {
            //         time: 1680679800,
            //         temperature: 36.8,
            //         weatherCode: 1
            //       },
            //       {
            //         time: 1680683400,
            //         temperature: 37.2,
            //         weatherCode: 0
            //       },
            //       {
            //         time: 1680687000,
            //         temperature: 37.4,
            //         weatherCode: 0
            //       },
            //       {
            //         time: 1680690600,
            //         temperature: 36.1,
            //         weatherCode: 3
            //       },
            //       {
            //         time: 1680694200,
            //         temperature: 34,
            //         weatherCode: 2
            //       },
            //       {
            //         time: 1680697800,
            //         temperature: 32.7,
            //         weatherCode: 2
            //       },
            //       {
            //         time: 1680701400,
            //         temperature: 30.1,
            //         weatherCode: 1
            //       },
            //       {
            //         time: 1680705000,
            //         temperature: 28.4,
            //         weatherCode: 2
            //       },
            //       {
            //         time: 1680708600,
            //         temperature: 27.4,
            //         weatherCode: 2
            //       },
            //       {
            //         time: 1680712200,
            //         temperature: 26.6,
            //         weatherCode: 2
            //       },
            //       {
            //         time: 1680715800,
            //         temperature: 26,
            //         weatherCode: 2
            //       },
            //       {
            //         time: 1680719400,
            //         temperature: 25.6,
            //         weatherCode: 2
            //       },
            //       {
            //         time: 1680723000,
            //         temperature: 25.1,
            //         weatherCode: 2
            //       },
            //       {
            //         time: 1680726600,
            //         temperature: 24.7,
            //         weatherCode: 2
            //       },
            //       {
            //         time: 1680730200,
            //         temperature: 24.2,
            //         weatherCode: 2
            //       },
            //       {
            //         time: 1680733800,
            //         temperature: 23.7,
            //         weatherCode: 2
            //       },
            //       {
            //         time: 1680737400,
            //         temperature: 23.4,
            //         weatherCode: 2
            //       },
            //       {
            //         time: 1680741000,
            //         temperature: 23.3,
            //         weatherCode: 2
            //       },
            //       {
            //         time: 1680744600,
            //         temperature: 23.8,
            //         weatherCode: 2
            //       },
            //       {
            //         time: 1680748200,
            //         temperature: 25.9,
            //         weatherCode: 2
            //       },
            //       {
            //         time: 1680751800,
            //         temperature: 28.6,
            //         weatherCode: 2
            //       },
            //       {
            //         time: 1680755400,
            //         temperature: 31,
            //         weatherCode: 2
            //       }
            //     ],
            //     currentWeather: {
            //       temperature: 31.6,
            //       windspeed: 1.46,
            //       winddirection: 16,
            //       weathercode: 0,
            //       time: 1680670800,
            //       percipitation: 0
            //     }
            //   }
            // ],
        loadingWeatherInfo: false,
        citySearchResult: [],
        isSearching: false
    },
    reducers: {
        setLoadingWeatherInfo(state, action) {
            state.loadingWeatherInfo = action.payload;
            return state;
        },
        setIsSearching(state, action) {
            state.isSearching = action.payload;
            return state;
        },
        setSearchCityResult(state, action) {
            console.log(action);
            state.citySearchResult = action.payload;
            return state;
        },
        addCity(state, action) {
            
        },
        removeCity(state, action) {

        },
        updateWeatherStats(state, action) {
            const allCities = state.cities;
            const cityIdx = allCities.findIndex(c => c.id === action.payload.city.id);
            const city = allCities[cityIdx];
            const wInfo = action.payload.weatherInfo;
            if (city) {
                // hourly starts from current time and pull for next 24 hours
                // include sunrise/sunset timeing in between
                let startIdx = wInfo.hourly.time.findIndex(t => t === wInfo.current_weather.time || t > wInfo.current_weather.time);
                let hourlyData = {start: 0, hourly: wInfo.hourly.time.slice(0, 12)};  // this is default
                if (startIdx > -1) {
                    hourlyData = { start: startIdx, hourly: wInfo.hourly.time.slice(startIdx, startIdx + 24)};
                } else {
                    startIdx = 0;
                }
                city.hourly = hourlyData.hourly.map((h, index) => ({
                    time: h,
                    temperature: wInfo.hourly.temperature_2m[startIdx + index],
                    weatherCode: wInfo.hourly.weathercode[startIdx + index]
                }));
                city.currentWeather = wInfo.current_weather;

                // find sunrise and sunset and insert into hourly data
                const sunriseNodeIdx = wInfo.daily.sunrise.findIndex(s => s > wInfo.current_weather.time);
                const sunriseTime = wInfo.daily.sunrise[sunriseNodeIdx];
                const sunsetTime= wInfo.daily.sunset[sunriseNodeIdx];

                city.hourly.push({
                    time: sunriseTime,
                    temperature: 0,
                    weatherCode: -1,
                    type: 'sunrise'
                });

                city.hourly.push({
                    time: sunsetTime,
                    temperature: 0,
                    weatherCode: -1,
                    type: 'sunset'
                });

                city.hourly.sort((a, b) => { return a.time - b.time });
                
                // find sunrise and sunset
                city.currentWeather.sunrise = wInfo.daily.sunrise[0];
                city.currentWeather.sunset = wInfo.daily.sunset[0];

                city.timeOfDay = GetTimeOfDay(wInfo.current_weather.time, city.timezone);
                city.currentWeather.percipitation = wInfo.hourly.precipitation_probability[startIdx]
                city.currentWeather.humidity = wInfo.hourly.relativehumidity_2m[startIdx];
                city.currentWeather.dewpoint = wInfo.hourly.dewpoint_2m[startIdx];
                city.daily = 
                    wInfo.daily.time.map((t, index) => ({
                        time: t, // SerializeDateToTimezone(t, city.timezone),
                        mintemperature: wInfo.daily.temperature_2m_min[index],
                        maxtemperature: wInfo.daily.temperature_2m_max[index],
                        weatherCode: wInfo.daily.weathercode[index]
                }));
            }
            return state;
        }
    }
});

export const { addCity, removeCity, setIsSearching, updateWeatherStats, setSearchCityResult, setLoadingWeatherInfo } = citiesSlice.actions;
export default citiesSlice.reducer;