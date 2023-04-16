import moment from 'moment-timezone';
import { View } from 'react-native';
import { DarkColors, globalStyles, LightColors } from '../global-styles';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import { Feather } from '@expo/vector-icons';
import { Entypo } from '@expo/vector-icons';
import { FontAwesome5 } from '@expo/vector-icons';
import { Fontisto } from '@expo/vector-icons';
import { Ionicons } from '@expo/vector-icons';

// const city_day = require("../../assets/city_day.png");
// const city_night = require("../../assets/city_night.jpg");

export const HorizontalItemGap = () => {
    return (
        <View style={{paddingLeft: 5, paddingRight: 5}}></View>
    )
}

export const GetThemeForeColorClass = (isDarkMode) => {
    return isDarkMode ? globalStyles.darkColor : globalStyles.lightColor;
}

export const GetThemeForeColor = (isDarkMode) => {
    return isDarkMode ? DarkColors.AppForeColor : LightColors.AppForeColor;
}

export const GetTimeOfDay = (date, tz) => {
  const datetime = moment.unix(date).tz(tz);
  return (datetime.hour() >= 6 && datetime.hour() <= 18) ? 'day' : 'night';
}

export const GetAppTextColor = (timeOfDay) => {
  return { 
    color: timeOfDay === 'day' ? LightColors.AppForeColor : DarkColors.AppForeColor
  };
}

export const GetAppTextColorCode = (timeOfDay) => {
  return timeOfDay === 'day' ? LightColors.AppForeColor : DarkColors.AppForeColor;
}

export const GetAppGradientColors = (timeOfDay) => {
  return timeOfDay === 'day' ? LightColors.GradientColors : DarkColors.GradientColors;
}

export const SerializeDateToTimezone = (date, tz, format) => {
  return moment.unix(date).tz(tz).format(format);
}

export const GetWeatherIcon = (wInfo, wIconSize, appTextColorCode) => {
  switch (wInfo.iconType) {
    case WeatherIconSource.feather:
      return <Feather name={wInfo.icon} size={wIconSize} color={appTextColorCode}/>;

    case WeatherIconSource.entypo:
      return <Entypo name={wInfo.icon} size={wIconSize} color={appTextColorCode}/>;

    case WeatherIconSource.fontawesome5:
      return <FontAwesome5 name={wInfo.icon} size={wIconSize} color={appTextColorCode}/>;
    
    case WeatherIconSource.fontisto:
      return <Fontisto name={wInfo.icon} size={wIconSize} color={appTextColorCode}/>;

    case WeatherIconSource.ionicons:
      return <Ionicons name={wInfo.icon} size={wIconSize} color={appTextColorCode}/>;

    case WeatherIconSource.materialcommunityicons:
      return <MaterialCommunityIcons name={wInfo.icon} size={wIconSize} color={appTextColorCode}/>;

    default:
      return <Text style={[globalStyles.smallText]}>Not available</Text>
  }
}

export const GetCityBackground = (time, tz) => {
    
    const datetime = moment.unix(time).tz(tz);
    const timeOfDay = (datetime.hour() >= 6 && datetime.hour() <= 18) ? 'day' : 'night';

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

export const WeatherIconSource = {
  fontawesome5: 'FontAwesome5',
  fontisto: 'Fontisto',
  feather: 'Feather',
  materialcommunityicons: 'MaterialCommunityIcons',
  entypo: 'Entypo',
  ionicons: 'Ionicons'
}


export const GetWeatherInfo = (wmoCode, time, timezone) => {
  const hourOfDay = SerializeDateToTimezone(time, timezone, 'HH');
  switch (wmoCode) {
    case 0:
    case 1:
    case 2:
      return hourOfDay >= 6 && hourOfDay <= 18 ?
        {info: 'Clear Sky', icon: 'sun', iconType: WeatherIconSource.feather} :
        {info: 'Clear Sky', icon: 'moon-outline', iconType: WeatherIconSource.ionicons};

    case 3:
    case 4:
      return hourOfDay >= 6 && hourOfDay <= 18 ?
        {info: 'Little Cloudy', icon: 'day-cloudy', iconType: WeatherIconSource.fontisto} : 
        {info: 'Little Cloudy', icon: 'night-alt-cloudy', iconType: WeatherIconSource.fontisto};

    case 5:
    case 6:
    case 7:
    case 8:
      return hourOfDay >= 6 && hourOfDay <= 18 ?
        {info: 'Haze', icon: 'day-haze', iconType: WeatherIconSource.fontisto} :
        {info: 'Haze', icon: 'weather-fog', iconType: WeatherIconSource.materialcommunityicons};

    case 9:
      return {info: 'Duststorm/Sandstrom', icon: 'weather-windy-variant', iconType: WeatherIconSource.materialcommunityicons};

    case 10:
    case 11:
    case 12:
      return {info: 'Mist', icon: 'water', iconType: WeatherIconSource.entypo};

    case 13:
      return {info: 'Lightning', icon: 'weather-lightning', iconType: WeatherIconSource.materialcommunityicons};

    case 14:
    case 15:
    case 16:
    case 62:
      return hourOfDay >= 6 && hourOfDay <= 18 ?
      {info: 'Likely to rain', icon: 'day-rain', iconType: WeatherIconSource.fontisto} :
      {info: 'Likely to rain', icon: 'night-alt-rain', iconType: WeatherIconSource.fontisto};

    case 17:
      return hourOfDay >= 6 && hourOfDay <= 18 ?
        {info: 'Likely Thunderstorm', icon: 'cloud-lightning', iconType: WeatherIconSource.feather} :
        {info: 'Likely Thunderstorm', icon: 'thunder-cloud', iconType: WeatherIconSource.entypo};

    case 18:
      return {info: 'Windy with rain', icon: 'cloudy-gusts', iconType: WeatherIconSource.fontisto};

    case 19:
      return {info: 'Cloudy', icon: 'cloudy', iconType: WeatherIconSource.fontisto};

    case 20:
      return {info: 'Drizzling', icon: 'cloud-drizzle', iconType: WeatherIconSource.feather};

    case 21:
      return {info: 'Raining', icon: 'rain', iconType: WeatherIconSource.fontisto};

    case 22:
    case 85:
      return {info: 'Snowing', icon: 'weather-snowy', iconType: WeatherIconSource.materialcommunityicons};

    case 23:
    case 83:
      return {info: 'Raining/Snowing', icon: 'weather-snowy-rainy', iconType: WeatherIconSource.materialcommunityicons};

    case 24:
    case 84:
        return {info: 'Raining (freezing)', icon: 'snow', iconType: WeatherIconSource.fontisto};

    case 25:
      return {info: 'Showers', icon: 'cloud-rain', iconType: WeatherIconSource.fontawesome5};

    case 26:
    case 50:
    case 51:
    case 52:
      return hourOfDay >= 6 && hourOfDay <= 18 ?
        {info: 'Intermittent Showers', icon: 'cloud-sun-rain', iconType: WeatherIconSource.fontawesome5} :
        {info: 'Intermittent Showers', icon: 'cloud-moon-rain', iconType: WeatherIconSource.fontawesome5};

    case 27:
      return {info: 'Showers with ice/snow', icon: 'weather-snowy-rainy', iconType: WeatherIconSource.materialcommunityicons};

    case 28:
      return {info: 'Fog', icon: 'weather-fog', iconType: WeatherIconSource.materialcommunityicons};

    case 29:
    case 95:
    case 96:
    case 97:
    case 98:
    case 99:
      return {info: 'Thunderstorm', icon: 'thunderstorm-outline', iconType: WeatherIconSource.ionicons};

    case 30:
    case 31:
    case 32:
      return {info: 'Dust/Sand (slight to moderate)', icon: 'weather-windy-variant', iconType: WeatherIconSource.materialcommunityicons};

    case 33:
    case 34:
    case 35:
      return {info: 'Dust/Sand (severe)', icon: 'weather-windy-variant', iconType: WeatherIconSource.materialcommunityicons};

    case 36:
    case 38:
      return {info: 'Blowing Snow (slight to moderate)', icon: 'cloud-snow', iconType: WeatherIconSource.feather};

    case 37:
    case 39:
    case 86:
      return {info: 'Heavy snow', icon: 'weather-snowy-heavy', iconType: WeatherIconSource.materialcommunityicons};

    case 40:
    case 41:
    case 42:
    case 44:
    case 46:
      return {info: 'Fog (sky visible)', icon: 'weather-fog', iconType: WeatherIconSource.materialcommunityicons};

    case 43:
    case 45:
      return {info: 'Fog (sky invisible)', icon: 'weather-fog', iconType: WeatherIconSource.materialcommunityicons};

    case 47:
    case 48:
    case 49:
      return {info: 'Heavy Fog (sky invisible)', icon: 'weather-fog', iconType: WeatherIconSource.materialcommunityicons};

    // drizzle
    // case 50:
    //   return {info: 'Slight Drizzling (on/off)', icon: '', iconType: WeatherIconSource.feather};

    // case 51:
    //   return {info: 'Slight Drizzling', icon: 'cloud-sun-rain', iconType: WeatherIconSource.fontawesome5};

    // case 52:
    //   return {info: 'Drizzling (on/off)', icon: 'cloud-sun-rain', iconType: WeatherIconSource.fontawesome5};

    case 53:
      return {info: 'Drizzling', icon: 'cloud-drizzle', iconType: WeatherIconSource.feather};

    case 54:
      return {info: 'Heavy Drizzle (on/off)', icon: 'cloud-drizzle', iconType: WeatherIconSource.feather};

    case 55:
      return {info: 'Heavy Drizzling', icon: 'cloud-drizzle', iconType: WeatherIconSource.feather};

    case 56:
    case 66:
      return {info: 'Slight Drizzling (freezing)', icon: 'snowflake-melt', iconType: WeatherIconSource.materialcommunityicons};

    case 57:
    case 67:
      return {info: 'Drizzling heavily (freezing)', icon: 'snowflake-melt', iconType: WeatherIconSource.materialcommunityicons};

    case 58:
      return {info: 'Slight Drizzling/Raining', icon: 'rains', iconType: WeatherIconSource.fontisto};

    case 59:
      return {info: 'Heavy Drizzling/Raining', icon: 'rains', iconType: WeatherIconSource.fontisto};

    // raining
    case 60:
      return {info: 'Slight raining (on/off)', icon: 'weather-rainy', iconType: WeatherIconSource.materialcommunityicons};

    case 61:
    case 91:
      return {info: 'Slight raining', icon: 'weather-rainy', iconType: WeatherIconSource.materialcommunityicons};

    // case 62:
    //   return {info: 'Raining (on/off)', icon: 'rain', iconType: WeatherIconSource.fontisto};

    case 63:
      return {info: 'Raining', icon: 'rains', iconType: WeatherIconSource.fontisto};

    case 64:
    case 92:
      return {info: 'Heavy Raining (on/off)', icon: 'cloud-showers-heavy', iconType: WeatherIconSource.fontawesome5};

    case 65:
      return {info: 'Heavy Raining', icon: 'cloud-showers-heavy', iconType: WeatherIconSource.fontawesome5};

      // return {info: 'Slight Raining (freezing)', icon: '', iconType: WeatherIconSource.feather};

      // return {info: 'Raining heavily (freezing)', icon: '', iconType: WeatherIconSource.feather};

    case 68:
    case 69:
        return {info: 'Slight Raining/Snowing', icon: 'weather-snowy-rainy', iconType: WeatherIconSource.materialcommunityicons};

      // return {info: 'Heavy Raining/Snowing', icon: '', iconType: WeatherIconSource.feather};

    // snowing
    case 70:
      return {info: 'Slight snowing (on/off)', icon: 'cloud-snow', iconType: WeatherIconSource.feather};

    case 71:
    case 93:
      return {info: 'Slight snowing', icon: 'cloud-snow', iconType: WeatherIconSource.feather};

    case 72:
      return {info: 'Snowing (on/off)', icon: 'weather-snowy', iconType: WeatherIconSource.materialcommunityicons};

    case 73:
    case 94:
      return {info: 'Snowfall', icon: 'weather-snowy', iconType: WeatherIconSource.materialcommunityicons};

    case 74:
      return {info: 'Heavy snowing (on/off)', icon: 'weather-snowy-heavy', iconType: WeatherIconSource.materialcommunityicons};

    case 75:
      return {info: 'Heavy snowing', icon: 'weather-snowy-heavy', iconType: WeatherIconSource.materialcommunityicons};

    case 76:
    case 87:
    case 88:
    case 89:
    case 90:
      return {info: 'Snowing (Diamonds)', icon: 'weather-snowy-heavy', iconType: WeatherIconSource.materialcommunityicons};

    case 77:
    case 78:
      return {info: 'Snowing heavily', icon: 'weather-snowy-heavy', iconType: WeatherIconSource.materialcommunityicons};

    case 79:
      return {info: 'Snowing (Ice pellets)', icon: 'cloud-meatball', iconType: WeatherIconSource.fontawesome5};

    case 80:
      return {info: 'Rain', icon: 'rains', iconType: WeatherIconSource.fontisto};

    case 81:
      return {info: 'Heavy Rain', icon: 'cloud-showers-heavy', iconType: WeatherIconSource.fontawesome5};

    case 82:
      return {info: 'Very Heavy Rain', icon: 'cloud-showers-heavy', iconType: WeatherIconSource.fontawesome5};
  }
};
  