import axios from "axios";
import { useDispatch } from "react-redux";
import { setSearchCityResult, setIsSearching, setLoadingWeatherInfo, updateWeatherStats } from "../reducers/citySlice";


export const SearchCity = async(cityName ,dispatch) => {
    const url = `https://geocoding-api.open-meteo.com/v1/search?name=${cityName}`;
    dispatch(setIsSearching(true));
    const response = await axios.get(url);
    console.log(response);
    if (response.status === 200) {
        dispatch(setSearchCityResult(response.data.results));
        dispatch(setIsSearching(false));
    } else {
        setSearchCityResult([]);
        setIsSearching(false);
    }
    return;
};

export const GetWeatherInfoForCity = async(city, dispatch) => {
    const url = `https://api.open-meteo.com/v1/forecast?latitude=${city.lat}&longitude=${city.long}&hourly=temperature_2m,relativehumidity_2m,dewpoint_2m,apparent_temperature,precipitation_probability,weathercode&daily=temperature_2m_max,temperature_2m_min,weathercode,apparent_temperature_max,apparent_temperature_min,sunrise,sunset,precipitation_hours,precipitation_probability_max&current_weather=true&windspeed_unit=ms&timeformat=unixtime&timezone=${city.timezone}&timeformat=unixtime`;
    dispatch(setLoadingWeatherInfo(true));
    const response = await axios.get(url);
    if (response.status === 200) {
        dispatch(updateWeatherStats({city, weatherInfo: response.data}));
        dispatch(setLoadingWeatherInfo(false));
    } else {
        dispatch(setLoadingWeatherInfo(false));
        dispatch(updateWeatherStats({}));
    }
    return response;
};

