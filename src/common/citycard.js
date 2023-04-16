import { Dimensions, StyleSheet, Text, View, ScrollView, FlatList, Image } from 'react-native';
import { useDispatch, useSelector } from 'react-redux';
import { globalStyles } from '../global-styles';
import { GetAppGradientColors, GetAppTextColor, GetAppTextColorCode, GetCardinalDirection, GetWeatherIcon, GetWeatherInfo, HorizontalItemGap, SerializeDateToTimezone } from './common';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import { Feather } from '@expo/vector-icons';
import { FontAwesome5 } from '@expo/vector-icons';
import { useEffect, useState } from 'react';
import { GetWeatherInfoForCity } from '../services/weather-service';
import { AnimatedCircularProgress } from 'react-native-circular-progress';
import { LinearGradient } from 'expo-linear-gradient';

const width = Dimensions.get('window').width;

const StatsBox = (props) => {
  return <View style={[styles.statsBox,
    {backgroundColor: props.timeOfDay === 'day' ? 'white' : 'black'}]}>
  </View>
}

const RenderTodayStatItem = (item, city) => {

  const appTextColor = GetAppTextColor(city.timeOfDay);
  const appTextColorCode = GetAppTextColorCode(city.timeOfDay);

  return <View style={[globalStyles.flexCenter, globalStyles.vCenter, globalStyles.flex1,
    {marginHorizontal: 3, paddingTop: 15, paddingBottom: 15, height: 135, width: 120 }]}>
    
    <View style={[styles.todayStatsBox, {backgroundColor: city.timeOfDay === 'day' ? '#fff' : '#000'}]}></View>

    <Text style={[globalStyles.flex1, globalStyles.smallText, appTextColor]}>
      {item.index === 0 ? 'Now' : SerializeDateToTimezone(item.item.time, city.timezone, 'h:mm a')}
    </Text>
    
    <View style={[globalStyles.flexCenter, globalStyles.flex1, globalStyles.vCenter]}>
      
      {item.item.type &&
        <Feather name={item.item.type} size={28} color={item.item.type === 'sunrise' ? 'yellow' : '#d74316'} style={[globalStyles.textCenter, globalStyles.flex1]}/>
      }
      {!item.item.type && <RenderCurrentWeather city={city} iconSize={28} noText/>}

    </View>
    
    {!item.item.type && <Text style={[globalStyles.flex1, globalStyles.smallText, globalStyles.textCenter, appTextColor,
      {paddingTop: 15, fontSize: 20}]}>
      {item.item.temperature}
      <MaterialCommunityIcons name="temperature-celsius" size={12} color={appTextColorCode} />
    </Text>}

    {item.item.type && <Text style={[globalStyles.flex1, globalStyles.smallText, globalStyles.textCenter, appTextColor,
      {paddingTop: 15, fontSize: 20}]}>
      {item.item.type}
    </Text>}
  </View>
}

const RenderTodayStats = (props) => {
  return (
    <View style={[globalStyles.flex1, globalStyles.fullWidth, {marginBottom: 15}]}>

        <View style={[globalStyles.flex1, globalStyles.fullWidth]}>

          <View style={[globalStyles.flexCenter, globalStyles.fullWidth, styles.statsHeading, globalStyles.flex1]}>
            <Text style={[globalStyles.regularTitle, GetAppTextColor(props.city.timeOfDay), globalStyles.textCenter]}>Weather Today</Text>
          </View>

          <FlatList horizontal showsHorizontalScrollIndicator={false}
            data={props.city.hourly}
            keyExtractor={(item, index) => `${index}`}
            renderItem={(item) => RenderTodayStatItem(item, props.city)}
          >
          </FlatList>

        </View>
    </View>
    )
};

const RenderNext7DaysStats = (props) => {

  const appTextColor = GetAppTextColor(props.city.timeOfDay);

  return (
    <View style={[globalStyles.flex1, globalStyles.fullWidth, {marginBottom: 25}]}>

        <View style={[globalStyles.flexCenter, globalStyles.fullWidth, styles.statsHeading]}>
          <Text style={[globalStyles.regularTitle, appTextColor, globalStyles.textCenter]}>Forecast next 7 days</Text>
        </View>
        
        <View style={[globalStyles.flex1, globalStyles.fullWidth, styles.stats]}>
         
          <StatsBox timeOfDay={props.city.timeOfDay}/>

          { props.city.daily.map((h, index) => {
            return <View key={index} style={[globalStyles.flexStart, globalStyles.flexRow, globalStyles.vCenter,
              {paddingTop: 10, paddingBottom: 10, paddingLeft: 20, paddingRight: 20, borderBottomColor: '#99999933', borderBottomWidth: 1 }]}>
              
              <Text style={[globalStyles.smallerText, globalStyles.flex1, appTextColor]}>
                {index === 0 ? 'Today' : SerializeDateToTimezone(h.time, props.city.timezone, 'MMM DD, ddd')}
              </Text>
              
              <View style={[globalStyles.flex1]}>
                <RenderForecastDayWeather weathercode={h.weatherCode} time={h.time} city={props.city}/>
              </View>

              <View style={[globalStyles.flex1, globalStyles.flexRow, globalStyles.flexEnd]}>
                <Text style={[globalStyles.regularTitle, globalStyles.flex1, globalStyles.textRight, appTextColor]}>{Math.round(h.maxtemperature, 0)}
                  <MaterialCommunityIcons name="temperature-celsius" size={10} color={GetAppTextColorCode(props.city.timeOfDay)} />
                </Text>
                <HorizontalItemGap/>
                <Text style={[globalStyles.regularTitle, globalStyles.flex1, globalStyles.textRight, appTextColor]}>{Math.round(h.mintemperature, 0)}
                  <MaterialCommunityIcons name="temperature-celsius" size={10} color={GetAppTextColorCode(props.city.timeOfDay)}/>
                </Text>
              </View>
              
            </View>
            })
          }

        </View>
    </View>
    )
};

const RenderStats = (props) => {

  const windDir = GetCardinalDirection(props.city.currentWeather.winddirection);
  const appTextColor = GetAppTextColor(props.city.timeOfDay);
  const appTextColorCode = GetAppTextColorCode(props.city.timeOfDay);

  return (
    <View>
    <View style={[globalStyles.flex1, globalStyles.fullWidth, globalStyles.flexRow, {marginBottom: 15}]}>
        
      <View style={[globalStyles.flex1, globalStyles.flexCenter, globalStyles.fullWidth, {height: 190}]}>

        <StatsBox timeOfDay={props.city.timeOfDay}/>

        <View style={[globalStyles.flex1, globalStyles.flexRow, globalStyles.flexCenter, globalStyles.vCenter, {paddingTop: 10, paddingBottom: 5}]}>
          <Feather name="wind" size={25} color={appTextColorCode} />
          <Text style={[globalStyles.smallText, appTextColor, {paddingLeft: 5}]}>Wind</Text>
        </View>

        <View style={[globalStyles.flex6, globalStyles.flexCenter, globalStyles.vCenter, globalStyles.relative]}>
          <Image source={props.city.timeOfDay === 'day' ? require("../../assets/compass-day.png") : require("../../assets/compass-night.png")} style={{width: 140, height: 140}} />
          <View style={[{position: 'absolute'}]}>
            <Text style={[globalStyles.regularTitle, globalStyles.textCenter, appTextColor]}>
              {windDir}
            </Text>
            <Text style={[globalStyles.smallerText, globalStyles.textCenter, appTextColor]}>
              {props.city.currentWeather.windspeed + ' km/h'}
            </Text>
          </View>
        </View>
        
      </View>

      <HorizontalItemGap/>

      <View style={[globalStyles.flex1, globalStyles.flexCenter, globalStyles.fullWidth]}>

        <StatsBox timeOfDay={props.city.timeOfDay}/>

        <View style={[globalStyles.flex1, globalStyles.flexCenter, globalStyles.vCenter]}>

          <View style={[globalStyles.flex1, globalStyles.flexRow, globalStyles.flexCenter, globalStyles.vCenter, {paddingTop: 10, paddingBottom: 5}]}>
            <FontAwesome5 name="umbrella" size={24} color={appTextColorCode} />
            <Text style={[globalStyles.smallText, appTextColor, {paddingLeft: 5}]}>Precipitation</Text>
          </View>

          <View style={[globalStyles.flex6, globalStyles.flexCenter, globalStyles.vCenter, globalStyles.relative]}>
            <AnimatedCircularProgress
              size={140}
              width={10}
              backgroundWidth={10}
              fill={props.city.currentWeather.percipitation}
              tintColor={'#00000066'}
              tintColorSecondary={'#00000066'}
              backgroundColor={'#f3f3f380'}
              arcSweepAngle={240}
              rotation={240}
              lineCap="round">

              {fill => { return <Text style={[globalStyles.mediumTitle, appTextColor]}>{props.city.currentWeather.percipitation + '%'}</Text>}}

            </AnimatedCircularProgress>
          </View>

        </View>
      </View>
    
    </View>

    <View style={[globalStyles.flex1, globalStyles.fullWidth, globalStyles.flexRow, {marginBottom: 15}]}>

      <View style={[globalStyles.flex1, globalStyles.flexCenter, globalStyles.fullWidth, {height: 190}]}>
        <StatsBox timeOfDay={props.city.timeOfDay}/>

        <View style={[globalStyles.flex1, globalStyles.flexRow, globalStyles.flexCenter, globalStyles.vCenter, {paddingTop: 10, paddingBottom: 5}]}>
          <Text style={[globalStyles.smallText, appTextColor, {paddingLeft: 5}]}>Sunrise/Sunset</Text>
        </View>

        <View style={[globalStyles.flex6, globalStyles.flexCenter, globalStyles.vCenter, globalStyles.relative]}>
            <AnimatedCircularProgress
              size={110}
              width={10}
              backgroundWidth={10}
              fill={0}
              tintColor={'#00000066'}
              tintColorSecondary={'#00000066'}
              backgroundColor={'#f3f3f380'}
              arcSweepAngle={210}
              rotation={256}
              lineCap="round"
              style={{flex: 2}}>
            </AnimatedCircularProgress>

            <View style={[globalStyles.flexCenter, globalStyles.vCenter, globalStyles.fullWidth, globalStyles.flexRow, globalStyles.flex1, {paddingTop: 0}]}>
              <Feather name="sunrise" size={28} color={'yellow'} style={[globalStyles.textCenter, globalStyles.flex1]}/>
              <Feather name="sunset" size={28} color={'#d74316'} style={[globalStyles.textCenter, globalStyles.flex1]}/>
            </View>

            <View style={[globalStyles.flexCenter, globalStyles.vCenter, globalStyles.fullWidth, globalStyles.flexRow, globalStyles.flex1]}>
              <Text style={[appTextColor, globalStyles.flex1, globalStyles.textCenter, globalStyles.smallerText]}>{SerializeDateToTimezone(props.city.currentWeather.sunrise, props.city.timezone, 'h:mm a')}</Text>
              <Text style={[appTextColor, globalStyles.flex1, globalStyles.textCenter, globalStyles.smallerText]}>{SerializeDateToTimezone(props.city.currentWeather.sunset, props.city.timezone, 'h:mm a')}</Text>
            </View>

          </View>

      </View>

      <HorizontalItemGap/>

      <View style={[globalStyles.flex1, globalStyles.flexCenter, globalStyles.fullWidth, {height: 190}]}>
        <StatsBox timeOfDay={props.city.timeOfDay}/>

        <View style={[globalStyles.flex1, globalStyles.flexRow, globalStyles.flexCenter, globalStyles.vCenter, {paddingTop: 10, paddingBottom: 5}]}>
          <Image source={props.city.timeOfDay === 'day' ? require('../../assets/humid-day.png') : require('../../assets/humid-night.png')} style={{width: 26, height: 26}}></Image>
          <Text style={[globalStyles.smallText, appTextColor, {paddingLeft: 5}]}>Humidity</Text>
        </View>

        <View style={[globalStyles.flex6, globalStyles.flexCenter, globalStyles.vCenter, globalStyles.relative]}>
            <AnimatedCircularProgress
              size={110}
              width={10}
              backgroundWidth={10}
              fill={props.city.currentWeather.humidity}
              tintColor={props.city.timeOfDay === 'day' ? '#00000066' : '#58525280'}
              backgroundColor={'#f3f3f380'}
              arcSweepAngle={360}
              rotation={90}
              lineCap="round"
              style={{flex: 2}}>
              {fill => { return <Text style={[globalStyles.mediumTitle, appTextColor]}>{props.city.currentWeather.humidity + '%'}</Text>}}
            </AnimatedCircularProgress>
          </View>

          <View style={[globalStyles.flex1, globalStyles.flexRow, globalStyles.flexCenter, globalStyles.vCenter, {paddingBottom: 10}]}>
            <Text style={[globalStyles.smallerText, appTextColor, {paddingLeft: 5}]}>The dew point is at {Math.round(props.city.currentWeather.dewpoint)}
              <Text style={[styles.degSign, appTextColor]}>o</Text>
            </Text>
          </View>



      </View>

    </View>
    </View>
    )
};

const RenderCurrentWeather = (props) => {

  const wInfo = GetWeatherInfo(props.city.currentWeather.weathercode,
      props.city.currentWeather.time, props.city.timezone);

  const wIconSize = props.iconSize || 75;
  const appTextColor = GetAppTextColor(props.city.timeOfDay);
  const appTextColorCode = GetAppTextColorCode(props.city.timeOfDay);

  return (
    <View style={[globalStyles.flex1]}>
      
      {GetWeatherIcon(wInfo, wIconSize, appTextColorCode)}

      {!props.noText && <Text style={[globalStyles.regularText, appTextColor]}>{wInfo.info}</Text>}
    </View>
  )
}

const RenderForecastDayWeather = (props) => {

  const wInfo = GetWeatherInfo(props.weathercode,
      props.time, props.city.timezone);

  const wIconSize = props.iconSize || 25;
  const appTextColorCode = GetAppTextColorCode(props.city.timeOfDay);

  return (
    <View style={[globalStyles.flex1, globalStyles.vCenter, styles.weatherInfo]}>
      {GetWeatherIcon(wInfo, wIconSize, appTextColorCode)}
    </View>
  )
}

const RenderCity = (props) => {

  useEffect(() => {
    GetWeatherInfoForCity(props.city, dispatch).then( (resolve) => {
    });
  }, [GetWeatherInfoForCity]);

  const isLoading = useSelector(state => state.cities.loadingWeatherInfo);
  const dispatch = useDispatch();

  const appTextColorCode = GetAppTextColorCode(props.city.timeOfDay);
  const appTextColor = GetAppTextColor(props.city.timeOfDay);

  return (
    <View style={[styles.cityBox]}>
      
      {props.city && props.city.currentWeather &&
      
      <View style={[globalStyles.flexStart, {width: '100%', height: '100%', flex: 1}]}>

        <LinearGradient
          colors={GetAppGradientColors(props.city.timeOfDay)}
          locations={[0, 0.77, 1]}
          style={styles.box}>

        <View style={[globalStyles.fullWidth, globalStyles.flex1, globalStyles.flexCenter]}>
          <View style={[styles.cityNameWrapper, {borderBottomColor: appTextColorCode}]}>
            <Text style={[globalStyles.lightText, globalStyles.uppercase, styles.cityName, appTextColor]}>
              {props.city.cityName}
            </Text>
          </View>
          <Text style={[globalStyles.smallText, appTextColor, {marginLeft: 25}]}>
            {SerializeDateToTimezone(props.city.currentWeather.time, props.city.timezone, 'MMM DD, YYYY hh:mm a')}
          </Text>
        </View>

        <View style={[globalStyles.fullWidth, globalStyles.flex2, globalStyles.flexRow]}>
          
          <View style={{paddingLeft: 25}}>
            <RenderCurrentWeather city={props.city}/>
          </View>

          <View style={[globalStyles.flexStart, globalStyles.flex1, globalStyles.flexRow, {paddingRight: 10}]}>
            <Text style={[styles.temperature, appTextColor, globalStyles.flex6]}>
              {props.city.currentWeather.temperature}
            </Text>
            <Text style={[globalStyles.flex1, {marginLeft: -8, marginTop: 5}]}>
              <MaterialCommunityIcons name="temperature-celsius" size={28} color={appTextColorCode}/>
            </Text>
          </View>
        </View>

        <View style={[globalStyles.flex5, {paddingLeft: 20, paddingRight: 20, paddingBottom: 80}]}>
          <ScrollView showsVerticalScrollIndicator={false}>

            <View style={[globalStyles.fullWidth]}>
              <RenderTodayStats city={props.city}/>
            </View>

            <View style={[globalStyles.fullWidth]}>
              <RenderNext7DaysStats city={props.city}/>
            </View>

            <View style={[globalStyles.fullWidth]}>
              <RenderStats city={props.city}/>
            </View>

          </ScrollView>

          </View>

          </LinearGradient>

        </View>

        // <ImageBackground source={GetCityBackground(props.city.currentWeather.time, props.city.timezone)} resizeMode='cover'
        // imageStyle={{opacity: 0.7}}
        // style={[globalStyles.flexStart, {width: '100%', height: '100%', flex: 1}]}>

        // </ImageBackground>
    }

  </View>
  )
};

const CityCard = props => {
  return (
    <View style={[styles.container, globalStyles.fullWidth, globalStyles.flex1]}>
      <RenderCity city={props.city}/>
    </View>
  );
};

export default CityCard;

const styles = StyleSheet.create({
  cityBox: {
    flex: 1,
    width: width,
  },
  box: {
    width: '100%',
    height: '100%',
    flex: 1
  },
  cityNameWrapper: {
    borderBottomWidth: 1,
    alignSelf: 'baseline',
    marginLeft: 25  
  },
  cityName: {
    fontSize: 30,
  },
  temperature: {
    textAlign: 'right',
    fontSize: 100,
    fontFamily: 'Comfortaa_700Bold'
  },
  weatherInfo: {
  },
  stats: {
  },
  addCityButton: {
    fontSize: 20
  },
  statsHeading: {
    paddingTop: 5,
    paddingBottom: 10,
    textAlign: 'center'
  },
  statsBox: {
    opacity: 0.4,
    zIndex: 0,
    position: 'absolute',
    width: '100%',
    height: '100%',
    borderRadius: 10,
  },
  todayStatsBox: {
    opacity: 0.4,
    zIndex: 0,
    position: 'absolute',
    width: '100%',
    height: 130,
    borderRadius: 10,
  },
  degSign: {
    fontSize: 8,
    position: 'absolute',
    paddingLeft: 1,
    marginTop: -1,
    fontWeight: 600
  }
});
