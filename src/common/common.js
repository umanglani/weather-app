import dayjs from 'dayjs';
import { DarkColors, globalStyles, LightColors } from '../global-styles';

const city_day = require("../../assets/city_normalday.jpg");
const city_night = require("../../assets/city_night.jpg");

export const ListItemSeparator = () => {
    return (
        <View style={globalStyles.itemSeparator}></View>
    )
}

export const GetThemeForeColorClass = (isDarkMode) => {
    return isDarkMode ? globalStyles.darkColor : globalStyles.lightColor;
}

export const GetThemeForeColor = (isDarkMode) => {
    return isDarkMode ? DarkColors.AppForeColor : LightColors.AppForeColor;
}

export const GetTimeOfDay = (time = new Date()) => {
    const datetime = dayjs(time);
    return (datetime.hour > 5 && datetime.hour < 7) ? 'day' : 'night';
}

export const GetCityBackground = () => {
    
    const timeOfDay = GetTimeOfDay();

    switch(timeOfDay) {
        case 'day':
            return city_day;

        case 'night':
            return city_night;
    }
};

export const GetCardinalDirection = (angle) => {
    const directions = ['↑ N', '↗ NE', '→ E', '↘ SE', '↓ S', '↙ SW', '← W', '↖ NW'];
    return directions[Math.round(angle / 45) % 8];
}